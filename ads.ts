class Books { 
    cName : string = "Books";
    title : string;
    author : string;
    subject : string;
    price : number;
    
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    constructor(titleOfBook: string, authorOfBook: string, subjectOfBook: string, priceOfBook: number) {
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
        this.price = priceOfBook;
    }

    display(): string { //returns all attributes with html wrapping
        return ("Title: " + this.title + "<br /> Author: " + this.author + "<br /> Subject: " + this.subject + "<br /> Price: Rs. " + this.price + "<br /><br />");
    }
}

class Cars {
    cName : string = "Cars";
    name : string;
    company : string;
    model : number;
    engine: number;
    color:string;
    price: number;

    constructor(nameOfCar: string, companyOfCar: string, modelOfCar: number, engineOfCar: number, colorOfCar: string, priceOfCar: number) {
        this.name = nameOfCar;
        this.company = companyOfCar;
        this.model = modelOfCar;
        this.engine = engineOfCar;
        this.color = colorOfCar;
        this.price = priceOfCar;
    }

    display(): string { //returns all attributes with html wrapping
         return ("Name: " + this.name + "<br /> Company: " + this.company + "<br /> Model: " + this.model + "<br /> Engine: " + this.engine + "cc <br /> Color: " + this.color + "<br /> Price: Rs. " + this.price + "<br /><br />");
    }
}

class Mobiles {
    cName : string = "Mobiles";
    model: string;
    company: string;
    color: string;
    screenSize: number;
    price: number;

    constructor(modelOfMobile: string, companyOfMobile: string, colorOfMobile: string, screenSizeOfMobile: number, priceOfMobile: number) {
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
    }

    display(): string { //returns all attributes with html wrapping
        return ("Model: " + this.model + "<br /> Company: " + this.company + "<br /> Color: " + this.color +  "<br /> Screen Size: " + this.screenSize + ' "<br /> Price: Rs. ' + this.price + "<br /><br />");
    }
}

// var book1 = new Books("HTML", "Ducket", "HTML", 1200); // creating new instance (i.e.object) of a class

var ad : any[] = [ // hard coded array for ad listings
    {x : new Books("HTML & CSS", "Ducket", "HTML & CSS", 200)},
    {x : new Books("Git Essentials", "Ducket", "Git", 700)},
    {x : new Books("JavaScript", "John Doe", "JavaScript", 500)},
    {x : new Cars("Vitz", "Honda", 2016, 1200, "black", 500000)},
    {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000)},
    {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000)},
    {x :new Mobiles("S1", "Qmobile", "black", 5, 11000)},
    {x :new Mobiles("J1-Ace", "Samsung", "blue", 4.5, 19000)},
    {x :new Mobiles("X90", "Motorolla", "white", 5, 27000)}
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
let a: string;

for (var i = 0; i < ad.length; i++) {
    let classDeterminator : string = ad[i].x.cName; // returns class name 

    switch(classDeterminator) { // use class name to check from which class the object belongs
        case 'Books': {
            a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" id="title">' +
                                ad[i].x.subject +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body" id="content">'+
                            ad[i].x.display() +
                        '</div>' +
                    '</div>'; // creates new panel for book

            document.getElementById("all").innerHTML += a;
            break;
        }
        case 'Cars' : {
            a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" id="title">' +
                                ad[i].x.name +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body" id="content">'+
                            ad[i].x.display() +
                        '</div>' +
                    '</div>'; // creates new panel for car

            document.getElementById("all").innerHTML += a;
            break;
        }
        case 'Mobiles' : {
             a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" id="title">' +
                                ad[i].x.company + ' ' + ad[i].x.model +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body" id="content">'+
                            ad[i].x.display() +
                        '</div>' +
                    '</div>';  // creates new panel for mobile

            document.getElementById("all").innerHTML += a;
            break;
        }
        default: {
            alert("Error!"); // yahan pohnchenge hi nhi hopefully
        }
    } // switch ends

    } // for-loop ends

// display the Books tab
let showBook : string;
for(var i = 0; i <= 2; i++) { 
   showBook = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" id="title">' +
                                ad[i].x.subject +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body" id="content">'+
                            ad[i].x.display() +
                        '</div>' +
                    '</div>'; // creating new panel with title and content for book 
   
   document.getElementById("books").innerHTML += showBook;
}

// display the Cars tab
let showCar : string;
for (var i = 3; i <= 5 ; i++) {
    showCar = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" id="title">' +
                                ad[i].x.name +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body" id="content">'+
                            ad[i].x.display() +
                        '</div>' +
                    '</div>'; // creating new panel with title and content for car

    document.getElementById("cars").innerHTML += showCar;
}

// display the Mobiles tab
let showMobile : string;
for (var i = 6; i <= 8; i++) {
    showMobile ='<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title" id="title">' +
                                ad[i].x.company + ' ' + ad[i].x.model +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body" id="content">'+
                            ad[i].x.display() +
                        '</div>' +
                    '</div>'; // creating new panel with title and content for mobile

    document.getElementById("mobiles").innerHTML += showMobile;
}
