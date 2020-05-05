export enum Role {
  Default = "Select your role",
  Hr = "HR",
  Evaluator = "EVALUATOR",
  Admin = "ADMIN"
}
export class Staff {
  id: number;
  firstName: string;
  lastName: string;
  mail: string;
  role: Role;
  password: string;
  //picture: string;
  jwttoken:any;
 

  constructor(firstName: string, lastName: string, mail: string, role: Role, password: string) { }

}
