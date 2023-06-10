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
