// Cnstructor function that creates a new object
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Add a method called getDescription to the Car prototype, which returns a string containing information about the car.
    getDescription() {
        return `Car: ${this.make} ${this.model}, Year: ${this.year}`;
    }
}

// Defines a function as a subclass of Car. Includes property that represents the range of the electric car in miles.
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }

    // Prototype overrides the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.
    getDescription() {
        return `Electric Car: ${this.make} ${this.model}, Year: ${this.year}, Range: ${this.range} miles`;
    }
}

// Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.
const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myElectricCar.getDescription());
