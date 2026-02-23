import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '120px', background: 'white' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
