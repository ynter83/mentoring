import { Component, Input } from '@angular/core';

import { Flickr } from './flickr';

@Component({
    selector: 'my-flickr-detail',
    template: `
        <div *ngIf="flickr" >
            <img class="xl" src="{{flickr.urlxl}}" />
        </div>
    `,
})

export class FlickrDetailComponent {
    @Input()
    flickr: Flickr;
}