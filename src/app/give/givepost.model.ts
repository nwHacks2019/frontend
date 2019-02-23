export class GivePost {

    user_name: string;
    user_email: string;
    user_location: string;
    item: string;
    quantity: number;
    id: string;
    posted: string;
    status: string;

    constructor(
        user_name: string,
        user_email: string,
        user_location: string,
        item: string,
        quantity: number
    ) {
        this.user_name = user_name;
        this.user_email = user_email;
        this.user_location = user_location;
        this.item = item;
        this.quantity = quantity;
    };

    copy() {
        let cpy = new GivePost(
            this.user_name,
            this.user_email,
            this.user_location,
            this.item,
            this.quantity
        );
        cpy.id = this.id;
        cpy.posted = this.posted;
        cpy.status = this.status;
        return cpy;
    }
}

