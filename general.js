const me_b = document.getElementById("menubtn");
const me_v = document.getElementById("side");
let menu = 0;    //メニューが開いているかどうか。1=展開

me_v.innerHTML = '<div class="sider" id="sider"> <a href="index.html">湯豆腐サイトトップ</a><br><a href="select-page.html">記事一覧</a><br><br><a href="https://yudofusite.github.io/japan_desktop/">日本を飛ばそう Desktop Edition</a><br><br><a href="https://youtube.com/channel/UCtSopuVkfDc34jFfcvp0-NA?si=kNI5QTj2ntiVSWMc">YouTubeチャンネル</a><br><a href="https://scratch.mit.edu/users/kokesiant">scratchマイページ</a><hr><small>&copy;2025 yudofusite管理人 kokesiant</small> </div>';

me_b.addEventListener('mousedown', () => {
  if (menu == 1) {
    menu = 0;
  } else {
    menu = 1;
  }
  if (menu == 1) {
    me_v.style.display = "block";
  } else {
    me_v.style.display = "none";
  }
});
      
bgpv = 5;
let bgp = 0;

setInterval(function() {
  me_v.style.backgroundPosition = 0 + " " + bgp + "px";
  bgp += bgpv;
  if (bgpv > 0.2) {
    bgpv = 0.95 * (bgpv - 0.2) + 0.2;
  }

}, 1000 / 60);

let footer = document.getElementById("footer");
if (footer != null) {
  footer.innerHTML = '<div class="footer_gen"><b><a href="index.html">湯豆腐サイト</a></b><br>湯豆腐のかたまり ── Assemble Yudofu</div>';
}



