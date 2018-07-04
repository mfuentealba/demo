export class User{
    public gettoken:any;
    constructor(
        public _id:string,
        public nombre:string,
        public mail:string,
        public password:string,
        public contacto:string,
        public telefono:string,       
        public role:string        
    ){

    }
}