export interface IRegistrationCenter {
  _id?: string;
  centerId: string;
  password: string;
  name: string;
  provinceCode: number;
  districtCode: number;
  location: string;
  fullAdress?: string;
  phoneNumber: string;
  registrationDep: string;
}

export const isIRegistrationCenter = (obj: any): obj is IRegistrationCenter => {
  return (
    obj &&
    obj.centerId &&
    obj.password &&
    obj.name &&
    obj.provinceCode &&
    obj.districtCode &&
    obj.location &&
    obj.phoneNumber &&
    obj.registrationDep
  );
};
