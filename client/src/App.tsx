import React from 'react';
import './App.css';

function App() {

  const [movieName, setMovieName] = React.useState('');
  const [review, setReview] = React.useState('');


  return (
    <div className="App">

      <h1>CRUD Application</h1>

      <div className='form'>
      <label>Movie Name:</label>
      <input type="text" name="movieName" onChange={(e) => {
        setMovieName(e.target.value);
      }}/>
      <label>Review:</label>
      <input type="text" name="review" onChange={(e) => {
        setReview(e.target.value);
      }}/>

      <button>Submit</button>
      </div>    
    </div>
  );
}

export default App;
