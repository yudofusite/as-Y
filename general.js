const me_b = document.getElementById("menubtn");
const me_v = document.getElementById("sider");
let menu = 0;    //メニューが開いているかどうか。1=展開

me_b.addEventListener('mousedown', () => {
  if (menu == 1) {
    menu = 0;
  } else {
    menu = 1;
  }
  if (menu == 1) {
    sider.style.display = "block";
  } else {
    sider.style.display = "none";
  }
});
      
bgpv = 5;
let bgp = 0;
setInterval(function() {
  sider.style.backgroundPosition = 0 + " " + bgp + "px";
  bgp += bgpv;
  if (bgpv > 0.2) {
    bgpv = 0.95 * (bgpv - 0.2) + 0.2;
  }
}, 1000 / 60);