// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well   //** COMPLETE!
  vehicles: (Car | Truck | Motorbike)[];

  // TODO: You will need to use the Union operator to define additional types for the array   //! Review this please
  // TODO: See the AbleToTow interface for an example of how to use the Union operator

  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // TODO: Update the constructor to accept Truck and Motorbike objects as well  //** COMPLETE!
  constructor(vehicles: (Car  | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // TODO: Update the choices array to include Truck and Motorbike  //** COMPLETE!
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        }
        // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type      //** COMPLETE!
        else if (answers.vehicleType === 'Truck') {
        this.createTruck();                                   //creating truck here
        } else if (answers.vehicleType === 'Motorbike') {
        this.createMotorbike();                               //creating motorbike here
        }

      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!  //* COMPLETE!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Truck constructor    //* COMPLETE!
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year, 10),
          parseInt(answers.weight, 10),
          parseInt(answers.topSpeed, 10),
          [new Wheel(20, "BrandA"), new Wheel(20, "BrandA"), new Wheel(20, "BrandA"), new Wheel(20, "BrandA")],
          parseInt(answers.towingCapacity, 10)
        );
        
        // TODO: push the truck to the vehicles array                     //* COMPLETE! 
        this.vehicles.push(truck);
        // TODO: set the selectedVehicleVin to the vin of the truck      //* COMPLETE!
        this.selectedVehicleVin = truck.vin;
        // TODO: perform actions on the truck                            //* COMPLETE!
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Motorbike constructor  //** COMPLETE!
        const wheels: Wheel[] = [new Wheel(18, "BrandA")];
        const frontWheel = new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand);
        const rearWheel = new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand);

        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [frontWheel, rearWheel]
        );

        // TODO: push the motorbike to the vehicles array     //** COMPLETE!
        this.vehicles.push(motorbike);

        // TODO: set the selectedVehicleVin to the vin of the motorbike     //** COMPLETE!
        this.selectedVehicleVin = motorbike.vin;

        // TODO: perform actions on the motorbike       //** COMPLETE!
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object       //* COMPLETE!
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTowVin',
          message: 'Select a vehicle to tow',
          choices: this.vehicles
          .filter((vehicle) => vehicle.vin !== truck.vin)     // Excluding the truck itself here: 
          .map((vehicle) => ({
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            })),
          },
      ])
      .then((answers) => {
        const vehicleToTow = this.vehicles.find(
          (vehicle) => vehicle.vin === answers.vehicleToTowVin
      );
        // TODO: check if the selected vehicle is the truck
        if (vehicleToTow instanceof Truck) {


        // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
        console.log("Invalid selection. Please try again.");              // Enables user to pick another action here: 
        return this.findVehicleToTow(truck);                              // Restarting prompt here: 
        }

        // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
        if (vehicleToTow) {
          console.log(
            `${truck.make} ${truck.model} is now towing ${vehicleToTow.make} ${vehicleToTow.model}.`
          );
    
          truck.tow(vehicleToTow);                              // Calling the tow method on the truck here:
        } else {
          console.log("Selected vehicle to tow not found.");
        }
  
        this.performActions();                               // Allowing the user to pick another action here:
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie         //** COMPLETE!
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow a vehicle',    // Added tow option here (only for trucks):
            'Do a wheelie',     // Added wheelie option here (only for motorbikes):
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        const selectedVehicle = this.vehicles.find(
          (vehicle) => vehicle.vin === this.selectedVehicleVin
        );
        // perform the selected action
        if (!selectedVehicle) {
          console.log("No vehicle selected. Please try again.");
          return this.chooseVehicle();
        }
          // find the selected vehicle and print its details
          switch (answers.action) {
            case 'Print details':
              selectedVehicle.printDetails();
              break;

          // find the selected vehicle and start it
            case 'Start vehicle':
              selectedVehicle.start();
              break;

          // find the selected vehicle and accelerate it by 5 MPH
            case 'Accelerate 5 MPH':
              selectedVehicle.accelerate(5);
              break;

          // find the selected vehicle and decelerate it by 5 MPH
            case 'Decelerate 5 MPH':
              selectedVehicle.decelerate(5);
              break;

          // find the selected vehicle and stop it
            case 'Stop vehicle':
              selectedVehicle.stop();
              break;

          // find the selected vehicle and turn it right
            case 'Turn right':
              selectedVehicle.turn('right');
              break;
  
          // find the selected vehicle and turn it left
            case 'Turn left':
              selectedVehicle.turn('left');
              break;

          // find the selected vehicle and reverse it
            case 'Reverse':
              selectedVehicle.reverse();
              break;
  
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.  //* COMPLETE!
            case 'Tow a vehicle':
              if (selectedVehicle instanceof Truck) {              // Perform towing only if the selected vehicle is a truck
                return this.findVehicleToTow(selectedVehicle);      // Call and return to prevent auto-loop
              } else {
                console.log("Only trucks can tow other vehicles.");
              }
              break;


        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike    //** COMPLETE!
            case 'Do a wheelie':
        
              if (selectedVehicle instanceof Motorbike) {               // Perform wheelie only if the selected vehicle is a motorbike
                  selectedVehicle.wheelie();
              } else {
                console.log("Only motorbikes can perform a wheelie.");
              }
              break;


          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
            case 'Select or create another vehicle':
              this.startCli();
              return;
    
          // exit the cli if the user selects exit
            case 'Exit':
              this.exit = true;
              return;
          }
          // if the user does not want to exit, perform actions on the selected vehicle
          if (!this.exit) {
            this.performActions();
          }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
