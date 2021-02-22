import React from 'react';
import Option from './Option';
import Question from './Question';
const Multiple = ({question,setQuestion,check,setCheck,AddQuestionHandler,setPub}) => {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Question question={question} setQuestion={setQuestion}/>
        <p style={{fontSize:'29px'}}>Options</p>
        <Option setPub={setPub} AddQuestionHandler={AddQuestionHandler} test='true' check={check} setCheck={setCheck}/>
       
        </div>
    );
};

export default Multiple;