import * as React from 'react';
import TeamComponent from './TeamComponent';
export default class MainComponent extends React.Component{
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">PREMVIDYAPEETH</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">ABOUT US</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">TEAM</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#donate">DONATE</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header className="masthead" id="page-top">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">Our Motto!</h1>
                        <hr className="my-4 divider"/>
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">
                        We focus on making the maximum positive effort for our community. 
                        Our members and volunteers provide the momentum that helps us affect change. 
                        Using data driven models, we provide solutions that make a long-lasting difference.
                        </p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">More About Us</a>
                    </div>
                </div>
            </div>
        </header>
        
        <section  id="about">
            <div className="container" style={{paddingTop:50,paddingBottom:50}}>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white">About Us!</h2>
                        <hr className="divider light my-4" style={{borderColor:'white'}} />
                        <p className="text-white-0 mb-0" style={{color:"white"}}>07 July 2007 the school was started. 
                        The initial number of students were 60. These 60 students they were from karnipur, 
                        chaduva, Naushera. This school started from the family home in the village, 
                        to accommodate the students a tin shed was constructed. We started with 4 teachers, 
                        from the area itself, these were the local residents of the village. Nursery to 5th class 
                        — primary school / prathmik vidyala. From 2007 since inception, till 2017, Mrs.Sumanlata 
                        Srivastava managed the school from her own pension. From 2018, the NGO went out and started
                         asking for donations. All these students after graduating from class 5 took admission in 
                         the next school nearby which was till senior secondary. In this way we have been able to 
                         send more than 500 children to a higher school and education. Suman Lata sold her share of 
                         the village contribution to make the bench for this village kids so that they don’t have 
                         to sit on the ground during rains.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="team">
            <div className="container"  style={{paddingTop:50,paddingBottom:50}}>
                <h2 className="text-center mt-0">Meet our team!</h2>
                <hr className="divider my-4" />
                <p className="mb-4 text-center" style={{color:"black"}}>
                Our amazing team of regulars and part-time volunteers are committed to helping others. 
                We take our convictions and turn them into action. Think you would be a good fit? 
                Get in touch for more information!
                </p>
                <TeamComponent/>
            </div>
        </section>
        
        <section id="donate" style={{backgroundColor:"#fd7e14",color:"white"}}>
            <div className="container"  style={{paddingTop:50,paddingBottom:50}}>
                <h2 className="text-center" >Donate</h2>
                <hr className="divider my-4" style={{borderColor:"white"}} />
                <p className="mb-4 text-center">
                    Kindly contribute any amount possible so that we continue our work and these kids get what they deserve.
                </p>

                <div style={{marginTop:"5vh"}}></div>
                <h4 className="text-center">Account Number : 12345679010</h4>
                <h4 className="text-center">IFSC Code: ABCDEF12345</h4>

                <div style={{marginTop:"5vh"}}></div>
                <h4 className="text-center">Paytm Number: 9235626267</h4>

                <div style={{marginTop:"5vh"}} className="mb-0"></div>
                <h4 className="text-center">UPI : upiid@bank</h4>

            </div>
        </section>

        <section id="contact" >
            <div className="container" style={{paddingTop:50,paddingBottom:50}}>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Contact</h2>
                        <hr className="divider my-4"  />
                        <p className="text-white-0 mb-0" style={{color:"black"}}>Would you like to work with us? Reach out to us over call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>+91-9235626267</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        
                        <a className="d-block" href="mailto:rajatkusumwal@gmail.com" style={{color:"black"}}>shivank911@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  };
};

// We've consistently grown since then, all thanks to the helping hands of this amazing community!