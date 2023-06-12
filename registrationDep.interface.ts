export interface IRegistrationDep {
  _id?: string;
  depId: string;
  password: string;
  name: string;
}

export const isIRegistrationDep = (obj: any): obj is IRegistrationDep => {
  return obj && obj.depId && obj.password && obj.name;
};
