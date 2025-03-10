"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Vehicle and Wheel classes
const Vehicle_js_1 = __importDefault(require("./Vehicle.js"));
const Wheel_js_1 = __importDefault(require("./Wheel.js"));
// Car class that extends Vehicle class
class Car extends Vehicle_js_1.default {
    // Constructor for the Car class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        // Call the constructor of the parent class, Vehicle
        super();
        // Initialize properties of the Car class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 4 elements
        // If not, create 4 new Wheel objects
        // Otherwise, use the provided wheels array
        if (wheels.length !== 4) {
            this.wheels = [
                new Wheel_js_1.default(18, "BrandA", "GoodYear"),
                new Wheel_js_1.default(18, "BrandA", "GoodYear"),
                new Wheel_js_1.default(18, "BrandA", "GoodYear"),
                new Wheel_js_1.default(18, "BrandA", "GoodYear")
            ];
        }
        else {
            this.wheels = wheels;
        }
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        // Call the printDetails method of the parent class, Vehicle
        super.printDetails();
        // Print details of the Car class
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        // Print details of the wheels
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
        console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
        console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
    }
}
// Export the Car class as the default export
exports.default = Car;
