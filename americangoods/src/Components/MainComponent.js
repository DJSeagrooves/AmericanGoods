import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import ItemPage from './ItemPageComponent';


class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home/>
            );
        }

        const ItemPages = ({match}) => {
            return (
                <ItemPage
                    item={this.props.item.filter(item => item.id === +match.params.itemId)[0]}
                />
            );
        }

        return(
            <div>
                <Header />
                <HomePage />
                <Routes>
                    <Route path='/:itemId' element={ItemPages} />
                </Routes>
                <Footer />
            </div>
        );

    }
}

export default Main;