import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, input } from '@angular/core';
import 'giscus';

@Component({
  selector: 'app-giscus-comment',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="giscus-wrapper">
      <giscus-widget
        [attr.repo]="repo()"
        [attr.repo-id]="repoId()"
        [attr.category]="category()"
        [attr.category-id]="categoryId()"
        [attr.mapping]="mapping()"
        [attr.strict]="strict()"
        [attr.term]="'test'"
        [attr.reactions-enabled]="reactionsEnabled()"
        [attr.emit-metadata]="emitMetadata()"
        [attr.input-position]="inputPosition()"
        [attr.theme]="theme()"
        [attr.lang]="lang()"
        [attr.loading]="loading()"
      ></giscus-widget>
    </div>
  `,
  styles: [
    `
      .giscus-wrapper {
        display: block;
        margin: 2rem 0;
        min-height: 150px; /* 預留空間防止 Layout Shift */
      }
    `,
  ],
})
export class GiscusComment {
  repo = input.required<string>();
  repoId = input.required<string>();
  categoryId = input.required<'DIC_kwDORL2h1M4C2FFF'>();
  category = input<string>('General');
  mapping = input<string>('specific-term');
  strict = input<string>('0');
  reactionsEnabled = input<string>('1');
  emitMetadata = input<string>('0');
  inputPosition = input<'top' | 'bottom'>('top');
  theme = input<string>('light');
  lang = input<string>('zh-TW');
  loading = input<'lazy' | 'eager'>('lazy');

  constructor() {
    // 如果未來需要針對 theme 改變做額外處理，可以寫在 effect 裡
    effect(() => {
      // console.log('Current theme changed to:', this.theme());
    });
  }
}
