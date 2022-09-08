import React, { Component } from 'react';
import Head from './Components/head';
import {Card, Row, Col} from 'react-bootstrap';


class App extends Component {

constructor(props){
  super(props);
  this.state={
    materials:[],
  };
}

componentDidMount(){
  fetch('https://api.airtable.com/v0/appeC67HzL0SJwOeL/favorites?api_key=keyd0wJHzU4qarGuy') //this need to be changed to your own key
  .then((resp)=>resp.json())
  .then(data=>{
    this.setState({materials:data.records});
  }).catch(err=>{
    //Error
  });
}

  
render() {
    return (
      <div className="container mt-5">
        <Head></Head>
        <Row xs={3} md={4} className="g-4">
 
{this.state.materials.map(material=><MaterialCard{...material.fields}/>)}
          </Row>
      </div>//this is the frontend, where cards displayed
    );
  }
}

export default App;


const MaterialCard = ({name,time,description,imageURL}) => (
<Col>
  <Card  style={{ width: '15rem' }}>
    <img className="card-img-top" src={imageURL[0].url} alt="Card" />
    <Card.Body>
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <Card.Text>
        <small className="text-muted">{time}</small>
      </Card.Text>
    </Card.Body>
  </Card> 

  </Col>
  
  //this is the survey result 
);