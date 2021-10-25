import React from 'react';
import Header from './header';
import Footer from './Footer';
import ProductDisplay from './productDisplay'

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <ProductDisplay/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;