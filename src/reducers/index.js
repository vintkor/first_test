import { combineReducers } from 'redux';
import taskStore from './taskReducer';
import tasksStore from './tasksReducer';
import modulesStore from './modulesReducer'
import storiesStore from './storiesReducer'
import projectsStore from './projectsReducer'

const rootReducer = combineReducers({
    taskStore,
    tasksStore,
    modulesStore,
    storiesStore,
    projectsStore,
});

export default rootReducer;