import React from 'react'
//import Navbar from './Navbar'
import homeimg from "../Assets/hero-distribution.webp"
import './Navbar.css'

const Home = () => {
  const features = [
    { title: "Increased Efficiency", description: "Streamline your workflow and save time.", icon: "⚡" },
    { title: "Improved Cooperation", description: "Foster teamwork and communication.", icon: "🤝" },
    { title: "Scalability", description: "Adapt to growing business needs seamlessly.", icon: "📈" },
    { title: "Data Security", description: "Ensure the safety and privacy of your data.", icon: "🔒" },
    { title: "24/7 Support", description: "Provide round-the-clock assistance to customers.", icon: "🕐" },
  ];
  return (
    <div>
    <div className='home-container'>
      <div className='left'>
      <h1>TechVantage Solutions</h1> <br/>
      <p>Empowering businesses with innovative solutions and growth. Empowering businesses with innovative solutions and growth. Empowering businesses with innovative solutions and growth. Empowering businesses with innovative solutions and growth. Empowering businesses with innovative solutions and growth.</p><br/>
      <button className='navbtn'>Start Your Free Trial Now</button>
    <button className='btn2'>Request a demo</button>
      </div>
      
    <img src={homeimg} alt='' className='isize'></img>
    </div>
{/*cards*/}
    <section className="features">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
    <br></br>
      <div className="para">
    <h2>Streamline your workflow with TechVantage</h2> 
    <br/>
    <p>TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution.</p>
    </div>
    </div>
    
    
    
  )
 

 
    
  
}

export default Home
