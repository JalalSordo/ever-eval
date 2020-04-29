export class Email{
    id: number;
    constructor(
        public subject: string,
        public messageText: string
    ){}
}