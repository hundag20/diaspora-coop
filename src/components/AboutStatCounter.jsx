import React from 'react';
import CountUp from 'react-countup';
const Counter = ( props ) =>{
    
    return(

        <span>
<CountUp start={0} end={props.to} duration ={2.5} delay={0.5} />

{props.value  >= 1000000 ? " M" : " "}
+{" "}
        </span>  
    
     )   
     
}
export default Counter;