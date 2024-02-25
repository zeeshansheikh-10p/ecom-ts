import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slideimage from '../../assets/images/banner/banner-img.png';
import slideimage2 from '../../assets/images/banner/e-p1.png';

function Heroslider() {
    const [currentImagePos, setCurrentImagePos] = useState(0);
    const [AllImages, setAllImages] = useState([
        {   
            id:0,
            image: slideimage,
            title: 'Fancy Shoes',
            subtitle: 'New Stock 1'
        },
        {
            id:1,
            image: slideimage2,
            title: 'Casual Shoes',
            subtitle: 'New Stock 2'
        },
        {
            id:2,
            image: slideimage,
            title: 'Nike Shoes',
            subtitle: 'New Stock 3'
        },
        {
            id:3,
            image: slideimage2,
            title: 'Nike ',
            subtitle: 'New Stock 4'
        }
    ])
    const [SelectedImage, setSelectedImage] = useState(AllImages[currentImagePos]);
    // const [SelectedTitle, setSelectedTitle] = useState(AllImages[currentImagePos]);
    
    const onClickNext = () => {
        console.log(setCurrentImagePos);
       if (currentImagePos+1>=AllImages.length) {
        
            setCurrentImagePos(0);
            setSelectedImage(AllImages[currentImagePos]);
            // setSelectedTitle(AllImages[currentImagePos]);
       } else {
            setCurrentImagePos(currentImagePos+1);
            setSelectedImage(AllImages[currentImagePos]);
            // setSelectedTitle(AllImages[currentImagePos]);
       }
    }
    const onClickPrev = () => {
        console.log(setCurrentImagePos);
        if (currentImagePos == 0) {
            
             setCurrentImagePos(AllImages.length - 1);
             setSelectedImage(AllImages[currentImagePos]);
            //  setSelectedTitle(AllImages[currentImagePos]);
        } else {
             setCurrentImagePos(currentImagePos-1);
             setSelectedImage(AllImages[currentImagePos]);
            //  setSelectedTitle(AllImages[currentImagePos]);
        }
     }

     const [count, setCount] = useState(0);
 
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
            onClickNext();
        }, 8000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
     

  return (
    <Container fluid>
        <Row>
            <Col>
            <div className='slidecontainer'>
                <div className='slider'>
                    <img src={SelectedImage.image} alt='slide' className='slideimage' />
                    <h1>{SelectedImage.title}</h1>
                    <h4>{SelectedImage.subtitle}</h4>
                    
                </div>
                <div className='slidethumb'>
                    
                    {
                        AllImages.map((slidedata) => {
                            return <>
                                <div 
                                className='thumb'
                                onClick={()=>{
                                    setSelectedImage(slidedata);
                                }}
                                ><img src={slidedata.image} /></div>
                            </>
                        })
                    }
                        
                </div>
                <div>
                    <button onClick={onClickPrev}>Prev</button>
                    <button 
                        onClick={onClickNext}
                    >Next</button>
                </div>
            </div>    
            </Col>
        </Row>
    </Container>
  )
}

export default Heroslider;