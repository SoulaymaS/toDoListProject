export class Task {

    constructor(
        public _id: number,
        public nom: string,
        public date: Date,
        public status: string
    ) { }
}