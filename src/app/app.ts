import { Component, signal } from '@angular/core';
import { GiscusComment } from './shared/giscus-comment/giscus-comment';


@Component({
  selector: 'app-root',
  imports: [GiscusComment],
  template: `
    <article>
      <h1>{{ postTitle() }}</h1>
      <p>這是你的部落格文章內容...</p>
    </article>

    <div class="w-lg">
      <app-giscus-comment
        repo="ENPeiii/giscus-widget-demo"
        repoId="R_kgDORL2h1A"
        categoryId="DIC_kwDORL2h1M4C2FFF"
        [theme]="currentTheme()"
        lang="zh-TW"
      ></app-giscus-comment>
    </div>

  `
})
export class App {
  protected readonly title = signal('giscus-widget-demo');
  postTitle = signal('我的第一篇文章');
  // 假設你有一個切換主題的機制
  currentTheme = signal('preferred_color_scheme');
}
