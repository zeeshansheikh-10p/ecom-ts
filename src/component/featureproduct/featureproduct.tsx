import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Featureproduct() {
    interface featureProductValue {
        id: number
        image: string
        title: string
        description: string
        category: string
    }

    const [featureProduct, setfeatureProduct] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products/')
      .then(Response => Response)
      .then((e)=>e.json())
      .then((e)=>{setfeatureProduct(e)})
        
    //   return () => {
    //     featureProduct
    //   }
    }, [])
    
    console.log(featureProduct);
  return (
    <Container>
      <Row>

        {
             featureProduct.map((featureProducts)=>{
                return <>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{featureProducts}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </>
            })
        }
        
      </Row>
    </Container>
  )
}

export default Featureproduct;