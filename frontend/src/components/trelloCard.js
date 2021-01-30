import React from 'react';
import { Card } from 'react-bootstrap';

const TrelloCard = ({text}) => {
    return ( 
        <Card bg='success' text='dark' className='mb-2'>
            <Card.Title>{text}</Card.Title>
        </Card>
     );
}
 
export default TrelloCard