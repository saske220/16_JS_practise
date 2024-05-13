//別ファイルでweathercodesを読み込み済み

const codeNums = [
  { 愛知県: 230000 },
  { 岐阜県: 210000 },
  { 三重県: 240000 },
  { 静岡県: 220000 },
];
const weekUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNums[0]["愛知県"]}.json`;
const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${codeNums[0]["愛知県"]}.json`;
const Btns = document.querySelectorAll("button");

fetch(weekUrl)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    response.json().then(function (data) {
      console.log(data);

      //愛知県西部の天気予報をwest、日付をweatherDateに代入します。
      const west = data[0].timeSeries[0].areas[0];
      const weatherDate = data[0].timeSeries[0].timeDefines;

      //日付をbuttonに代入

      weatherDate.forEach((date, index) => {
        Btns[index].innerHTML = `${new Date(date).getMonth() + 1}月${new Date(
          date
        ).getDate()}日`;
        Btns[index].addEventListener("click", function () {
          console.log(west.weatherCodes[index]);

          //表示場所を取得
          const weatherArea = document.querySelector(".forecast");
          weatherArea.innerHTML = weatherForecast(
            west.weatherCodes[index]
          ).result;
          const image = document.createElement("img");
          image.setAttribute(
            "src",
            `https://www.jma.go.jp/bosai/forecast/img/${
              weatherForecast(west.weatherCodes[index]).imagecode
            }`
          );
          weatherArea.append(image);
        });
      });
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });

const speechBtn = document.querySelector(".speaker");
const stopBtn = document.querySelector(".speakerstop");

fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    // responseのテキストを調べる
    response.json().then(function (weather) {
      console.log(weather.text);
      speechBtn.addEventListener("click", () => {
        speech(weather.text);
      });
      stopBtn.addEventListener("click", () => {
        speechstop();
      });
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });

//コード表と取得コードをすり合わせて、天気を返す関数
const weatherForecast = function (getCode) {
  for (let weather in weathercode) {
    if (weather === getCode) {
      return {
        result: weathercode[weather][3],
        imagecode: weathercode[weather][0],
      };
    }
  }
};
