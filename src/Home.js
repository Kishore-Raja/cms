const Home = ({user}) => {
    console.log(user);
    const usrView = user && user.map((usr)=>
        <div className="user" key={usr.id}>
            <div className="name">{usr.author}</div>
            <div className="title">{usr.title}</div>
        </div>
    )
    return ( 
        <div className="home">
            <h2>Title</h2>
            {usrView}
        </div>
     );
}
 
export default Home;