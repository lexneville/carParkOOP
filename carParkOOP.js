// //------------------------------ USING CLASSES ---------------------------------------
// class Cars {
//     constructor(regNum, hours) {
//         this.custRegNum = regNum;
//         this.custHours = hours;
//         this.hourlyCharge = 1.50;
//         this.hourlyCreditCharge = 1;
//     }
// }
// class StaffCars extends Cars {
//     constructor(regNum, hours, staffNumber, remainingCredits) {
//         super(regNum, hours);
//         this.staffNumber = staffNumber;
//         this.remainingCredits = remainingCredits;
//     }
// }
// let pay = (regNum, hours, staffNumber, remainingCredits) => {
//     if (staffNumber > 0) {
//         const staffCar = new StaffCars(regNum, hours, staffNumber, remainingCredits);
//         let staffCharge = staffCar.custHours * staffCar.hourlyCreditCharge;
//         remainingCredits -= staffCharge;
//         console.log(`Car with registration ${staffCar.custRegNum} has been parked for ${staffCar.custHours} hours, the charge is ${staffCharge} credits, you have ${remainingCredits} credits left.`);
        
//     }   else {
//         const car = new Cars(regNum, hours);
//         let charge = car.custHours * car.hourlyCharge;
//         console.log(`Car with registration ${car.custRegNum} has been parked for ${car.custHours} hours, the charge is £${charge}`);
//     }
// }
// pay("C499 EBU", 5, 234, 20);
// pay("C455 BMU", 5);

// //----------------------------- USING PROTOTYPES ----------------------------------------
let CarsP = function(regNum, hours){
    this.custRegNum = regNum;
    this.custHours = hours;
    this.hourlyCharge = 1.50;
    this.hourlyCreditCharge = 1;
}
let StaffP = function(regNum, hours, staffNumber, remainingCredits){
    CarsP.call(this, regNum, hours);
    this.staffNumber = staffNumber;
    this.remainingCredits = remainingCredits;
}
StaffP.prototype = Object.create(CarsP.prototype);

let pay = (regNum, hours, staffNumber,remainingCredits) => {
    if (staffNumber > 0) {
        let staffCar = new CarsP(regNum, hours, staffNumber, remainingCredits);
        let staffCharge = staffCar.custHours * staffCar.hourlyCreditCharge;
        remainingCredits -= staffCharge;
        console.log(`Car with registration ${staffCar.custRegNum} has been parked for ${staffCar.custHours} hours, the charge is ${staffCharge} credits, you have ${remainingCredits} credits left.`);       
    } else {
        let car = new CarsP(regNum, hours);
        let charge = car.custHours * car.hourlyCharge;
        console.log(`Car with registration ${car.custRegNum} has been parked for ${car.custHours} hours, the charge is £${charge}`);
    }
}
pay("C499 EBU", 5, 234, 20);
pay("C455 BMU", 5);