import React, { Component } from 'react';
import ShowValue from './ShowValue';
import ShowHistoryList from './ShowHistoryList';
//{Component} 等同 React.Component

class App extends Component {
    constructor(props) {
        // 如果有寫constructor就一定要搭配super
        super(props);       
        //this.handleLessClick = this.handleLessClick.bind(this);
        this.state = { 
            count: '',
            plus: '',
            list: []
        };
    }

    //handleCountClick = () =>{} ，這樣子的寫法稱為 arrow Function
    //直接監控component 的 this參數 ，所以就不需要多宣告bind
    handleCountClick = (e) => {
        var item = this.state.list;
        const vul = Number.parseInt(this.state.count);
        //item.push(vul,e.target.value);
        this.setState({ 
                count: vul,
                plus: e.target.value,
                list:item
            });    
    }

    handleValue = (e) => {   
        var item = this.state.list;
        var vul = this.state.count!='' ? this.state.count : e.target.value;
        const plus  = this.state.plus;
        
        if (plus !== '') {
            switch (plus) {
            case '+':
                vul = Number.parseInt(vul) + Number.parseInt(e.target.value);
                break;
            case '-':
                vul = Number.parseInt(vul) - Number.parseInt(e.target.value);
                break;
            default:
                alert('error');
                break;
          };
        }
        else
        {
            vul = this.state.count + e.target.value;
        }

        if (plus !== "") {
            item.push(e.target.value +","+ plus);
        }
        
        this.setState({ 
            count: vul, //this.state.count + 
            plus: '',
            list: item
        });
    }

    handleClear = () => {
        this.setState({ count:  this.state.count = '' });
    }

    render() {
        const count = this.state.count;
        const plus  = this.state.plus;
        const warpList = this.state.list.map((data, index) => {
             return <ShowHistoryList  key={index}  history={data}  numkey={index} />
        })
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type="image" src="./image/ShyMinion.png" width="100px" title="clear value"  onClick={this.handleClear}/>
                            </td>
                            <td>
                                <ShowValue count={count}/>
                                {/*<input type="text" size="8" value={count} /> <br />&nbsp;*/}
                                {/*onClick= {this.handleValue()},多了() 不管有沒有觸發到onClick事件，接會執行handleValue function */}
                                <input type="button" value="1" onClick={this.handleValue} />&nbsp;
                                <input type="button" value="2" onClick={this.handleValue} />&nbsp;
                                <input type="button" value="3" onClick={this.handleValue} />
                                {/*this.handleValue.bind(this),bind會導致效能不好,因為每bind一次就會create instance*/}
                            </td>
                            <td>
                                <input type="button" onClick={this.handleCountClick} value="+" /><br />
                                {/*如果funciot 要傳入固定的參數，onClick function就必須多arrow function handle
                                   onClick={() => this.handleLessClick('ABC')}
                                */}
                                <input type="button" onClick={this.handleCountClick} value="-" />
                            </td>
                            <td>
                                <ul>
                                   {warpList}
                                </ul>
                            </td>
                        </tr>                       
                    </tbody>
                </table>
            </div>
        )
    }
}

/*class ShowValue extends Component {
    constructor(props) {
        super(props);       
    }
    render(){       
        return(
            <div>
                <input type="text" size="8" value={this.props.count} /> &nbsp;
            </div>
        );
    }
}*/

module.exports = App;


//() => {} 代表function
//() => () 代表return function