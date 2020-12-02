import React, { Component } from "react";
import styled from "styled-components";
import Word from "../../../../reusable/words/Word";
const Splitter = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  width: 50%;
  display:flex;
  height:100%;
  @media only screen and (max-width: 767px) {
    display:none;
  
    }
`;
const AboutContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 767px) {
    width:95%;
    height:75vh;
  
    }
`;

const Image=styled.div`
background-image:url(${props=>props.src});
height:500px;
width:70%;
background-size:cover;
background-position:center;
border-radius:5px;
background-repeat:no-repeat;
margin:10px 10px;
`
const Header = styled.h1`
  font-family: "Inter";
  padding: 10px 15px;
  text-align: center;
  color: #42d9c8;
`;
const Bio=styled.p`
font-family: "Montserrat";
padding: 10px 15px;
color:white;
font-size:20px;
width:100%;

`
export default class AboutMe extends Component {
  render() {
      let bio="Professionally connected with the web development industry for 3 years. Problem solver,high attention to details. With passion to learn cause we can never stop learning :) for now i'm intrested in frontend/backend/fullstack jobs(with visa sponsorship) cause i love traveling and learning new cultures. even settle down in a new country."
    return (
      <Splitter>
        <AboutContainer>
          <Word delay="0">
            <Header>Hi again :)</Header>
            <Bio>
        {bio.split(" ").map((i,index)=>{
            return <React.Fragment key={index}>  <Word delay={index/10}>{i} </Word> &nbsp;</React.Fragment>

        })}
            </Bio>
          </Word>
        </AboutContainer>
        <ImageContainer>
            <Image src="https://picsum.photos/200/300"/>
        </ImageContainer>
      </Splitter>
    );
  }
}
