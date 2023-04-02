import React, { useState, useEffect } from 'react';

function Github() {
  const [users, setUsers] = useState([]);
  const [inputstring,setinput]=useState("");
  const [count,setcount]=useState("0");
  const styles={
      color: 'red',
      fontSize: '20px',
      padding: '10px',
      border: '2px solid grey',
      width:'50%'
    }
  const inputstyle=
  {
    color: 'red',
    fontSize: '20px',
    borderRadius: '5px',
    border: '2px solid grey',
   

  }
  const stylesfh=
  {
    color: 'black',
    fontSize: '50px',
    borderRadius: '5px',
  }
  const divstyle={
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
    padding: '20px',
    backgroundColor: '#67578e',
  }

  const handleChange=()=>{
    const inputValue = document.getElementById('infield').value;
    setinput(inputValue);

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
  <div style={divstyle}>
    <h2 style={stylesfh}>GitHub Users</h2>
    
    <div>
        Enter User Name: <input type="text" id='infield' style={inputstyle}  placeholder='Username...'/> 
       <></> <button id='button1' onClick={handleChange}>Search</button>
      <br /><br />
    </div>
    
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
