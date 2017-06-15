import React, { Component } from 'react';


const ShowHistoryList = ({history,indxkey}) => {
    return(       
        <li>
            name:{history},key:{indxkey}
        </li>
    )
}


module.exports = ShowHistoryList;