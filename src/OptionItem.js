import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import './App.css';

const OptionItem = (props) => {
   const [val,setVal]=useState("");
   console.log(props.test)
    const enterHandler=(evt)=>{
        if(evt.keyCode==13){
            
            if(props.test=='true'){
                const temp1=[...props.check]
                temp1.push(val)
                props.setCheck(temp1)
            }
            else{
            const temp=[...props.radio]
            temp.push(val);
            props.setRadio(temp)}
        }
    }
    const InputOption=(e)=>{
        setVal(e.target.value)
    }
    return (
        <div style={{display:'flex',justifyContent:'center',border:'1px solid grey',margin:'5px',padding:'6px'}}>
        <input  style={{fontSize:'25px',border:'none',width:'28vw'}} placeholder="Type Option and hit ENTER..." onKeyDown={enterHandler} value={val} onChange={InputOption}></input>
        <AddIcon  style={{fontSize:'30px',cursor:'pointer'}} onClick={props.addHandler}/>
        <RemoveIcon  style={{fontSize:'30px',cursor:'pointer'}} onClick={props.removeHandler}/>
        </div>
    );
};

export default OptionItem;