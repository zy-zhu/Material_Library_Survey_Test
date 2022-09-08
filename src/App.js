import React, { Component } from 'react';

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
        <div className="row">  
{this.state.materials.map(material=><MaterialCard{...material.fields}/>)}
   
          </div>
      </div>//this is the frontend, where cards displayed
    );
  }
}

export default App;


const MaterialCard = ({name,time,description,imageURL}) => (
  <div className='col'>
  <div className="card">
    <img className="card-img-top" src={imageURL[0].url} alt="Card poster" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text">
        <small className="text-muted">{time}</small>
      </p>
    </div>
  </div>
  </div> //this is the survey result 
);