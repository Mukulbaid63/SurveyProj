import React from 'react';
import './App.css';

const AddQuestion = (props) => {
    return (
        <div>
            <button  style={{fontSize:'22px'}} onClick={props.onClick}>Add Question</button>
        </div>
    );
};

export default AddQuestion;