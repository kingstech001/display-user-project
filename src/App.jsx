import React, { useState, useEffect } from "react";
import './styles/style.css'
import Profile from "./components/profile";

function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const userArray = [
    { name: 'Mamah', description: 'Software Developer from Nigeria.', dateOfBirth: '01-01-2000' },
    { name: 'Kingskey', description: 'Graphic Designer who loves painting.', dateOfBirth: '05-05-2000' },
    { name: 'Chukwuebuka', description: 'Freelance Writer and Blogger.', dateOfBirth: '20-11-2000' }
  ];

  useEffect(() => {
    setTimeout(() => {
      setUser(userArray);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading? <div>Loading...</div> : <Profile data={users} />}
    </>
  );
}

export default App;