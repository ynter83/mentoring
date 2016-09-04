import { Component } from '@angular/core';

import { Flickr } from './flickr';

const Flickres: Flickr[] = [
    { id: 11, url: 'https://c1.staticflickr.com/9/8501/8300920648_d4a21bba59_n.jpg', urlxl: 'https://c1.staticflickr.com/9/8501/8300920648_56ce4fb10f_k.jpg' },
    { id: 12, url: 'https://c1.staticflickr.com/2/1558/26017368400_dc45fbb364_n.jpg', urlxl: 'https://c1.staticflickr.com/2/1558/26017368400_41dff31fbc_k.jpg' },
    { id: 13, url: 'https://c5.staticflickr.com/4/3781/10901734724_ab15461d13_n.jpg', urlxl: 'https://c5.staticflickr.com/4/3781/10901734724_94ed12297a_k.jpg' },
    { id: 14, url: 'https://c8.staticflickr.com/9/8486/8203155911_f29b9bf344_n.jpg', urlxl: 'https://c8.staticflickr.com/9/8486/8203155911_f29b9bf344_c.jpg' }
];

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My flickres</h2>
        <ul class="flickres" >
          <li *ngFor="let flickr of flickres" [class.selected]="flickr === selectedFlickr"
            (click)="onSelect(flickr)">
            <img src="{{flickr.url}}"/>
          </li>
        </ul>
        <my-flickr-detail [flickr]="selectedFlickr">

        </my-flickr-detail>
    `,
    styles: [`
        .flickres {
          padding: 0;
        }
        .flickres li {
          list-style:none;
          display: inline-block;
          width: 25%;
        }
        .flickres li img {
          width: 100%;
        }
        .xl {
          width: 100%;
        }
        .selected {
            opacity: 0.5;
        }
    `],
})

export class AppComponent {
    title = 'Flickr images';
    flickres = Flickres;
    selectedFlickr: Flickr;
    onSelect(flickr: Flickr): void {
        this.selectedFlickr = flickr;
    }
}
