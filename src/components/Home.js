import React, {Component} from 'react';
import '../main.scss';
import Column from "./Column";
import Card from "./Card";
import Task from "./Task";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import setTasksAction from "../actions/setTasksAction";
import setModulesAction from "../actions/setModulesAction";
import seStoriesAction from "../actions/setStoriesAction";
import seProjectsAction from "../actions/setProjectsAction";

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
        this.state = {}
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
            this.props.projects,
            result.source.index,
            result.destination.index
        );

        this.props.setProjectsFunction(projects);
    }

    onStoryDropEnd(result) {
        if (!result.destination) {
            return;
        }

        const stories = reorder(
            this.props.stories,
            result.source.index,
            result.destination.index
        );

        this.props.setStoriesFunction(stories);
    }

    onModuleDropEnd(result) {
        if (!result.destination) {
            return;
        }

        const modules = reorder(
            this.props.modules,
            result.source.index,
            result.destination.index
        );

        this.props.setModulesFunction(modules);
    }

    onTaskDropEnd(result) {
        if (!result.destination) {
            return;
        }

        const tasks = reorder(
            this.props.tasks,
            result.source.index,
            result.destination.index
        );

        this.props.setTasksFunction(tasks);
    }

    render() {
        const task = this.state.task && (
            <Card title={this.state.task.title}>
                <Task desc={this.state.task.desc}/>
            </Card>
        );
        return (
            <div className="home-wrapper">
                <Column title="Projects">
                    <DragDropContext onDragEnd={this.onProjectDropEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {this.props.projects.map((item, index) => (
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
                    <button className="btn btn-default btn-default__darken btn-block">Add new project</button>
                </Column>
                <Column title="Stories">
                    <DragDropContext onDragEnd={this.onStoryDropEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {this.props.stories.map((item, index) => (
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
                    <button className="btn btn-default btn-default__darken btn-block">Add new story</button>
                </Column>
                <Column title="Modules">
                    <DragDropContext onDragEnd={this.onModuleDropEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {this.props.modules.map((item, index) => (
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
                    <button className="btn btn-default btn-default__darken btn-block">Add new module</button>
                </Column>
                <Column title="Tasks">
                    <DragDropContext onDragEnd={this.onTaskDropEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {this.props.tasks.map((item, index) => (
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
                                                        isDone={item.isDone}
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
                    <button className="btn btn-default btn-default__darken btn-block">Add new task</button>
                </Column>
                <Column title="Task">
                    {task}
                </Column>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTasksFunction: tasks => {
            dispatch(setTasksAction(tasks))
        },
        setModulesFunction: modules => {
            dispatch(setModulesAction(modules))
        },
        setStoriesFunction: stories => {
            dispatch(seStoriesAction(stories))
        },
        setProjectsFunction: projects => {
            dispatch(seProjectsAction(projects))
        }
    }
}

function mapStateToProps(state) {
    return {
        task: state.taskStore.task,
        tasks: state.tasksStore.tasks,
        modules: state.modulesStore.modules,
        stories: state.storiesStore.stories,
        projects: state.projectsStore.projects,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
