
import React from 'react';
import './App.scss';
import Header from './components/library/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/library/Footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}

export default App;