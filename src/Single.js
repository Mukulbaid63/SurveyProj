import { Repeat } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import AddQuestion from './AddQuestion';
import Option from './Option';
import Publish from './Publish';
import Question from './Question';

const Single = ({question,setPub,setQuestion,radio,setRadio,AddQuestionHandler}) => {
   
    // 
    
   
    return (
        <div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Question question={question} setQuestion={setQuestion}/>
        <p style={{fontSize:'29px'}}>Options</p>
        <Option radio={radio} setRadio={setRadio}/>
        <Option radio={radio} setRadio={setRadio}/>

        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <AddQuestion onClick={AddQuestionHandler}/>
        <Publish setPub={setPub}/>
        </div>
        {/* {repeat()} */}
        </div>

    );
};

export default Single;