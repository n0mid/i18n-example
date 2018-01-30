import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public books: any[] = [];

  public query: string = '';

  public search() {
    if (this.query) {
      this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.query}`).subscribe((data: any) => {
        if (data && data.items) {
          this.books = data.items.map(item => {
            return {
              id: item.id,
              title: item.volumeInfo.title,
              authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
              image: item.volumeInfo.imageLinks.smallThumbnail,
              pageCount: item.volumeInfo.pageCount
            }
          })
        }
      })
    }
  }

  constructor(private http: HttpClient,
              private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

}
