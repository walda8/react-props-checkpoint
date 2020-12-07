import React from 'react';
import Profile from './profile/profile';


const fullName = 'Walda'; 
const bio = 'Go My Code student'; 
const profession = 'Jobless';

const img = './profilepic.jpg';

const handleName = (e) => {
  return alert(e)
};

function App() {
  return (
    <>
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
        {img}
      </Profile>
    </>
  );
}

export default App;
