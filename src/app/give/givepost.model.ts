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
        public user_name: string,
        public user_email: string,
        public user_location: string,
        public item: string,
        public quantity: number,
        public id: string,
        public posted: string,
        public status: string
    ) {}
}

