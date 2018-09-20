const initialState = {
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
    ]
};

export default function modulesStore(state = initialState, action) {
    switch (action.type) {
        case "REORDER_MODULES":
            return {...state, modules: action.payload};
        default:
            return state;
    }
}
