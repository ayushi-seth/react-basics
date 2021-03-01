import React from 'react';
import Person from './Person/Person'


const persons =(props)=>
props.persons.map((person,index) => {
    console.log('personss.js is rendering');
    return   (<Person   key={person.id}name={person.name}
    age={person.age}
    click={()=>{props.deletePersonHandler(index)}}
    changed={(event)=>{props.changeNameHandler(event,person.id)}}
    ></Person>)
  })



export default persons;