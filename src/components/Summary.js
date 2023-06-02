import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Home.css";
const Summary = () => {
  const { id,names} = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setSummary(data.summary));
  }, [id]);

  return (
    <div className="summary">
      <h1>Show Summary</h1>
      {summary}
     
      <h4>
      <button> <Link to={`/book/${id}`}>Book Tickets</Link></button>
      </h4>
    </div>
  );
};

export default Summary;
