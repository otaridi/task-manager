import {format} from 'date-fns'

export function filterCart(cart, searchState, startDate, endDate) {
    const dateFormat = 'MM/dd/yyyy'

    const filterCartsByTitle = cart.filter(el => {
        return el.title.toLowerCase().includes(searchState.toLowerCase().trimStart())
    })

    const sortedDates = cart.map(el => el.date).sort((a, b) => a - b)
    const oldestDate = format(new Date(sortedDates[0]), dateFormat)
    const presentDate = format(new Date(), dateFormat)

    // check if startDate exist, default value is oldestDate from carts date
    const start = startDate.length > 0 ? format(new Date(startDate), dateFormat) : oldestDate
    // check if endDate exist, default value is presentDate
    const end = endDate.length > 0 ? format(new Date(endDate), dateFormat) : presentDate

    // Filter carts by date range
    const filterCartsByDate = filterCartsByTitle.filter(el => {
        const date = format(new Date(el.date), dateFormat)
        return (date >= start && date <= end);
    });
    // check filter result
    return filterCartsByDate.length > 0 ? filterCartsByDate : filterCartsByTitle
}