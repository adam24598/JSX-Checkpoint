import React from 'react';
import './App.css';
import "./style.css"
import imageInSrc from "./imageInSrc.png";
function App() {
  return (<div>
    <div style={{border:'solid 1px black',maxWidth:"100vw"}}>  
          	
            <h1 className="title red"> Your name here </h1>  
            <div className='new-line'></div>
 
            <img src={imageInSrc.jpg} alt="erreur"/>         
             <div className='new-line'></div>

 
             <div>	<img src="/imageInPublic.jpg" alt="erreur"/> </div>
 
    </div>  
 <div>
    <video width="320" height="240" controls>  

        <source src="myVideo.mp4" type="video/mp4"/> 
 
    </video>
    </div>
    </div>
  );
}

export default App;

