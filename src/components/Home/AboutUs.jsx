import React from 'react'
import styled from 'styled-components';
import Button from '../Button';

const AboutUs = () => {

    const handleClick = () => {
        alert('clicked')
    }
  return (
    <Wrapper>
      <div className="container">
        <div className="about-img">
            <div className="bg-img">
                <img src="src/assets/png/Rectangle.png" alt="" />
            </div>
            <div className="main-img">
                <img src="/src/assets/images/men.png" alt="" />
            </div>
        </div>
        <div className="about-content">
            <div className="about-heading">
                <h1>About us</h1>
                <hr />
                <p>Empowering IT Aspirants for a Bright Future</p>
            </div>
            <div className="about-para">
                <p>Established in 2021, AspiraSys is more than just an organization; it's a commitment to empower IT enthusiasts for a brighter and more prosperous future.</p>
            </div>
            <div className="about-btn">
            <Button bgcolor="#3E91CF" color="white" bordercolor="#3E91CF" hovercolor="#3E91CF" onClick={handleClick}>
              Know More
            </Button>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: start;
        align-items: end;
        column-gap: 100px;
    }
    .about-img {
        width: 40%;  
        height: 100%;  
        position: relative;
    }
    .about-img .bg-img {
        width: 85%;
    }
    .about-img .bg-img img {
        width: 100%;
    }
    .about-img .main-img {
        width: 75%;
        position: absolute;
        top: 160px;
        left: 80px;
    }
      .about-img .main-img img {
        width: 100%;
    }   
    .about-content {
        width: 40%;
        height: 80%;
    }
    .about-heading {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 200px;
    }
    .about-heading h1 {
        font-size: 55px;
        text-align: center;    
        font-family: sans-serif;
        text-transform: uppercase;
        font-weight: 600;
    }
    .about-heading hr {
        width: 30%;
        height: 3px;
        margin: auto;
        border: none;
        border-radius: 5px;
        background-color: #3BDA2D;
    }
    .about-heading p {
        text-align: center;
        font-size: 35px;
        font-family: sans-serif;
        font-weight: 600;
        color: #C3BFBF;
    }
    .about-para {
        padding: 20px 0px;
    }
    .about-para p {
        font-size: 35px;
        font-family: sans-serif;
        line-height: 1.5;
    }
    .about-btn {
        width: 80%;
        margin: auto;
    }
`
export default AboutUs;
