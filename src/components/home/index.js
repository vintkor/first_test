import React, {Component} from 'react';
import './style.scss';
import Column from "../column";
import Card from "../card";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Task from "../task";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    result.map((el, index)=>{
        el.sort = index
    });

    return result;
};

class Home extends Component {
    constructor (props) {
        super(props);
        this.onProjectDropEnd = this.onProjectDropEnd.bind(this);
        this.onStoryDropEnd = this.onStoryDropEnd.bind(this);
        this.onModuleDropEnd = this.onModuleDropEnd.bind(this);
        this.onTaskDropEnd = this.onTaskDropEnd.bind(this);
        this.handleClickLoadTask = this.handleClickLoadTask.bind(this);
        this.state = {
            projects: [
                {
                    title: 'project 1',
                    sort: 1
                },
                {
                    title: 'project 2',
                    sort: 2
                },
                {
                    title: 'project 3',
                    sort: 3
                },
                {
                    title: 'project 4',
                    sort: 4
                },
                {
                    title: 'project 5',
                    sort: 5
                }
            ],
            stories: [
                {
                    title: 'story 1',
                    sort: 1
                },
                {
                    title: 'story 2',
                    sort: 2
                },
                {
                    title: 'story 3',
                    sort: 3
                }
            ],
            modules: [
                {
                    title: 'module 1',
                    sort: 1
                },
                {
                    title: 'module 2',
                    sort: 2
                },
                {
                    title: 'module 3',
                    sort: 3
                },
                {
                    title: 'module 4',
                    sort: 4
                },
                {
                    title: 'module 5',
                    sort: 5
                }
            ],
            tasks: [
                {
                    title: 'task 1',
                    sort: 1,
                    desc: 'Super desc 1'
                },
                {
                    title: 'task 2',
                    sort: 2,
                    desc: 'Super desc 2'
                },
                {
                    title: 'task 3',
                    sort: 3,
                    desc: 'Super desc 3'
                },
                {
                    title: 'task 4',
                    sort: 4,
                    desc: 'Super desc 4'
                },
                {
                    title: 'task 5',
                    sort: 5,
                    desc: 'Обратите внимание как работает setState(). Вы передаете ему объект, содержащий часть информации, которую вы хотите обновить. Другими словами, значения в передаваемом объекте будут сначала сравниваться со значениями из состояния компонента и, после, setState() либо обновит, либо добавит новые значения в state.'
                },
                {
                    title: 'task 6',
                    sort: 6,
                    desc: 'Super desc 6'
                },
                {
                    title: 'task 7',
                    sort: 7,
                    desc: 'Super desc 7'
                },
                {
                    title: 'task 8',
                    sort: 8,
                    desc: 'Super desc 8'
                },
                {
                    title: 'task 9',
                    sort: 9,
                    desc: 'Super desc 9'
                },
                {
                    title: 'task 10',
                    sort: 10,
                    desc: 'Super desc 10'
                },
                {
                    title: 'task 11',
                    sort: 11,
                    desc: 'Super desc 11'
                },
                {
                    title: 'task 12',
                    sort: 12,
                    desc: 'Super desc 12'
                },
                {
                    title: 'task 13',
                    sort: 13,
                    desc: 'Super desc 13'
                },
                {
                    title: 'task 14',
                    sort: 14,
                    desc: 'Super desc 14'
                }
            ],
            task: {
                title: 'task 3',
                sort: 3,
                desc: 'Super desc 3'
            }
        }
    }

    handleClickLoadTask(e, item) {
        this.setState({
            task: item
        })
    }

    onProjectDropEnd(result) {
        if (!result.destination) {
            return;
        }

        const projects = reorder(
            this.state.projects,
            result.source.index,
            result.destination.index
        );

        this.setState({
            projects,
        });
    }

    onStoryDropEnd(result) {
        if (!result.destination) {
            return;
        }

        const stories = reorder(
            this.state.stories,
            result.source.index,
            result.destination.index
        );

        this.setState({
            stories,
        });
    }

    onModuleDropEnd(result) {
        if (!result.destination) {
            return;
        }

        const modules = reorder(
            this.state.modules,
            result.source.index,
            result.destination.index
        );

        this.setState({
            modules,
        });
    }

    onTaskDropEnd(result) {
        if (!result.destination) {
            return;
        }

        const tasks = reorder(
            this.state.tasks,
            result.source.index,
            result.destination.index
        );

        this.setState({
            tasks,
        });
    }

    render() {
        return (
            <div className="home-wrapper">
                <Column title="Projects">
                    <DragDropContext onDragEnd={this.onProjectDropEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {this.state.projects.map((item, index) => (
                                        <Draggable key={item.sort} draggableId={item.sort} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Card
                                                        title={item.title}
                                                        key={index}
                                                        className={snapshot.isDragging ? 'card-isDragging' : ''}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Column>
                <Column title="Stories">
                    <DragDropContext onDragEnd={this.onStoryDropEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {this.state.stories.map((item, index) => (
                                        <Draggable key={item.sort} draggableId={item.sort} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Card
                                                        title={item.title}
                                                        key={index}
                                                        className={snapshot.isDragging ? 'card-isDragging' : ''}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Column>
                <Column title="Modules">
                    <DragDropContext onDragEnd={this.onModuleDropEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {this.state.modules.map((item, index) => (
                                        <Draggable key={item.sort} draggableId={item.sort} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Card
                                                        title={item.title}
                                                        key={index}
                                                        className={snapshot.isDragging ? 'card-isDragging' : ''}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Column>
                <Column title="Tasks">
                    <DragDropContext onDragEnd={this.onTaskDropEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {this.state.tasks.map((item, index) => (
                                        <Draggable key={item.sort} draggableId={item.sort} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    onClick={(e) => {this.handleClickLoadTask(e, item)}}
                                                >
                                                    <Card
                                                        title={item.title}
                                                        key={index}
                                                        className={snapshot.isDragging ? 'card-isDragging' : ''}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Column>
                <Column title="Task">
                    <Card title={this.state.task.title}>
                        <Task desc={this.state.task.desc}/>
                    </Card>
                </Column>
            </div>
        )
    }
}

export default Home;
