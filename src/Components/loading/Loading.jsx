import React, { Component } from 'react'
import styled from 'styled-components'
import './assets/cat.css'

const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100%;
    background:#42d9c8;

`
const Paragraph=styled.h1`
    color:white;
    font-family:'Inter',sans-serif;
    text-align:center;
`
const Credits=styled.a`
color:white;
font-family:'Inter',sans-serif;
text-align:center;
text-decoration:none;
`
export default class Cat extends Component {
    render() {
        return (
<Container>
<div className="cat">
	<div className="ear ear--left"></div>
	<div className="ear ear--right"></div>
	<div className="face">
		<div className="eye eye--left">
			<div className="eye-pupil"></div>
		</div>
		<div className="eye eye--right">
			<div className="eye-pupil"></div>
		</div>
		<div className="muzzle"></div>
	</div>
</div>
<Paragraph>Loading.... </Paragraph>
<Credits href="https://codepen.io/johanmouchet/pen/OXxvqr">Credits(codepen)</Credits>
</Container>
        )
    }
}
