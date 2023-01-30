let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let bg = ["a", "b", "c", "d", "e"]

for (var i = 1; i <= 15; i++) {
	document.getElementById("btn" + String(i)).addEventListener("click", function(){
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {
			tg.MainButton.show();
			qator = Math.floor((i - 1) / 5) + 1
			ustun = bg[(i - 1) % 5]
			
			tg.MainButton.setText(String(qator) + ustun + "-stul tanlandi");
			item = String(i);
		}
	});
}


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 

