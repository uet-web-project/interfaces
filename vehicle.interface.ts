export interface IVehicle {
  _id?: string;
  vin: string;
  registrationNumber: string;
  vehicleType: string;
  registrationDate: string;
  registrationExpirationDate?: string;
  registrationLocation: string;
  licensePlate: string;
  vehicleOwnerCid: string;
  manufacturer: string;
  model: string;
  version: string;
  purpose: string;
  width: number;
  length: number;
  wheelBase: number;
  emission: number;
  mileage: number;
  registrationCenterId: string;
}
