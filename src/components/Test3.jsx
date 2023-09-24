import React, { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import { Button, Card, CardBody, CardText, Col,Row ,PaginationItem,Pagination,PaginationLink, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import Base from './Base';

function CardComponent() {
  const [data, setData] = useState([]);

  const API_URL2 = 'http://localhost:8087/api/posts';


  useEffect(() => {
    // Replace with the actual API endpoint
    fetch(API_URL2 , { headers: authHeader() })
      .then((response) => response.json())
      .then((responseData) => {
        // Assuming responseData is an object with arrays
        setData(responseData.content);
        console.log(responseData.content);
      })
      .catch((error) => {

        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div  className='container-fluid'>
      <Base/>
      <Row>
          
          <Col md={{
              size:10,offset:1}}>
              
      
        <Card className='border-0 shadow-sm mt-10'>
        <CardBody><ul>        {data.map((item, index) => (
          <li key={index}>
            <h1>{item.title}</h1>
            <CardText>
            {item.content}</CardText>
            <img src={item.imageName} alt="Image" />
            <p>Date Added: {item.dateAdded}</p>
            {/* Render other properties as needed */}
            <Link className='btn btn-secondary' to={'/post2/'+index}>Read More</Link>

          </li>
      ))}
</ul>
<Container>
<Pagination>
  <PaginationItem>
    <PaginationLink previous>

    </PaginationLink>
  </PaginationItem>
  
  <PaginationItem>
    <PaginationLink next>

    </PaginationLink>
  </PaginationItem>
</Pagination>
</Container>
      </CardBody>
      </Card>
      </Col>
      </Row>
      

    </div>
  );
}

export default CardComponent;
