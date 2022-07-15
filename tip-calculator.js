let tipButtons = document.querySelectorAll("#tipButtons");
let bill = document.getElementById('billInput');
let numOfPeople = document.getElementById('numOfPeople');
tipButtons = Array.from(tipButtons);

numOfPeople.addEventListener('blur', ()=>{
    const total = bill.value * numOfPeople.value;
    if(bill.value && numOfPeople.value){
        document.getElementById('totalResult').innerText = total;
    }
    else{
        alert('enter bill and select no. of people')
    }
})

const tipAmt = (value)=>{
    let total = document.getElementById('totalResult').innerText
    total = parseFloat(total.substring(1))
    return ((value/100) * total);
}

tipButtons.forEach(tipButton => tipButton.addEventListener('click', (e) => {
    let buttonValue = parseInt(e.target.value);

    document.getElementById("result").innerText = `$${tipAmt(buttonValue)}`;
}))

document.getElementById('reset').addEventListener('click', ()=>{
    document.getElementById('totalResult').innerText = "";
    document.getElementById('result').innerText = "";
})