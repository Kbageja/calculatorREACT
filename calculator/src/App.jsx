import Buttonrow from './components/buttonrow';
import styles from './components/App.module.css';
import { useState } from 'react';


function App() {
  let [calval,setcalval] = useState("");
   const onButtonclick = (event)=>{
    let val = event.target.value;
    if(val=== "AC"){
      setcalval("");

    }
    else if(val === "="){
      setcalval(eval(calval));

    }
    else if(val === "DE"){
      setcalval(calval.slice(0,-1));
    }
    else{
      const newDisplayval = calval+val;
      setcalval(newDisplayval);
    }
  }
 return (
    <>
     <div class ={styles.container}>
        <div class={styles.calculator}>
            <form>
                <div class={styles.display}>
                    <input type="text" name="display" className={styles.displayinput} value = {calval} readOnly/>
                </div>
                <div class = "button">
                  <Buttonrow onButtonclick = {onButtonclick}></Buttonrow>
                </div>
            </form>
        </div>     
    </div>
    </>
  );
};

export default App;
