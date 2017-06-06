import React, { Component } from 'react';
//{Component} 等同 React.Component

class App extends Component {
    constructor(props) {
        super(props);       
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleLessClick = this.handleLessClick.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.state = { count: '' };
    }
    handleAddClick() {
        this.setState({ count: Number.parseInt(this.state.count) + 1 });
    }
    handleLessClick() {
        if (this.state.count != 0) {
            this.setState({ count: Number.parseInt(this.state.count) - 1 });
        }
    }
    handleValue(e) {
        this.setState({ count: this.state.count + e.target.value });
    }
    handleClear(){
        this.setState({ count:  this.state.count = '' });
    }
    render() {
        const count = this.state.count;
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
                                <input type="button" value="1" onClick={this.handleValue} />&nbsp;
                                <input type="button" value="2" onClick={this.handleValue} />&nbsp;
                                <input type="button" value="3" onClick={this.handleValue} />
                            </td>
                            <td>
                                <input type="button" onClick={this.handleAddClick} value="+" /><br />
                                <input type="button" onClick={this.handleLessClick} value="--" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class ShowValue extends Component {
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
}

module.exports = App;