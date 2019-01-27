// export class GivePost {
//     constructor(
//         public user{
//              name,
//              email,
//              location
//         },
//         public message: string
//     ) {}
// }

// export class GivePost {
//     constructor(
//         public name: string,
//         public email: string,
//         public location: string,
//         public message: string
//     ) {}
// }
export class GivePost {
    constructor(
        // public name: string,
        // public email: string,
        // public location: string,
        // public message: string
        public username: string,
        public useremail: string,
        public userlocation: string,
        public item: string,
        public quantity: number,
        public id: string,
        public posted: string,
        public status: string
    ) {}
    }

