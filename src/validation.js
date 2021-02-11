
export const validForm = (select, desc, amount) => select.value !== '-'
                                                        && desc.value.trim() !== ''
                                                        && amount.value.trim() > 0 
                                                        && !isNaN(Number(amount.value.trim()));
                    
                                                        
export const errorMsg = (div) => {
            const p = document.createElement('p');
            p.id = 'error';
            p.innerHTML = `Odaberite neku od ponudjenih opcija. <br>
                            Polje za opis unosa mora biti popunjeno. <br>
                            U polje za unos iznosa se mora uneti broj veći od nule.`;
            div.appendChild(p);
            setTimeout(() => {
                p.remove()
            }, 2400);
 
};

export const resetForm = (select, desc, amount) => {
    select.value = '-';
    desc.value = ''; 
    amount.value = ''; 
};