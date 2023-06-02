import React, { useState ,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Home.css";

const Bookingform = () => {
  const { id} = useParams();
  const Navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [titl, setTitl] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setTitl(data.name));
  }, [id]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user details to local storage
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));

    // Redirect to home page
    Navigate("/");
  };

  return (
    <div  className='bookings'>
    <div className='booking'>
      <h1 className='booktingitle'>Booking Form</h1>
      <h2>Movie: {titl}</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>Name: </label>
          <input type="text" id="name" value={name} onChange={handleNameChange}  placeholder='your name'/>
        </div><br></br>
        <div className='input'>
          <label>Email: </label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder='your email' />
        </div><br></br>
        <button className='buton' type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Bookingform;
