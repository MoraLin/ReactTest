import React from 'react';

const ShowHistoryList  = (props) => {  
     return(
            <li  onClick={ () => props.revertData(props.data,props.id) }>                
                {props.data}
            </li>
        )
}
//onClick ={() => this.handelClick(this.props.num)}
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