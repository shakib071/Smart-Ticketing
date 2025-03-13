// 1st 


//destinations   data load 

// From // To 

let FromBox = document.getElementById('from');
let ToBox = document.getElementById('to');

let destinations = cities;

for(let i=0 ; i<destinations.length ; i++){

    let optionElement1 =  document.createElement('option');
    let optionElement2 =  document.createElement('option');
    optionElement1.innerText = destinations[i];
    optionElement1.value= destinations[i];
    optionElement2.innerText = destinations[i];
    optionElement2.value = destinations[i];
    FromBox.appendChild(optionElement1);
    ToBox.appendChild(optionElement2);
   
}

//get selected destinations 

document.getElementById('getDestination').addEventListener('click', () => {
    
    const FromSelectedOption = FromBox.options[FromBox.selectedIndex];

    console.log(FromSelectedOption.value);

} );







//get the seats 

const getSeats = document.getElementsByClassName('seat-select');

Array.from(getSeats).forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.innerText);
    })
})




