import React from 'react';
import { useFetch } from './hooks';


function Joke() {
  
  const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {});
  // useEffect(() => {
  //   fetch('https://official-joke-api.appspot.com/jokes/random')
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log('json', json); 
  //     setJoke(json)}
  //   )
  // }, []);


  return (
    <div>
      <h3>The sassion joke:</h3>
      <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  )
};

export default Joke;