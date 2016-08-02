var Books = (function () {
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    function Books(titleOfBook, authorOfBook, subjectOfBook, priceOfBook, img) {
        this.cName = "Books";
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
        this.price = priceOfBook;
        this.image = img;
    }
    Books.prototype.display = function () {
        return ("<strong> Title: </strong> " + this.title + "<br /> <strong> Author: </strong>" + this.author + "<br /> <strong> Subject: </strong>" + this.subject);
    };
    return Books;
}());
var Cars = (function () {
    function Cars(nameOfCar, companyOfCar, modelOfCar, engineOfCar, colorOfCar, priceOfCar, img) {
        this.cName = "Cars";
        this.name = nameOfCar;
        this.company = companyOfCar;
        this.model = modelOfCar;
        this.engine = engineOfCar;
        this.color = colorOfCar;
        this.price = priceOfCar;
        this.image = img;
    }
    Cars.prototype.display = function () {
        return ("<strong> Name: </strong>" + this.name + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Model: </strong>" + this.model + "<br /> <strong> Engine: </strong> " + this.engine + "cc <br /> <strong> Color: </strong>" + this.color);
    };
    return Cars;
}());
var Mobiles = (function () {
    function Mobiles(modelOfMobile, companyOfMobile, colorOfMobile, screenSizeOfMobile, priceOfMobile, img) {
        this.cName = "Mobiles";
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
        this.image = img;
    }
    Mobiles.prototype.display = function () {
        return ("<strong> Model: </strong>" + this.model + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Color: </strong>" + this.color + "<br /> <strong> Screen Size: </strong>" + this.screenSize);
    };
    return Mobiles;
}());
// var book1 = new Books("HTML", "Ducket", "HTML", 1200); // creating new instance (i.e.object) of a class
var ad = [
    { x: new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "Images/htmlcss.png") },
    { x: new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "Images/git.png") },
    { x: new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "Images/j1.jpg") },
    { x: new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "Images/js.png") },
    { x: new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "Images/vitz.jpg") },
    { x: new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "Images/corolla.jpg") },
    { x: new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "Images/cheryqq.jpg") },
    { x: new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "Images/S1.png") },
    { x: new Mobiles("E8-2", "htc", "black", 5, 27000, "Images/htc.jpg") }
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
                '<h3 class="panel-title">' +
                +ad[i].x.subject +
                '</h3>' +
                '</div>' +
                '<div class="panel-body row">' +
                '<div class= "col-sm-4">' +
                '<img src=' + ad[i].x.image + ' alt="book" height="100" width="100" />' +
                '</div>' +
                '<div class="col-sm-8">' +
                ad[i].x.display() +
                '</div>' +
                '</div>' +
                '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
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
                '<div class="panel-body row">' +
                '<div class= "col-sm-4">' +
                '<img src=' + ad[i].x.image + ' alt="car" height="100" width="100" />' +
                '</div>' +
                '<div class="col-sm-8">' +
                ad[i].x.display() +
                '</div>' +
                '</div>' +
                '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
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
                '<div class="panel-body row">' +
                '<div class= "col-sm-4">' +
                '<img src=' + ad[i].x.image + ' alt="mobile" height="100" width="100" />' +
                '</div>' +
                '<div class="col-sm-8">' +
                ad[i].x.display() +
                '</div>' +
                '</div>' +
                '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
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
for (var i = 0; i < ad.length; i++) {
    var classDeterminator = ad[i].x.cName; // returns class name
    if (classDeterminator === "Books") {
        showBook = '<div class="panel panel-primary">' +
            '<div class="panel-heading">' +
            '<h3 class="panel-title" id="title">' +
            ad[i].x.subject +
            '</h3>' +
            '</div>' +
            '<div class="panel-body row">' +
            '<div class= "col-sm-4">' +
            '<img src=' + ad[i].x.image + ' alt="book" height="100" width="100" />' +
            '</div>' +
            '<div class="col-sm-8">' +
            ad[i].x.display() +
            '</div>' +
            '</div>' +
            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
            '</div>'; // creating new panel with title and content for book 
        document.getElementById("books").innerHTML += showBook;
    }
}
// display the Cars tab
var showCar;
for (var i = 0; i < ad.length; i++) {
    var classDeterminator = ad[i].x.cName; // returns class name
    if (classDeterminator === "Cars") {
        showCar = '<div class="panel panel-primary">' +
            '<div class="panel-heading">' +
            '<h3 class="panel-title" id="title">' +
            ad[i].x.name +
            '</h3>' +
            '</div>' +
            '<div class="panel-body row">' +
            '<div class= "col-sm-4">' +
            '<img src=' + ad[i].x.image + ' alt="car" height="100" width="100" />' +
            '</div>' +
            '<div class="col-sm-8">' +
            ad[i].x.display() +
            '</div>' +
            '</div>' +
            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
            '</div>'; // creating new panel with title and content for car
        document.getElementById("cars").innerHTML += showCar;
    }
}
// display the Mobiles tab
var showMobile;
for (var i = 0; i < ad.length; i++) {
    var classDeterminator = ad[i].x.cName; // returns class name
    if (classDeterminator === "Mobiles") {
        showMobile = '<div class="panel panel-primary">' +
            '<div class="panel-heading">' +
            '<h3 class="panel-title" id="title">' +
            ad[i].x.company + ' ' + ad[i].x.model +
            '</h3>' +
            '</div>' +
            '<div class="panel-body row">' +
            '<div class= "col-sm-4">' +
            '<img src=' + ad[i].x.image + ' alt="mobile" height="100" width="100" />' +
            '</div>' +
            '<div class="col-sm-8">' +
            ad[i].x.display() +
            '</div>' +
            '</div>' +
            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
            '</div>'; // creating new panel with title and content for mobile
        document.getElementById("mobiles").innerHTML += showMobile;
    }
}
