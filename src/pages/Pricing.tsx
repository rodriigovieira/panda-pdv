import PricingComponent from '../components/Pricing'
import CTA from '../components/CTA'

export default function Pricing() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #fffbeb 0%, #fff7ed 50%, #fff1f2 100%)',
      minHeight: '100vh',
      marginTop: '-120px',
      paddingTop: '120px'
    }}>
      <PricingComponent />
      <CTA />
    </div>
  )
}
