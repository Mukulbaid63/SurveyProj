import React from 'react';
import './App.css';

const Publish = ({setPub}) => {

    return (
        <div>
            <button  style={{fontSize:'22px'}} onClick={()=>setPub(false)}>Publish</button>
        </div>
    );
};

export default Publish;