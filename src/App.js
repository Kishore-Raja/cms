import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {

  
  const [user, setUser] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  const promise1 = new Promise((resolve) => {
    fetch("http://localhost:8000/users")
      .then(res=>{
        if(!res.ok){
          throw Error("Failure: retry after some time")
        }
        return res.json()
      })
      .then(data => resolve(data.blogs))
      .catch( err=>{
        setIsPending(false)
        setError(err.message)
      })
  });
  

  const promise2 = new Promise((resolve) => {
    fetch("http://localhost:8000/posts1")
      .then(res=>{
        if(!res.ok){
          throw Error("Failure: retry after some time")
        }
        return res.json()
      })
      .then(data => resolve(data.blogs))
      .catch( err=>{
        setIsPending(false)
        setError(err.message)
      })
  });
  
 
  useEffect(()=>{
    Promise.all([promise1, promise2])
      .then((results)=>{
        let finalData = [...results[0],...results[1]]
       setUser(finalData)
       setIsPending(false)
     }).catch(err=>console.log(err))
   
  },[])
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {isPending && <div className="loading">Loading...</div> }
        {error? error: ""}
        {user && <Home user={user} />}
      </div>
    </div>
  );
}

export default App;
