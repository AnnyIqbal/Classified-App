var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ads = (function () {
    function Ads(priceOfObject, imageOfObject) {
        this.price = priceOfObject;
        this.image = imageOfObject;
    }
    return Ads;
}());
var Books = (function (_super) {
    __extends(Books, _super);
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    function Books(titleOfBook, authorOfBook, subjectOfBook, priceOfBook, img) {
        _super.call(this, priceOfBook, img);
        this.cName = "Books";
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
    }
    Books.prototype.display = function () {
        return ("<strong> Title: </strong> " + this.title + "<br /> <strong> Author: </strong>" + this.author + "<br /> <strong> Subject: </strong>" + this.subject);
    };
    return Books;
}(Ads));
var Cars = (function (_super) {
    __extends(Cars, _super);
    function Cars(nameOfCar, companyOfCar, modelOfCar, engineOfCar, colorOfCar, priceOfCar, img) {
        _super.call(this, priceOfCar, img);
        this.cName = "Cars";
        this.name = nameOfCar;
        this.company = companyOfCar;
        this.model = modelOfCar;
        this.engine = engineOfCar;
        this.color = colorOfCar;
    }
    Cars.prototype.display = function () {
        return ("<strong> Name: </strong>" + this.name + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Model: </strong>" + this.model + "<br /> <strong> Engine: </strong> " + this.engine + "cc <br /> <strong> Color: </strong>" + this.color);
    };
    return Cars;
}(Ads));
var Mobiles = (function (_super) {
    __extends(Mobiles, _super);
    function Mobiles(modelOfMobile, companyOfMobile, colorOfMobile, screenSizeOfMobile, priceOfMobile, img) {
        _super.call(this, priceOfMobile, img);
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
}(Ads));
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
]; // objects are pushed dynamically whenever a user posts ad
//console.log(ad[0]); // complete object {} jb k alert krane se it says object
//console.log(ad[0].x);
//alert(ad[0].x.display()); // the value returned by display
// alert(ad[0] instanceof Books); //false
//alert(ad[4].x instanceof Books); //true 
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
                '</div>'; // creates new panel for book
            // setting 3 ads per page
            if (i < 3) {
                document.getElementById("p1").innerHTML += a;
            }
            else if (i > 2 && i < 6) {
                document.getElementById("p2").innerHTML += a;
            }
            else if (i > 5) {
                document.getElementById("p3").innerHTML += a;
            }
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
            // setting 3 ads per page
            if (i < 3) {
                document.getElementById("p1").innerHTML += a;
            }
            else if (i > 2 && i < 6) {
                document.getElementById("p2").innerHTML += a;
            }
            else if (i > 5) {
                document.getElementById("p3").innerHTML += a;
            }
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
            // setting 3 ads per page
            if (i < 3) {
                document.getElementById("p1").innerHTML += a;
            }
            else if (i > 2 && i < 6) {
                document.getElementById("p2").innerHTML += a;
            }
            else if (i > 5) {
                document.getElementById("p3").innerHTML += a;
            }
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
function activatePage(id, tag) {
    switch (id) {
        case 'p1': {
            tag.parentElement.setAttribute("class", "active"); // set .active for #p1
            tag.parentElement.nextElementSibling.removeAttribute("class"); // remove .active from #p2
            tag.parentElement.nextElementSibling.nextElementSibling.removeAttribute("class"); // remove .active from #p3
            document.getElementById(id).className = "show"; // set .show for #p1
            document.getElementById("p2").className = "hidden"; //hide #p2
            document.getElementById("p3").className = "hidden"; //hide #p3
            break;
        }
        case 'p2': {
            tag.parentElement.setAttribute("class", "active"); // set .active for #p2
            tag.parentElement.nextElementSibling.removeAttribute("class"); // remove .active from #p3
            tag.parentElement.previousElementSibling.removeAttribute("class"); // remove .active from #p1
            document.getElementById(id).className = "show"; // set .show for #p2
            document.getElementById("p1").className = "hidden"; //hide #p1
            document.getElementById("p3").className = "hidden"; //hide #p3
            break;
        }
        case 'p3': {
            tag.parentElement.setAttribute("class", "active"); // set .active for #p3
            tag.parentElement.previousElementSibling.removeAttribute("class"); // remove .active from #p2
            tag.parentElement.previousElementSibling.previousElementSibling.removeAttribute("class"); // remove .active from #p3
            document.getElementById(id).className = "show"; // set .show for #p3
            document.getElementById("p1").className = "hidden"; //hide #p1
            document.getElementById("p2").className = "hidden"; //hide #p2
            break;
        }
        default: {
            alert("Error!");
        }
    }
}
