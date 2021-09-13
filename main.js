var num = 3;
if(num == 2){
    console.log(num * 2);
}
else if(num == 5){
    console.log(num * 5);
}
else if(num == 7){
    console.log(num * 7);
}
else if(num == 10){
    console.log(num * 10);
}
else{
    console.log(num);
}

const number = 8;
switch (number){
    case 1:
        console.log("Sunday");
        break;
    case 2:    
        console.log("Mondayy");
        break;
    case 3:    
        console.log("Tuesday");
        break;
    case 4:  
        console.log("Wednesday");
        break;
    case 5:    
        console.log("Thursday");
        break;
    case 6:    
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");  
        break;
    default:
        console.log("Not a day on the week");  
        break;
}

var user = {name: "shmuel", email: "shmuel94@gmail.com", type: "super admin"};
switch (user.type){
    case "admin":
        console.log("you are admin");
        break;
    case "super admin":    
        console.log("you are a super admin");
        break;
    default:    
        console.log("you are our loyal clien");
        break;
}

var fruits = document.getElementsByClassName("fruit");
for (let i = 0; i < fruits.length; i++) {
    fruits[i].onclick = () => {fruitByBtn(fruits[i].innerText)};
}
function fruitByBtn(fruit) {
    switch (fruit) {
        case "Apple":
            console.log("Apple");
            break;
        case "Lychee":
            console.log("Lychee");
            break;
        case "Banana":
            console.log("Banana");
            break;
        case "Raspberry":
            console.log("Raspberry");
            break;
        case "Watermelon":
            console.log("Watermelon");
            break;    
    }
}

var car = [
    {model:"Tesla", year:"2021", price:84806, dicauont:3, img:"https://cdn.pixabay.com/photo/2020/01/20/20/39/car-4781370__340.jpg"},
    {model:"McLaren", year:"2020", price:837000, dicauont:7, img:"https://media.istockphoto.com/photos/mclaren-gt-picture-id1227335021?k=20&m=1227335021&s=612x612&w=0&h=4inYCyKDbq45n-OnAZ-aocsVrO8IN67ZAPDjC5B5svI="},
    {model:"Mercedes", year:"2019", price:78760, dicauont:7, img:"https://media.istockphoto.com/photos/exhibition-at-the-street-near-dealership-with-gray-matte-car-mercedes-picture-id1191246890?k=20&m=1191246890&s=612x612&w=0&h=X4FwvlkZe9BKjqpZcU5_mfkUoeClfsBGRC1RSLvrDYs="},
    {model:"Mazda", year:"2018", price:37464, dicauont:10, img:"https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-picture-id1069236058?k=20&m=1069236058&s=612x612&w=0&h=blqSTiirIm-RxzbcaWOWIp5ucgLkibYWiH-ewGEEdh4="},
    {model:"Peugeot", year:"2017", price:42039, dicauont:10, img:"https://media.istockphoto.com/photos/car-of-the-year-2017-peugeot-3008-picture-id653765582?k=20&m=653765582&s=612x612&w=0&h=zUDGoxHdQ_A6xGqq3EV4ANffsHIm9wXGmGKak4tCsJ4="}
];
var section = document.getElementById("container");
for (let i = 0; i < car.length; i++) {
    section.innerHTML+=`<br><br><br>brand:${car[i].model} year:${car[i].year} price:${car[i].price} price discount:${car[i].price-car[i].price/100*car[i].dicauont} discount:${car[i].dicauont} 
        <img width=600px hieght=600px src=${car[i].img}>`
    switch (car[i].dicauont) {
        case 25:
            alert("crazy sell");        
            break;
            case 10:
                alert("good deal for you");        
            break;
            case 7:
                alert("not bad");        
            break;
            case 3:
                alert("this is joke");        
            break;
           
    }
}