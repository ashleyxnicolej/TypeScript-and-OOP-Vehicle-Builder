// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  public brand: string;
  private tireBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, brand: string, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.brand = brand;
    this.tireBrand = tireBrand;
  }

  // Getter methods for the properties of the Wheel class
  get getDiameter(): number {
    return this.diameter;
  }

  // Setter method for the diameter property
  set setDiameter(diameter: number) {
    this.diameter = diameter;
  }

  // Getter method for the tireBrand property
  get getTireBrand(): string {
    return this.tireBrand;
  }
}

// Export the Wheel class
export default Wheel;
