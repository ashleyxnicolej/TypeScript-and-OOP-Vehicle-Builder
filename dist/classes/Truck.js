"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
const Vehicle_js_1 = __importDefault(require("./Vehicle.js"));
const Wheel_js_1 = __importDefault(require("./Wheel.js"));
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface   //** COMPLETE!
class Truck extends Vehicle_js_1.default {
    // TODO: Create a constructor that accepts the properties of the Truck class    //* COMPLETE! 
    constructor(vin, color, make, model, year, weight, topSpeed, wheels = [], towingCapacity) {
        // TODO: The constructor should call the constructor of the parent class, Vehicle   //* COMPLETE! 
        super();
        // TODO: The constructor should initialize the properties of the Truck class      //* COMPLETE!
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not  //* COMPLETE!
        this.wheels = wheels.length === 4 ? wheels : [
            new Wheel_js_1.default(20, 'Default Brand'),
            new Wheel_js_1.default(20, 'Default Brand'),
            new Wheel_js_1.default(20, 'Default Brand'),
            new Wheel_js_1.default(20, 'Default Brand')
        ];
    }
    // TODO: Implement the tow method from the AbleToTow interface      //* COMPLETE!   
    tow(vehicle) {
        // TODO: Get the make an model of the vehicle if it exists      //* COMPLETE! 
        console.log(`Attempting to tow ${vehicle.make} ${vehicle.model}...`);
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity  //* COMPLETE!
        if (vehicle.weight <= this.towingCapacity) {
            // TODO: If it is, log that the vehicle is being towed        //* COMPLETE!
            console.log(`${vehicle.make} ${vehicle.model} is being towed by ${this.make} ${this.model}.`);
        }
        // TODO: If it is not, log that the vehicle is too heavy to be towed    //* COMPLETE!
        else {
            console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed by ${this.make} ${this.model}.`);
        }
    }
    // TODO: Override the printDetails method from the Vehicle class      //* COMPLETE! 
    printDetails() {
        // TODO: The method should call the printDetails method of the parent class  //* COMPLETE!
        super.printDetails();
        // TODO: The method should log the details of the Truck   //* COMPLETE!
        // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels //*   COMPLETE!
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Top Speed: ${this.topSpeed} km/h`);
        console.log(`Color: ${this.color}`);
        console.log(`Towing Capacity: ${this.towingCapacity} kg`);
        // Log the wheels details here: 
        console.log(`Wheels:`);
        this.wheels.forEach((wheel, index) => {
            console.log(`  Wheel ${index + 1}: Diameter - ${wheel.getDiameter} inches, Brand - ${wheel.brand}`);
        });
    }
}
// Export the Truck class as the default export
exports.default = Truck;
