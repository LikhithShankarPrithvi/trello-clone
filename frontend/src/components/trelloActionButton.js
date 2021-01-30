import React, { Component } from 'react';

class TrelloActionButton extends Component {
//    state = {  }

    renderActionButton =()=>{
        const {list} = this.props
        return (<div style={{display:"flex"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
            <p>Add a list</p>
        </div>);
    }

    render() { 
        return this.renderActionButton();
    }
}
 
export default TrelloActionButton;