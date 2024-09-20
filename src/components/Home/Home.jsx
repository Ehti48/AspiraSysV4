import React from 'react'
import styled from 'styled-components'
import Button from '../Button';

const Home = () => {

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="home-sec">
          <div className="home-text">
            <h1>Want Career as</h1>
            <h1><span>Software Engineering?</span></h1>
          </div>
          <div className="home-para">
            <p>Now learn From anywhere and built your <br /><span>Bright Career</span></p>
          </div>
          <div className="home-btn">
            <Button bgcolor="#82D45B" color="white" bordercolor="#82D45B" hovercolor='#82D45B' onClick={handleClick}>
              Apply Now
            </Button><br />
            <Button bgcolor="#3E91CF" color="white" bordercolor="#3E91CF" hovercolor="#3E91CF" onClick={handleClick}>
              Know More
            </Button>
          </div>
          <div className="home-img">
            <img src="/src/assets/images/women.png" alt="" />
            <div className="home-png">
              <img src="/src/assets/png/Group 247.png" alt="" />
            </div>
            <div className="home-png-2">
              <img src="/src/assets/png/learn.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@600;700&display=swap');

@font-face {
    font-family: 'Poppins';
    src: url('./src/assets/fonts/poppins.bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    background: linear-gradient(180deg, #81d45b4a, #81d45b4a, transparent);
}

.container .home-sec {
    width: 90%;
    height: 100%;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.container .home-img {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: absolute;
    right: 0px;
    bottom: 0;
}
.container .home-img img {
    width: 100%;  
    position: absolute; 
    z-index: 15;
}
.container .home-img .home-png img{
    width: 130px;
    right: 0px;
    top: 160px;
    z-index: 10;
}
.container .home-img .home-png-2 img{
    width: 200px;
    left: 130px;
    top: 100px;
    z-index: 10;
}

.container .home-text {
    padding: 10px 0;
}

.container .home-text h1 {
    font-size: 60px;
    font-family: 'Poppins', sans-serif;
}

.container .home-text h1 span {
    color: #3078ff;
}

.container .home-para {
    padding: 10px 0;
}

.container .home-para p {
    font-size: 25px;
    font-family: 'Poppins', sans-serif;
}

.container .home-para p span {
    color: #43A02C;
}
.container .home-btn {
  width: 40%
}
    
`
export default Home;
