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
try {
    cartsState = JSON.parse(localStorage.getItem('cart')) ?? []
} catch {
    console.error('The cart could not be parsed into JSON')
    cartsState = []
}

export {
    filterState,
    dashboardState,
    cartsState
}
