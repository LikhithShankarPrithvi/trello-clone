import React, { Component } from 'react';
//import { Container } from 'react-bootstrap';
import TrelloList from './components/trelloList';
import { connect } from 'react-redux';


class App extends Component{
  render()
  {
    const { lists } = this.props;
    console.log(lists);
    return (
      <div className="App">
        <h1>oihvg</h1>
        { lists.map(list =>(
          <TrelloList title={list.title} cards={list.cards}/>
        ))}
      <TrelloList title='likhith'/>
      </div>
    )
  }
}

const mapStateToProps= (state =>({
  lists:state.lists
}));
 
export default connect(mapStateToProps)(App);
 
