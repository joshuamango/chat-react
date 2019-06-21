import React from 'react';

import Wall from './images/wall.jpg';

class Info extends React.Component {
  render() {
    return (
      <div id="info-grid">
        <div class="words-1">The example below shows a three-column track grid with 
        new rows created at a minimum of 100 pixels and a maximum of auto. 
        Items have been placed onto the grid using line-based placement.
        The example below shows a three-column track grid with 
        new rows created at a minimum of 100 pixels and a maximum of auto. 
        Items have been placed onto the grid using line-based placement.
        The example below shows a three-column track grid with 
        new rows created at a minimum of 100 pixels and a maximum of auto. 
        Items have been placed onto the grid using line-based placement.
        The example below shows a three-column track grid with 
        new rows created at a minimum of 100 pixels and a maximum of auto. 
        Items have been placed onto the grid using line-based placement.</div>
        <div class="pic-1"><img id="wall-pic" src={Wall} alt="Burgandy wall with white obelisks"/></div>
        <div class="words-2">The example below shows a three-column track grid with 
        new rows created at a minimum of 100 pixels and a maximum of auto. 
        Items have been placed onto the grid using line-based placement.
        The example below shows a three-column track grid with 
        new rows created at a minimum of 100 pixels and a maximum of auto. 
        Items have been placed onto the grid using line-based placement.
        The example below shows a three-column track grid with 
        new rows created at a minimum of 100 pixels and a maximum of auto. 
        Items have been placed onto the grid using line-based placement.
        The example below shows a three-column track grid with 
        new rows created at a minimum of 100 pixels and a maximum of auto. 
        Items have been placed onto the grid using line-based placement.</div>
        <div class="pic-2"><img id="wall-pic" src={Wall} alt="Burgandy wall with white obelisks"/></div>        
      </div>
    );
  }
}

export default Info;