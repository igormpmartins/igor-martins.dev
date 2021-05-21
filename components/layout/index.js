import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Layout = ({children}) => {
    return (
        <div className='bg-gray-100'>
        <Header />
        <div className='container mx-auto'>{children}</div>
        <Footer />
        </div>

    )
}

export default Layout