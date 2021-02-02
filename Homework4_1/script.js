
let arrayColors = ["#FF0000", "#FFFF00", "#1E90FF", "#778899", "#FF00FF", "#7FFF00", "#00ad25"];

let hero = ['Ivan'];
let native = ['York', 'Of'];
let destination = ['Poltava', 'In'];

let arrayNew = hero.concat(native, destination);
console.log(arrayNew);

arrayNew.reverse();
console.log(arrayNew);

//** we can change several elements but I have changed all of it :)
arrayNew.splice(0, 5, "Richard", "oF", "York", "Gave", "Battle", "in", "Vain"); //****:)
console.log(arrayNew);

for (i = 0; i < arrayColors.length, i < arrayNew.length; i++) {
	document.write(`<div><div class="circle" style="background-color: 
	${arrayColors[i]}"></div><p>${arrayNew[i]}</p></div>`);
}


