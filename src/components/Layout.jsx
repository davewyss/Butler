import Nav from './Nav'
import Footer from './Footer'
import './Layout.css'

export default function Layout({ children, noFooter = false }) {
  return (
    <div className="layout">
      <Nav />
      <main className="layout__main">{children}</main>
      {!noFooter && <Footer />}
    </div>
  )
}
