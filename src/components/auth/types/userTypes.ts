export interface RegisterType {
  name: string
  readname: string
  postCode: number;
  password: string;
  passwordConfirm:string;
  address: string;
  detailAddress:string;
  phone: string;
  email: string;
  birthday: string;
}
export interface SigninType {
  email:string;
  password:string;
}

export interface Token {
  refreshToken:string
  accessToken: string;
  expiresIn:number;
  accessTokenExpiredDate:number;
  refreshTokenExpiredDate:number;
}

// "address": "string",
//   "birthday": "string",
//   "checkedPassWord": "string",
//   "email": "string",
//   "name": "string",
//   "password": "string",
//   "phone": "string",
//   "postCode": 0,
//   "readname": "string"