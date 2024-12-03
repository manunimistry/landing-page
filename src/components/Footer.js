import React from "react";
import { Link } from "react-router-dom"
import { FaTwitter,FaFacebook, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
        <section>
            <h2>TechVantage</h2> <br/>
            <p className="foot-para-color">Transforming Industries through Innovative Technology</p>
            
            <Link className="social-icons"><FaTwitter/></Link>
            <Link className="social-icons"><FaFacebook/></Link>
            <Link className="social-icons"><FaGoogle/></Link>
        
        </section>
        <section>
            <h6>About</h6><br/>
            <ul className="footul">
                <li>About Us</li>
                <li>Blog</li>
                <li>Team</li>
                <li>Career</li>
                <li>Contact</li>
            </ul>
        </section>
        <section>
        <h6>Company</h6><br/>
            <ul className="footul">
                <li>privacy</li>
                <li>Support</li>
                <li>Help Desk</li>
                <li>FAQ</li>
               
            </ul>
        </section>
        <section>
        <h6>Blog</h6><br/>
        <div className="blog-post">
          <img src="https://via.placeholder.com/60" alt="Webinar" />
          <div>
            <p>Webinar: The Future of Digital Transformation in Business</p>
            <Link>Read more</Link>
          </div>
        </div>
        <div className="blog-post">
          <img src="https://via.placeholder.com/60" alt="Marketing Guide" />
          <div>
            <p>Mastering Social Media Marketing: A Comprehensive Guide</p>
            <Link>Read more</Link>
          </div>
        </div>

        </section>
    </div>
  );
};

export default Footer;
