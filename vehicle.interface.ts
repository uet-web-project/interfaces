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

export const isIVehicle = (obj: any): obj is IVehicle => {
  return (
    obj &&
    obj.vin &&
    obj.registrationNumber &&
    obj.vehicleType &&
    obj.registrationDate &&
    obj.registrationLocation &&
    obj.licensePlate &&
    obj.vehicleOwnerCid &&
    obj.manufacturer &&
    obj.model &&
    obj.version &&
    obj.purpose &&
    obj.width &&
    obj.length &&
    obj.wheelBase &&
    obj.emission &&
    obj.mileage &&
    obj.registrationCenterId
  );
};
