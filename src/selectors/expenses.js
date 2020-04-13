export default (expenses, {text, sortBy, startDate, endDate}) => {
    
    return expenses.filter((expense)=>{

        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // always results in if it's not a number ie nothing was input
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof expense.description !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }

        // this will put greater value first
        if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });  
}