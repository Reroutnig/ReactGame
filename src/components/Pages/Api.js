import { useState } from "react";
import { useEffect } from "react";

const URL = 'https://www.boredapi.com/api/activity';

const getIdea = async () =>{
  const res = await fetch(URL);
  const body = await res.json();
 return body.activity;
};

export const Api = () =>{
  const [activity, setUrl] = useState(null);

  const onClickHandler = async() => {
    const activity = await getIdea();
    setUrl(activity);
   };

  useEffect(()=>{
   onClickHandler();
  }, []);
  

  return(
    
  <div class="button_div">
    <button className="button" onClick={onClickHandler}>Bored? Click Me for Ideas to Do!</button>
    <br></br>
    <br></br>
    <p class="activity">{activity}</p>
   
  </div>
 
  );
};

export default Api