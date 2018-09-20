const initialState = {
    tasks: [
        {
            title: 'task 1',
            sort: 1,
            desc: 'Super desc 1',
            isDone: 0
        },
        {
            title: 'task 2',
            sort: 2,
            desc: 'Super desc 2',
            isDone: 0
        },
        {
            title: 'task 3',
            sort: 3,
            desc: 'Super desc 3',
            isDone: 0
        },
        {
            title: 'task 4',
            sort: 4,
            desc: 'Super desc 4',
            isDone: 0
        },
        {
            title: 'task 5',
            sort: 5,
            desc: 'Обратите внимание как работает setState(). Вы передаете ему объект, содержащий часть информации, которую вы хотите обновить. Другими словами, значения в передаваемом объекте будут сначала сравниваться со значениями из состояния компонента и, после, setState() либо обновит, либо добавит новые значения в state.',
            isDone: 0
        },
        {
            title: 'task 6',
            sort: 6,
            desc: 'Super desc 6',
            isDone: 0
        },
        {
            title: 'task 7',
            sort: 7,
            desc: 'Super desc 7',
            isDone: 1
        },
        {
            title: 'task 8',
            sort: 8,
            desc: 'Super desc 8',
            isDone: 0
        },
        {
            title: 'task 9',
            sort: 9,
            desc: 'Super desc 9',
            isDone: 0
        },
        {
            title: 'task 10',
            sort: 10,
            desc: 'Super desc 10',
            isDone: true
        },
        {
            title: 'task 11',
            sort: 11,
            desc: 'Super desc 11',
            isDone: 0
        },
        {
            title: 'task 12',
            sort: 12,
            desc: 'Super desc 12',
            isDone: 0
        },
        {
            title: 'task 13',
            sort: 13,
            desc: 'Super desc 13',
            isDone: 0
        },
        {
            title: 'task 14',
            sort: 14,
            desc: 'Super desc 14',
            isDone: 0
        }
    ]
};

export default function tasksStore(state = initialState, action) {
    switch (action.type) {
        case "REORDER_TASKS":
            return {...state, tasks: action.payload};
        default:
            return state;
    }
}
