export interface RegisterType {
  name: string
  readname: string
  postCode: number;
  postNumber:string;
  address: string
  phone: string
  email: string
  birthday: string
  password: string
  recommandCode: string;
}

export interface UserDataType {
  name: string;
  readname:string;
  postNumber:string;
  address: string;
  phone: string;
  email:string;
  birthday:string;
  token: string;
}