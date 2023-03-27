import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from 'react-router-dom';

const Aboutmepage = () => {

    const [microservice, setmicroservice] = React.useState(null);
    
  
    React.useEffect(() => {
      fetch("http://20.237.120.65:8080/aboutme")
      .then((res) => res.json())
      .then((microservice) => setmicroservice(microservice.name + microservice.description));
      
  
    }, []);
      return (
          <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{!microservice ? "Loading..." : microservice}</p>
          
        </header>
                  <Link to='/'>Go to Homepage</Link>
          </div>
      )
  };
  export default Aboutmepage;
  