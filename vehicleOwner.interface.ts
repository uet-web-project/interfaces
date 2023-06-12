export interface IVehicleOwner {
  _id?: string;
  name: string;
  ownerType: string;
  cid?: string;
  dob: string;
  address: string;
  phoneNumber: string;
}

export const isIVehicleOwner = (obj: any): obj is IVehicleOwner => {
  return (
    obj &&
    obj.name &&
    obj.ownerType &&
    obj.dob &&
    obj.address &&
    obj.phoneNumber
  );
};
