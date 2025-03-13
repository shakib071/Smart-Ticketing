// 1st 



//get the seats 

const getSeats = document.getElementsByClassName('seat-select');

Array.from(getSeats).forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.innerText);
    })
})