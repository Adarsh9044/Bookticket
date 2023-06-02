import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
const Home = () => {
  const [shows, setShows] = useState([]);
 
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div >
      <h1 className='adaa titlename'>TV Shows</h1>
      {shows.map((show) => (
        <div  key={show.show.id}><div className='ada'>
          <h2 className='titlename'>{show.show.name}</h2>
          <p>{show.show.summary}</p>
         <h4><Link to={`/summary/${show.show.id}`}>Show Summary....</Link></h4> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
