/**
 * Ads
 */
class Ads {
    cName : string;
    price: number;
    image: string;

    constructor(priceOfObject: number, imageOfObject: string) {
        this.price = priceOfObject;
        this.image = imageOfObject;
    }
}

class Books extends Ads{ 
    cName = "Books";
    title : string;
    author : string;
    subject : string;
    
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    constructor(titleOfBook: string, authorOfBook: string, subjectOfBook: string, priceOfBook: number, img: string) {
        super(priceOfBook, img);
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
    }

    display(): string { //returns all attributes with html wrapping
        return ("<strong> Title: </strong> " + this.title + "<br /> <strong> Author: </strong>" + this.author + "<br /> <strong> Subject: </strong>" + this.subject);
    }
}

class Cars extends Ads {
    cName = "Cars";
    name : string;
    company : string;
    model : number;
    engine: number;
    color:string;

    constructor(nameOfCar: string, companyOfCar: string, modelOfCar: number, engineOfCar: number, colorOfCar: string, priceOfCar: number, img: string) {
        super(priceOfCar, img);
        this.name = nameOfCar;
        this.company = companyOfCar;
        this.model = modelOfCar;
        this.engine = engineOfCar;
        this.color = colorOfCar;
    }

    display(): string { //returns all attributes with html wrapping
         return ("<strong> Name: </strong>" + this.name + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Model: </strong>" + this.model + "<br /> <strong> Engine: </strong> " + this.engine + "cc <br /> <strong> Color: </strong>" + this.color);
    }
}

class Mobiles extends Ads {
    cName = "Mobiles";
    model: string;
    company: string;
    color: string;
    screenSize: number;

    constructor(modelOfMobile: string, companyOfMobile: string, colorOfMobile: string, screenSizeOfMobile: number, priceOfMobile: number, img: string) {
        super(priceOfMobile, img);
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
        this.image = img;
    }

    display(): string { //returns all attributes with html wrapping
        return ("<strong> Model: </strong>" + this.model + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Color: </strong>" + this.color +  "<br /> <strong> Screen Size: </strong>" + this.screenSize);
    }
}

// var book1 = new Books("HTML", "Ducket", "HTML", 1200); // creating new instance (i.e.object) of a class

var ad : any[] = [ // hard coded array for ad listings
    {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "Images/htmlcss.png")},
    {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "Images/git.png")},
    {x :new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "Images/j1.jpg")},
    {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "Images/js.png")},
    {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "Images/vitz.jpg")},
    {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "Images/corolla.jpg")},
    {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "Images/cheryqq.jpg")},
    {x :new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "Images/S1.png")},
    {x :new Mobiles("E8-2", "htc", "black", 5, 27000, "Images/htc.jpg")}
]; 

//console.log(ad[0]); // complete object {} jb k alert krane se it says object
//console.log(ad[0].x);
//alert(ad[0].x.display()); // the value returned by display

// alert(ad[0] instanceof Books); //false
//alert(ad[4].x instanceof Books); //true 

//alert(ad[0].x.cName); // yupieeeeee i got it !! :D className mil gya i.e. Books

// display the All tab
let a: string;

for (var i = 0; i < ad.length; i++) {
    let classDeterminator : string = ad[i].x.cName; // returns class name 

    switch(classDeterminator) { // use class name to check from which class the object belongs
        case 'Books': {
            a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title">' + //title
                                ad[i].x.subject + 
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">'+
                            '<div class= "col-sm-4">' + //image
                                '<img src=' + ad[i].x.image + ' alt="book" height="100" width="100" />' +
                            '</div>' +
                            '<div class="col-sm-8">' + // details
                                ad[i].x.display() +
                            '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
                    '</div>'; // creates new panel for book
            if(i<3) {
                document.getElementById("p1").innerHTML += a;
            }
            else if(i>2 && i<6) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>5) {
                document.getElementById("p3").innerHTML += a;
            }
            break;
        }
        case 'Cars' : {
            a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" id="title">' + //title
                                ad[i].x.name +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">'+
                            '<div class= "col-sm-4">' + //image
                                '<img src=' + ad[i].x.image + ' alt="car" height="100" width="100" />' +
                            '</div>' +
                            '<div class="col-sm-8">' + // details
                                ad[i].x.display() +
                            '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
                    '</div>'; // creates new panel for car
            if(i<3) {
                document.getElementById("p1").innerHTML += a;
            }
            else if(i>2 && i<6) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>5) {
                document.getElementById("p3").innerHTML += a;
            }
            break;
        }
        case 'Mobiles' : {
             a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" id="title">' + //title
                                ad[i].x.company + ' ' + ad[i].x.model +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">'+
                            '<div class= "col-sm-4">' + //image
                                '<img src=' + ad[i].x.image + ' alt="mobile" height="100" width="100" />' +
                            '</div>' +
                            '<div class="col-sm-8">' + // details
                                ad[i].x.display() +
                            '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
                    '</div>';  // creates new panel for mobile
            if(i<3) {
                document.getElementById("p1").innerHTML += a;
            }
            else if(i>2 && i<6) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>5) {
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
let showBook : string;
for(var i = 0; i < ad.length; i++) { 
    let classDeterminator : string = ad[i].x.cName; // returns class name
    if(classDeterminator === "Books") {
        showBook = '<div class="panel panel-primary">' +
                            '<div class="panel-heading">' +
                                '<h3 class="panel-title" id="title">' + //title
                                    ad[i].x.subject +
                                '</h3>' +
                            '</div>' +
                            '<div class="panel-body row">'+
                                '<div class= "col-sm-4">' + // image
                                    '<img src=' + ad[i].x.image + ' alt="book" height="100" width="100" />' +
                                '</div>' +
                                '<div class="col-sm-8">' + // details
                                    ad[i].x.display() +
                                '</div>' +
                            '</div>' +
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creating new panel with title and content for book 
    
    document.getElementById("books").innerHTML += showBook;
   }
}

// display the Cars tab
let showCar : string;
for(var i = 0; i < ad.length; i++) { 
    let classDeterminator : string = ad[i].x.cName; // returns class name
    if(classDeterminator === "Cars") {
        showCar = '<div class="panel panel-primary">' +
                            '<div class="panel-heading">' +
                                '<h3 class="panel-title" id="title">' + //title
                                    ad[i].x.name +
                                '</h3>' +
                            '</div>' +
                            '<div class="panel-body row">'+
                                '<div class= "col-sm-4">' + //image
                                    '<img src=' + ad[i].x.image + ' alt="car" height="100" width="100" />' +
                                '</div>' +
                                '<div class="col-sm-8">' + // details
                                    ad[i].x.display() +
                                '</div>' +
                            '</div>' +
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creating new panel with title and content for car

        document.getElementById("cars").innerHTML += showCar;
    }
}

// display the Mobiles tab
let showMobile : string;
for(var i = 0; i < ad.length; i++) { 
    let classDeterminator : string = ad[i].x.cName; // returns class name
    if(classDeterminator === "Mobiles") {
        showMobile ='<div class="panel panel-primary">' +
                            '<div class="panel-heading">' +
                                '<h3 class="panel-title" id="title">' + //title
                                    ad[i].x.company + ' ' + ad[i].x.model +
                                '</h3>' +
                            '</div>' +
                            '<div class="panel-body row">'+
                                '<div class= "col-sm-4">' + //image
                                    '<img src=' + ad[i].x.image + ' alt="mobile" height="100" width="100" />' +
                                '</div>' +
                                '<div class="col-sm-8">' + // details
                                    ad[i].x.display() +
                                '</div>' +
                            '</div>' +
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creating new panel with title and content for mobile

        document.getElementById("mobiles").innerHTML += showMobile;
    }
}

function activatePage(id: string, tag: HTMLElement): void { // pagination activation function
    switch(id) {
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