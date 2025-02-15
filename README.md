# TypeScript-and-OOP-Vehicle-Builder
Vehicle Builder CLI is a TypeScript-based command-line application that allows users to create and interact with different types of vehicles—cars, trucks, and motorbikes. Built with Object-Oriented Programming (OOP) principles, the app lets users enter vehicle details, store them, and perform unique actions with each type. 🚗 🚚 🏍️

##📌 Features
Create Trucks, Cars, and Motorbikes with unique properties.
Implement towing capabilities for trucks.
Uses TypeScript classes and interfaces for structured object-oriented programming.
Enforces type safety with TypeScript.
Follows best practices in object-oriented programming (OOP)

## 🛠 Installation
1. Clone the Repository
git clone <your-repository-url>
cd <your-repository-name>

2. Install Dependencies
npm install

3. Run the Application
npm start


##🏗 Project Structure
pgsql
Copy
Edit
.
├── src/
│   ├── classes/
│   │   ├── Vehicle.ts
│   │   ├── Car.ts
│   │   ├── Motorbike.ts
│   │   ├── Truck.ts
│   │   ├── Wheel.ts
│   │   ├── Cli.ts
│   ├── interfaces/
│   │   ├── AbleToTow.ts
│   ├── index.ts
├── dist/  (compiled output)
├── package.json
├── tsconfig.json
└── README.md


## 📜 How to Use
Run the CLI and follow the prompts to create a Truck, Car, or Motorbike.
Enter details such as VIN, make, model, year, weight, and more.
For trucks, assign a towing capacity and attempt to tow another vehicle.
View detailed vehicle information using the printDetails() method.

## DEMO URL video: 
https://www.loom.com/share/ca9d298e7de54277bc1c493419f6fe2b?sid=4e56ee13-1ea0-4768-af55-4b0c8341a50b


## 🚀 Technologies Used
TypeScript for static typing
Node.js for runtime execution
Object-Oriented Programming (OOP) principles
npm for package management

## 🐞 Troubleshooting
If you encounter a TypeScript error (e.g., Argument of type 'number' is not assignable to parameter of type 'Wheel[]'), ensure the constructor arguments in Truck.ts are correctly ordered.

## 📜 License
This project is open-source and available under the MIT License.
