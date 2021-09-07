'use strict';

{
  //カラムの数字作成
  function createColumn(col) {
    //カラム1行の数字を生成して配列に格納
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
    //配列souceからランダムに5つ数字を取り出して配列columnに格納
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }

    return column;
  }

  //全てのカラムの数字を作る
  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  //ビンゴシート作成
  function renderBingo(bingo) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        //colとrowを反転させて値をつける
        td.textContent = bingo[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  } 

  const columns = createColumns();
  renderBingo(columns);

}