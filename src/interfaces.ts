function printLabel1({ label } = { label: 'sample' }): void {
    console.log(label);
}

function printLabel2(param: { label: string }): void {
    console.log(param.label);
}

let myObj = { size: 10, label: 'Size 10 Objecttt' };
printLabel1(myObj);
printLabel2(myObj);

/**
 * About INTERFACES
 * 1) Interface unlike in most languages dont have to be implemented in typescript.
 * It defines the shape of the requirement
 * 2) The order in which the properties are passed does not matter
 * 3) What is required is that the properties defined in the interface are present in the object 
 * that we pass.
 */
interface ILabeledValue {
    label: string;
}

function printLabel(labeledObj: ILabeledValue) {
    console.log(labeledObj.label);
}

// It does not harm if we set the size property, but its important we set the label property.
myObj = {size: 10, label: 'Size 10 Object1234'};
printLabel(myObj);




