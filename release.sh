#!/bin/bash

# KiPizza Landing Page Release Script
# Bumps version, commits, tags, and pushes. Vercel deploys automatically.

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Defaults
RELEASE_TYPE="patch"
COMMIT_MESSAGE=""

print_info()    { echo -e "${BLUE}ℹ ${NC}$1"; }
print_success() { echo -e "${GREEN}✓${NC} $1"; }
print_warning() { echo -e "${YELLOW}⚠${NC} $1"; }
print_error()   { echo -e "${RED}✗${NC} $1"; }

get_current_version() {
    CURRENT_VERSION=$(node -p "require('./package.json').version")
}

increment_version() {
    local version=$1
    local type=$2
    IFS='.' read -r -a parts <<< "$version"
    local major="${parts[0]}"
    local minor="${parts[1]}"
    local patch="${parts[2]}"
    case $type in
        major) major=$((major + 1)); minor=0; patch=0 ;;
        minor) minor=$((minor + 1)); patch=0 ;;
        patch) patch=$((patch + 1)) ;;
    esac
    echo "$major.$minor.$patch"
}

update_package_version() {
    local new_version=$1
    node -e "
        const fs = require('fs');
        const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        pkg.version = '$new_version';
        fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
    "
}

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -m|--message)
            COMMIT_MESSAGE="$2"
            shift 2
            ;;
        -t|--type)
            RELEASE_TYPE="$2"
            shift 2
            ;;
        -h|--help)
            echo "Usage: ./release.sh -m \"commit message\" [-t major|minor|patch]"
            echo ""
            echo "Options:"
            echo "  -m, --message    Commit message (required)"
            echo "  -t, --type       Release type: major, minor, or patch (default)"
            echo "  -h, --help       Show this help message"
            echo ""
            echo "Examples:"
            echo "  ./release.sh -m \"Add new feature\""
            echo "  ./release.sh -m \"Fix bug\" -t patch"
            echo "  ./release.sh -m \"New section\" -t minor"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use -h or --help for usage information"
            exit 1
            ;;
    esac
done

if [ -z "$COMMIT_MESSAGE" ]; then
    print_error "Commit message is required!"
    echo "Usage: ./release.sh -m \"your commit message\""
    exit 1
fi

if [[ ! "$RELEASE_TYPE" =~ ^(major|minor|patch)$ ]]; then
    print_error "Invalid release type: $RELEASE_TYPE"
    echo "Must be one of: major, minor, patch"
    exit 1
fi

echo ""
print_info "🚀 Starting release process..."
echo ""

# Step 1: Auto-commit uncommitted changes
print_info "Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    print_warning "Working directory has uncommitted changes"
    git status --short
    echo ""
    print_info "Auto-committing uncommitted changes..."
    git add -A
    git commit -m "chore: Prepare for release - uncommitted changes"
    print_success "Changes committed"
fi
print_success "Git status checked"

# Step 2: Version bump
get_current_version
NEW_VERSION=$(increment_version "$CURRENT_VERSION" "$RELEASE_TYPE")
print_info "Current version: $CURRENT_VERSION"
print_info "New version: $NEW_VERSION ($RELEASE_TYPE)"
echo ""

# Step 3: Update package.json
print_info "Updating package.json version..."
update_package_version "$NEW_VERSION"
print_success "Version updated to $NEW_VERSION"

# Step 4: Commit, tag, push
print_info "Staging changes..."
git add package.json
print_success "Changes staged"

FULL_COMMIT_MESSAGE="Release v$NEW_VERSION: $COMMIT_MESSAGE"
print_info "Creating commit..."
git commit -m "$FULL_COMMIT_MESSAGE"
print_success "Commit created"

print_info "Creating git tag v$NEW_VERSION..."
git tag -a "v$NEW_VERSION" -m "$COMMIT_MESSAGE"
print_success "Tag created"

print_info "Pushing to remote..."
git push origin main
git push origin "v$NEW_VERSION"
print_success "Pushed to remote"

echo ""
print_success "🎉 Release v$NEW_VERSION completed!"
print_info "Vercel will deploy automatically from the push."
echo ""
