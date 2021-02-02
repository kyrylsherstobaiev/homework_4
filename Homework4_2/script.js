let sports = [
	['skier', '⛷'],
	['snowboarder', '🏂'],
	['apple', '🍎'],
	['hockey', '🏒'],
	['ice skate', '⛸'],
	['swimmer', '🏊'],
	['surfer', '🏄‍'],
	['watermelon', '🍉'],
	['lemon', '🍋'],
	['rowboat', '🚣'],
	['bicyclist', '🚴‍'],
];


let winterSports = sports.slice(0, 5);
let summerSports = sports.slice(5, 12);

let fruits = winterSports.splice(2, 1);

fruitsS = summerSports.splice(2, 2);
fruits = fruits.concat(fruitsS);

console.log("***WinterSpots***")
for (i = 0; i < winterSports.length; i++) {
	console.log(winterSports[i].join(": "));
}

console.log("***SummerSpots***")
for (i = 0; i < summerSports.length; i++) {
	console.log(summerSports[i].join(": "));
}

console.log("***Fruits***")
for (i = 0; i < fruits.length; i++) {
	console.log(fruits[i].join(": "));
}
