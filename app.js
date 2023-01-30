let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let bg = ["a", "b", "c", "d", "e"]

array.forEach(element => {
    ab = document.getElementById("btn"+string(element));
    ab.addEventListener("click", function(){
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {
			qator = (element - 1) / 5 + 1
			ustun = bg[(element - 1) % 5]

			tg.MainButton.setText(string(qator) + ustun + "-stul tanlandi");
			item = string(element);
			tg.MainButton.show();
		}
	});
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 

