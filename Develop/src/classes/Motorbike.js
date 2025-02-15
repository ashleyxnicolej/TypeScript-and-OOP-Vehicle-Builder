"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Vehicle and Wheel classes
const Vehicle_js_1 = __importDefault(require("./Vehicle.js"));
const Wheel_js_1 = __importDefault(require("./Wheel.js"));
// TODO: The Motorbike class should extend the Vehicle class  //* COMPLETE! 
class Motorbike extends Vehicle_js_1.default {
    // TODO: Create a constructor that accepts the properties of the Motorbike class    //* COMPLETE! 
    constructor(vin, color, make, model, year, weight, topSpeed, wheels = []) {
        // TODO: The constructor should call the constructor of the parent class, Vehicle  //* COMPLETE! 
        super();
        // TODO: The constructor should initialize the properties of the Motorbike class    //* COMPLETE! 
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not    //* COMPLETE! 
        if (wheels.length !== 2) {
            this.wheels = [
                new Wheel_js_1.default(17, 'Default Brand'), // Default values for wheels
                new Wheel_js_1.default(17, 'Default Brand') // Default values ofr wheels 
            ];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the wheelie method     //* COMPLETE! 
    wheelie() {
        // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"   //* COMPLETE!  
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // TODO: Override the printDetails method from the Vehicle class      //* COMPLETE! 
    printDetails() {
        // TODO: The method should call the printDetails method of the parent class     //* COMPLETE! 
        super.printDetails();
        // TODO: The method should log the details of the Motorbike         //* COMPLETE! 
        // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels    //* COMPLETE! 
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Top Speed: ${this.topSpeed} km/h`);
        console.log(`Color: ${this.color}`);
        // Log the wheels details
        console.log(`Wheels:`);
        this.wheels.forEach((wheel, index) => {
            console.log(`  Wheel ${index + 1}: Diameter - ${wheel.getDiameter} inches, Brand - ${wheel.brand}`);
        });
    }
}
// Export the Motorbike class as the default export
exports.default = Motorbike;
