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
    {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "Images/j1.jpg")},
    {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "Images/js.png")},
    {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "Images/vitz.jpg")},
    {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "Images/corolla.jpg")},
    {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "Images/cheryqq.jpg")},
    {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "Images/S1.png")},
    {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "Images/htc.jpg")}
]; // objects are pushed dynamically whenever a user posts ad

// alert(ad[0] instanceof Books); //false
//alert(ad[4].x instanceof Books); //true 
//alert(ad[0].x.cName); // yupieeeeee i got it !! :D className mil gya i.e. Books

function fieldsEmptied(): void { // setting all form fields empty when button PostAd is clicked
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        (<HTMLInputElement>inputs[i]).value = '';
    }
    // de-selecting the select category option in form
    let select = (document.getElementById("category") as HTMLSelectElement).value = 'null';
}
        
function checkCategory(): void { // setting and removing the required attribute and form divs according to category selection
        var cat: string = (document.getElementById("category") as HTMLInputElement).value; // type casting string into HTMLInputElement
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
                document.getElementById("category").focus();
            }
        }
    }
    
    function pushAd(): void { // pushing the posted ads in array and displaying in appropriate tab    

        // selected ad category
        var cat: string = (document.getElementById("category") as HTMLInputElement).value; // type casting string into HTMLInputElement

        //push the ad as an object in the ads array
        switch(cat) {
            case 'book': {
                // getting all input values
                let title: string = (document.getElementById("Btitle") as HTMLInputElement).value; // type casting string into HTMLInputElement
                let author: string = (document.getElementById("author") as HTMLInputElement).value;
                let subject: string = (document.getElementById("subject") as HTMLInputElement).value;
                let price: number = parseFloat((document.getElementById("Bprice") as HTMLInputElement).value);
                let image: string = (document.getElementById("Bimage") as HTMLInputElement).value; // C:\fakepath\filename.extension
                let filename: string = image.slice(12, image.length); //filename.extension
                let src : string = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url

                //creating new Books instance and pushing dynamically in the ad array
                // if(title != '' && author != '' && subject != '' && isNaN(price) && image != '')
                ad.push({x: new Books(title, author, subject, price, src)}); // passing specific url for image upload, img must be at that location
    
                document.getElementById("books").className = "tab-pane fade in active"; // activate books tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                
                // display it in the All & Books tab
                let showBook : string, lastIndex: number = ad.length-1;
                showBook = '<div class="panel panel-primary">' +
                                    '<div class="panel-heading">' +
                                        '<h3 class="panel-title">' + //title
                                            ad[lastIndex].x.subject +
                                        '</h3>' +
                                    '</div>' +
                                    '<div class="panel-body row">'+
                                        '<div class= "col-sm-4">' + // image
                                            '<img src=' + ad[lastIndex].x.image + ' alt="book" height="100" width="100" />' +
                                        '</div>' +
                                        '<div class="col-sm-8">' + // details
                                            ad[lastIndex].x.display() +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[lastIndex].x.price + '/-</strong> </div>' +
                                '</div>'; // creating new panel with title and content for book 
                
                document.getElementById("p3").innerHTML += showBook; // "all" tab page 3, id="p3"
                document.getElementById("books").innerHTML += showBook;
                
                break;
            }
            case 'car': {
                // getting all input values
                let name: string = (document.getElementById("name") as HTMLInputElement).value; // type casting string into HTMLInputElement
                let company: string = (<HTMLInputElement>document.getElementById("Ccompany")).value; // alternate way to type casting 
                let model: number = parseFloat((document.getElementById("Cmodel") as HTMLInputElement).value);
                let engine: number = parseFloat((document.getElementById("engine") as HTMLInputElement).value);
                let color: string = (document.getElementById("Ccolor") as HTMLInputElement).value;
                let price: number = parseFloat((document.getElementById("Cprice") as HTMLInputElement).value);
                let image: string = (document.getElementById("Cimage") as HTMLInputElement).value; // C:\fakepath\filename.extension
                let filename: string = image.slice(12, image.length); //filename.extension
                let src : string = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url

                //creating new Cars instance and pushing dynamically in the ad array
                ad.push({x: new Cars(name, company, model, engine, color, price, src)});

                document.getElementById("cars").className = "tab-pane fade in active"; // activate cars tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                
                // display it in the All & Cars tab
                let showCar : string, lastIndex: number = ad.length-1;
                showCar = '<div class="panel panel-primary">' +
                                    '<div class="panel-heading">' +
                                        '<h3 class="panel-title">' + //title
                                            ad[lastIndex].x.name +
                                        '</h3>' +
                                    '</div>' +
                                    '<div class="panel-body row">'+
                                        '<div class= "col-sm-4">' + //image
                                            '<img src=' + ad[lastIndex].x.image + ' alt="car" height="100" width="100" />' +
                                        '</div>' +
                                        '<div class="col-sm-8">' + // details
                                            ad[lastIndex].x.display() +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[lastIndex].x.price + '/-</strong> </div>' +
                                '</div>'; // creating new panel with title and content for car
                
                document.getElementById("p3").innerHTML += showCar; // "all" tab page 3, id="p3"
                document.getElementById("cars").innerHTML += showCar;

                break;
            }
            case 'mobile': {
                // getting all input values
                let model: string = (document.getElementById("Mmodel") as HTMLInputElement).value; // type casting string into HTMLInputElement
                let company: string = (document.getElementById("Mcompany") as HTMLInputElement).value;
                let color: string = (document.getElementById("Mcolor") as HTMLInputElement).value;
                let screenSize: number = parseFloat((document.getElementById("screensize") as HTMLInputElement).value);
                let price: number = parseFloat((document.getElementById("Mprice") as HTMLInputElement).value);
                let image: string = (document.getElementById("Mimage") as HTMLInputElement).value; // C:\fakepath\filename.extension
                let filename: string = image.slice(12, image.length); //filename.extension
                let src : string = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url

                //creating new Mobiles instance and pushing dynamically in the ad array
                ad.push({x: new Mobiles(model, company, color, screenSize, price, src)});

                document.getElementById("mobiles").className = "tab-pane fade in active"; // activate mobiles tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  

                // display it in the All & Mobiles tab
                let showMobile : string, lastIndex: number = ad.length-1;
                showMobile ='<div class="panel panel-primary">' +
                                    '<div class="panel-heading">' +
                                        '<h3 class="panel-title">' + //title
                                            ad[lastIndex].x.company + ' ' + ad[lastIndex].x.model +
                                        '</h3>' +
                                    '</div>' +
                                    '<div class="panel-body row">'+
                                        '<div class= "col-sm-4">' + //image
                                            '<img src=' + ad[lastIndex].x.image + ' alt="mobile" height="100" width="100" />' +
                                        '</div>' +
                                        '<div class="col-sm-8">' + // details
                                            ad[lastIndex].x.display() +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[lastIndex].x.price + '/-</strong> </div>' +
                                '</div>'; // creating new panel with title and content for mobile

                document.getElementById("p3").innerHTML += showMobile; // "all" tab page 3, id="p3"
                document.getElementById("mobiles").innerHTML += showMobile;

                break;
            }
            default: {
                // alert("Error! select a proper category");
            }
        } // </switch>
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
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' + //price at footer
                    '</div>'; // creates new panel for book
      
            // setting 4 ads per page
            if(i<=3) {
                document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>=8) {
                document.getElementById("p3").innerHTML += a;
            }
            break;
        }
        case 'Cars' : {
            a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title">' + //title
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
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' + //price at footer
                    '</div>'; // creates new panel for car

            // setting 4 ads per page
            if(i<=3) {
                document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>=8) {
                document.getElementById("p3").innerHTML += a;
            }
            break;
        }
        case 'Mobiles' : {
             a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title">' + //title
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
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' + //price at footer
                    '</div>';  // creates new panel for mobile
            
            // setting 4 ads per page
            if(i<=3) {
                document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>=8) {
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
                                '<h3 class="panel-title">' + //title
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
                                '<h3 class="panel-title">' + //title
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
                                '<h3 class="panel-title">' + //title
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