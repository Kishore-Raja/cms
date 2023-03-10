import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
   
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
    fetch("http://localhost:8000/posts")
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
        <div className="home">
            <h2>Title</h2>
            {isPending && <div className="loading">Loading...</div> }
            {error? error: ""}
            {user && <Bloglist list={user} />}
        </div>
     );
}
 
export default Home;