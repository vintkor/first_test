import React, {Component} from 'react';
import { connect } from 'react-redux';

class Task extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='task'>
                <div className="task-desk">{this.props.desc}</div>
                <div className="task-footer">
                    <button className="btn btn-success">Done</button>
                    <button className="btn btn-default">Delete</button>
                </div>
            </div>
        )
    }
}

export default connect()(Task);