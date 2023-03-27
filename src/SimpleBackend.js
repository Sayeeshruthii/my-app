import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from 'react-router-dom';

const SimpleBackend = () => {

    const [data, setData] = React.useState(null);
    
  
    React.useEffect(() => {
      fetch("http://20.241.246.57:3000/simplebackend")
      .then((res) => res.json())
      .then((data) => setData(data.message));
      
  
    }, []);
      return (
          <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{!data ? "Loading..." : data}</p>
          
        </header>
                  <Link to='/'>Go to Homepage</Link>
          </div>
      )
  };
  export default SimpleBackend;
  