import React, {Component} from 'react';
import './style.scss';


class Task extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='task'>
                <div className="task-desk">{this.props.desc}</div>
            </div>
        )
    }
}

export default Task;