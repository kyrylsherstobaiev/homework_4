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

let fruit = [...winterSports.splice(2, 1), ...summerSports.splice(2, 2)];

console.log("***WinterSports***")
for (i = 0; i < winterSports.length; i++) {
	console.log(winterSports[i].join(": "));
}

console.log("***SummerSports***")
for (i = 0; i < summerSports.length; i++) {
	console.log(summerSports[i].join(": "));
}

console.log("***Fruits***")
for (let item of fruit)
	console.log(item.join(": "));

