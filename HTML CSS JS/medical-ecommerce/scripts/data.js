const productData =[
    {
        productId: "p1",
        name: "Medicine",
        brand: "cipla",
        price: 500,
        discount: 30, 
        image: "glucometer.jpg"
    },
    {
        productId: "p2",
        name: "Tablet",
        brand: "Mankind",
        price: 400,
        discount: 20, 
        image: "steam-machine.jpg"
    },
    {
        productId: "p3",
        name: "Syrup",
        brand: "GK pharma",
        price: 999,
        discount: 10, 
        image: "vitamin-k2.jpg"
    },
    {
        productId: "p4",
        name: "Inhaler",
        brand: "Pharma indus",
        price: 750,
        discount: 5,
        image: "yellow.jpg"
    },
    {
        productId: "p5",
        name: "Sanitizer",
        brand: "Clean Pharma",
        price: 699,
        discount: 10,
        image: "vitamin.jpg"
    }
];




let users = [
    {
        firstName:'John',
        lastName : 'Doe',
        email:'johndoe@email.com',
        password:'12345678',
    },
    {
        firstName:'Zack',
        lastName : 'Dan',
        email:'zackdan@email.com',
        password:'12345678',
    }
];

function newUser(firstName,lastName,email,password){
    this.firstName =firstName;
    this.lastName =lastName;
    this.email =email;
    this.password = password;
}

let cart;

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
}
else{
    cart ={};
}



let currentUser;

//get user if its available
if(sessionStorage.getItem('currentUser')){
    currentUser =JSON.parse(sessionStorage.getItem('currentUser'));
}

function updateCurrentUser(){
    sessionStorage.setItem('currentUser',JSON.stringify(currentUser));
}



if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'));
}
//update users data
function updateUsersData(){
    localStorage.setItem('users',JSON.stringify(users));
}










const medicineList = [
    { name: "Aspirin", price: 10 },
    { name: "Paracetamol", price: 15 },
    { name: "Ibuprofen", price: 20 },
    { name: "Amoxicillin", price: 35 },
    { name: "Azithromycin", price: 50 },
    { name: "Ciprofloxacin", price: 40 },
    { name: "Metformin", price: 25 },
    { name: "Simvastatin", price: 30 },
    { name: "Lisinopril", price: 45 },
    { name: "Levothyroxine", price: 60 },
    { name: "Omeprazole", price: 25 },
    { name: "Losartan", price: 35 },
    { name: "Amlodipine", price: 40 },
    { name: "Clopidogrel", price: 45 },
    { name: "Metoprolol", price: 20 },
    { name: "Hydrochlorothiazide", price: 25 },
    { name: "Face Mask", price: 5 },
  { name: "Hand Sanitizer", price: 20 },
  { name: "Surgical Gloves", price: 15 },
  { name: "Thermometer", price: 100 },
  { name: "Pulse Oximeter", price: 120 },
  { name: "Blood Pressure Monitor", price: 250 },
  { name: "Stethoscope", price: 150 },
  { name: "Bandages", price: 10 },
  { name: "Antiseptic Cream", price: 15 },
  { name: "Gauze Pads", price: 8 },
  { name: "First Aid Kit", price: 120 },
  { name: "Surgical Tape", price: 12 },
  { name: "Cotton Balls", price: 6 },
  { name: "Alcohol Swabs", price: 10 },
  { name: "Crutches", price: 300 },
  { name: "Wheelchair", price: 2000 },
  { name: "Nebulizer", price: 500 },
  { name: "Inhaler", price: 40 },
  { name: "Medical Scissors", price: 25 },
  { name: "Hot Water Bottle", price: 30 },
  { name: "Cold Pack", price: 15 },
  { name: "Surgical Gown", price: 40 },
  { name: "Syringes", price: 20 },
  { name: "IV Drip Set", price: 150 },
  { name: "Tongue Depressors", price: 5 },
  { name: "Surgical Face Shield", price: 50 },
  { name: "Oxygen Mask", price: 75 },
  { name: "Disinfectant Wipes", price: 25 },
  { name: "Surgical Cap", price: 8 },
  { name: "Blood Glucose Monitor", price: 300 },
  { name: "Test Strips", price: 40 },
  { name: "Thermal Blanket", price: 60 },
  { name: "Sterile Gloves", price: 18 },
  { name: "Face Shield", price: 45 },
  { name: "Suture Kit", price: 100 },
  { name: "Defibrillator", price: 5000 },
  { name: "Otoscope", price: 120 },
  { name: "Examination Gloves", price: 15 },
  { name: "Nasal Cannula", price: 30 },
  { name: "Scalpel", price: 25 },
  { name: "Medical Tweezers", price: 10 },
  { name: "Sharps Container", price: 20 },
  { name: "Sterile Drapes", price: 30 },
  { name: "Surgical Scrub", price: 40 },
  { name: "Eye Wash Solution", price: 12 },
  { name: "Adhesive Bandages", price: 8 },
  { name: "Arm Sling", price: 50 },
  { name: "Cervical Collar", price: 80 },
  { name: "Medical Splint", price: 70 }
  ];
  