import React, { Component } from 'react';


const ShowHistoryList = ({history, numkey}) => {
    return(       
        <div>   
            <li>
                name:{history},key:{numkey}
            </li>
        </div>       
    )
}


module.exports = ShowHistoryList;