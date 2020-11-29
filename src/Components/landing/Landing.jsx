import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AnimatedLetter from '../reusable/letters/AnimatedLetter'

const Container=styled.div`
color:white;
display:flex;
flex-direction:column;

`
const ParaHeader=styled.h1`
font-family:'Inter';
padding:10px 15px;

`
const ContactMeButton=styled(Link)`
    padding:10px 15px;
    border-radius:3px;
    background:#42d9c8;
    color:#1E1C24;
    transition:0.3s;
    margin-top:5px;
    width:100px;
    margin-left:10px;
    text-align:center;
    text-decoration:none;
    &:hover{
        border:1px solid #42d9c8;
        background:#1E1C24;
        color:#42d9c8;
    }
`
export default class Landing extends Component {
    render() {
/**
 * NO i didn't write these letters one by one if you are curious about how i didn't spend 5 minutes doing this
 * here is a small simple python script that did it for me :=)
====python(i had a python repl open atm )=====
text="Hi,I'm omar,full stack web developer."

for letter in text:
  if letter==" ":
    print("&nbsp;")
  elif letter==",":
    print("<AnimatedLetter>"+letter+"</AnimatedLetter>"+"<br/>")
  else:
    print("<AnimatedLetter>"+letter+"</AnimatedLetter>")
 */
        return (
            <Container>
                <ParaHeader>
                    <Welcome/>

                </ParaHeader>
                <ContactMeButton>Contact me</ContactMeButton>

            </Container>
        )
    }
}

let Welcome=()=>{
    return(
        <span>
<AnimatedLetter>H</AnimatedLetter>
<AnimatedLetter>i</AnimatedLetter>
<AnimatedLetter>,</AnimatedLetter><br/>
<AnimatedLetter>I</AnimatedLetter>
<AnimatedLetter>'</AnimatedLetter>
<AnimatedLetter>m</AnimatedLetter>
&nbsp;
<AnimatedLetter>o</AnimatedLetter>
<AnimatedLetter>m</AnimatedLetter>
<AnimatedLetter>a</AnimatedLetter>
<AnimatedLetter>r</AnimatedLetter>
<AnimatedLetter>,</AnimatedLetter><br/>
<AnimatedLetter>F</AnimatedLetter>
<AnimatedLetter>u</AnimatedLetter>
<AnimatedLetter>l</AnimatedLetter>
<AnimatedLetter>l</AnimatedLetter>
&nbsp;
<AnimatedLetter>s</AnimatedLetter>
<AnimatedLetter>t</AnimatedLetter>
<AnimatedLetter>a</AnimatedLetter>
<AnimatedLetter>c</AnimatedLetter>
<AnimatedLetter>k</AnimatedLetter>
&nbsp;
<AnimatedLetter>w</AnimatedLetter>
<AnimatedLetter>e</AnimatedLetter>
<AnimatedLetter>b</AnimatedLetter>
&nbsp;
<AnimatedLetter>d</AnimatedLetter>
<AnimatedLetter>e</AnimatedLetter>
<AnimatedLetter>v</AnimatedLetter>
<AnimatedLetter>e</AnimatedLetter>
<AnimatedLetter>l</AnimatedLetter>
<AnimatedLetter>o</AnimatedLetter>
<AnimatedLetter>p</AnimatedLetter>
<AnimatedLetter>e</AnimatedLetter>
<AnimatedLetter>r</AnimatedLetter>
<AnimatedLetter>.</AnimatedLetter>
</span>
    )
}