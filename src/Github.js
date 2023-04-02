import React, { useState, useEffect } from 'react';

function Github() {
  const [users, setUsers] = useState([]);
  const [inputstring,setinput]=useState("");
  const [count,setcount]=useState("0");
  const styles={}
  const inputstyle={}

  const handleChange=()=>{

    
  }

  useEffect(()=>{
    if(inputstring!=='')
    {
      fetch(`https://api.github.com/search/users?q=${inputstring}`)
      .then(response => response.json())
      .then(data => {
              setUsers(data.items);
              setcount(data.total_count);
      })
      .catch(error => console.error(error));
    }

} , [inputstring]);
return (
  <div>
    <h2>GitHub Users</h2>
    Enter User Name: <input type="text" id='infield' style={inputstyle}  placeholder='Username...'/><br /><br />
    <button id='button1' onClick={handleChange}>Search</button>
    {
      users.map(user => (
        <div style={styles}>
          <img src={user.avatar_url} alt={user.login} height={'50px'}/>
          <br />
          <a href={user.html_url}>{user.login}</a>
          
          <br /><br /><br />
        </div>
        
      ))
     
    }
  
    <h3>Number of results found: {count}</h3>
  </div>
);
}

export default Github;
