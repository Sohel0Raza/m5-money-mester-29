function getElementValue (elementId){
    const elementField = document.getElementById(elementId)
    const elementValueString = elementField.value;
    const elementValue = parseInt(elementValueString)
    elementField.value = '';
    return elementValue;
}

function getValueById (valueId){
    const value = document.getElementById(valueId)
    // const valueString = value.innerText;
    // const newValue = parseInt(valueString)
    return value;
}
function getValueByNewId (valueId){
    const value = document.getElementById(valueId)
    const valueString = value.innerText;
    const newValue = parseInt(valueString)
    return newValue;
}
function getValueField (valueId){
    const elementValue = document.getElementById(valueId)
    const valueString = elementValue.value;
    const newValue = parseInt(valueString)
    return newValue;
}
function setElementValueById (elementId, value){
    const elementIdValue = document.getElementById(elementId);
    elementIdValue.innerText = value;
}