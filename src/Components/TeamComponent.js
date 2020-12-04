// @flow
import * as React from 'react';

const services=[
  {"heading":"Suman Lata Srivastava","description":"President","image":"dadi.jpg"},
  {"heading":"Vijay Laxmi Srivastava","description":"Principal","image":"laxmi.jpg"},
  {"heading":"Madhuri","description":"Head Teacher","image":"rini1.jpg"}
];

function RenderService({data}){
  return(
    <div className="col-lg-4 col-md-4 text-center">
        <div className="mt-2">
            <img src={data.image} alt="image_of_team_member"/>
            <h3 className="h4 mb-2">{data.heading}</h3>
            <p className="mb-0">{data.description}</p>
        </div>
    </div>
  )
}

export default class TeamComponent extends React.Component{
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="row">
        {services.map((data,index)=><RenderService key={index} data={data}/>)}
      </div>
    );
  };
};