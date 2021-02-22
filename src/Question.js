import React from 'react';
import './App.css';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
const Question = ({question,setQuestion}) => {
    const InputQuestion=(e)=>{
        if(e.keyCode==13){
            const temp1=[...question]

        temp1.push(e.target.value);
            setQuestion(temp1)
    }
    }
    return (
        <div style={{display:'flex',justifyContent:'center',border:'1px solid grey',margin:'5px',padding:'6px'}}>
            <HelpOutlineIcon  style={{fontSize:'30px'}}/>
            <input style={{fontSize:'25px',border:'none',width:'30vw'}}placeholder="Write your question and hit ENTER" onKeyDown={InputQuestion} ></input>
        </div>
    );
};

export default Question;