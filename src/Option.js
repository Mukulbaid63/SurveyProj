import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import OptionItem from './OptionItem';
import AddQuestion from './AddQuestion';
import Publish from './Publish';
const Option = ({radio,setPub,setRadio,check,setCheck,test,AddQuestionHandler}) => {
    const [flagadd,setAddflag]=useState(false);
    const [addOpt,setAddOpt]=useState([{list:<OptionItem test={test} check={check} setCheck={setCheck} radio={radio} setRadio={setRadio}/>,_id:""}])

    const addHandler=(id)=>{
        const newItem={
            list:<OptionItem check={check} test={test} setCheck={setCheck} radio={radio} setRadio={setRadio}/>,
            _id:id
        }
        let temp=[...addOpt];
        temp.push(newItem)
        setAddOpt(temp)    
    }
    
    const removeHandler=()=>{
        if(addOpt.length>1){
        let templist=[...addOpt]
        let temp=templist.slice(0,addOpt.length-1)
        console.log(temp.length)
            setAddOpt(temp)}

       
        
    }
    const fourOrmore=()=>{
        if(addOpt.length>=4 && test=='true'){
            
            return (<div>
                <AddQuestion onClick={AddQuestionHandler}/>
            <Publish setPub={setPub}/></div>)
        }
    }
    return (
        <div>
        {addOpt.map((opt,id)=>
        <OptionItem radio={radio} test={test} setRadio={setRadio} check={check} setCheck={setCheck} key={id} id={id} addHandler={()=>addHandler(id)} removeHandler={removeHandler}/>
        )}
        {fourOrmore()}
    </div>

    );
};

export default Option;