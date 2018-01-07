// ------------задача №1
function res(){
	alert(document.getElementById("first").value.length)
}
btn = document.getElementById('btn');
btn.addEventListener('click', res);

// ------------задача №2

let imgAR = ['img/email-min.png', 'img/kyivstar.png', 'img/life.png', 'img/Vodafone-min.png'];
document.write('<p>Задача 2</p>');
for(let i = 0; i < imgAR.length; i++){
    document.write('<br><img src="' + imgAR[i] + '">');
}

// ------------задача №3

function res3(){
	let myUrl = document.getElementById("third").value;
	let reg1 = /http:\/\//g;
	let reg2 = /https:\/\//g;

	alert(myUrl.replace(reg1, "").replace(reg2, ""));
	
}
btn3 = document.getElementById('btn3');
btn3.addEventListener('click', res3);

// ------------задача №4

	let reg1 = /http:\/\//g;
	let reg2 = /https:\/\//g;
	let reg3 = /www./g;

	function res4(){
	let forUrl = document.getElementById("forth").value;
alert(forUrl.replace(reg1, "").replace(reg2, "").replace(reg3, ""));

}
btn4 = document.getElementById('btn4');
btn4.addEventListener('click', res4);

// ------------задача №5

let submit1 = document.getElementById("submit");


function res5(event){
	event.preventDefault();

	let name1 = document.getElementById("name");
	let lastname1 = document.getElementById("lastname");
	let email1 = document.getElementById("email");
	let password1 = document.getElementById("password");

	
	let a = String(name1.value.trim());
	let b = String(lastname1.value.trim());
	let c = String(email1.value.trim());
	let d = String(password1.value.trim());

	if(a.match(/ /ig) === null && b.match(/ /ig) === null && c.match(/@/ig) != null && d.match(/ /ig) === null && d.length >= 5){
		return true;
	} else{
		return false;
	}
}
submit.addEventListener('click', res5);




// ------------задача №6

let symbol = document.getElementById("getSymbol");

function res6(){
	alert(symbol.value.charCodeAt(0));
}


btn6 = document.getElementById('btn6');
btn6.addEventListener('click', res6);


//печать слов в разных стилях