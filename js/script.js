


//@@@@@@@@@@@@@@@@@@@@@@@@@
// ハンバーガーメニューの開閉
//@@@@@@@@@@@@@@@@@@@@@@@@@



$(document).ready(function() {
  $('.header__toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
    $('.sp-header__nav').toggleClass('is-active');


  });
});


//@@@@@@@@@@@@@@@@@@@@@@@@@
//TO TOP
//@@@@@@@@@@@@@@@@@@@@@@@@@
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function(){
  // 移動速度を指定
  let speed = 300;
  // hrefで指定された値を取得
  let id =jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;
  // ターゲットの位置までスピードの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position - $( '#js-header' ).outerHeight()
    },
    speed
  );
  return false;
 });





//@@@@@@@@@@@@@@@@@@@@@@@@@
  // YouTubeの埋め込みプレーヤーの幅を画面幅最大に調整する関数
//@@@@@@@@@@@@@@@@@@@@@@@@@
$(function(){
  function adjustYouTubePlayerSize() {
    var container = document.querySelector('.video-container');
    var player = document.querySelector('#youtube-player iframe');

    var containerWidth = container.offsetWidth;
    var playerWidth = containerWidth;

    // 画面幅が最大幅（例: 980px）より大きい場合のみ最大幅を設定
    var maxWidth = 980;
    if (containerWidth > maxWidth) {
      playerWidth = maxWidth;
    }

    var playerHeight = (playerWidth / 16) * 9; // YouTubeプレーヤーのアスペクト比は16:9

    player.style.width = playerWidth + 'px';
    player.style.height = playerHeight + 'px';
  }

  // ウィンドウのリサイズ時にYouTubeプレーヤーのサイズを調整する
  window.addEventListener('resize', adjustYouTubePlayerSize);

  // ページ読み込み時にYouTubeプレーヤーのサイズを初期設定する
  window.addEventListener('DOMContentLoaded', adjustYouTubePlayerSize);


});




//@@@@@@@@@@@@@@@@@@@@@@@@@
// ログイン画面のボタンの表示・非表示
//@@@@@@@@@@@@@@@@@@@@@@@@@

document.getElementById('toggle-password').addEventListener('click', function () {
  var passwordInput = document.getElementById('password');
  var toggleIcon = document.getElementById('toggle-icon');

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      // FontAwesome 5用の切り替え
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
  } else {
      passwordInput.type = "password";
      // FontAwesome 5用の切り替え
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
  }
});
