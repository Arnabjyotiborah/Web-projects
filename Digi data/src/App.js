import Header from "./header";
import Sidebar from "./sidebar";
import Data from "./data";
import { useState } from "react";
import {auth ,provider} from "./firebase";



function App() {
  const [user , setUser]= useState(null)

  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user)
    }).catch(error=>{
      alert(error.message);
    })
  }
  
  return (
    <>
    {
      user ? (
        <>
        <Header photoURL={user.photoURL}/>
          <div className="App">
            <Sidebar/>
            <Data/>
            
          </div>
        </>

      ):(
        // img src = login logo
        <div className="loginWrap">
          <img src=""/> 
          <button onClick={signIn}>Login</button>
        </div>
      )
    }
    
        
              

      
    
    </> 
    
  );
}

export default App;
