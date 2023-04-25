let age: number = 23;
let firstName: string = "David";
let isTall: boolean = true;
let childrenNames: string[] = ["Lily", "David"]; 

console.log(`${firstName} is ${age} years old`);

if(isTall) {
  console.log('and so tall')
}
else {
  console.log('and so pretty');
}

for(let i: number = 0; i < childrenNames.length; i++) {
  console.log(childrenNames[i]);
}

enum taxForm {
  standardTaxForm = "1040",
  childTaxForm = "641",
  cryptoTaxForm = "420S"
}

// console.log("the crypto one is: ", taxForm.cryptoTaxForm);
// console.log("the crypto one is: ", taxForm.cryptoTaxForm);
// console.log("the crypto one is: ", taxForm.cryptoTaxForm);
// console.log("the crypto one is: ", taxForm.cryptoTaxForm);

let zipCode: string | number = "12345";
zipCode = "ABCDE";
zipCode = 123;

// console.log(zipCode);

function sum(x: number, y: number) : number {
  return x + y;

}

let total: number = sum(5.5, 6);
console.log(total);

function debug(message: string): void {
  console.log(message);
}

debug("hello world");

interface person {
  firstName: string;
  age: number;
  children: string[];
  hasCertificate?: boolean;

}
let david: person = {
  firstName: "me",
  age: 23,
  children: ["Sean", "Shannon"],
  hasCertificate: true,
}
let Sean: person = {
  firstName: "Sean",
  age: 8,
  children: [],
  hasCertificate: false,
}

console.log(david);
console.log(Sean);


