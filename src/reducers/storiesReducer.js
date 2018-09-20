const initialState = {
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
    ]
};

export default function storiesStore(state = initialState, action) {
    switch (action.type) {
        case "REORDER_STORIES":
            return {...state, stories: action.payload};
        default:
            return state;
    }
}
