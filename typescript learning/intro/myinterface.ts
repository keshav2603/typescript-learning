

// interface user{
//     name:string,
//     id:number,
//     gmail:string,
//     // getuser():string,
//     getuserid(ide:number):number
// };

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

class user{
    readonly city ="banglore";
    constructor(
        public email:string,
        public name:string,
            ){
    } 
}
const keshav=new user("@example.com","keshav");


export{}