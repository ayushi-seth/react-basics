import React from 'react';
import styled from 'styled-components'
const StyledDiv= styled.div`
width: 60%;
margin:16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;

@media (min-width:500px) :{
    width :'450px',}
`

const person= (props) =>{
   const style={
       '@media (min-width:500px)' :{
           width :'450px',
       }
   }

    return (
       // <div className="Person" style={style}>
       <StyledDiv>
    <p onClick={props.click}>Person age is {props.age} and name is {props.name} </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}></input>
    </StyledDiv>
    )
}
export default person;