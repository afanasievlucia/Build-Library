    // parent class
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = true;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    set isCheckedOut(newChecked) {
        this._isCheckedOut = newChecked;
    }
    get ratings() {
        return this._ratings;
    }
    set ratings(newRating) {
        this._ratings = newRating;
    }
    getAverageRating() {
        const average = this._ratings.reduce((a, b) => a + b) / this._ratings.length;
        return average;
    }
    /* { let total = 0;
        for ( let i = 0; i < this._ratings.length; i++) {
            total += this._ratings[i];
            }
        let average = total / this._ratings.length;
            return average; }*/   //--- longer version

    toggleCheckOutStatus() {
       // this._isCheckedOut === true ? this._isCheckedOut = false : this._isCheckedOut = true;
        this._isCheckedOut = ! this._isCheckedOut;
    }
    addRating(rating) {
        this._ratings.push(rating);
    }
}
    // child classes
class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    set author(newAuthor) {
        this._author = newAuthor;
    }
    get pages() {
        return this._pages;
    }
    set pages(num) {
        this._pages = num;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    set director(name) {
        this._director = name;
    }
    get runTime() {
        return this._runTime;
    }
    set runTime(time) {
        this._runTime = time;
    }
}

class CD extends Media {
    constructor(title, artist) {
        super(title);
        this._artist = artist;
        this._songs = [];
    }
    get artist() {
        return this._artist; 
    }
    set artist(artName) {
        this._artist = artName;
    }
    get songs() {
        return this._songs;
    }
    set songs(song) {
        this._songs = song;
    }
    addSongs(songtitle) {
        this._songs = songtitle;
    }
}

const book = new Book("Creierul copilului tau", "Daniel J. Siegel", "224 pag.");
book.addRating(5);
book.addRating(4);
book.addRating(4.5);
console.log(book);
console.log(book.getAverageRating());

const movie1 = new Movie("Sweet November", "Pat O'Connor", "120 min");
movie1.addRating(5);
movie1.addRating(4.3);
movie1.addRating(4.8);
console.log(movie1);
console.log(movie1.toggleCheckOutStatus());
console.log(movie1.getAverageRating());


const newCD = new CD("Nirvana", "INNA");
newCD.addRating(5);
newCD.addRating(4.9);
newCD.addRating(5);
console.log(newCD);
console.log(newCD.toggleCheckOutStatus());
newCD.addSongs(["Nirvana", "Ruleta", "Heaven"]);
console.log(newCD);