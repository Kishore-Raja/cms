import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {

  
  const [user, setUser] = useState(null)

  const promise1 = new Promise((resolve,reject) => {
    fetch("http://localhost:8000/users")
      .then(res=>res.json())
      .then(data => resolve(data.blogs))
  });
  

  const promise2 = new Promise((resolve,reject) => {
    fetch("http://localhost:8000/posts")
      .then(res=>res.json())
      .then(data => resolve(data.blogs))
  });
  
 
  useEffect(()=>{
    console.log("useEffect")
    Promise.all([promise1, promise2])
      .then((results)=>{
        let finalData = [...results[0],...results[1]]
       setUser(finalData)
     })
   
  },[])
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {user && <Home user={user} />}
      </div>
    </div>
  );
}

export default App;
