'use strict';

(() => {
  class Maze {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.data = this.getData();
    }

    getData() {
      const data = [];

      //全て塗りつぶすデータ
      for (let row = 0; row < 9; row++) {
        data[row] = [];
        for (let col = 0; col < 7; col++) {
          data[row][col] = 1;
        }
      }

      //外壁を壁にする
      for (let row = 1; row < 9 - 1; row++) {
        for (let col = 1; col < 7 - 1; col++) {
          data[row][col] = 0;
        }
      }

      //格子状の描画
      for (let row = 2; row < 9 - 2; row += 2) {
        for (let col = 2; col < 7 - 2; col += 2) {
          data[row][col] = 1;
        }
      }

      //棒をたおす
      for (let row = 2; row < 9 - 2; row += 2) {
        for (let col = 2; col < 7 - 2; col += 2) {
          let destRow;
          let destCol;

          //その座標に隣接する場所が壁である場合は今いる位置を塗りつぶす
          do {
            const dir = Math.floor(Math.random() * 4);
            switch(dir) {
              case 0: //up
                destRow = row - 1;
                destCol = col;
                break;
              case 1: //down
                destRow = row + 1;
                destCol = col;
                break;
              case 2: //left
                destRow = row;
                destCol = col - 1;
                break;
              case 3: //right
                destRow = row;
                destCol = col + 1;
                break;
            }
          } while (data[destRow][destCol] === 1);

          data[destRow][destCol] = 1;
        }
      }

      return data;
    }

    render() {
      for (let row = 0; row < this.data.length; row++) {
        for (let col = 0; col < this.data[row].length; col++) {
          // データが１のときに描画処理がなされるようにする（塗りつぶされる）
          if (this.data[row][col] === 1) {
            this.ctx.fillRect(col * 10, row * 10, 10, 10);

          }
        }
      }
    }
  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  //Mazeクラスのインスタンス(描画処理できるよう引数にcanvasを渡しておく)
  const maze = new Maze(canvas);
  maze.render();
})();

/*--------------------------------------------------------------------
#即時関数・・・関数を定義すると同時に実行するための構文
  (function () {
    //処理
  }());

#「棒倒し法」アルゴリズムによる迷路の作成
--------------------------------------------------------------------*/
