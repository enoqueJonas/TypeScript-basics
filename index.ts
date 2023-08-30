// Types
  // Primitive -> number, boolean, void, undefined, string, symbol, null
  const apples: number = 5; // Type annotation (We tell javaScript what is type of value the variable will hold)
  const myName: string = "Enoque";
  const isEnough: boolean = false;

  // Objects -> functions, arrays, objects, classes
  const date: Date = new Date();
  const colors: string[] = ['red', 'green', 'blue']

  class Car {}
  const car: Car = new Car();

  const point: { x: number; y: number } = {
    x: 10,
    y: 20,
  }

  const logNumber: (i: number) => void = (i) => {
    console.log(i)
  }

  // Interfaces

  interface Vehicle {``
    name: string,
    year: number,
    broken: boolean,
  }

  const oldVehicle = {
    name: 'civic',
    year: 2000,
    broken: true
  }

  const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle);
  }

  printVehicle(oldVehicle);
