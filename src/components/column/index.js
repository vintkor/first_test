import React, {Component} from 'react';
import './style.scss';

class Column extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="column">
                <div className="column-title">{this.props.title}</div>
                <div className="column-cards">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Column;