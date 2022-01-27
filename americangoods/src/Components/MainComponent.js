import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home

                />
            );
        }

        return(
            <div>
                <Header />
                <Link to="/"><HomePage /></Link>
                <Footer />
            </div>
        );

    }
}

export default Main;