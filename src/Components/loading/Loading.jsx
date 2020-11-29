import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './assets/cat.css'

const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
    background:#42d9c8;

`
const Paragraph=styled.h1`
    color:white;
    font-family:'Inter',sans-serif;
    text-align:center;
`
const Credits=styled(Link)`
color:white;
font-family:'Inter',sans-serif;
text-align:center;
text-decoration:none;
`
export default class Cat extends Component {
    render() {
        return (
<Container>
<div class="cat">
	<div class="ear ear--left"></div>
	<div class="ear ear--right"></div>
	<div class="face">
		<div class="eye eye--left">
			<div class="eye-pupil"></div>
		</div>
		<div class="eye eye--right">
			<div class="eye-pupil"></div>
		</div>
		<div class="muzzle"></div>
	</div>
</div>
<Paragraph>Loading.... </Paragraph>
<Credits to="https://codepen.io/johanmouchet/pen/OXxvqr">Credits(codepen)</Credits>
</Container>
        )
    }
}
