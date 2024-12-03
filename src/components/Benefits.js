import React from 'react'
import ss from "../Assets/ss.png"
import ss2 from "../Assets/ss2.png"


const Benefits = () => {/*
    const functionalities = [
        {no: '1st functionality', title: 'Effortless Task Management', description: 'The discription about Effortless Task Management', button: 'Streamline Now' },
        {no: '2st functionality', title: 'Seamless Communication', description: 'The discription about Seamless Communication', button: 'Streamline Now' },
        {no: '3st functionality', title: 'Powerful Analytics', description: 'The discription about Powerful Analytics', button: 'Streamline Now' }
    
    ];*/
  return (
    <div>
     {/*Functionalities*/}
     <div className="para">
     <h2>Streamline your workflow with TechVantage</h2> 
     <br/>
     <p>TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution. TechVantage is cutting edge SaaS solution.</p>
     </div>
 
 <div className='home-container'>
     <div className='functionality-card '>
     <h4>1st functionality</h4><br/>
             <h2>Effortless Task Management</h2><br/>
             <p>The discription about Effortless Task Management</p><br/>
             <button className='navbtn'>Streamline Now</button>
       </div>
 
       <img src={ss} alt='' className='isize'></img>
 
       </div>
 
 
       <div className='home-container'>
       <img src={ss} alt='' className='isize'></img>
     <div className='functionality-card'>
     <h4>2nd functionality</h4><br/>
             <h2>Seamless Communication</h2><br/>
             <p>The discription about Seamless Communication</p><br/>
             <button className='navbtn'>Connect Today</button>
       </div>
 
       </div>
 
       <div className='home-container'>
     <div className='functionality-card'>
     <h4>3rd functionality</h4><br/>
             <h2>Powerful Analytics</h2><br/>
             <p>The discription about Powerful Analytics</p><br/>
             <button className='navbtn'>Gain Insights</button>
       </div>
 
       <img src={ss} alt='' className='isize'></img>
 
       </div>
 
       <div className='home-container'>
     <div className='functionality-card'>
     
             <h2>Seamless Software Integrations</h2><br/>
             <p>The discription about Seamless Software Integrations</p><br/>
             <button className='navbtn'>Explore</button>
       </div>
 
       <img src={ss2} alt='' className='isize'></img>
 
       </div>

    </div>
  )
}

export default Benefits




