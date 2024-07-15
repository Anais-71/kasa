import React from 'react';

// Components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default function Layout({children}) {
    return (
        
            <>
                <Header />
                    {children}
                <Footer />
            </>
    )
}