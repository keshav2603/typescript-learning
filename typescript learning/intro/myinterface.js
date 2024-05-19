"use strict";
// interface user{
//     name:string,
//     id:number,
//     gmail:string,
//     // getuser():string,
//     getuserid(ide:number):number
// };
Object.defineProperty(exports, "__esModule", { value: true });
// const keshav:user = {
//     name: 'Keshav',
//     id: 2603,
//     gmail: 'example@example.com',
//     getuserid: (ide:1)=>{
//         return  ide;
//     }
// };  
// interface admin extends user{
// }
var user = /** @class */ (function () {
    function user(email, name) {
        this.email = email;
        this.name = name;
        this.city = "banglore";
    }
    return user;
}());
var keshav = new user("@example.com", "keshav");
