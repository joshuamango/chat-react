import React from 'react';
import GitHubLogo from './images/GitHub-Mark-Light-32px.png';

class Hero extends React.Component {
  render() {
    return(
      <div id="hero">
        <div id="navbar">
          <nav>
            <a href="https://github.com/joshuamango/chat-react"><img id="github-icon" src={GitHubLogo} alt="GitHub logo"/></a>
          </nav>
        </div>
        <div className="heading">
          <h1>Chat</h1>
          <h3>A new way to connect</h3>
          <button>Go to chat room </button>
        </div>
      </div>      
    );
  }
}

export default Hero;