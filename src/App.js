import Person from './Person/Person'
import './App.css';
import { Component } from 'react';
import React, {useState} from 'react'
import person from './Person/Person';



class App extends Component{
  
  state={
    persons:[
      {id:"a1", name:"Junaid", age:"24"},
      {id:"a2" ,name:"Qasim" , age:"23"}
    ],
    
    otherState:{
      name:"sasd"
    },

    display:false
  }


  // switchnameHandler=(newName)=>{
  //   // console.log("Was Clicked")
  //   this.setState({persons:[
  //     {name:newName ,age:"24"},
  //     {name:"Qasim Sadiq" ,  age:"24"}
  //   ]})
  // }
  

  deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons.slice()  //copy non-primitive data type
    const persons=[...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }


  
  changedNameHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex((person)=>{
      return person.id===id;
    })
    
    const person={...this.state.persons[personIndex]}
    person.name=event.target.value
    const persons=[...this.state.persons]
    persons[personIndex]=person 
    this.setState({persons:persons})
   

  }

  togglePersonHandler=()=>{
    
    let dis=this.state.display
    this.setState({display:!dis})
    
  }


  render(){

    const style={
      backgroundColor:'green',
      color:"white",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer"
    }

    let persons=null
    let p1="";
  if(this.state.persons.length<2)
  {
    p1="red"
  }

  if(this.state.persons.length===2)
  {
    p1="blue"
  }




    if (this.state.display){
          persons=( 
               <div>
                  {this.state.persons.map((person,index)=>{          //output the array of objects
                    return  <Person 
                           click={()=>this.deletePersonHandler(index)}
                           name={person.name} 
                           age={person.age}
                           key={person.id}
                           change={(event)=>this.changedNameHandler(event,person.id)} 
                            />
                   }) } 
               </div> 
          )
        style.backgroundColor="red";  
       }

    return (

       <div className="App">

            <h1>States,Props,eventHandlers,two way binding</h1>
                <p className={p1}>Its working</p>
                
            <button style={style} onClick={this.togglePersonHandler}> Show Persons</button>

             {persons}

       </div>
    
    );
  }
}



  //using with function component
// const App=()=>{
  
//  const [personState,setpersonState]=useState({
       
//      persons:[
//          {name:"Ali" , age:"26"},
//          {name:"Usama",age:"23"}
//        ]
//   });
//  const switchnameHandler=()=>{
//     setpersonState({

//       persons:[
      
//       {name: "Ali Mughal", age:"26"},
      
//       {name:"Usama Munawar", age:"23"}
    
//     ]
//   })
  
// }

//   return (
//     <div className="App">
//            <button onClick={switchnameHandler}>Click on me</button>
//          <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//          <Person name={personState.persons[1].name} age={personState.persons[1].age}> Inside the component </Person>
//          {console.log(personState)}
         
//     </div>
//   );
// }

export default Radium(App);
