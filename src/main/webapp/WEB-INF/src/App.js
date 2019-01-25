
import React from 'react';
import './App.scss';
import Header from './components/library/Header/Header';
import Home from './components/pages/Home/Home';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
            </div>
        )
    }
}

export default App;