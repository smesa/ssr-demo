import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
  ) { }

  generateTags({ title = '', description = '' }) {

    this.title.setTitle(title);

    this.meta.addTags([
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
    ]);

  }
}
