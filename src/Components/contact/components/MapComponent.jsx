import React, { Component } from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import styled from 'styled-components';
const Container=styled.div`
    height:100%;
    width:100%;
`

export default class MapComponent extends Component {
    render() {
        return (
            <Container>
                <MapContainer style={{height:'100%'}} center={[36.807086,10.107551]} zoom={10}>

                <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
  />
    <Marker  position={[36.807086,10.107551]}>
  </Marker>
  
                  </MapContainer>
            </Container>
        )
    }
}
//                <Map center={[36.807086,10.107551]}
