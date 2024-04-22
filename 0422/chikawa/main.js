//class.jsをインポートしたい
import { Chiikawa } from "./class.js";

const chiikawas = [
  //配列
  {
    //オブジェクト
    story: 1,
    title: "かためのプリン／ホットケーキ",
    image: "chiikawa-001.webp",
    id: "pbQQAwSQUX4",
  },
  {
    story: 2,
    title: "スフィンクス／ほんものだ",
    image: "chiikawa-002.webp",
    id: "i6d3K6ln-d4",
  },
  {
    story: 3,
    title: "イカ／パイシチュー",
    image: "chiikawa-003.webp",
    id: "a7cwqxmn7rY",
  },
  {
    story: 4,
    title: "ブロッコリー／ピザまん",
    image: "chiikawa-004.webp",
    id: "l9IAr7WY-Xk",
  },
  {
    story: 5,
    title: "チャリメラ／チャルメラ",
    image: "chiikawa-005.webp",
    id: "cE8wVmwY7VY",
  },
];
//複数なので配列を準備
const chiikawaContents = []; //空の配列

//挿入するエリア
const container = document.querySelector(".contents");

//インスタンス化
//配列の順番を表す数字を「添え字」またの名を「index」

for (let i = 0; i < chiikawas.length; i++) {
  chiikawaContents.push(
    new Chiikawa(
      chiikawas[i /*添字*/].story,
      chiikawas[i].title,
      chiikawas[i].image,
      chiikawas[i].id
    )
  );
  //メソッドの呼び出し
  // console.log(chiikawaContents[i].createMarkup());

  container.insertAdjacentHTML("beforeend", chiikawaContents[i].createMarkup());
}

console.log(chiikawaContents);
