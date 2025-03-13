// 1st 



//get the seats 

const getSeats = document.getElementsByClassName('seat-select');

Array.from(getSeats).forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.innerText);
    })
})


// function TravelData(city , destination) {

//     if (city === destination) {
//         travelData[city][destination] = {
//             distance: 0,
//             boardingTime: "00:00 AM",
//             arrivalTime: "00:00 AM",
//             coachNum: "00000X",
//             AC: false,
//             estimatedTime: "00:00",
//             fare: 0
//         };
//     } 
//     else {
//         travelData[city][destination] = {
//             distance: Math.floor(Math.random() * 500) + 50, // Random distance between 50 and 550
//             boardingTime: `${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
//             arrivalTime: `${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
//             coachNum: Math.random().toString(36).substring(2, 7).toUpperCase(),
//             AC: Math.random() > 0.5,
//             estimatedTime: `${Math.floor(Math.random() * 5) + 1}h ${Math.floor(Math.random() * 60)}m`, // Random estimated time between 1h 0m and 5h 59m
//             fare: Math.floor(Math.random() * 500) + 100 // Random fare between 100 and 600
//         };
//     }

// }