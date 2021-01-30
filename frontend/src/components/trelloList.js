import React from 'react';
import TrelloCard from './trelloCard';
import TrelloActionButton from './trelloActionButton'
//import { Container,Row,Col} from 'react-bootstrap';

const TrelloList = ({title,cards}) => {
    return ( 
        <div style={{ width: '18rem' }} className='bg-dark text-white rounded p-2'>
            <h3>{title}</h3>
            {cards.map(card=> <TrelloCard key={card.id} text={card.text}/>)}
            <TrelloActionButton />
        </div>
     );
}
 
export default TrelloList;