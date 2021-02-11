const app = document.getElementById('app');

const months = ['januaru', 'februaru', 'martu', 'aprilu', 'maju', 'junu', 'julu', 'avgustu', 'septembru', 'oktobru', 'novembru', 'decembru'];
const incomes = [];
const outcomes = [];
let id = 0;

import { sum, total, totalPercent, percent } from './calculations';
import { validForm, errorMsg, resetForm } from './validation.js';
import { addElementToArray, removeElement } from './elements';

const addElementsToDOM = () => {
    app.innerHTML = '';

    const divHeader = document.createElement('div');
    divHeader.id = 'header';

        const title = document.createElement('h2');
        title.textContent = `Dostupan budžet u ${months[(new Date()).getMonth()]} ${(new Date()).getFullYear()}:`
        title.id = 'title';

        const divTotal = document.createElement('div');
            const p1 = document.createElement('p');
            p1.innerText = `${total(incomes, outcomes)}`
            p1.className = 'total'
        divTotal.appendChild(p1);

        const divIncome = document.createElement('div');
        divIncome.className = 'income-div';
            const p2 = document.createElement('p');
            p2.innerHTML = 'Ukupan prihod';
            p2.className = 'income';
            const p3 = document.createElement('p');
            p3.innerHTML = `+ ${sum(incomes)}`;
            p3.className = 'income-number';
        divIncome.append(p2, p3);

        const divOutcome = document.createElement('div');
        divOutcome.className = 'outcome-div';
            const p4 = document.createElement('p');
            p4.innerHTML = `Ukupan rashod`;
            p4.className = 'outcome';
            const p5 = document.createElement('p');
            p5.innerHTML = `- ${sum(outcomes)} <span class="percent">${totalPercent(incomes, outcomes)}%</span>`;
            p5.className = 'outcome-number';
        divOutcome.append(p4, p5);

    divHeader.append(title, divTotal, divIncome, divOutcome);

    const divForm = document.createElement('div');
    divForm.id = 'form-container';
        
    const form = document.createElement('form');
    form.id = 'form';

        const select = document.createElement('select');
        select.className = 'input-field';
            const option = document.createElement('option');
            option.value = '-';
            option.selected = true;
            option.disabled = true;
            option.text = 'Odaberite stavku';
            const option1 = document.createElement('option');
            option1.value = 'income';
            option1.textContent = "Prihod";
            const option2 = document.createElement('option');
            option2.value = 'outcome';
            option2.textContent = 'Rashod';
        select.append(option, option1, option2);

        const inputDesc = document.createElement('input');
        inputDesc.className = 'input-field';
        inputDesc.type = 'text';
        inputDesc.placeholder = 'Opis';

        const inputAmount = document.createElement('input');
        inputAmount.className = 'input-field';
        inputAmount.type = 'text';
        inputAmount.placeholder = 'Iznos';

        const inputBtn = document.createElement('button');
        inputBtn.id = 'submit';
        inputBtn.className = 'input-field';
        inputBtn.type = 'submit';
        inputBtn.innerHTML = `<i class="fas fa-plus-circle"></i>`;

    form.append(select, inputDesc, inputAmount, inputBtn); 
    form.addEventListener('submit',  (e) => {
        e.preventDefault();
        
        if(!validForm(select, inputDesc, inputAmount)) {
            errorMsg(divForm);
            return;
        }      
        if(select.value === 'income'){
            addElementToArray(incomes, select, inputDesc, inputAmount, id);
            id++;               
        }
        if(select.value === 'outcome') {
            addElementToArray(outcomes, select, inputDesc, inputAmount, id);
            id++;    
        }

        addElementsToDOM();
        resetForm(select, inputDesc, inputAmount);
    })
    divForm.appendChild(form);

    const divLists = document.createElement('div');
    divLists.id = 'flex-container'

        const incomeList = document.createElement('div');
        incomeList.className = 'list';

            const incomeTitle = document.createElement('h3');
            incomeTitle.id = 'inc-title';
            incomeTitle.innerHTML = `PRIHODI<hr>`;
        incomeList.appendChild(incomeTitle);

            incomes.forEach(el=> {
                const p = document.createElement('p');
                p.className = 'item';
                p.innerHTML = `${el.description} <span class="number">+ ${el.amount}</span>`;
                const deleteBtn = document.createElement('button');
                    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
                    deleteBtn.className = 'delete hide';
                    deleteBtn.addEventListener('click', (e) =>{
                        removeElement(e, incomes)                    
                        addElementsToDOM();
                    });
                p.appendChild(deleteBtn);
                p.addEventListener('mouseover', () =>{
                    deleteBtn.classList.remove('hide')
                })
                p.addEventListener('mouseout', () =>{
                    deleteBtn.classList.add('hide')
                })
                incomeList.appendChild(p);
            });

        const outcomeList = document.createElement('div');
        outcomeList.className = 'list';

            const outcomeTitle = document.createElement('h3');
            outcomeTitle.id = 'out-title'
            outcomeTitle.innerHTML = `RASHODI<hr>`;
        outcomeList.appendChild(outcomeTitle);
        
            outcomes.forEach(el => {
                const p = document.createElement('p');
                p.className = 'item';
                p.innerHTML = `${el.description} <span class="number">- ${el.amount} <span class="percent">${percent(el.amount, incomes)}%</span></span>`;
                    const deleteBtn = document.createElement('button');
                    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
                    deleteBtn.className = 'delete hide';
                    deleteBtn.addEventListener('click', (e) => {
                        removeElement(e, outcomes)
                        addElementsToDOM();
                    })
                p.addEventListener('mouseover', () =>{
                    deleteBtn.classList.remove('hide')
                })
                p.addEventListener('mouseout', () =>{
                    deleteBtn.classList.add('hide')
                })
                p.appendChild(deleteBtn);
                outcomeList.appendChild(p);
            });
    divLists.append(incomeList, outcomeList);

    app.append(divHeader, divForm, divLists);
}
addElementsToDOM();
