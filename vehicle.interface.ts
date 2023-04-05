export interface IVehicle {
  _id?: string;
  registrationNumber: string;
  registrationDate: string;
  registrationLocation: string;
  licensePlate: string;
  vehicleOwner: string;
  manufacturer: string;
  model: string;
  version: string;
  purpose: string;
  width: number;
  height: number;
  groundClearance: number;
  cylinderCapacity: number;
  torque: number;
  gearbox: number;
  registrationCenter: string;
}
