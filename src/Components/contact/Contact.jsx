import React, { Component } from 'react'
import styled from 'styled-components'
import Input from '../reusable/inputs/Input'
import MapComponent from './components/MapComponent'
const Splitter=styled.div`
    display:flex;
    flex-direction:row;


`
const Form=styled.form`
display:flex;
flex-direction:column;
width:50%;
align-items:center;
`
const Header=styled.h1`
font-family:'Inter';
padding:10px 15px;
color:#42D9C8;
text-align:center;
`
const Paragraph=styled.p`
font-family:'Inter';
padding:10px 10px;
color:#42D9C8;
line-height:140%;
text-align:center;
`
const MapContainer=styled.div`
width:50%;
`
const RowedInputs=styled.div`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
`
const TextArea=styled.textarea`
padding:10px 10px;
width:90%;
font-family:'Inter';
background:#272430;
border:none;
outline:none;
margin-top:5px;
font-size:25px;
border-radius:3px;
resize:none;

color:gray;

&::placeholder{
    color:gray;
}
`
const Submit=styled.button`
background:#42d9c8;
width:93%;
border:none;
padding:10px 10px;
font-size:20px;
margin-top:10px;
border-radius:3px;
&:hover{
    cursor:pointer;
}
`
const Modal=styled.div`
  position:fixed;
  height:150px;
  width:200px;
`
export default class Contact extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            subject:'',
            message:''
        }
        this.HandleChange=this.HandleChange.bind(this)
    }
  HandleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }
    render() {
        let {name,email,message,subject}=this.state
        return (
            <Splitter>
            <Form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
                <Header>Contact me</Header>
                <RowedInputs>
                <Input name="name" onChange={this.HandleChange} value={name} placeholder="Name" half={true}/>&nbsp;

                <Input name="email" onChange={this.HandleChange} value={email} placeholder="Email" half={true}/>
                </RowedInputs>
                <Input name="subject" onChange={this.HandleChange} value={subject} placeholder="subject" half={false}/>

<TextArea name="message" onChange={this.HandleChange} value={message} placeholder="Message" />
<Submit>Send</Submit>
            </Form>
            <MapContainer>
                <MapComponent/>
                <Modal>
                    chabeb
                  </Modal>
            </MapContainer>
            </Splitter>

        )
    }
}
