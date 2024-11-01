import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
    return (
        <div className="App" style={{ backgroundColor: '#000' }}>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
