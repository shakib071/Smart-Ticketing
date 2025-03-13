//canclulate fare functions 

function calculateFare(distance) {
    return distance <= 50 ? 50 : 50 + (distance - 50) * 2;
}


//generate dummy data if data not avaailable

function dummyTravelData(city , destination) {

    if (city === destination) {
        travelData[city][destination] = {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "00000X",
            AC: false,
            estimatedTime: "00:00",
            fare: 0
        };
    } 

    else {
        travelData[city][destination] = {
            distance: Math.floor(Math.random() * 500) + 50, // Random distance between 50 and 550
            boardingTime: `${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
            arrivalTime: `${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
            coachNum: Math.random().toString(36).substring(2, 7).toUpperCase(),
            AC: Math.random() > 0.5,
            estimatedTime: `${Math.floor(Math.random() * 5) + 1}h ${Math.floor(Math.random() * 60)}m`, // Random estimated time between 1h 0m and 5h 59m
            fare: Math.floor(Math.random() * 500) + 100 // Random fare between 100 and 600
        };
    }

}


//calculate estimated time

function calculateTimeDifference(startTime, endTime) {
    // Convert 12-hour format to 24-hour format
    function convertTo24Hour(time) {
        let [hours, minutes] = time.split(/:| /);
        let period = time.slice(-2); // AM or PM
        
        hours = parseInt(hours);
        minutes = parseInt(minutes);

        if (period === "PM" && hours !== 12) {
            hours += 12;
        }
        if (period === "AM" && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes; // Total minutes
    }

    let startMinutes = convertTo24Hour(startTime);
    let endMinutes = convertTo24Hour(endTime);

    // Calculate the difference
    let diffMinutes = endMinutes - startMinutes;
    if (diffMinutes < 0) diffMinutes += 24 * 60; // Handle cases when end time is on the next day

    let hours = Math.floor(diffMinutes / 60);
    let minutes = diffMinutes % 60;
    if(minutes>0){
        hours++;
    }
    return `${hours} hour(s)`;
}



//change inner text by id
function changeInnerTextbyId(id, text){
    document.getElementById(id).innerText = text;
}


