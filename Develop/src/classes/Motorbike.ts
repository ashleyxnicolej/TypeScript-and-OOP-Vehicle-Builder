// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class  //* COMPLETE! 
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class          //* COMPLETE! 
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels  //* COMPLETE! 
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])  //* COMPLETE! 
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];




  // TODO: Create a constructor that accepts the properties of the Motorbike class    //* COMPLETE! 
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {

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
        new Wheel(17, 'Default Brand'),             // Default values for wheels
        new Wheel(17, 'Default Brand')              // Default values ofr wheels 
      ];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the wheelie method     //* COMPLETE! 
    wheelie(): void {
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"   //* COMPLETE!  
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // TODO: Override the printDetails method from the Vehicle class      //* COMPLETE! 
    override printDetails(): void {
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
export default Motorbike;
