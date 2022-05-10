let users = [{
    id: 1,
    name: 'James',
    cars: [1, 2]
}, {
    id: 2,
    name: 'Jim',
    cars: []
}, {
    id: 3,
    name: 'Jamie',
    cars: [3]
}];

let cars = [{
    id: 1,
    make: 'Tesla',
    model: 'Model S',
    color: 'black',
    ownedBy: 1
}, {
    id: 2,
    make: 'Faraday',
    model: 'FF 91',
    color: 'red',
    ownedBy: 1
}, {
    id: 3,
    make: 'Lucid',
    model: 'Air',
    color: 'apple',
    ownedBy: 3
}];

module.exports = {
    users,
    cars
};