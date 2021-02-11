export const sum = (arr) => {
    return arr.reduce((total, curr) => total + Number(curr.amount), 0);
    
};

export const total = (arr1, arr2) => {
    let total = sum(arr1) - sum(arr2)
    if(total > 0) return `+ ${total}`;
    return total
};

export const percent = (x, arr) => {
    if(arr == 0) return 0; 
    return (x/sum(arr)*100).toFixed(1)
};

export const totalPercent = (arr1, arr2) => {
    if(arr1 == 0) return 0;
    return (sum(arr2)/sum(arr1)*100).toFixed(1);
};
