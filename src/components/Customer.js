import React from 'react';
import c1 from "../Assets/c1.webp";

const Customer = () => {
  const customers = [
    { profile: c1, feedback: "TechVantage has transformed the way we work. It has streamlined our processes and improved our collaboration across teams. Highly recommended.", company: "ABC Company", name: "John Smith, CEO" },
    { profile: c1, feedback: "We've been using TechVantage for months now, and it has become an indispensable tool for our business.", company: "DEF Corporation", name: "Emily Johnson, Marketing Manager" },
    { profile: c1, feedback: "TechVantage's powerful analytics have given us invaluable insights into our business performance.", company: "GHI Industries", name: "Michael Chen, CFO" },
  ];

  const stats = [
    { value: "10+", label: "Years in the Market" },
    { value: "200,000+", label: "Happy Customers" },
    { value: "99%", label: "Uptime" },
    { value: "98%", label: "Customer Retention Rate" },
    { value: "24/7", label: "Support" },
  ];

  const scrollLeft = () => {
    document.getElementById("slider").scrollLeft -= 300;
  };

  const scrollRight = () => {
    document.getElementById("slider").scrollLeft += 300;
  };

  return (
    <div>
      <div className="customer-container">
        <h2>Join Thousands of Satisfied Customers</h2>
        <p>Don't just take our word for it. Hear what our customers have to say about their experience with TechVantage.</p>
      </div>
      <div className="slider-container">
        <button className="slider-button left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="slider" id="slider">
          {customers.map((customer, index) => (
            <div key={index} className="fc">
              <div className="image-container">
                <img src={customer.profile} className="profile" alt="customer" />
              </div>
              <p className="feedback">{customer.feedback}</p>
              <h3 className="company">{customer.company}</h3>
              <h5 className="name">{customer.name}</h5>
            </div>
          ))}
        </div>
        <button className="slider-button right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>

      <div className="statistics-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
        <h1 className="stat-value">{stat.value}</h1>
        <p className="stat-label">{stat.label}</p>
      </div>
      ))}
    </div>
    </div>
  );
};

export default Customer;
