import React from 'react';
const Weather = props => (
	<div >

	  {props.history && props.city!=undefined && 
	   <h2>history:{props.history.map(item=>(<li>
       {item.city}   
      </li>))}</h2>}
	 {	
	 	props.city  && <p > Location: 
	 		<span > { props.city }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p > Temperature: 
	 		<span > { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p > Humidity: 
	 		<span> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p > Conditions: 
	 		<span > { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p >{ props.error }</p>  
	 }
	</div>
);
export default Weather