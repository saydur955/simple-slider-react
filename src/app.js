import React, { useState, useEffect } from 'react';
import Slider from './slider';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usr = await fetch('https://jsonplaceholder.typicode.com/posts');
      const userArr = await usr.json();
      setUsers(userArr);
    };
    fetchUsers();

  }, []);
  
  if (users.length > 0) {
    const slideUser = users.slice(0, 50);
    return <Slider users={slideUser} />
  }
  return <h6> loading </h6>

};
export default App;