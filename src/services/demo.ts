export interface CreateDemoRequest {
  ownerName: string;
  restaurantName: string;
  email: string;
  phone: string;
}

export interface CreateDemoResponse {
  success: boolean;
  customToken: string;
  restaurantId: string;
}

function getConvexSiteUrl(): string {
  if (typeof window === "undefined") {
    return import.meta.env.VITE_CONVEX_SITE_URL as string;
  }
  const isStaging = window.location.hostname.includes("staging");
  return (
    isStaging
      ? import.meta.env.VITE_CONVEX_SITE_URL_STAGING
      : import.meta.env.VITE_CONVEX_SITE_URL
  ) as string;
}

export function getAdminAppUrl(): string {
  if (typeof window === "undefined") {
    return (import.meta.env.VITE_ADMIN_APP_URL || "https://admin.kipizza.com") as string;
  }
  const isStaging = window.location.hostname.includes("staging");
  return (
    isStaging
      ? import.meta.env.VITE_ADMIN_APP_URL_STAGING
      : import.meta.env.VITE_ADMIN_APP_URL
  ) as string || "https://admin.kipizza.com";
}

export async function createDemoRestaurant(
  data: CreateDemoRequest,
): Promise<CreateDemoResponse> {
  const response = await fetch(`${getConvexSiteUrl()}/api/create-demo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || "Failed to create demo restaurant");
  }

  return response.json();
}
