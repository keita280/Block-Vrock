


//@@@@@@@@@@@@@@@@@@@@@@@@@
//ハンバーガーメニューの表示
//@@@@@@@@@@@@@@@@@@@@@@@@@

jQuery(function() {
  $('#toggle').on('click', function() {
    $('body').toggleClass('is-open');
    if ($('#humberger-text').text() === 'CLOSE') {
      $('#humberger-text').text('MENU');
    } else {
      $('#humberger-text').text('CLOSE');
    }
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
//モーダルウィンドウ
//@@@@@@@@@@@@@@@@@@@@@@@@@
 $(function(){
  // 変数に要素を入れる
  var open = $('.modal-open'),
    close = $('.modal-close'),
    container = $('.modal-container');

  //開くボタンをクリックしたらモーダルを表示する
  open.on('click',function(){ 
    container.addClass('active');
    return false;
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on('click',function(){  
    container.removeClass('active');
  });

  //モーダルの外側をクリックしたらモーダルを閉じる
  $(document).on('click',function(e) {
    if(!$(e.target).closest('.modal-body').length) {
      container.removeClass('active');
    }
  });
});

