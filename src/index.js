import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import GitHubLogo from './images/GitHub-Mark-Light-32px.png';

class App extends React.Component {
  render() {
    return(
      <div>
        <div id="hero">
          <div id="navbar">
            <nav>
              <a href="https://github.com/joshuamango/chat-react"><img id="github-icon" src={GitHubLogo} alt="GitHub logo"/></a>
            </nav>
          </div>
          <div className="heading">
            <h1>Chat</h1>
            <h3>A new way to connect</h3>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);