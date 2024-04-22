//エクスポートしたい

export class Chiikawa {
  constructor(story, title, image, id /*引数*/) {
    this.story = story;
    this.title = title;
    this.image = image;
    this.id = id;
  }

  //メソッド

  createMarkup() {
    return `
           <dl>
          <dt><span>第${this.story}</span>${this.title}</dt>
          <dd>
            <a href="https://www.youtube.com/watch?v=${this.id}">
              <img src="./images/${this.image}" alt="${this.title}" />
            </a>
          </dd>
        </dl>`;
  }
}
