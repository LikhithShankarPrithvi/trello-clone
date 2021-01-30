import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import TrelloList from './components/trelloList';
import { connect } from 'react-redux';


class App extends Component{
  render()
  {
    const {lists} = this.props;
    console.log(lists);
    return (
      <div className="App p-1">
        <h1>Trello Clone</h1>
        <Row className='pl-2'>
        { lists.map(list =>( <div className='m-2'>
          <TrelloList key={list.id} title={list.title} cards={list.cards}/>
          </div>
        ))}
        </Row>
      </div>
    )
  }
}

const mapStateToProps= (state =>({
  lists:state.lists
}));
 
export default connect(mapStateToProps)(App);
 
