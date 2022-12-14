//convert binary to decimal
const toDec = (binary) => {
	twoPow = [128, 64, 32, 16, 8, 4, 2, 1];
	convertedArray = [];

	let decimalArray = binary.split("");
	for (i in decimalArray) {
		if (decimalArray.length < 8) {
			decimalArray.unshift("0");
		}
	}

	for (let i = decimalArray.length - 1; i >= 0; i--) {
		let prod = Number(decimalArray[i]) * twoPow[i];
		convertedArray.push(prod, "+");
	}
	convertedArray.pop();

	let decimal = convertedArray.join("");
	dec = eval(decimal);
	return dec;
};

//dec to binary
const toBin = (curr) => {
	let remainder = [];
	for (let i = 0; i <= 8; i++) {
		if (curr % 2 !== 0 && curr > 0.5) {
			curr = (curr - 1) / 2;
			remainder.unshift(1);
		} else if (curr % 2 == 0 && curr > 0.5) {
			remainder.unshift(0);
			curr = curr / 2;
		}
	}
	for (let i = 0; i <= 5; i++) {
		if (remainder.length < 8) {
			remainder.unshift(0);
		}
	}
	var converted = remainder.join("");
	return converted;
};
//DOM Manipulation
const input1 = document.querySelector("#input1");
const outPut = document.querySelector("#h2");
const option = document.querySelector("#selection");
var binn, decc;

const domRender = (e) => {
	if (option.value == "Bin") {
		e.target.value = e.target.value.substring(0, 8);
	} else if (option.value == "Dec") {
		e.target.value = e.target.value.substring(0, 3);
	}
	if (option.value == "Bin") {
		decc = toDec(e.target.value.substring(0, 8).toString());
		outPut.innerText = "Decimal value is : " + decc;
		console.log(binn);
	} else {
		binn = toBin(e.target.value.substring(0, 3));
		outPut.innerText = "Binary value is : " + binn;
	}
	if (input1.value.length < 1) {
		outPut.innerText = "Ready when you are ;)";
	}
};

input1.addEventListener("input", (e) => {
	document.onkeydown = (e1) => {
		if (option.value == "Bin") {
			console.log(e1.key);
			if (e1.key == 1 || e1.key == 0 || e1.key == "Backspace") {
				domRender(e);
			} else {
				outPut.innerText = "Only 1s and 0s!!!";
				setTimeout(() => {
					e.target.value = "";
					outPut.innerText = "Ready when you are ;)";
				}, 2000);
			}
		} else if (options.value == "Dec") {
			domRender(e);
		}
	};
});
