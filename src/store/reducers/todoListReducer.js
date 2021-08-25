const intialState = [{
    date: 1,
    workName: 'work 1',
}, {
    date: 2,
    workName: 'work 2',
}, {
    date: 3,
    workName: 'work 3',
}, {
    date: 4,
    workName: 'work 4',
}];

export default function (state = intialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            action.payload.date = new Date().valueOf();
            return [action.payload, ...state];
        case 'DELETE_TODO':
            return state.filter(element => element.date !== action.payload);
        default:
            return state;
    }
}
