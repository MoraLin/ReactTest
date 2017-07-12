import React from 'react';

const ShowHistoryList  = (props) => {  
     return(
            <li  onClick={ () => props.deleteData(props.data,props.id) }>                
                {props.data}
            </li>
        )
}

module.exports = ShowHistoryList;