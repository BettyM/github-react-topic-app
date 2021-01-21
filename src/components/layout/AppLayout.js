import React from 'react'
import Header from './Header'
import Footer from './Footer'

const AppLayout = ({ containerClassnames, children, history }) => {
  return (
    <div id="app-container" className={containerClassnames}>
      <Header history={history} />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
