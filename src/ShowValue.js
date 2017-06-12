import React, { Component } from 'react';


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

module.exports = ShowValue;