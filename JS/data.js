const cities = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Sylhet",
    "Barisal",
    "Rangpur",
    "Comilla",
    "Narayanganj",
    "Gazipur",
    "Mymensingh",
    "Jessore",
    "Cox's Bazar",
    "Bogra",
    "Dinajpur",
    "Saidpur",
    "Nawabganj",
    "Feni",
    "Pabna",
    "Tangail"
];

//if we use this we can use this data from another file
export default cities;
// , if cities is an array of city names, another file can import it like this:
// This will import the cities object from data.js and log it to the console.

// import cities from './data.js';
// console.log(cities);



//canclulate fare functions 

function calculateFare(distance) {
    return distance <= 50 ? 50 : 50 + (distance - 50) * 2;
}



//generate dummy data if data not avaailable

function TravelData(city , destination) {

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




const travelData = {



    "Dhaka": {
         "Dhaka": {
            distance : 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum : "45453A",
            AC:true
          },

        "Chittagong": {
            distance : 245,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum : "45353X",
            AC : false
        },
        "Khulna": {
            distance : 133,
            boardingTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            coachNum : "45323P",
            AC : true
        },
        "Rajshahi": {
            distance : 191,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum : "x5323P",
            AC : true
        },
        "Sylhet": {
            distance : 238,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum : "4o323P",
            AC : false
        },
        "Barisal": {
            distance : 169,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            AC : true
        },
        "Rangpur": {
            distance : 304,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum : "45327P",
            AC : false
        },
        "Comilla": {
            distance : 97,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum : "35323P",
            AC : true
        },
        "Narayanganj": {
            distance : 16,
            boardingTime: "04:00 PM",
            arrivalTime: "06:00 PM",
            coachNum : "45323d",
            AC : true
        },
        "Gazipur": {
            distance : 37,
            boardingTime: "05:00 PM",
            arrivalTime: "07:00 PM",
            coachNum : "45223P",
            AC : false 
        },
        "Mymensingh": {
            distance : 121,
            boardingTime: "06:00 PM",
            arrivalTime: "08:00 PM",
            coachNum : "48223P",
            AC : true 
        },
        "Jessore": {
            distance : 162,
            boardingTime: "07:00 PM",
            arrivalTime: "09:00 PM",
            coachNum : "05223P",
            AC : true
        },
        "Cox's Bazar": {
            distance : 392,
            boardingTime: "08:00 PM",
            arrivalTime: "10:00 PM",
            coachNum : "45C23P",
            AC : false
        },
        "Bogra": {
            distance : 197,
            boardingTime: "09:00 PM",
            arrivalTime: "11:00 PM",
            coachNum : "4U223P",
            AC : true 
        },
        "Dinajpur": {
            distance : 345,
            boardingTime: "10:00 PM",
            arrivalTime: "12:00 AM",
            coachNum : "452x3P",
            AC : true
        },
        "Saidpur": {
            distance : 360,
            boardingTime: "11:00 PM",
            arrivalTime: "01:00 AM",
            coachNum : "45523P",
            AC : false 
        },
        "Nawabganj": {
            distance : 289,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum : "49923P",
            AC : false 
        },
        "Feni": {
            distance : 157,
            boardingTime: "01:00 AM",
            arrivalTime: "03:00 AM",
            coachNum : "4xx23P",
            AC : true
        },
        "Pabna": {
            distance : 216,
            boardingTime: "02:00 AM",
            arrivalTime: "04:00 AM",
            coachNum : "45213P",
            AC : true
        },
        "Tangail": {
            distance : 97,
            boardingTime: "03:00 AM",
            arrivalTime: "05:00 AM",
            coachNum : "4522xP",
            AC : false 
        }
    },



    "Rajshahi": {
            "Rajshahi": {
                distance: 0,
                boardingTime: "00:00 AM",
                arrivalTime: "00:00 AM",
                coachNum: "R45453A",
                AC: true
            },
            "Dhaka": {
                distance: 191,
                boardingTime: "06:00 AM",
                arrivalTime: "08:00 AM",
                coachNum: "RD5323P",
                AC: true
            },
            "Chittagong": {
                distance: 410,
                boardingTime: "07:00 AM",
                arrivalTime: "11:00 AM",
                coachNum: "RC45353X",
                AC: false
            },
            "Khulna": {
                distance: 245,
                boardingTime: "08:00 AM",
                arrivalTime: "11:00 AM",
                coachNum: "RK45323P",
                AC: true
            },
            "Sylhet": {
                distance: 450,
                boardingTime: "09:00 AM",
                arrivalTime: "01:00 PM",
                coachNum: "RS4o323P",
                AC: false
            },
            "Barisal": {
                distance: 300,
                boardingTime: "10:00 AM",
                arrivalTime: "02:00 PM",
                coachNum: "RB45312B",
                AC: true
            },
            "Rangpur": {
                distance: 220,
                boardingTime: "11:00 AM",
                arrivalTime: "02:00 PM",
                coachNum: "RR45327P",
                AC: false
            },
            "Comilla": {
                distance: 360,
                boardingTime: "12:00 PM",
                arrivalTime: "04:00 PM",
                coachNum: "RC35323P",
                AC: true
            },
            "Narayanganj": {
                distance: 200,
                boardingTime: "01:00 PM",
                arrivalTime: "04:00 PM",
                coachNum: "RN45323d",
                AC: true
            },
            "Gazipur": {
                distance: 180,
                boardingTime: "02:00 PM",
                arrivalTime: "05:00 PM",
                coachNum: "RG45223P",
                AC: false
            },
            "Mymensingh": {
                distance: 170,
                boardingTime: "03:00 PM",
                arrivalTime: "06:00 PM",
                coachNum: "RM48223P",
                AC: true
            },
            "Jessore": {
                distance: 280,
                boardingTime: "04:00 PM",
                arrivalTime: "07:00 PM",
                coachNum: "RJ05223P",
                AC: true
            },
            "Cox's Bazar": {
                distance: 520,
                boardingTime: "05:00 PM",
                arrivalTime: "11:00 PM",
                coachNum: "RC45C23P",
                AC: false
            },
            "Bogra": {
                distance: 120,
                boardingTime: "06:00 PM",
                arrivalTime: "08:00 PM",
                coachNum: "RB4U223P",
                AC: true
            },
            "Dinajpur": {
                distance: 260,
                boardingTime: "07:00 PM",
                arrivalTime: "10:00 PM",
                coachNum: "RD452x3P",
                AC: true
            },
            "Saidpur": {
                distance: 280,
                boardingTime: "08:00 PM",
                arrivalTime: "11:00 PM",
                coachNum: "RS45523P",
                AC: false
            },
            "Nawabganj": {
                distance: 220,
                boardingTime: "09:00 PM",
                arrivalTime: "12:00 AM",
                coachNum: "RN49923P",
                AC: false
            },
            "Feni": {
                distance: 375,
                boardingTime: "10:00 PM",
                arrivalTime: "03:00 AM",
                coachNum: "RF4xx23P",
                AC: true
            },
            "Pabna": {
                distance: 150,
                boardingTime: "11:00 PM",
                arrivalTime: "02:00 AM",
                coachNum: "RP45213P",
                AC: true
            },
            "Tangail": {
                distance: 135,
                boardingTime: "12:00 AM",
                arrivalTime: "03:00 AM",
                coachNum: "RT4522xP",
                AC: false
            }
    },


    
    "Chittagong": {
        "Chittagong": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "C45453A",
            AC: true
        },
        "Dhaka": {
            distance: 245,
            boardingTime: "06:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "CD5323P",
            AC: true
        },
        "Rajshahi": {
            distance: 410,
            boardingTime: "07:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "CR45353X",
            AC: false
        },
        "Khulna": {
            distance: 390,
            boardingTime: "08:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "CK45323P",
            AC: true
        },
        "Sylhet": {
            distance: 310,
            boardingTime: "09:00 AM",
            arrivalTime: "02:00 PM",
            coachNum: "CS4o323P",
            AC: false
        },
        "Barisal": {
            distance: 370,
            boardingTime: "10:00 AM",
            arrivalTime: "03:00 PM",
            coachNum: "CB45312B",
            AC: true
        },
        "Rangpur": {
            distance: 600,
            boardingTime: "11:00 AM",
            arrivalTime: "07:00 PM",
            coachNum: "CR45327P",
            AC: false
        },
        "Comilla": {
            distance: 150,
            boardingTime: "12:00 PM",
            arrivalTime: "02:30 PM",
            coachNum: "CC35323P",
            AC: true
        },
        "Narayanganj": {
            distance: 230,
            boardingTime: "01:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "CN45323d",
            AC: true
        },
        "Gazipur": {
            distance: 260,
            boardingTime: "02:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "CG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 360,
            boardingTime: "03:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "CM48223P",
            AC: true
        },
        "Jessore": {
            distance: 430,
            boardingTime: "04:00 PM",
            arrivalTime: "10:00 PM",
            coachNum: "CJ05223P",
            AC: true
        },
        "Cox's Bazar": {
            distance: 152,
            boardingTime: "05:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "CC45C23P",
            AC: false
        },
        "Bogra": {
            distance: 460,
            boardingTime: "06:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "CB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 620,
            boardingTime: "07:00 PM",
            arrivalTime: "03:00 AM",
            coachNum: "CD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 640,
            boardingTime: "08:00 PM",
            arrivalTime: "04:00 AM",
            coachNum: "CS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 500,
            boardingTime: "09:00 PM",
            arrivalTime: "05:00 AM",
            coachNum: "CN49923P",
            AC: false
        },
        "Feni": {
            distance: 92,
            boardingTime: "10:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "CF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 490,
            boardingTime: "11:00 PM",
            arrivalTime: "06:00 AM",
            coachNum: "CP45213P",
            AC: true
        },
        "Tangail": {
            distance: 310,
            boardingTime: "12:00 AM",
            arrivalTime: "07:00 AM",
            coachNum: "CT4522xP",
            AC: false
        }
    },



    "Khulna": {
        "Khulna": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "K45453A",
            AC: true
        },
        "Dhaka": {
            distance: 133,
            boardingTime: "05:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "KD45323P",
            AC: true
        },
        "Rajshahi": {
            distance: 191,
            boardingTime: "06:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "KR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 390,
            boardingTime: "07:00 AM",
            arrivalTime: "11:30 AM",
            coachNum: "KC45323P",
            AC: false
        },
        "Sylhet": {
            distance: 310,
            boardingTime: "08:00 AM",
            arrivalTime: "12:30 PM",
            coachNum: "KS4o323P",
            AC: false
        },
        "Barisal": {
            distance: 100,
            boardingTime: "09:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "KB45312B",
            AC: true
        },
        "Rangpur": {
            distance: 304,
            boardingTime: "10:00 AM",
            arrivalTime: "03:00 PM",
            coachNum: "KR45327P",
            AC: false
        },
        "Comilla": {
            distance: 97,
            boardingTime: "11:00 AM",
            arrivalTime: "02:00 PM",
            coachNum: "KC35323P",
            AC: true
        },
        "Narayanganj": {
            distance: 230,
            boardingTime: "12:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "KN45323d",
            AC: true
        },
        "Gazipur": {
            distance: 260,
            boardingTime: "01:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "KG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 360,
            boardingTime: "02:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "KM48223P",
            AC: true
        },
        "Jessore": {
            distance: 430,
            boardingTime: "03:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "KJ05223P",
            AC: true
        },
        "Cox's Bazar": {
            distance: 392,
            boardingTime: "04:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "KC45C23P",
            AC: false
        },
        "Bogra": {
            distance: 197,
            boardingTime: "05:00 PM",
            arrivalTime: "09:00 PM",
            coachNum: "KB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 345,
            boardingTime: "06:00 PM",
            arrivalTime: "10:00 PM",
            coachNum: "KD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 360,
            boardingTime: "07:00 PM",
            arrivalTime: "11:00 PM",
            coachNum: "KS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 289,
            boardingTime: "08:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "KN49923P",
            AC: false
        },
        "Feni": {
            distance: 157,
            boardingTime: "09:00 PM",
            arrivalTime: "01:00 AM",
            coachNum: "KF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 216,
            boardingTime: "10:00 PM",
            arrivalTime: "02:00 AM",
            coachNum: "KP45213P",
            AC: true
        },
        "Tangail": {
            distance: 97,
            boardingTime: "11:00 PM",
            arrivalTime: "03:00 AM",
            coachNum: "KT4522xP",
            AC: false
        }
    },



    "Sylhet": {
        "Sylhet": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "S45453A",
            AC: true
        },
        "Dhaka": {
            distance: 238,
            boardingTime: "05:00 AM",
            arrivalTime: "08:30 AM",
            coachNum: "SD45323P",
            AC: false
        },
        "Rajshahi": {
            distance: 310,
            boardingTime: "06:00 AM",
            arrivalTime: "09:30 AM",
            coachNum: "SR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 392,
            boardingTime: "07:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "SC45323P",
            AC: true
        },
        "Khulna": {
            distance: 310,
            boardingTime: "08:00 AM",
            arrivalTime: "12:30 PM",
            coachNum: "SKS4o323P",
            AC: false
        },
        "Barisal": {
            distance: 169,
            boardingTime: "09:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "SB45312B",
            AC: true
        },
        "Rangpur": {
            distance: 350,
            boardingTime: "10:00 AM",
            arrivalTime: "02:30 PM",
            coachNum: "SR45327P",
            AC: true
        },
        "Comilla": {
            distance: 310,
            boardingTime: "11:00 AM",
            arrivalTime: "03:30 PM",
            coachNum: "SC35323P",
            AC: true
        },
        "Narayanganj": {
            distance: 230,
            boardingTime: "12:00 PM",
            arrivalTime: "04:30 PM",
            coachNum: "SN45323d",
            AC: false
        },
        "Gazipur": {
            distance: 260,
            boardingTime: "01:00 PM",
            arrivalTime: "05:30 PM",
            coachNum: "SG45223P",
            AC: true
        },
        "Mymensingh": {
            distance: 360,
            boardingTime: "02:00 PM",
            arrivalTime: "06:30 PM",
            coachNum: "SM48223P",
            AC: true
        },
        "Jessore": {
            distance: 430,
            boardingTime: "03:00 PM",
            arrivalTime: "07:30 PM",
            coachNum: "SJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 392,
            boardingTime: "04:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "SC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 197,
            boardingTime: "05:00 PM",
            arrivalTime: "09:00 PM",
            coachNum: "SB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 345,
            boardingTime: "06:00 PM",
            arrivalTime: "10:00 PM",
            coachNum: "SD452x3P",
            AC: false
        },
        "Saidpur": {
            distance: 360,
            boardingTime: "07:00 PM",
            arrivalTime: "11:00 PM",
            coachNum: "SS45523P",
            AC: true
        },
        "Nawabganj": {
            distance: 289,
            boardingTime: "08:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "SN49923P",
            AC: true
        },
        "Feni": {
            distance: 157,
            boardingTime: "09:00 PM",
            arrivalTime: "01:00 AM",
            coachNum: "SF4xx23P",
            AC: false
        },
        "Pabna": {
            distance: 216,
            boardingTime: "10:00 PM",
            arrivalTime: "02:00 AM",
            coachNum: "SP45213P",
            AC: true
        },
        "Tangail": {
            distance: 97,
            boardingTime: "11:00 PM",
            arrivalTime: "03:00 AM",
            coachNum: "ST4522xP",
            AC: false
        }
    },


    
    "Barisal": {
        "Barisal": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "B45453A",
            AC: true
        },
        "Dhaka": {
            distance: 169,
            boardingTime: "05:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "BD45323P",
            AC: false
        },
        "Rajshahi": {
            distance: 197,
            boardingTime: "06:00 AM",
            arrivalTime: "09:30 AM",
            coachNum: "BR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 392,
            boardingTime: "07:00 AM",
            arrivalTime: "11:30 AM",
            coachNum: "BC45323P",
            AC: true
        },
        "Khulna": {
            distance: 100,
            boardingTime: "08:00 AM",
            arrivalTime: "11:30 AM",
            coachNum: "KB45312B",
            AC: true
        },
        "Sylhet": {
            distance: 169,
            boardingTime: "09:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "SB45312B",
            AC: false
        },
        "Rangpur": {
            distance: 304,
            boardingTime: "10:00 AM",
            arrivalTime: "02:30 PM",
            coachNum: "BR45327P",
            AC: false
        },
        "Comilla": {
            distance: 97,
            boardingTime: "11:00 AM",
            arrivalTime: "02:00 PM",
            coachNum: "BC35323P",
            AC: true
        },
        "Narayanganj": {
            distance: 230,
            boardingTime: "12:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "BN45323d",
            AC: false
        },
        "Gazipur": {
            distance: 260,
            boardingTime: "01:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "BG45223P",
            AC: true
        },
        "Mymensingh": {
            distance: 360,
            boardingTime: "02:00 PM",
            arrivalTime: "06:30 PM",
            coachNum: "BM48223P",
            AC: true
        },
        "Jessore": {
            distance: 430,
            boardingTime: "03:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "BJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 392,
            boardingTime: "04:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "BC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 197,
            boardingTime: "05:00 PM",
            arrivalTime: "09:00 PM",
            coachNum: "BB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 345,
            boardingTime: "06:00 PM",
            arrivalTime: "10:30 PM",
            coachNum: "BD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 360,
            boardingTime: "07:00 PM",
            arrivalTime: "11:00 PM",
            coachNum: "BS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 289,
            boardingTime: "08:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "BN49923P",
            AC: false
        },
        "Feni": {
            distance: 157,
            boardingTime: "09:00 PM",
            arrivalTime: "01:00 AM",
            coachNum: "BF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 216,
            boardingTime: "10:00 PM",
            arrivalTime: "02:00 AM",
            coachNum: "BP45213P",
            AC: true
        },
        "Tangail": {
            distance: 97,
            boardingTime: "11:00 PM",
            arrivalTime: "03:00 AM",
            coachNum: "BT4522xP",
            AC: false
        }
    },



    "Rangpur": {
        "Rangpur": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "R45353A",
            AC: true
        },
        "Dhaka": {
            distance: 304,
            boardingTime: "07:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "RD45327P",
            AC: false
        },
        "Rajshahi": {
            distance: 191,
            boardingTime: "08:00 AM",
            arrivalTime: "10:30 AM",
            coachNum: "RR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 392,
            boardingTime: "09:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "RC45323P",
            AC: true
        },
        "Khulna": {
            distance: 370,
            boardingTime: "10:00 AM",
            arrivalTime: "02:00 PM",
            coachNum: "RK45312B",
            AC: false
        },
        "Sylhet": {
            distance: 500,
            boardingTime: "11:00 AM",
            arrivalTime: "03:00 PM",
            coachNum: "RS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 304,
            boardingTime: "12:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "RB45327P",
            AC: true
        },
        "Comilla": {
            distance: 250,
            boardingTime: "01:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "RC35323P",
            AC: false
        },
        "Narayanganj": {
            distance: 410,
            boardingTime: "02:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "RN45323d",
            AC: true
        },
        "Gazipur": {
            distance: 430,
            boardingTime: "03:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "RG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 510,
            boardingTime: "04:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "RM48223P",
            AC: true
        },
        "Jessore": {
            distance: 600,
            boardingTime: "05:00 PM",
            arrivalTime: "09:00 PM",
            coachNum: "RJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 580,
            boardingTime: "06:00 PM",
            arrivalTime: "10:00 PM",
            coachNum: "RC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 510,
            boardingTime: "07:00 PM",
            arrivalTime: "11:00 PM",
            coachNum: "RB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 680,
            boardingTime: "08:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "RD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 700,
            boardingTime: "09:00 PM",
            arrivalTime: "01:00 AM",
            coachNum: "RS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 590,
            boardingTime: "10:00 PM",
            arrivalTime: "02:00 AM",
            coachNum: "RN49923P",
            AC: false
        },
        "Feni": {
            distance: 410,
            boardingTime: "11:00 PM",
            arrivalTime: "03:00 AM",
            coachNum: "RF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 450,
            boardingTime: "12:00 AM",
            arrivalTime: "04:00 AM",
            coachNum: "RP45213P",
            AC: true
        },
        "Tangail": {
            distance: 340,
            boardingTime: "01:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "RT4522xP",
            AC: false
        }
    },




    "Comilla": {
        "Comilla": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "C35353A",
            AC: true
        },
        "Dhaka": {
            distance: 97,
            boardingTime: "07:00 AM",
            arrivalTime: "09:30 AM",
            coachNum: "CD35323P",
            AC: false
        },
        "Rajshahi": {
            distance: 120,
            boardingTime: "08:00 AM",
            arrivalTime: "10:30 AM",
            coachNum: "CR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 245,
            boardingTime: "09:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "CC45323P",
            AC: true
        },
        "Khulna": {
            distance: 180,
            boardingTime: "10:00 AM",
            arrivalTime: "12:30 PM",
            coachNum: "CK45312B",
            AC: false
        },
        "Sylhet": {
            distance: 230,
            boardingTime: "11:00 AM",
            arrivalTime: "02:00 PM",
            coachNum: "CS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 97,
            boardingTime: "12:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "CB45323P",
            AC: false
        },
        "Rangpur": {
            distance: 250,
            boardingTime: "01:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "CR35323P",
            AC: true
        },
        "Narayanganj": {
            distance: 400,
            boardingTime: "02:00 PM",
            arrivalTime: "05:30 PM",
            coachNum: "CN45323d",
            AC: false
        },
        "Gazipur": {
            distance: 430,
            boardingTime: "03:00 PM",
            arrivalTime: "06:30 PM",
            coachNum: "CG45223P",
            AC: true
        },
        "Mymensingh": {
            distance: 520,
            boardingTime: "04:00 PM",
            arrivalTime: "08:30 PM",
            coachNum: "CM48223P",
            AC: true
        },
        "Jessore": {
            distance: 600,
            boardingTime: "05:00 PM",
            arrivalTime: "09:30 PM",
            coachNum: "CJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 510,
            boardingTime: "06:00 PM",
            arrivalTime: "10:00 PM",
            coachNum: "CC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 400,
            boardingTime: "07:00 PM",
            arrivalTime: "11:00 PM",
            coachNum: "CB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 450,
            boardingTime: "08:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "CD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 480,
            boardingTime: "09:00 PM",
            arrivalTime: "01:30 AM",
            coachNum: "CS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 350,
            boardingTime: "10:00 PM",
            arrivalTime: "02:00 AM",
            coachNum: "CN49923P",
            AC: false
        },
        "Feni": {
            distance: 400,
            boardingTime: "11:00 PM",
            arrivalTime: "03:00 AM",
            coachNum: "CF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 450,
            boardingTime: "12:00 AM",
            arrivalTime: "04:30 AM",
            coachNum: "CP45213P",
            AC: true
        },
        "Tangail": {
            distance: 270,
            boardingTime: "01:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "CT4522xP",
            AC: false
        }
    },



    "Narayanganj": {
        "Narayanganj": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "N45353A",
            AC: true
        },
        "Dhaka": {
            distance: 16,
            boardingTime: "06:00 AM",
            arrivalTime: "06:30 AM",
            coachNum: "ND45323d",
            AC: true
        },
        "Rajshahi": {
            distance: 200,
            boardingTime: "07:00 AM",
            arrivalTime: "09:30 AM",
            coachNum: "NR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 230,
            boardingTime: "08:00 AM",
            arrivalTime: "10:30 AM",
            coachNum: "NC45323P",
            AC: false
        },
        "Khulna": {
            distance: 170,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "NK45312B",
            AC: true
        },
        "Sylhet": {
            distance: 250,
            boardingTime: "10:00 AM",
            arrivalTime: "12:30 PM",
            coachNum: "NS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 130,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "NB45323P",
            AC: false
        },
        "Rangpur": {
            distance: 290,
            boardingTime: "12:00 PM",
            arrivalTime: "02:30 PM",
            coachNum: "NR35323P",
            AC: true
        },
        "Comilla": {
            distance: 230,
            boardingTime: "01:00 PM",
            arrivalTime: "03:30 PM",
            coachNum: "NC35323P",
            AC: true
        },
        "Gazipur": {
            distance: 50,
            boardingTime: "02:00 PM",
            arrivalTime: "02:30 PM",
            coachNum: "NG45223P",
            AC: true
        },
        "Mymensingh": {
            distance: 160,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "NM48223P",
            AC: false
        },
        "Jessore": {
            distance: 300,
            boardingTime: "04:00 PM",
            arrivalTime: "06:30 PM",
            coachNum: "NJ05223P",
            AC: true
        },
        "Cox's Bazar": {
            distance: 450,
            boardingTime: "05:00 PM",
            arrivalTime: "07:30 PM",
            coachNum: "NC45C23P",
            AC: false
        },
        "Bogra": {
            distance: 330,
            boardingTime: "06:00 PM",
            arrivalTime: "08:30 PM",
            coachNum: "NB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 410,
            boardingTime: "07:00 PM",
            arrivalTime: "09:30 PM",
            coachNum: "ND452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 460,
            boardingTime: "08:00 PM",
            arrivalTime: "10:30 PM",
            coachNum: "NS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 390,
            boardingTime: "09:00 PM",
            arrivalTime: "11:30 PM",
            coachNum: "NN49923P",
            AC: true
        },
        "Feni": {
            distance: 220,
            boardingTime: "10:00 PM",
            arrivalTime: "12:30 AM",
            coachNum: "NF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 330,
            boardingTime: "11:00 PM",
            arrivalTime: "01:30 AM",
            coachNum: "NP45213P",
            AC: false
        },
        "Tangail": {
            distance: 100,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "NT4522xP",
            AC: true
        }
    },



    "Gazipur": {
        "Gazipur": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "G45253A",
            AC: true
        },
        "Dhaka": {
            distance: 37,
            boardingTime: "06:00 AM",
            arrivalTime: "06:30 AM",
            coachNum: "GD45223P",
            AC: false
        },
        "Rajshahi": {
            distance: 150,
            boardingTime: "07:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "GR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 190,
            boardingTime: "08:00 AM",
            arrivalTime: "10:30 AM",
            coachNum: "GC45323P",
            AC: false
        },
        "Khulna": {
            distance: 130,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "GK45312B",
            AC: true
        },
        "Sylhet": {
            distance: 200,
            boardingTime: "10:00 AM",
            arrivalTime: "12:30 PM",
            coachNum: "GS4o323P",
            AC: false
        },
        "Barisal": {
            distance: 120,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "GB45323P",
            AC: true
        },
        "Rangpur": {
            distance: 400,
            boardingTime: "12:00 PM",
            arrivalTime: "02:30 PM",
            coachNum: "GR35323P",
            AC: true
        },
        "Comilla": {
            distance: 180,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "GC35323P",
            AC: false
        },
        "Narayanganj": {
            distance: 50,
            boardingTime: "02:00 PM",
            arrivalTime: "02:30 PM",
            coachNum: "GN45223P",
            AC: true
        },
        "Mymensingh": {
            distance: 200,
            boardingTime: "03:00 PM",
            arrivalTime: "05:30 PM",
            coachNum: "GM48223P",
            AC: false
        },
        "Jessore": {
            distance: 300,
            boardingTime: "04:00 PM",
            arrivalTime: "06:30 PM",
            coachNum: "GJ05223P",
            AC: true
        },
        "Cox's Bazar": {
            distance: 480,
            boardingTime: "05:00 PM",
            arrivalTime: "07:30 PM",
            coachNum: "GC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 290,
            boardingTime: "06:00 PM",
            arrivalTime: "08:30 PM",
            coachNum: "GB4U223P",
            AC: false
        },
        "Dinajpur": {
            distance: 550,
            boardingTime: "07:00 PM",
            arrivalTime: "09:30 PM",
            coachNum: "GD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 480,
            boardingTime: "08:00 PM",
            arrivalTime: "10:30 PM",
            coachNum: "GS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 380,
            boardingTime: "09:00 PM",
            arrivalTime: "11:30 PM",
            coachNum: "GN49923P",
            AC: true
        },
        "Feni": {
            distance: 220,
            boardingTime: "10:00 PM",
            arrivalTime: "12:30 AM",
            coachNum: "GF4xx23P",
            AC: false
        },
        "Pabna": {
            distance: 350,
            boardingTime: "11:00 PM",
            arrivalTime: "01:30 AM",
            coachNum: "GP45213P",
            AC: true
        },
        "Tangail": {
            distance: 70,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "GT4522xP",
            AC: true
        }
    },



    "Mymensingh": {
        "Mymensingh": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "M48223A",
            AC: true
        },
        "Dhaka": {
            distance: 121,
            boardingTime: "06:00 AM",
            arrivalTime: "07:30 AM",
            coachNum: "MD48223P",
            AC: true
        },
        "Rajshahi": {
            distance: 310,
            boardingTime: "07:00 AM",
            arrivalTime: "09:30 AM",
            coachNum: "MR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 370,
            boardingTime: "08:00 AM",
            arrivalTime: "10:30 AM",
            coachNum: "MC45323P",
            AC: false
        },
        "Khulna": {
            distance: 250,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "MK45312B",
            AC: true
        },
        "Sylhet": {
            distance: 320,
            boardingTime: "10:00 AM",
            arrivalTime: "12:30 PM",
            coachNum: "MS4o323P",
            AC: false
        },
        "Barisal": {
            distance: 240,
            boardingTime: "11:00 AM",
            arrivalTime: "01:30 PM",
            coachNum: "MB45323P",
            AC: true
        },
        "Rangpur": {
            distance: 400,
            boardingTime: "12:00 PM",
            arrivalTime: "02:30 PM",
            coachNum: "MR35323P",
            AC: true
        },
        "Comilla": {
            distance: 280,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "MC35323P",
            AC: false
        },
        "Narayanganj": {
            distance: 160,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "MN45223P",
            AC: true
        },
        "Gazipur": {
            distance: 220,
            boardingTime: "03:00 PM",
            arrivalTime: "05:30 PM",
            coachNum: "MG45223P",
            AC: false
        },
        "Jessore": {
            distance: 300,
            boardingTime: "04:00 PM",
            arrivalTime: "06:30 PM",
            coachNum: "MJ05223P",
            AC: true
        },
        "Cox's Bazar": {
            distance: 470,
            boardingTime: "05:00 PM",
            arrivalTime: "07:30 PM",
            coachNum: "MC45C23P",
            AC: false
        },
        "Bogra": {
            distance: 390,
            boardingTime: "06:00 PM",
            arrivalTime: "08:30 PM",
            coachNum: "MB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 540,
            boardingTime: "07:00 PM",
            arrivalTime: "09:30 PM",
            coachNum: "MD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 520,
            boardingTime: "08:00 PM",
            arrivalTime: "10:30 PM",
            coachNum: "MS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 450,
            boardingTime: "09:00 PM",
            arrivalTime: "11:30 PM",
            coachNum: "MN49923P",
            AC: true
        },
        "Feni": {
            distance: 290,
            boardingTime: "10:00 PM",
            arrivalTime: "12:30 AM",
            coachNum: "MF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 420,
            boardingTime: "11:00 PM",
            arrivalTime: "01:30 AM",
            coachNum: "MP45213P",
            AC: false
        },
        "Tangail": {
            distance: 160,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "MT4522xP",
            AC: true
        }
    },




    "Jessore": {
        "Jessore": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "J05223A",
            AC: true
        },
        "Dhaka": {
            distance: 162,
            boardingTime: "06:00 AM",
            arrivalTime: "07:30 AM",
            coachNum: "JD05223P",
            AC: true
        },
        "Rajshahi": {
            distance: 320,
            boardingTime: "07:00 AM",
            arrivalTime: "09:30 AM",
            coachNum: "JR45323P",
            AC: false
        },
        "Chittagong": {
            distance: 380,
            boardingTime: "08:00 AM",
            arrivalTime: "10:30 AM",
            coachNum: "JC45323P",
            AC: true
        },
        "Khulna": {
            distance: 150,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "JK45312B",
            AC: false
        },
        "Sylhet": {
            distance: 290,
            boardingTime: "10:00 AM",
            arrivalTime: "12:30 PM",
            coachNum: "JS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 230,
            boardingTime: "11:00 AM",
            arrivalTime: "01:30 PM",
            coachNum: "JB45323P",
            AC: false
        },
        "Rangpur": {
            distance: 410,
            boardingTime: "12:00 PM",
            arrivalTime: "02:30 PM",
            coachNum: "JR35323P",
            AC: true
        },
        "Comilla": {
            distance: 290,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "JC35323P",
            AC: true
        },
        "Narayanganj": {
            distance: 300,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "JN45223P",
            AC: false
        },
        "Gazipur": {
            distance: 250,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "JG45223P",
            AC: true
        },
        "Mymensingh": {
            distance: 300,
            boardingTime: "04:00 PM",
            arrivalTime: "06:30 PM",
            coachNum: "JM05223P",
            AC: true
        },
        "Cox's Bazar": {
            distance: 460,
            boardingTime: "05:00 PM",
            arrivalTime: "07:30 PM",
            coachNum: "JC45C23P",
            AC: false
        },
        "Bogra": {
            distance: 400,
            boardingTime: "06:00 PM",
            arrivalTime: "08:30 PM",
            coachNum: "JB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 580,
            boardingTime: "07:00 PM",
            arrivalTime: "09:30 PM",
            coachNum: "JD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 540,
            boardingTime: "08:00 PM",
            arrivalTime: "10:30 PM",
            coachNum: "JS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 470,
            boardingTime: "09:00 PM",
            arrivalTime: "11:30 PM",
            coachNum: "JN49923P",
            AC: true
        },
        "Feni": {
            distance: 310,
            boardingTime: "10:00 PM",
            arrivalTime: "12:30 AM",
            coachNum: "JF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 440,
            boardingTime: "11:00 PM",
            arrivalTime: "01:30 AM",
            coachNum: "JP45213P",
            AC: false
        },
        "Tangail": {
            distance: 180,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "JT4522xP",
            AC: true
        }
    },



    "Cox's Bazar": {
        "Cox's Bazar": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "C45C23A",
            AC: false
        },
        "Dhaka": {
            distance: 392,
            boardingTime: "08:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "C45C23P",
            AC: false
        },
        "Rajshahi": {
            distance: 582,
            boardingTime: "09:00 AM",
            arrivalTime: "11:30 AM",
            coachNum: "CR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 150,
            boardingTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "CC45353P",
            AC: false
        },
        "Khulna": {
            distance: 330,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "CK45323P",
            AC: true
        },
        "Sylhet": {
            distance: 490,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum: "CS4o323P",
            AC: false
        },
        "Barisal": {
            distance: 380,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "CB45323P",
            AC: true
        },
        "Rangpur": {
            distance: 670,
            boardingTime: "02:00 PM",
            arrivalTime: "04:30 PM",
            coachNum: "CR45323P",
            AC: true
        },
        "Comilla": {
            distance: 490,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "CC35323P",
            AC: false
        },
        "Narayanganj": {
            distance: 370,
            boardingTime: "04:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "CN45223P",
            AC: true
        },
        "Gazipur": {
            distance: 410,
            boardingTime: "05:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "CG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 470,
            boardingTime: "06:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "CM45223P",
            AC: true
        },
        "Jessore": {
            distance: 520,
            boardingTime: "07:00 PM",
            arrivalTime: "09:30 PM",
            coachNum: "CJ05223P",
            AC: false
        },
        "Bogra": {
            distance: 350,
            boardingTime: "08:00 PM",
            arrivalTime: "10:00 PM",
            coachNum: "CB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 730,
            boardingTime: "09:00 PM",
            arrivalTime: "11:30 PM",
            coachNum: "CD452x3P",
            AC: false
        },
        "Saidpur": {
            distance: 750,
            boardingTime: "10:00 PM",
            arrivalTime: "12:30 AM",
            coachNum: "CS45523P",
            AC: true
        },
        "Nawabganj": {
            distance: 660,
            boardingTime: "11:00 PM",
            arrivalTime: "01:30 AM",
            coachNum: "CN49923P",
            AC: false
        },
        "Feni": {
            distance: 530,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "CF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 690,
            boardingTime: "01:00 AM",
            arrivalTime: "03:30 AM",
            coachNum: "CP45213P",
            AC: false
        },
        "Tangail": {
            distance: 490,
            boardingTime: "02:00 AM",
            arrivalTime: "04:30 AM",
            coachNum: "CT4522xP",
            AC: true
        }
    },



    "Bogra": {
        "Bogra": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "B4U223A",
            AC: true
        },
        "Dhaka": {
            distance: 197,
            boardingTime: "09:00 PM",
            arrivalTime: "11:00 PM",
            coachNum: "B4U223P",
            AC: true
        },
        "Rajshahi": {
            distance: 120,
            boardingTime: "10:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "BR45323P",
            AC: false
        },
        "Chittagong": {
            distance: 510,
            boardingTime: "11:00 PM",
            arrivalTime: "01:00 AM",
            coachNum: "BC45323P",
            AC: true
        },
        "Khulna": {
            distance: 370,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "BK45323P",
            AC: false
        },
        "Sylhet": {
            distance: 490,
            boardingTime: "01:00 AM",
            arrivalTime: "03:00 AM",
            coachNum: "BS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 360,
            boardingTime: "02:00 AM",
            arrivalTime: "04:00 AM",
            coachNum: "BB45323P",
            AC: false
        },
        "Rangpur": {
            distance: 430,
            boardingTime: "03:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "BR35323P",
            AC: true
        },
        "Comilla": {
            distance: 220,
            boardingTime: "04:00 AM",
            arrivalTime: "06:00 AM",
            coachNum: "BC35323P",
            AC: false
        },
        "Narayanganj": {
            distance: 330,
            boardingTime: "05:00 AM",
            arrivalTime: "07:00 AM",
            coachNum: "BN45223P",
            AC: true
        },
        "Gazipur": {
            distance: 360,
            boardingTime: "06:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "BG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 230,
            boardingTime: "07:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "BM45223P",
            AC: true
        },
        "Jessore": {
            distance: 190,
            boardingTime: "08:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "BJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 350,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "BC4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 450,
            boardingTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "BD452x3P",
            AC: false
        },
        "Saidpur": {
            distance: 470,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "BS45523P",
            AC: true
        },
        "Nawabganj": {
            distance: 580,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum: "BN49923P",
            AC: false
        },
        "Feni": {
            distance: 470,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "BF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 570,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "BP45213P",
            AC: false
        },
        "Tangail": {
            distance: 490,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "BT4522xP",
            AC: true
        }
    },


    
    "Dinajpur": {
        "Dinajpur": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "D452x3A",
            AC: true
        },
        "Dhaka": {
            distance: 345,
            boardingTime: "10:00 PM",
            arrivalTime: "12:00 AM",
            coachNum: "D452x3P",
            AC: true
        },
        "Rajshahi": {
            distance: 150,
            boardingTime: "11:00 PM",
            arrivalTime: "01:00 AM",
            coachNum: "DR45323P",
            AC: false
        },
        "Chittagong": {
            distance: 530,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "DC45353P",
            AC: true
        },
        "Khulna": {
            distance: 410,
            boardingTime: "01:00 AM",
            arrivalTime: "03:00 AM",
            coachNum: "DK45323P",
            AC: false
        },
        "Sylhet": {
            distance: 590,
            boardingTime: "02:00 AM",
            arrivalTime: "04:00 AM",
            coachNum: "DS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 470,
            boardingTime: "03:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "DB45323P",
            AC: false
        },
        "Rangpur": {
            distance: 200,
            boardingTime: "04:00 AM",
            arrivalTime: "06:00 AM",
            coachNum: "DR45323P",
            AC: true
        },
        "Comilla": {
            distance: 540,
            boardingTime: "05:00 AM",
            arrivalTime: "07:00 AM",
            coachNum: "DC45353P",
            AC: false
        },
        "Narayanganj": {
            distance: 520,
            boardingTime: "06:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "DN45223P",
            AC: true
        },
        "Gazipur": {
            distance: 550,
            boardingTime: "07:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "DG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 450,
            boardingTime: "08:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "DM45223P",
            AC: true
        },
        "Jessore": {
            distance: 350,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "DJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 720,
            boardingTime: "10:00 AM",
            arrivalTime: "12:30 PM",
            coachNum: "DC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 450,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "DB4U223P",
            AC: false
        },
        "Saidpur": {
            distance: 60,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum: "DS45523P",
            AC: true
        },
        "Nawabganj": {
            distance: 630,
            boardingTime: "01:00 PM",
            arrivalTime: "03:30 PM",
            coachNum: "DN49923P",
            AC: false
        },
        "Feni": {
            distance: 550,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "DF4xx23P",
            AC: true
        },
        "Pabna": {
            distance: 570,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "DP45213P",
            AC: false
        },
        "Tangail": {
            distance: 490,
            boardingTime: "04:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "DT4522xP",
            AC: true
        }
    },


    "Saidpur": {
        "Saidpur": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "S45523A",
            AC: true
        },
        "Dhaka": {
            distance: 360,
            boardingTime: "11:00 PM",
            arrivalTime: "01:00 AM",
            coachNum: "S45523P",
            AC: false
        },
        "Rajshahi": {
            distance: 250,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "SR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 600,
            boardingTime: "01:00 AM",
            arrivalTime: "03:00 AM",
            coachNum: "SC45353P",
            AC: false
        },
        "Khulna": {
            distance: 480,
            boardingTime: "02:00 AM",
            arrivalTime: "04:00 AM",
            coachNum: "SK45323P",
            AC: true
        },
        "Sylhet": {
            distance: 660,
            boardingTime: "03:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "SS4o323P",
            AC: false
        },
        "Barisal": {
            distance: 540,
            boardingTime: "04:00 AM",
            arrivalTime: "06:00 AM",
            coachNum: "SB45323P",
            AC: true
        },
        "Rangpur": {
            distance: 370,
            boardingTime: "05:00 AM",
            arrivalTime: "07:00 AM",
            coachNum: "SR45323P",
            AC: false
        },
        "Comilla": {
            distance: 620,
            boardingTime: "06:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "SC45353P",
            AC: true
        },
        "Narayanganj": {
            distance: 300,
            boardingTime: "07:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "SN45223P",
            AC: false
        },
        "Gazipur": {
            distance: 330,
            boardingTime: "08:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "SG45223P",
            AC: true
        },
        "Mymensingh": {
            distance: 230,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "SM45223P",
            AC: false
        },
        "Jessore": {
            distance: 220,
            boardingTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "SJ05223P",
            AC: true
        },
        "Cox's Bazar": {
            distance: 730,
            boardingTime: "11:00 AM",
            arrivalTime: "01:30 PM",
            coachNum: "SC45C23P",
            AC: false
        },
        "Bogra": {
            distance: 450,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum: "SB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 60,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "DS452x3P",
            AC: false
        },
        "Nawabganj": {
            distance: 710,
            boardingTime: "02:00 PM",
            arrivalTime: "04:30 PM",
            coachNum: "SN49923P",
            AC: true
        },
        "Feni": {
            distance: 500,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "SF4xx23P",
            AC: false
        },
        "Pabna": {
            distance: 600,
            boardingTime: "04:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "SP45213P",
            AC: true
        },
        "Tangail": {
            distance: 650,
            boardingTime: "05:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "ST4522xP",
            AC: false
        }
    },
    

    "Nawabganj": {
        "Nawabganj": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "N49923A",
            AC: true
        },
        "Dhaka": {
            distance: 289,
            boardingTime: "12:00 AM",
            arrivalTime: "02:00 AM",
            coachNum: "N49923P",
            AC: false
        },
        "Rajshahi": {
            distance: 420,
            boardingTime: "01:00 AM",
            arrivalTime: "03:00 AM",
            coachNum: "NR45323P",
            AC: true
        },
        "Chittagong": {
            distance: 590,
            boardingTime: "02:00 AM",
            arrivalTime: "04:00 AM",
            coachNum: "NC45353P",
            AC: false
        },
        "Khulna": {
            distance: 370,
            boardingTime: "03:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "NK45323P",
            AC: true
        },
        "Sylhet": {
            distance: 650,
            boardingTime: "04:00 AM",
            arrivalTime: "06:00 AM",
            coachNum: "NS4o323P",
            AC: false
        },
        "Barisal": {
            distance: 530,
            boardingTime: "05:00 AM",
            arrivalTime: "07:00 AM",
            coachNum: "NB45323P",
            AC: true
        },
        "Rangpur": {
            distance: 510,
            boardingTime: "06:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "NR45323P",
            AC: false
        },
        "Comilla": {
            distance: 680,
            boardingTime: "07:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "NC45353P",
            AC: true
        },
        "Narayanganj": {
            distance: 290,
            boardingTime: "08:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "NN45223P",
            AC: false
        },
        "Gazipur": {
            distance: 350,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "NG45223P",
            AC: true
        },
        "Mymensingh": {
            distance: 330,
            boardingTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "NM45223P",
            AC: false
        },
        "Jessore": {
            distance: 460,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "NJ05223P",
            AC: true
        },
        "Cox's Bazar": {
            distance: 740,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum: "NC45C23P",
            AC: false
        },
        "Bogra": {
            distance: 540,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "NB4U223P",
            AC: true
        },
        "Dinajpur": {
            distance: 660,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "ND452x3P",
            AC: false
        },
        "Saidpur": {
            distance: 710,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "NS45523P",
            AC: true
        },
        "Feni": {
            distance: 480,
            boardingTime: "04:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "NF4xx23P",
            AC: false
        },
        "Pabna": {
            distance: 670,
            boardingTime: "05:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "NP45213P",
            AC: true
        },
        "Tangail": {
            distance: 610,
            boardingTime: "06:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "NT4522xP",
            AC: false
        }
    },



    "Feni": {
        "Feni": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "F4xx23A",
            AC: true
        },
        "Dhaka": {
            distance: 157,
            boardingTime: "01:00 AM",
            arrivalTime: "03:00 AM",
            coachNum: "F4xx23P",
            AC: true
        },
        "Rajshahi": {
            distance: 345,
            boardingTime: "02:00 AM",
            arrivalTime: "04:00 AM",
            coachNum: "FR45323P",
            AC: false
        },
        "Chittagong": {
            distance: 240,
            boardingTime: "03:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "FC45353P",
            AC: true
        },
        "Khulna": {
            distance: 290,
            boardingTime: "04:00 AM",
            arrivalTime: "06:00 AM",
            coachNum: "FK45323P",
            AC: false
        },
        "Sylhet": {
            distance: 410,
            boardingTime: "05:00 AM",
            arrivalTime: "07:00 AM",
            coachNum: "FS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 330,
            boardingTime: "06:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "FB45323P",
            AC: false
        },
        "Rangpur": {
            distance: 320,
            boardingTime: "07:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "FR45323P",
            AC: true
        },
        "Comilla": {
            distance: 70,
            boardingTime: "08:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "FC45353P",
            AC: false
        },
        "Narayanganj": {
            distance: 120,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "FN45223P",
            AC: true
        },
        "Gazipur": {
            distance: 140,
            boardingTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "FG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 220,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "FM45223P",
            AC: true
        },
        "Jessore": {
            distance: 300,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum: "FJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 600,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "FC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 220,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "FB4U223P",
            AC: false
        },
        "Dinajpur": {
            distance: 310,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "FD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 450,
            boardingTime: "04:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "FS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 480,
            boardingTime: "05:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "FN49923P",
            AC: true
        },
        "Pabna": {
            distance: 270,
            boardingTime: "06:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "FP45213P",
            AC: false
        },
        "Tangail": {
            distance: 220,
            boardingTime: "07:00 PM",
            arrivalTime: "09:00 PM",
            coachNum: "FT4522xP",
            AC: true
        }
    },



    "Pabna": {
        "Pabna": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "P45213A",
            AC: true
        },
        "Dhaka": {
            distance: 216,
            boardingTime: "02:00 AM",
            arrivalTime: "04:00 AM",
            coachNum: "P45213P",
            AC: true
        },
        "Rajshahi": {
            distance: 170,
            boardingTime: "03:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "PR45323P",
            AC: false
        },
        "Chittagong": {
            distance: 330,
            boardingTime: "04:00 AM",
            arrivalTime: "06:00 AM",
            coachNum: "PC45353P",
            AC: true
        },
        "Khulna": {
            distance: 150,
            boardingTime: "05:00 AM",
            arrivalTime: "07:00 AM",
            coachNum: "PK45323P",
            AC: false
        },
        "Sylhet": {
            distance: 310,
            boardingTime: "06:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "PS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 450,
            boardingTime: "07:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "PB45323P",
            AC: false
        },
        "Rangpur": {
            distance: 520,
            boardingTime: "08:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "PR45323P",
            AC: true
        },
        "Comilla": {
            distance: 290,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "PC45353P",
            AC: false
        },
        "Narayanganj": {
            distance: 350,
            boardingTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "PN45223P",
            AC: true
        },
        "Gazipur": {
            distance: 410,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "PG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 430,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum: "PM45223P",
            AC: true
        },
        "Jessore": {
            distance: 380,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "PJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 590,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "PC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 480,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "PB4U223P",
            AC: false
        },
        "Dinajpur": {
            distance: 590,
            boardingTime: "04:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "PD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 620,
            boardingTime: "05:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "PS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 670,
            boardingTime: "06:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "PN49923P",
            AC: true
        },
        "Feni": {
            distance: 420,
            boardingTime: "07:00 PM",
            arrivalTime: "09:00 PM",
            coachNum: "PF4xx23P",
            AC: false
        },
        "Tangail": {
            distance: 510,
            boardingTime: "08:00 PM",
            arrivalTime: "10:00 PM",
            coachNum: "PT45213P",
            AC: true
        }
    },




    "Tangail": {
        "Tangail": {
            distance: 0,
            boardingTime: "00:00 AM",
            arrivalTime: "00:00 AM",
            coachNum: "T4522xA",
            AC: false
        },
        "Dhaka": {
            distance: 97,
            boardingTime: "03:00 AM",
            arrivalTime: "05:00 AM",
            coachNum: "T4522xP",
            AC: true
        },
        "Rajshahi": {
            distance: 170,
            boardingTime: "04:00 AM",
            arrivalTime: "06:00 AM",
            coachNum: "TR45323P",
            AC: false
        },
        "Chittagong": {
            distance: 280,
            boardingTime: "05:00 AM",
            arrivalTime: "07:00 AM",
            coachNum: "TC45353P",
            AC: true
        },
        "Khulna": {
            distance: 150,
            boardingTime: "06:00 AM",
            arrivalTime: "08:00 AM",
            coachNum: "TK45323P",
            AC: false
        },
        "Sylhet": {
            distance: 310,
            boardingTime: "07:00 AM",
            arrivalTime: "09:00 AM",
            coachNum: "TS4o323P",
            AC: true
        },
        "Barisal": {
            distance: 360,
            boardingTime: "08:00 AM",
            arrivalTime: "10:00 AM",
            coachNum: "TB45323P",
            AC: false
        },
        "Rangpur": {
            distance: 400,
            boardingTime: "09:00 AM",
            arrivalTime: "11:00 AM",
            coachNum: "TR45323P",
            AC: true
        },
        "Comilla": {
            distance: 250,
            boardingTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            coachNum: "TC45353P",
            AC: false
        },
        "Narayanganj": {
            distance: 310,
            boardingTime: "11:00 AM",
            arrivalTime: "01:00 PM",
            coachNum: "TN45223P",
            AC: true
        },
        "Gazipur": {
            distance: 350,
            boardingTime: "12:00 PM",
            arrivalTime: "02:00 PM",
            coachNum: "TG45223P",
            AC: false
        },
        "Mymensingh": {
            distance: 380,
            boardingTime: "01:00 PM",
            arrivalTime: "03:00 PM",
            coachNum: "TM45223P",
            AC: true
        },
        "Jessore": {
            distance: 330,
            boardingTime: "02:00 PM",
            arrivalTime: "04:00 PM",
            coachNum: "TJ05223P",
            AC: false
        },
        "Cox's Bazar": {
            distance: 540,
            boardingTime: "03:00 PM",
            arrivalTime: "05:00 PM",
            coachNum: "TC45C23P",
            AC: true
        },
        "Bogra": {
            distance: 430,
            boardingTime: "04:00 PM",
            arrivalTime: "06:00 PM",
            coachNum: "TB4U223P",
            AC: false
        },
        "Dinajpur": {
            distance: 520,
            boardingTime: "05:00 PM",
            arrivalTime: "07:00 PM",
            coachNum: "TD452x3P",
            AC: true
        },
        "Saidpur": {
            distance: 540,
            boardingTime: "06:00 PM",
            arrivalTime: "08:00 PM",
            coachNum: "TS45523P",
            AC: false
        },
        "Nawabganj": {
            distance: 670,
            boardingTime: "07:00 PM",
            arrivalTime: "09:00 PM",
            coachNum: "TN49923P",
            AC: true
        },
        "Feni": {
            distance: 490,
            boardingTime: "08:00 PM",
            arrivalTime: "10:00 PM",
            coachNum: "TF4xx23P",
            AC: false
        },
        "Pabna": {
            distance: 510,
            boardingTime: "09:00 PM",
            arrivalTime: "11:00 PM",
            coachNum: "TP45213P",
            AC: true
        }
    }


};



export { travelData };








// const travelData = {

//     "Dhaka": {
//          "Dhaka": {
//             distance : 0,
//             boardingTime: "00:00 AM",
//             arrivalTime: "00:00 AM",
//           },

//         "Chittagong": {
//             distance : 245,
//             boardingTime: "09:00 AM",
//             arrivalTime: "11:00 AM"
//         },
//         "Khulna": {
//             distance : 133,
//             boardingTime: "10:00 AM",
//             arrivalTime: "12:00 PM"
//         },
//         "Rajshahi": {
//             distance : 191,
//             boardingTime: "11:00 AM",
//             arrivalTime: "01:00 PM"
//         },
//         "Sylhet": {
//             distance : 238,
//             boardingTime: "12:00 PM",
//             arrivalTime: "02:00 PM"
//         },
//         "Barisal": {
//             distance : 169,
//             boardingTime: "01:00 PM",
//             arrivalTime: "03:00 PM"
//         },
//         "Rangpur": {
//             distance : 304,
//             boardingTime: "02:00 PM",
//             arrivalTime: "04:00 PM"
//         },
//         "Comilla": {
//             distance : 97,
//             boardingTime: "03:00 PM",
//             arrivalTime: "05:00 PM"
//         },
//         "Narayanganj": {
//             distance : 16,
//             boardingTime: "04:00 PM",
//             arrivalTime: "06:00 PM"
//         },
//         "Gazipur": {
//             distance : 37,
//             boardingTime: "05:00 PM",
//             arrivalTime: "07:00 PM"
//         },
//         "Mymensingh": {
//             distance : 121,
//             boardingTime: "06:00 PM",
//             arrivalTime: "08:00 PM"
//         },
//         "Jessore": {
//             distance : 162,
//             boardingTime: "07:00 PM",
//             arrivalTime: "09:00 PM"
//         },
//         "Cox's Bazar": {
//             distance : 392,
//             boardingTime: "08:00 PM",
//             arrivalTime: "10:00 PM"
//         },
//         "Bogra": {
//             distance : 197,
//             boardingTime: "09:00 PM",
//             arrivalTime: "11:00 PM"
//         },
//         "Dinajpur": {
//             distance : 345,
//             boardingTime: "10:00 PM",
//             arrivalTime: "12:00 AM"
//         },
//         "Saidpur": {
//             distance : 360,
//             boardingTime: "11:00 PM",
//             arrivalTime: "01:00 AM"
//         },
//         "Nawabganj": {
//             distance : 289,
//             boardingTime: "12:00 AM",
//             arrivalTime: "02:00 AM"
//         },
//         "Feni": {
//             distance : 157,
//             boardingTime: "01:00 AM",
//             arrivalTime: "03:00 AM"
//         },
//         "Pabna": {
//             distance : 216,
//             boardingTime: "02:00 AM",
//             arrivalTime: "04:00 AM"
//         },
//         "Tangail": {
//             distance : 97,
//             boardingTime: "03:00 AM",
//             arrivalTime: "05:00 AM"
//         }
//         }   
// };