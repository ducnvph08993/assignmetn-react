import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar'

import '../../assets/css/main/bootstrap.min.css'
import '../../assets/css/main/font-awesome.min.css'
import '../../assets/css/main/ionicons.min.css'
import '../../assets/css/main/pe-icon-7-stroke.css'
import '../../assets/css/main/plugins.css'
import '../../assets/css/main/responsive.css'
import '../../assets/css/main/style.css'


export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Header />
            {/* <Navbar /> */}
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
