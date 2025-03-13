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


let clickCount = {
    
};

let NoOfSeatSeatSelected = 0;

Array.from(getSeats).forEach(element => {
    element.addEventListener('click', () => {
        
        if(element.innerText in clickCount){
            clickCount[element.innerText]++;
        }
        else{
            clickCount[element.innerText]=1;
        }
        
        if(clickCount[element.innerText] % 2 === 1){
            element.classList.add('bg-green-500','text-white');
            NoOfSeatSeatSelected++;
        }
        else{
            element.classList.remove('bg-green-500','text-white');
            NoOfSeatSeatSelected--;
        }
        
        // add the seat and fare in selected seats section
        // if(NoOfSeatSeatSelected > 0){

        //     let selectedSeatParrentDiv = document.getElementById('selected-seats-add');

        //     let ChildDiv = document.createElement('div');
        //     ChildDiv.innerHTML = `
        //         <div class="flex justify-between text-[rgba(3,7,18,0.6)] text-sm xl:text-xl mb-3">
        //             <p>C2</p>
        //             <p>Economoy</p>
        //             <p>550</p>
        //         </div>
        //     `;
        //     selectedSeatParrentDiv.appendChild(ChildDiv);

        //     console.log(selectedSeatParrentDiv);
        // }
   


    })
});




