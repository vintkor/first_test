import React, {Component} from 'react';
import './style.scss';

class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="card">
                <h3 className="card-title">card {this.props.title}</h3>
            </div>
        )
    }
}

export default Card;