class Books {
    title : string;
    author : string;
    subject : string;
    price : number;
    
    constructor(titleOfBook: string, authorOfBook: string, subjectOfBook: string, priceOfBook: number) {
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
        this.price = priceOfBook;
    }

    display(): string {
        return ("Title: " + this.title + "<br /> Author: " + this.author + "<br /> Subject: " + this.subject + "<br /> Price: Rs. " + this.price + "<br /><br />");
    }
}

class Cars {
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

    display(): string {
         return ("Name: " + this.name + "<br /> Company: " + this.company + "<br /> Model: " + this.model + "<br /> Engine: " + this.engine + "cc <br /> Color: " + this.color + "<br /> Price: Rs. " + this.price + "<br /><br />");
    }
}

class Mobiles {
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

    display(): string {
        return ("Model: " + this.model + "<br /> Company: " + this.company + "<br /> Color: " + this.color +  "<br /> Screen Size: " + this.screenSize + ' "<br /> Price: Rs. ' + this.price + "<br /><br />");
    }
}

// var book1 = new Books("HTML", "Ducket", "HTML", 1200);

var ad : any[] = [
    {book1 : new Books("HTML", "Ducket", "HTML", 200)},
    {book2 : new Books("CSS", "Ducket", "CSS", 300)},
    {book3 : new Books("JavaScript", "John Doe", "JavaScript", 500)},
    {car1 : new Cars("Vitz", "Honda", 2016, 1200, "black", 500000)},
    {car2 : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000)},
    {car3 : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000)},
    {mobile1 :new Mobiles("S1", "Qmobile", "black", 5, 11000)},
    {mobile2 :new Mobiles("J1-Ace", "Samsung", "blue", 4.5, 19000)},
    {mobile3 :new Mobiles("X90", "Motorolla", "white", 5, 27000)}
]; 

// var b = ad[0].book1 instanceof Books;  //true
// console.log(b);
// console.log(ad[0]); // complete object {}
// console.log(ad[0].book1);
//console.log(ad[0].book1.display()); // the value returned by display

//ad[0].book1.display();

// display the All tab
// for (var i = 0; i < ad.length; i++) {
//     let show: string = ad[i].display();
//     document.getElementById("all").innerHTML += show;
// }

// display the Books tab
let showBook : string;
for(var i = 0; i <= 2; i++) {
    showBook = ad[i].book1.display();
    // showBook = "Title : " + ad[i].book1.title + 
    //                             "<br /> Author : " + ad[i].book1.author + 
    //                             "<br /> Subject : " + ad[i].book1.subject +
    //                             "<br /> Price : " + ad[i].book1.price +
    //                             "<br /><br />";
    document.getElementById("books").innerHTML += showBook;
}

// display the Cars tab
let showCar : string;
for (var i = 3; i <= 5 ; i++) {
    //showCar = ad[i].car1.display();
    showCar = "Name : " + ad[i].car1.name + 
                                "<br /> Company : " + ad[i].car1.company + 
                                "<br /> Model : " + ad[i].car1.model +
                                "<br /> Engine : " + ad[i].car1.engine +
                                "<br /> Color : " + ad[i].car1.color +
                                "<br /> Price : " + ad[i].car1.price +
                                "<br /><br />";
    document.getElementById("cars").innerHTML += showCar;
}

// display the Mobiles tab
let showMobile : string;
for (var i = 6; i <= 8; i++) {
    showMobile = ad[i].mobile1.display();
    // "Model : " + ad[i].mobile1.model + 
    //                             "<br /> Company : " + ad[i].mobile1.company + 
    //                             "<br /> Color : " + ad[i].mobile1.color +
    //                             "<br /> Screen Size : " +ad[i].mobile1.screenSize +
    //                             "<br /> Price : " + ad[i].mobile1.price +
    //                             "<br /><br />";
    document.getElementById("mobiles").innerHTML += showMobile;
}

// var show : string = ad[0].book1.display();
// document.getElementById("books").innerHTML += show;