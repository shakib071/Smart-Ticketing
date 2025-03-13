// 1st 

//destinations   data load 

// From // To 
//append the select data
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
    const ToSelectedOption = ToBox.options[ToBox.selectedIndex];

    const boardingPlace = FromSelectedOption.value;
    const DropingPlace = ToSelectedOption.value;
    console.log(travelData[boardingPlace][DropingPlace].coachNum)
    // put coachNo 
    changeInnerTextbyId('coachNo',travelData[boardingPlace][DropingPlace].coachNum);

    //Ac or Not 

    if(travelData[boardingPlace][DropingPlace].AC===true){
      
        changeInnerTextbyId('acOrNot','AC')
    }
    else{
        changeInnerTextbyId('acOrNot','NonAC')
    }

    //put route 
    changeInnerTextbyId('routeFrom',boardingPlace);
    changeInnerTextbyId('routeTo',DropingPlace);

    //Departure Time

    changeInnerTextbyId('departureTime',travelData[boardingPlace][DropingPlace].boardingTime);

    //Boarding point 
    changeInnerTextbyId('boarding-point',boardingPlace);

    //Dropping point
    changeInnerTextbyId('dropping-point',DropingPlace);

    //Est time 
    const est_time = calculateTimeDifference(travelData[boardingPlace][DropingPlace].boardingTime,travelData[boardingPlace][DropingPlace].arrivalTime);
    
    changeInnerTextbyId('est-time',est_time);

} );




//get the seats 

const getSeats = document.getElementsByClassName('seat-select');

Array.from(getSeats).forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.innerText);
    })
})




