var Books = (function () {
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    function Books(titleOfBook, authorOfBook, subjectOfBook, priceOfBook) {
        this.cName = "Books";
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
        this.price = priceOfBook;
    }
    Books.prototype.display = function () {
        return ("Title: " + this.title + "<br /> Author: " + this.author + "<br /> Subject: " + this.subject + "<br /> Price: Rs. " + this.price + "<br /><br />");
    };
    return Books;
}());
var Cars = (function () {
    function Cars(nameOfCar, companyOfCar, modelOfCar, engineOfCar, colorOfCar, priceOfCar) {
        this.cName = "Cars";
        this.name = nameOfCar;
        this.company = companyOfCar;
        this.model = modelOfCar;
        this.engine = engineOfCar;
        this.color = colorOfCar;
        this.price = priceOfCar;
    }
    Cars.prototype.display = function () {
        return ("Name: " + this.name + "<br /> Company: " + this.company + "<br /> Model: " + this.model + "<br /> Engine: " + this.engine + "cc <br /> Color: " + this.color + "<br /> Price: Rs. " + this.price + "<br /><br />");
    };
    return Cars;
}());
var Mobiles = (function () {
    function Mobiles(modelOfMobile, companyOfMobile, colorOfMobile, screenSizeOfMobile, priceOfMobile) {
        this.cName = "Mobiles";
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
    }
    Mobiles.prototype.display = function () {
        return ("Model: " + this.model + "<br /> Company: " + this.company + "<br /> Color: " + this.color + "<br /> Screen Size: " + this.screenSize + ' "<br /> Price: Rs. ' + this.price + "<br /><br />");
    };
    return Mobiles;
}());
// var book1 = new Books("HTML", "Ducket", "HTML", 1200); // creating new instance (i.e.object) of a class
var ad = [
    { x: new Books("HTML & CSS", "Ducket", "HTML & CSS", 200) },
    { x: new Books("Git Essentials", "Ducket", "Git", 700) },
    { x: new Books("JavaScript", "John Doe", "JavaScript", 500) },
    { x: new Cars("Vitz", "Honda", 2016, 1200, "black", 500000) },
    { x: new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000) },
    { x: new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000) },
    { x: new Mobiles("S1", "Qmobile", "black", 5, 11000) },
    { x: new Mobiles("J1-Ace", "Samsung", "blue", 4.5, 19000) },
    { x: new Mobiles("X90", "Motorolla", "white", 5, 27000) }
];
//console.log(ad[0]); // complete object {} jb k alert krane se it says object
//console.log(ad[0].x);
//alert(ad[0].x.display()); // the value returned by display
// alert(ad[0] instanceof Books); //false
//alert(ad[0].book instanceof Books); //true
//alert(ad[4].x instanceof Books); //true for the later array
//alert(typeof ad[0].x); // object     
//alert(ad[0].x.cName); // yupieeeeee i got it !! :D className mil gya i.e. Books
// display the All tab
var a;
for (var i = 0; i < ad.length; i++) {
    var classDeterminator = ad[i].x.cName; // returns class name 
    switch (classDeterminator) {
        case 'Books': {
            a = '<div class="panel panel-primary">' +
                '<div class="panel-heading">' +
                '<h3 class="panel-title" id="title">' +
                ad[i].x.subject +
                '</h3>' +
                '</div>' +
                '<div class="panel-body" id="content">' +
                ad[i].x.display() +
                '</div>' +
                '</div>'; // creates new panel for book
            document.getElementById("all").innerHTML += a;
            break;
        }
        case 'Cars': {
            a = '<div class="panel panel-primary">' +
                '<div class="panel-heading">' +
                '<h3 class="panel-title" id="title">' +
                ad[i].x.name +
                '</h3>' +
                '</div>' +
                '<div class="panel-body" id="content">' +
                ad[i].x.display() +
                '</div>' +
                '</div>'; // creates new panel for car
            document.getElementById("all").innerHTML += a;
            break;
        }
        case 'Mobiles': {
            a = '<div class="panel panel-primary">' +
                '<div class="panel-heading">' +
                '<h3 class="panel-title" id="title">' +
                ad[i].x.company + ' ' + ad[i].x.model +
                '</h3>' +
                '</div>' +
                '<div class="panel-body" id="content">' +
                ad[i].x.display() +
                '</div>' +
                '</div>'; // creates new panel for mobile
            document.getElementById("all").innerHTML += a;
            break;
        }
        default: {
            alert("Error!"); // yahan pohnchenge hi nhi hopefully
        }
    } // switch ends
} // for-loop ends
// display the Books tab
var showBook;
for (var i = 0; i <= 2; i++) {
    showBook = '<div class="panel panel-primary">' +
        '<div class="panel-heading">' +
        '<h3 class="panel-title" id="title">' +
        ad[i].x.subject +
        '</h3>' +
        '</div>' +
        '<div class="panel-body" id="content">' +
        ad[i].x.display() +
        '</div>' +
        '</div>'; // creating new panel with title and content for book 
    document.getElementById("books").innerHTML += showBook;
}
// display the Cars tab
var showCar;
for (var i = 3; i <= 5; i++) {
    showCar = '<div class="panel panel-primary">' +
        '<div class="panel-heading">' +
        '<h3 class="panel-title" id="title">' +
        ad[i].x.name +
        '</h3>' +
        '</div>' +
        '<div class="panel-body" id="content">' +
        ad[i].x.display() +
        '</div>' +
        '</div>'; // creating new panel with title and content for car
    document.getElementById("cars").innerHTML += showCar;
}
// display the Mobiles tab
var showMobile;
for (var i = 6; i <= 8; i++) {
    showMobile = '<div class="panel panel-primary">' +
        '<div class="panel-heading">' +
        '<h3 class="panel-title" id="title">' +
        ad[i].x.company + ' ' + ad[i].x.model +
        '</h3>' +
        '</div>' +
        '<div class="panel-body" id="content">' +
        ad[i].x.display() +
        '</div>' +
        '</div>'; // creating new panel with title and content for mobile
    document.getElementById("mobiles").innerHTML += showMobile;
}
