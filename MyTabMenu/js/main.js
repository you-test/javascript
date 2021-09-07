'use strict'

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      //イベントオブジェクト利用でページ遷移を防止する
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active')
      });
      clickedItem.classList.add('active');
    });

    contents.forEach(content => {
      content.classList.remove('active');
    });

    // (clickedItem.dataset.id)でクリックした場所のcontentのidを取得している
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
}