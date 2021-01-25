const filterState = {
    searchState: '',
    startDate: '',
    endDate: ''
}
const dashboardState = [
    {status: 'backlog', color: '#f8e3e3'},
    {status: 'progress', color: '#d3f7fc'},
    {status: 'done', color: '#d9fad6'},
]

let cartsState;
// let dashboardState;
try {
    cartsState = JSON.parse(localStorage.getItem('cart')) ?? []
    // dashboardState = JSON.parse(localStorage.getItem('dashboard')) ?? [
    //     {status: 'backlog', color: '#f8e3e3'},
    //     {status: 'progress', color: '#d3f7fc'},
    //     {status: 'done', color: '#d9fad6'},
    // ]
} catch {
    console.error('The cart could not be parsed into JSON')
    cartsState = []
    // dashboardState = []
}

export {
    filterState,
    dashboardState,
    cartsState
}
