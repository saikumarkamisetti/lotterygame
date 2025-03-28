const giftslist = document.getElementById("giftslist");
const pick = document.getElementById("button");
const result = document.getElementById("result");
const tik = new Audio("tik.wav");
const win = new Audio("win.wav");
const gifts = [
   "Smartphone", "Laptop", "Smartwatch", "Wireless Earbuds", "Bluetooth Speaker", "Gaming Console", "50-inch Smart TV", "Portable Power Bank", "Fitness Tracker", "Digital Camera", "Noise-Canceling Headphones", "Tablet", "Air Fryer", "Instant Pot", "Coffee Maker", "Electric Toothbrush", "Gift Card ($100)", "Designer Handbag", "Luxury Perfume", "Sunglasses", "Wireless Keyboard & Mouse", "Electric Kettle", "Robot Vacuum Cleaner", "Smart Home Speaker", "Streaming Device", "E-Reader (Kindle)", "Home Theater System", "Cooking Set", "Weighted Blanket", "Customized Mug Set", "Board Game Bundle", "Backpack", "Camping Gear Set", "Wine Bottle & Glasses Set", "Luxury Watch", "Subscription Box (3 Months)", "Digital Picture Frame", "DIY Craft Kit", "Virtual Reality Headset", "Electric Hair Trimmer", "Stylish Hoodie", "Travel Suitcase", "Mini Projector", "Smart Light Bulbs", "Personalized T-Shirt", "High-Quality Towel Set", "Portable Grill", "Essential Oils Set", "Car Dash Camera", "Movie Theater Tickets",
];
gifts.forEach(function(value, i ){
   
    const boom = `<div class="box1" id="${i+1}">${i+1}: ${value}</div>`;
    // console.log(boom);
    giftslist.insertAdjacentHTML("beforebegin",boom);
    
});
let count=0;
pick.addEventListener("click",function(){
    for(let j=1;j<=50;j++){
        document.getElementById(j).classList.remove("border");
    }
    rum(count);
    result.textContent = "Please wait your gift is packing....";
    let temp=0;
    setInterval(function(){
    if(temp<=6){
        
        let random = (Math.floor((Math.random()*50)+1));
        if(temp==6){
           win.pause();
           win.currentTime = 0;
           win.play();
            result.textContent = `Congratulations, you have got ${random}'th price: ${gifts[random-1]}....`;
            document.getElementById(random).classList.add("mark");
            count=random;
            temp++;
        }
        else{     
            tik.pause();
            tik.currentTime = 0;
            tik.play();       
    temp++;
    document.getElementById(random).classList.add("border");
    result.textContent = `Your Gift may be "${gifts[random]}...`;
    
    }
}  
},1000);
   
});
function rum(val){
        if(count>=1){
       return document.getElementById(val).classList.remove("mark");
        }       
};

