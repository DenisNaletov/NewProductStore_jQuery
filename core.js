class Product{
    #id;
    #title;
    #manufacture;
    #price;

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get manufacture() {
        return this.#manufacture;
    }

    get price() {
        return this.#price;
    }

    constructor(id, title, manufacture, price) {
        this.#id = id;
        this.#title = title;
        this.#manufacture = manufacture;
        this.#price = price;
    }
}
class Milk extends Product {
    #fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.#fat = fat;
    }
    get fat() {
        return this.#fat;
    }
}

class Chocolate extends Product{
    #kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.#kind = kind;
    }

    get kind() {
        return this.#kind;
    }
}
class Wine extends Product {
    #alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this.#alcohol = alcohol;
    }

    get alcohol() {
        return this.#alcohol;
    }
}
class Store {
    #products = [];

    add(product){
        this.#products.push(product);
    };
    getAll(){
        return this.#products;
    };
    getByType(type){
        return this.#products.filter( value => value.constructor.name === type)
    };
}

const milk1 = new Milk(123,'Milk1','Man1', 10, 4);
const chocolate1 = new Chocolate(124, 'Choc1', 'Man2',12,'dark');
const wine1 = new Wine(125,'Wine1','Man3',35,15);
const wine2 = new Wine(126,'Wine2','Man3',40,15);

const store = new Store();
store.add(milk1);
store.add(chocolate1);
store.add(wine1);
store.add(wine2);
console.log(store.getAll());
console.log(store.getByType('Wine'));
