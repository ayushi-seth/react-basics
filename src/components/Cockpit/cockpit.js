import React from 'react';
import classes from './cockpit.css'

const Cockpit=(props)=>{
    let assignedClasses=[];
    let btnClass='';
    if(props.showPersons){
        btnClass=classes.Red;
    }
    if(props.persons.length<=2){
        assignedClasses.push('red');
    }
    if(props.persons.length<=1){
        assignedClasses.push('bold');
    }


    return (
        <div>
         <h1>welcome to react</h1>
         <p className={assignedClasses.join(' ')}>Hi, I am working</p>
         <button onClick={props.togglePersonHandler} 
       >Toggle Persons</button>
       </div>
    );
}

export default Cockpit;