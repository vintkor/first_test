import React, {Component} from 'react';
import './style.scss';
import Column from "../column";
import Card from "../card";
import Sortable from 'react-sortablejs';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            projects: [1,2,3],
            stories: [1,2,3,4,5],
            modules: [1,2,3],
            tasks: [
                {
                    title: 'task 1',
                    sort: 1
                },
                {
                    title: 'task 2',
                    sort: 2
                },
                {
                    title: 'task 3',
                    sort: 3
                },
                {
                    title: 'task 4',
                    sort: 4
                }
            ]
        }
    }
    render() {
        return (
            <div className="home-wrapper">
                <Column title="Projects">
                    {this.state.projects.map((el, index)=>{
                        return <Card title={el} key={index}/>
                    })}
                </Column>
                <Column title="Stories">
                    {this.state.stories.map((el, index)=>{
                        return <Card title={el} key={index}/>
                    })}
                </Column>
                <Column title="Modules">
                    {this.state.modules.map((el, index)=>{
                        return <Card title={el} key={index}/>
                    })}
                </Column>
                <Column title="Tasks">
                    <Sortable
                        onChange={(order, sortable, evt)=>{
                            console.log(order);
                            // this.setState({ tasks: order });
                        }}
                    >
                        {this.state.tasks.map((el, index)=>{
                            return <Card title={el.title} key={index}/>
                        })}
                    </Sortable>
                </Column>
                <Column title="Task">
                    <Card title="Simple task"/>
                </Column>
            </div>
        )
    }
}

export default Home;
