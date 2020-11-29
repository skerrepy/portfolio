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
width:90%;
line-height:140%;
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
const StatusCard=styled.div`
    width:90%;
    padding:10px 10px;
    background:${props=>props.bg};
    font-size:20px;
    text-align:center;
    color:white;
    margin-top:10px;
    border-radius:3px;


`
export default class Contact extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            subject:'',
            message:'',
            status:""
        }
        this.HandleChange=this.HandleChange.bind(this)
    }
  HandleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
    render() {
        let {name,email,message,subject,status}=this.state
        return (
            <Splitter>
            <Form onSubmit={this.submitForm.bind(this)} target="_blank" action="https://formspree.io/f/mpzojjwg" method="POST">
                <Header>Contact me</Header>
                <Paragraph>Hey again,i'm currently searching for a job with visa sponsorship :).If you have an offer or a question don't hesitate to contact me. via the form below or at omarhanaficontact@gmail.com</Paragraph>
                <RowedInputs>
                <Input name="name" onChange={this.HandleChange} value={name} placeholder="Name" half={true}/>&nbsp;

                <Input name="email" onChange={this.HandleChange} value={email} placeholder="Email" half={true}/>
                </RowedInputs>
                <Input name="subject" onChange={this.HandleChange} value={subject} placeholder="subject" half={false}/>

<TextArea name="message" onChange={this.HandleChange} value={message} placeholder="Message" />


{status === "SUCCESS" ? <StatusCard bg="#01C24E">
Thanks for sending your infos i'll be sure to reach you as soon as possible.
</StatusCard> : <Submit>Send</Submit>}
    {status === "ERROR" &&<StatusCard bg="#D73D42">
Error while sending your infos :( i'm really sorry but can you contact me <b>omarhanaficontact@gmail.com</b>.
</StatusCard>}
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
