import React, { Component } from 'react';

class ShowHistoryList extends Component {

    handelClick = (e) =>{ 
        
    }
    render(){       
     return(
            <li onClick ={() =>this.handelClick(this.props.numkey)}>
                {this.props.history} &nbsp;
            </li>
        );
    }
}


// const ShowHistory = ({history, numkey}) => {
//      const filterDrinkList = list.filter((numkey) => {
//             return data.type === 'drink';
//         })
//     return(       
//         <div>   
//             <li>
//                 name:{history},key:{numkey} 
//             </li>
//         </div>       
//     )
// }


module.exports = ShowHistoryList;