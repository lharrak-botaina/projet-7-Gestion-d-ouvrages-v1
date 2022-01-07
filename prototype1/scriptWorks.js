class Work {
    #_id;
    #_title;
    #_author

    get id(){
        return this.#_id;
    }
    
    set id(value){
        this.#_id = value;
    }
    get author(){
        return this.#_author;
    }

    set author(value){
        this.#_author = value;
    }

    get title(){
        return this.#_title;
    }

    set title(value){
        this.#_title = value;
    }
}