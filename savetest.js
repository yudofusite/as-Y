const main = document.getElementById("main");


const mc = main.getContext("2d");

setA();

mc.fillRect(19, 19, 45, 45);

function setA() {
	main.setAttribute("width", 1145);
	main.setAttribute("height", 810);
}
console.log(main);

const save = document.getElementById("save");
save.addEventListener("click", function() {
	var a = document.createElement('a');
	a.href = main.toDataURL("image/png", 1.0);
	a.download = document.getElementById("name").value;
	a.click()
});

const wid_input = document.getElementById("mx");
const hei_input = document.getElementById("my");
console.log(wid_input.value + "/" + hei_input.value);

wid_input.addEventListener("input", function() {
	main.style.width = wid_input.value;
	main.setAttribute("width", wid_input.value);
});
hei_input.addEventListener("input", function() {
	main.style.height = hei_input.value;
	main.setAttribute("height", hei_input.value);
});

const title = document.getElementById("title");
console.log(title.value);

let cr = document.getElementById("cr");
let imgw = parseInt(document.getElementById("im_x").value);
let imgh = parseInt(document.getElementById("im_y").value);
let imgx = parseInt(document.getElementById("im_xz").value);
let imgy = parseInt(document.getElementById("im_yz").value);

let main_edit = setInterval(function() {				//メインループ
	mc.clearRect(0, 0, 1145, 810);
	if (cr.checked == false) {
		mc.fillStyle = "#000000";
		mc.fillRect(0, 0, 1145, 810);
	}
	if (bg == 1) {
		imgw = parseInt(document.getElementById("im_x").value);
		imgh = parseInt(document.getElementById("im_y").value);
		imgx = parseInt(document.getElementById("im_xz").value);
		imgy = parseInt(document.getElementById("im_yz").value);

		mc.drawImage(haikei, 0, 0, imgw, imgh);
	}
	mc.fillStyle = "#000060";
	title_write(title.value, 0);
	mc.fillStyle = "#eeeeee";
	title_write(title.value, 4);
}, 1000 / 120);

let i = 0;
let x = 0;	//描画開始地点xy
let y = 40;
let xx = 0;	//描画位置
let yy = 0;

let cl = document.getElementById("cl");
let haikei = new Image();	//背景画像
let bg = 0;			//背景画像の有無

function title_write(txt, sa) {

	var array = txt.split("");
	x = parseInt(document.getElementById("ti_x").value);
        y = parseInt(document.getElementById("ti_y").value);

	xx = x - sa;
	yy = y;
	if (cl.checked) {

	mc.font = "bold 40px serif";
	for (i = 0; i < txt.length; i++) {
		if (nrt(array[i])) {
			mc.save();
			mc.translate((xx + yy), -(xx - yy));
			mc.rotate(Math.PI / 2);
			mc.fillText(array[i], xx - 20, yy - 5);
			mc.translate(-(xx + yy), xx - yy);
			mc.restore();
			yy += 20;
		} else {
			mc.fillText(array[i], xx, yy);
		}
		yy += 43;
		if (array[i] == "\n") {
			yy = y;
			xx -= 50;
		}
	}

	} else {

	mc.font = "italic 40px serif";
	for (i = 0; i < txt.length; i++) {
		mc.fillText(array[i], xx, yy);
		xx += 40;
		if (array[i] == "\n") {
			xx = x - sa;
			yy += 45;
		}
	}

	}
}

const png = document.getElementById("png");
console.log(png);
let asp = 0;		//画像の横と縦のどちらが短いか。0=縦<横

png.addEventListener("change", function(e) {
	console.log(e.target.files[0]);
	var photo = e.target.files[0];
	var reader = new FileReader();
	reader.readAsDataURL(photo);
	console.log(reader);
	reader.onload = () => {
		bg = 1;
		haikei.src = reader.result;
		haikei.zoom = 3.4;
	}
});

//------------------

let no_turn = ["「", "」","『","』","【","】","〈","〉","ー","-","～"];
let ti = 0;
let mem = 0;
function nrt(test_txt) {
mem = 0;
	for (ti = 0; ti < no_turn.length; ti++) {
		if (no_turn[ti] == test_txt) {
			mem = 1;
		}
	}
return mem;
}