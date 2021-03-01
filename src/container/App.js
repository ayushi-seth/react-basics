import React, { Component } from 'react';
import classes from  './App.css';
import styled from 'styled-components'
import Persons from '../components/Persons/Persons'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/cockpit'

const StyledButton= styled.button`
background-color :${props => props.alt ? 'red' :'green'};
color:white;
font :inherit;
border :1px solid blue;
cursor :'pointer';

&:hover {
  background-color:${props =>props.alt ? 'salmomn' :'lightgreen'};
  color:black;
}
`

class App extends Component {
  constructor(props){
  super(props);
  console.log('app js constrstuor');
  }

  state ={
    persons :[
      {id:'1',name: 'ayushi', age:15},
     { id:'2',name:'nandini', age:12},
      {id:'3',name:'steve',age:56}],
    otherState :'someOtherState',
    showPerson :false
  }

  static getDerivedStateFromProps(props,state){
    console.log('getDerivedState FROM PROPS ',props);
    return state;
  }
  // switchNameHandler =(newName) =>{
  //   this.setState({
  //     persons :[
  //       {name: newName, age:15},
  //       {name:'nandini suhane', age:12},
  //       {name:'steve maximilian',age:56}]
  //   })
  // }

  deletePersonHandler =(index)=>{
    const opersons=[...this.state.persons];
    opersons.splice(index,1);
    this.setState({persons:opersons})
  }

  changeNameHandler=(event,id)=>{
    const PersonIndex=this.state.persons.findIndex(p=>
      {return p.id===id});

    const p={...this.state.persons[PersonIndex]};
    p.name=event.target.value; 
    
    var personsArray=[]
    personsArray=[...this.state.persons];
    personsArray[PersonIndex]=p;

    this.setState({
      persons :personsArray,
    })
  }

  togglePersonHandler =() =>{
     this.setState({
       showPerson:!this.state.showPerson,
     });
  }
  render() {
    console.log('render method')
    const style ={
      backgroundColor :'green',
      color:'white',
      font :'inherit',
      border :'1px solid blue',
      cursor :'pointer',
      ':hover' :{
        backgroundColor:'lightgreen',
        color:'black'
      }

    }
    let personsShow= null;
    if(this.state.showPerson){
      personsShow =(
        <div>
          <Persons
          persons={this.state.persons}
           deletePersonHandler={this.deletePersonHandler}
           changeNameHandler={this.changeNameHandler}
          ></Persons>
        </div>
      );
      style.backgroundColor  ='red';
      style[':hover']=
        {
          backgroundColor:'salmon',
          color:'white'
        }
      
    }
    else{
      personsShow=(
        <div>
          <p>Person Show not working</p>
        </div>
      );
    }

   
    return (
      
       <div className="classes.App">
         <Cockpit showPersons={this.state.showPerson} persons={this.state.persons}
         togglePersonHandler={this.togglePersonHandler}> persons</Cockpit>
         {personsShow}
       </div>
     );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'h1 inside div'))
  }

  componentDidMount(){
    console.log(' componentdidmount hhtp reuest')
  }
}

export default App;
