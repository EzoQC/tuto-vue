class ToDo {
    constructor(doWhat, done) {
        this.id = new Date().getTime();
        this.what = doWhat;
        this.done = done;
    }
}

export default ToDo