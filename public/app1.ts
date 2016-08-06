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

interface arrayOfObj {
    [x: string]: Books | Cars | Mobiles 
};
//     book: {
//         title: string,
//         author: string,
//         subject: string,
//         price: number,
//         src: string
//     },
//     car: {
//         name: string,
//         company: string,
//         model: number,
//         engine: number,
//         color: string,
//         price: number,
//         src: string
//     },
//     mobile: {
//         model: string,
//         company: string,
//         color: string,
//         screenSize: number,
//         price: number,
//         src: string
//     };
// }

var ad : arrayOfObj[] = [ // hard coded array for ad listings
    {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "Images/htmlcss.png")},
    {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "Images/git.png")},
    {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "Images/j1.jpg")},
    {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "Images/js.png")},
    {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "Images/vitz.jpg")},
    {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "Images/corolla.jpg")},
    {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "Images/cheryqq.jpg")},
    {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "Images/S1.png")},
    {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "Images/htc.jpg")}
]; // objects are pushed dynamically whenever a user posts ad

//console.log(ad[0]); // complete object {} jb k alert krane se it says object
//console.log(ad[0].x);
//alert(ad[0].x.display()); // the value returned by display

// alert(ad[0] instanceof Books); //false
//alert(ad[4].x instanceof Books); //true 

//alert(ad[0].x.cName); // yupieeeeee i got it !! :D className mil gya i.e. Books

function checkCategory(): void { //checking category selected in form and hiding & showing divs accordingly
        var cat: string = document.getElementById("category").value;
        switch(cat) {
            case 'book': { // show book and hide others
                document.getElementById("book").className = "show";
                document.getElementById("car").className = "hidden";
                document.getElementById("mobile").className = "hidden";

                // setting required attribute to all input fields of book
                let bInputs: any = document.getElementById("book").getElementsByTagName("input");
                for(let i = 0; i < bInputs.length; i++) {
                    bInputs[i].setAttribute("required", "required");
                }
                // removing required attribute from all input fields of car
                let cInputs: any = document.getElementById("car").getElementsByTagName("input");
                for(let i = 0; i < cInputs.length ; i++) {
                    cInputs[i].removeAttribute("required");
                }
                // removing required attribute from all input fields of mobile              
                let mInputs: any = document.getElementById("mobile").getElementsByTagName("input");
                for(let i = 0; i < mInputs.length ; i++) {
                    mInputs[i].removeAttribute("required");
                }
                break;
            }
            case 'car': { // show car and hide others
                document.getElementById("car").className = "show";
                document.getElementById("book").className = "hidden";
                document.getElementById("mobile").className = "hidden";

                // setting required attribute to all input fields of car
                let cInputs: any = document.getElementById("car").getElementsByTagName("input");
                for(let i = 0; i < cInputs.length; i++) {
                    cInputs[i].setAttribute("required", "required");
                }
                // removing required attribute from all input fields of book
                let bInputs: any = document.getElementById("book").getElementsByTagName("input");
                for(let i = 0; i < bInputs.length ; i++) {
                    bInputs[i].removeAttribute("required");
                }
                // removing required attribute from all input fields of mobile              
                let mInputs: any = document.getElementById("mobile").getElementsByTagName("input");
                for(let i = 0; i < mInputs.length ; i++) {
                    mInputs[i].removeAttribute("required");
                }
                break;
            }
            case 'mobile': { // show mobile and hide others
                document.getElementById("mobile").className = "show";
                document.getElementById("book").className = "hidden";
                document.getElementById("car").className = "hidden";
                
                // setting required attribute to all input fields of mobile
                let mInputs: any = document.getElementById("mobile").getElementsByTagName("input");
                for(let i = 0; i < mInputs.length; i++) {
                    mInputs[i].setAttribute("required", "required");
                }
                // removing required attribute from all input fields of book
                let bInputs: any = document.getElementById("book").getElementsByTagName("input");
                for(let i = 0; i < bInputs.length ; i++) {
                    bInputs[i].removeAttribute("required");
                }
                // removing required attribute from all input fields of car
                let cInputs: any = document.getElementById("car").getElementsByTagName("input");
                for(let i = 0; i < cInputs.length ; i++) {
                    cInputs[i].removeAttribute("required");
                }
                break;
            }
            default: { //throwing error
                alert ("Error! Kindly select a category"); // agr select category ko select kre koi tb ye execute hoga
            }
        }
    }

    function pushAd(): void { // pushing the posted ads in array to be displayed
        
        //thanks the user for posting ad if all the required fields are filled
        var ifNotEmpty = document.getElementsByTagName("input");
        for (let i = 0; i < ifNotEmpty.length; i++) {
            if(!ifNotEmpty) {
                var user: string = document.getElementById("username").value;
                alert("Thank you " + user + "! Your ad has been posted.");
            }
        }
        
        //**********************
        // var src = document.getElementById("Bimage").value; // trying to catch src of img input
        // alert(src);
        //************************

        // selected ad category
        var cat: string = document.getElementById("category").value; 

        //push the ad as an object in the ads array
        switch(cat) {
            case 'book': {
                // getting all input values
                let title: string = document.getElementById("title").value;
                let author: string = document.getElementById("author").value;
                let subject: string = document.getElementById("subject").value;
                let price: number = document.getElementById("Bprice").value;
                let image: string = document.getElementById("Bimage").value;

                //creating new Book instance and pushing dynamically in the ad array
                ad.push(x: new Books(title, author, subject, price, image));
                break;
            }
            case 'car': {
                // getting all input values
                let name: string = document.getElementById("name").value;
                let company: string = document.getElementById("Ccompany").value;
                let model: number = document.getElementById("Cmodel").value;
                let engine: number = document.getElementById("engine").value;
                let color: string = document.getElementById("Ccolor").value;
                let price: number = document.getElementById("Cprice").value;
                let image: string = document.getElementById("Cimage").value;
//*****************************
                //creating new Book instance and pushing dynamically in the ad array
                ad.push(new Cars(name, company, model, engine, color, price, image));
                break;
            }
            case 'mobile': {
                // getting all input values
                let model: string = document.getElementById("Mmodel").value;
                let company: string = document.getElementById("Mcompany").value;
                let color: string = document.getElementById("Mcolor").value;
                let screenSize: number = document.getElementById("screensize").value;
                let price: number = document.getElementById("Mprice").value;
                let image: string = document.getElementById("Mimage").value;

                //creating new Book instance and pushing dynamically in the ad array
                ad.push(new Mobiles(model, company, color, screenSize, price, image));
                break;
            }
            default: {
                alert("Error!");
            }
        }
    }

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
            
            // setting 3 ads per page
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

            // setting 3 ads per page
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
            
            // setting 3 ads per page
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


    