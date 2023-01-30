let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let bg = ["a", "b", "c", "d", "e"]

let arrs = ['1a', '1b', '1c', '1d', '1e', '2a', '2b', '2c', '2d', '2e', '3a', '3b', '3c', '3d', '3e']

for (var i = 0; i < 15; i++) {
	btn = document.getElementById("btn" + String(i));
	btn.addEventListener("click", function(){
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {						
			tg.MainButton.setText(arrs[i] + "-stul tanlandi");
			item = String(i+1);
			tg.MainButton.show();
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

