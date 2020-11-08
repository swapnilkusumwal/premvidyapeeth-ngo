// @flow
import * as React from 'react';

const services=[
  {"heading":"Suman Lata Srivastava","description":"One line description","redirect":"education","image":"dadi.jpg"},
  {"heading":"Kallo Kota","description":"Along with pursuing his B.tech degree, he likes to spend some time along with the kids to teach and nurture them.","image":"kallo.jpg"},
  {"heading":"Tini Rini","description":"One line description","redirect":"accounts","image":"rini.png"}
];

function RenderService({data,key}){
  return(
    <div className="col-lg-4 col-md-4 text-center">
        <div className="mt-5">
            <img src={data.image}/>
            <h3 className="h4 mb-2">{data.heading}</h3>
            <p className="text-muted mb-0">{data.description}</p>
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