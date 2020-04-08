export const setTextFilter = (textFilter = '') => ({
    type: 'SET_TEXT_FILTER',
    textFilter
});

export const sortByAmount = (amount = undefined) => ({
    type: 'SORT_BY_AMOUNT',
    amount
});

export const sortByDate = (date = undefined) => ({
    type: 'SORT_BY_DATE',
    date
});

export const setStartDate = (startDate = undefined) => ({ // there is actually no need for the default - undefined parameters already have that default
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})