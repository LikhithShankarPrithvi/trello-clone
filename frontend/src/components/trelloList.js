import React from 'react';
import TrelloCard from './trelloCard';
//import { Container,Row,Col} from 'react-bootstrap';

const TrelloList = ({title}) => {
    return ( 
        <div style={{ width: '18rem' }} className='bg-dark text-white rounded'>
            <h3>{title}</h3>
            <TrelloCard />
        </div>
     );
}
 
export default TrelloList;