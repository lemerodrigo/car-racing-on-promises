'use strict';

let data = [
    {
        id: 1,
        name: 'Herbi 53e',
        lapTime: 6, // Lap time in seconds.
        crashes: false,
    },
    {
        id: 2,
        name: 'McQueen',
        lapTime: 2, // Lap time in seconds.
        crashes: false,
    },
    {
        id: 3,
        name: 'Chick Hicks',
        lapTime: 4, // Lap time in seconds.
        crashes: false,
    },
    {
        id: 4,
        name: 'Luigi',
        lapTime: 8, // Lap time in seconds.
        crashes: true,
    },
];

// Normalizing data to set lapTime for each cars to miliseconds.
data = data.map((car) => {
    car.lapTime = car.lapTime * 1000;
    return car;
});

// The strucutre that will have all our promises/that will control our cars.
let carsMonitor = [];

// Starting race.
console.log('');
console.log('########## Starting race ##########');
console.log('-----------------------------------');
console.log('');

// Creating the promises.
data.forEach((car) => {
    carsMonitor.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(car);
        }, car.lapTime);
    }));
});

// Regular race.
carsMonitor.forEach((promise) => {
    promise.then((car) => {
        console.log(car.name + ' arrived.');
    });
});

// The race is over.
Promise.all(carsMonitor).then(() => {
    console.log('');
    console.log('######## The race is over ########');
    console.log('');
});

// Champion.
// Promise.race(carsMonitor).then((obj) => {
//     console.log(obj.name + ' was the first to arrive. We have a champion! \\o/');
// });