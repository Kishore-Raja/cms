import React from "react";
const Bloglist = ({list}) => {

    const listView = list.map((usr)=> 
    <div className="user" key={usr.id}>
        <div className="name">{usr.author}</div>
        <div className="title">{usr.title}</div>
    </div>)
   
    return ( 
        <div>
            {listView}
        </div>
    );
}
 
export default Bloglist;