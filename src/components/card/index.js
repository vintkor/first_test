import React, {Component} from 'react';
import './style.scss';

class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={'card' + ' ' + this.props.className}>
                <h3 className="card-title">card {this.props.title}</h3>
                <div className="card-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;