import React from 'react';
import Context from './MyContext';
import { FaJenkins,FaAngellist,FaBlogger } from "react-icons/fa";
import {IoIosPerson} from 'react-icons/io';
class Second extends React.Component{
render(){
  return (
    
 <Context.Consumer>
{
  props=>{
    return (
      <div>
<IoIosPerson/> First Name : <u>{props.fnm}</u><br/>
Age : {props.age}<br/>
Salary : Rs. {props.sal}
<hr/>
<table>
<th>Id</th><th>Name</th><th>Color</th>
{
  props.vehicles.map((vehicle,i)=>{
    return (
      <tr>
<td>{i+1} :   
 <FaJenkins/>
</td>      
<td>{vehicle.name}</td>
<td>{vehicle.color}</td>
      </tr>
    )
  })
}
</table>
      </div>
    )
  }
}
 </Context.Consumer>
 
  )
}

}

export default Second;