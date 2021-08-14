import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer";
import Banner from "./Banner";

class Layout extends React.Component {
    render() {
        const {children} = this.props
        return (
            <div>
                <Navbar/>
                {children}
                <Footer/>
            </div>

        )
    }
}

export default Layout
