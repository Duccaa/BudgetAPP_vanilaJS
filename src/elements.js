
export const addElementToArray = (arr, select, desc, amount, id) => {
    arr.push({
    id: id,
    type: select.value,
    description: desc.value,
    amount: amount.value
    });
};

export const removeElement = (e, arr) => {
    e.target.parentElement.remove(); 
    arr.splice(arr.indexOf(el => el.id === e.target.id), 1);
};

