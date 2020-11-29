import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './components/project-cards/Card'
const Cards=styled.div`
    display:flex;
    flex-direction:flex;
    padding:10px 10px;
`
const Header=styled.h1`
font-family:'Inter';
padding:10px 15px;
text-align:center;
color:#42d9c8;
`
const Caption=styled.p`
    font-family:'Montserrat';
    padding:5px 5px;
    text-align:center;
    color:#42d9c8;
`
export default class Work extends Component {
    render() {
        let rhousey="Airbnb like failed startup the goal of it was to provide the user an online platform to rent a home for an amount of nights in tunisia.This was my first web app(open sourcing it soon) it helped me get comfortable with html/vanilla js/css/mongodb/jquery."
        let vaymees="Uber eats like project that i made to improve restaurants/coffeeshops online presence (failed startup) the goal of it was to provide the user an online platform where he can use order from their home/work or scan a qr code of the restaurant/coffee and buy indoors without interacting with the waiter. i really enjoyed working on this project cause it was my first time with react and redux also i learned that javascript is bad with numbers."
        let tunytalk="Tunytalk is a reddit like project that i made out of passion with a goal to make a community based platform that provides the user a non-toxic environment by using machine learning to clean bad/offensive content when the user posts it i'm still working on doing the part where i clean offensive content :) also i learned flask and docker and aws and nginx because of it im quite glad where this project took me and still taking me learning wise."
        return (
            <div>     
                <Header>Projects that i have done in these couple of years.</Header>
                <Caption>(With every mistake,success in these projects i learned a new tech and i'm proud of this.)</Caption>
                      <Cards>
                <Card title="Rhousey" description={rhousey} tech={["jquery","html5","semantic ui","mongodb","cloudinary"]}/>
                <Card title="Vaymees" description={vaymees} tech={["reactJs","ant design","mongodb","redux","expressJs","cloudinary"]}/>
                <Card title="Tunytalk" description={tunytalk} tech={["reactJs","socket io","styled-components","mongodb","redux","flask","s3","aws","docker","nginx","intl"]}/>

            </Cards>
            </div>

 
        )
    }
}
