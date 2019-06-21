import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import Hero from './hero';
import Info from './info';
import Footer from './footer';

class App extends React.Component {
  render() {
    return(
      <div>
        <Hero />
        <Info />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);