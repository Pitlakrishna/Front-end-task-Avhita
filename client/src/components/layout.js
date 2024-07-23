import React from 'react'
import Navbar from './Navbar.js'
import Banner from "./Banner.js"
import Footer from './Footer.js'


const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
                <Banner />
            </div>
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout