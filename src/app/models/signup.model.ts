export class SignUp{
    name:string;
    email:string;
    password:string;
    verifyPassword:string;

    constructor(name:string, password:string, email:string, verifyPassword:string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.verifyPassword = verifyPassword;
    }
}