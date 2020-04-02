import React, { useState } from "react";
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery';
import Matrix from './Matrix'

const  App = () => {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);
  
  const updateUserQuery = event => {
    setUserQuery(event.target.value);
    console.log('userQuery', userQuery);
  };

  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      searchQuery();
    }
  };

  const toogleShowGallery = () => {
    setShowGallery(!showGallery);
  }

  const searchQuery =() => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blanc');
  };

  return <div className="App">
            <h1>Hello Dinu</h1>
            <div className='form'>
              <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress}/>
              <button onClick={searchQuery}>Search on GOOLGE</button>
            </div>
            <hr />
            <Joke />
            <hr />
            <Tasks />
            <hr />
            {showGallery ? <Gallery /> : null}
            <button onClick={toogleShowGallery}>
              {showGallery ? 'HIDE' : 'SHOW'} GALLERY
            </button>
            <hr />
            <Stories />
            <hr />
            <Matrix />
          </div>;
}

export default App;
