import React, {Component} from 'react';
import { connect } from 'react-redux';

class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const classes = ['card', this.props.className, this.props.isDone && 'is-done'];
        return (
            <div className={classes.join(' ')}>
                <h3 className="card-title">card {this.props.title}</h3>
                <div className="card-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect()(Card);