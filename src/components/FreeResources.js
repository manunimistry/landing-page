import React from 'react';
import b1 from "../Assets/b1.webp";
import b2 from "../Assets/b2.webp";
import b3 from "../Assets/b3.webp";
import b4 from "../Assets/b4.webp";
import b5 from "../Assets/b5.webp";
import b6 from "../Assets/b6.webp";
import { Link } from 'react-router-dom';

const FreeResources = () => {
  const resources = [
    { photo: b1, title: "10 Essential Strategies For Business Growth", link: "Read more" },
    { photo: b2, title: "Successful Stories", link: "Read more" },
    { photo: b3, title: "Unlocking Data Analytics", link: "Read more" },
    { photo: b4, title: "Futur Digital Transformation In Business", link: "Read more" },
    { photo: b5, title: "10 Essential Strategies For Business Growth", link: "Read more" },
    { photo: b6, title: "10 Essential Strategies For Business Growth", link: "Read more" },
  ];

  return (
    <div className="container mt-4">
      <center>
        <h2>Empower Your Business With Free Resources</h2>
      </center> <br></br>
      <div className="row">
        {resources.map((resource, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={resource.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{resource.title}</h5>
                <Link >{resource.link}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeResources;
