"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Wheel class that defines the properties of a wheel
class Wheel {
    // Constructor for the Wheel class
    constructor(diameter = 18, brand, tireBrand = "GoodYear") {
        this.diameter = diameter;
        this.brand = brand;
        this.tireBrand = tireBrand;
    }
    // Getter methods for the properties of the Wheel class
    get getDiameter() {
        return this.diameter;
    }
    // Setter method for the diameter property
    set setDiameter(diameter) {
        this.diameter = diameter;
    }
    // Getter method for the tireBrand property
    get getTireBrand() {
        return this.tireBrand;
    }
}
// Export the Wheel class
exports.default = Wheel;
