import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slideimage from '../../assets/images/banner/banner-img.png';
import slideimage2 from '../../assets/images/banner/e-p1.png';

function Heroslider() {
    const [currentImagePose,setCurrentImagePose] = useState(0)
    const [allImages, setAllImages] = useState([
        {
            image: slideimage,
            title: 'Fancy Shoes',
            subtitle: 'New Stock 1',
        },
        {
            image: slideimage2,
            title: 'Casual Shoes',
            subtitle: 'New Stock 2',
         
        },
        {
            image: slideimage,
            title: 'Nike Shoes',
            subtitle: 'New Stock 3',
          
        },
        {
            image: slideimage2,
            title: 'Nike Shoes',
            subtitle: 'New Stock 4',
        }
    ])
    const [SelectedImage, setSelectedImage] = useState(allImages[currentImagePose]);
    console.log(allImages)
    const onClickNext = ()=>{
        if(currentImagePose+1>=allImages.length){
            setCurrentImagePose(0)
            setSelectedImage(allImages[currentImagePose])
        }else{
            setCurrentImagePose(currentImagePose+1)
            setSelectedImage(allImages[currentImagePose])
        }
    }

  return (
    <Container fluid>
        <Row>
            <Col>
            <div className='slidecontainer'>
                <div className='slider'>
                    <img src={SelectedImage.image} alt='slide' className='slideimage' />
                    <h1>Hero Slider</h1>
                    <h4>Sub Title</h4>
                    
                </div>
                <div className='slidethumb'>
                    
                    {
                        allImages.map((slidedata) => {
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
                    <button></button>
                    <button 
                        onClick={()=>{
                            onClickNext()
                        }}
                    >Next</button>
                </div>
            </div>    
            </Col>
        </Row>
    </Container>
  )
}

export default Heroslider;