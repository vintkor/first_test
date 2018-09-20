const initialState = {
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
    ]
};

export default function projectsStore(state = initialState, action) {
    switch (action.type) {
        case "REORDER_PROJECTS":
            return {...state, projects: action.payload};
        default:
            return state;
    }
}
