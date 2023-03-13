document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodValue = getElementValue('food-field')
    const rentValue = getElementValue('rent-field')
    const clothesValue = getElementValue('clothes-field')
    if(isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue) || foodValue < 0 || rentValue < 0 || clothesValue < 0){
        alert ('provide your cost is number also positive number')
        return;
    }
    const totalCost = foodValue + rentValue + clothesValue;
    const totalIncome = getValueField('total-income')
    if(isNaN(totalIncome) || totalIncome < 0){
        alert ('provide your income is number also positive number')
        return;
    }
    if (totalCost > totalIncome){
        alert('make sure total income and total cost')
        return;
    }
    const previousCost = getValueById('cost-total')
    previousCost.innerText = totalCost;
    const newBalance = totalIncome - totalCost;
    const balance = getValueById('new-balance')
    balance.innerText = newBalance;
})

document.getElementById('save-btn').addEventListener('click', function(){
    const totalIncome = getValueField('total-income')
    const savingFieldValue = getValueField('saving-field')
    const saving = (totalIncome * savingFieldValue) / 100;
    const balance = getValueByNewId('new-balance')
    const savingAndBalance = saving + balance;
    if((savingAndBalance > totalIncome){
        alert ("why it's possible")
        return;
    }
    else if(isNaN(savingFieldValue) || savingFieldValue < 0 || savingFieldValue > 100){
        alert ('provide your saving % is number also positive number')
        return;
    }
    const totalBalanceNow = balance - saving;
    setElementValueById('total-save', saving)
    setElementValueById('total-balance', totalBalanceNow)
})