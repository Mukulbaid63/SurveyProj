import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Single from './Single';
import Multiple from './Muliple';
function App() {
  const [renderCreate,SetCreateRender]=useState(true);
  const [type,settype]=useState("");
  const [question,setQuestion]=useState([]);
  const [radio,setRadio]=useState([]);
  const [check,setCheck]=useState([]);
  const [addClick,setAddClick]=useState(false)

  const createHandler=()=>{
    SetCreateRender(false);
  }

  const changeHandler=(e)=>{
    settype(e.target.value)
   
  }


  const typeChange=()=>{
    if(publish){
    if(type=='single') {
      return <Single setPub={setPub} question={question} AddQuestionHandler={AddQuestionHandler} setQuestion={setQuestion} radio={radio} setRadio={setRadio}/>
    }
    else if (type=='multiple') {
      return <Multiple setPub={setPub} question={question} AddQuestionHandler={AddQuestionHandler}setQuestion={setQuestion} check={check} setCheck={setCheck}/>
    }}
  }

  const createOrForm=()=>{
    if(publish){
    if(renderCreate) {
    return <><button  style={{fontSize:'19px',width:'10vw',color:'white',backgroundColor:'#2b2b2b',margin:'40px 5px 10px 5px',border:'1px solid white',borderRadius:'5px'}} onClick={createHandler}>Create Survey</button>     
             <button  style={{fontSize:'19px',width:'10vw',color:'white',backgroundColor:'#2b2b2b',margin:'40px 5px 10px 5px',border:'1px solid white',borderRadius:'5px'}}>Take Survey</button>
             </>}

    else{ return<>
    <select onChange={changeHandler}  style={{fontSize:'19px',width:'240px',color:'white',backgroundColor:'#2b2b2b',margin:'40px 5px 10px 5px',border:'1px solid white',borderRadius:'5px'}}>
      <option></option>
      <option value="single">Single Select</option>
      <option value="multiple">Multiple Select</option>

    </select>
    </>
  }}
else return< ></>}
  const [mainObj,setMainObj]=useState([])
  const [mainObj1,setMainObj1]=useState([])
  const [publish,setPub]=useState(true);
  const mainOutput=()=>{
      if(addClick){
        if(type=="single"){
          console.log(mainObj)  

       return <>
      {mainObj.map((main,id)=>(  <>
        <br/>
      <span style={{fontSize:'24px',fontWeight:'bold'}}>{id+1}. {main.ques}</span> 
      <br/>
      {main.options.map((item,id)=>(
      <>
      <br/>
     
      <input type="radio" id={id} name='single'></input>
       <label style={{fontSize:'21px'}} for={id}>{item}</label><br/>
                </>
    ))}                </>))}
        

    </>}
        else{
          return <>
          {mainObj1.map((main1)=>(  <>
            <br/>
            <span style={{fontSize:'24px',fontWeight:'bold'}}>{main1.ques}</span> 
          <br/>
          {main1.options.map((item,id)=>(
          <>
          <br/>
         
          <input type="checkbox" id={id} ></input>
           <label style={{fontSize:'21px'}} for={id}>{item}</label><br/>
                    </>
        ))}                </>))}
            
    
        </>
        }
  }

  }
  const setInitialState=()=>{
   mainOutput();
    // setAddClick(false);
    
  }
  const AddQuestionHandler=()=>{
    setAddClick(()=>true)
    if(type=='single'){
    let tempCopy=[...mainObj]
    let temp11={ques:question,options:radio}
    tempCopy.push(temp11)
  setMainObj(tempCopy)
  console.log(mainObj) }
  else if(type=='multiple'){
  let tempCopy1=[...mainObj1]
  let temp111={ques:question,options:check}
  tempCopy1.push(temp111)
setMainObj1(tempCopy1)
console.log(mainObj1) }
let temp1=[]
  setQuestion(temp1)
    setRadio(temp1)
    setCheck(temp1)
}

  return (
    <div className="App">
      <div style={{color:'white',backgroundColor:'#2b2b2b'}}>
      <header className="App-header" style={{fontSize:"40px",fontWeight:'bolder',padding:"10px",marginBottom:'10px'}}>
       Survey Tiger
      </header>
      {createOrForm()}
      </div>
      {typeChange()}
       {mainOutput()}
      {/* {setInitialState()} */}
      
      
    </div>
  );
}

export default App;
