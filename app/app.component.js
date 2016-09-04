"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Flickres = [
    { id: 11, url: 'https://c1.staticflickr.com/9/8501/8300920648_d4a21bba59_n.jpg', urlxl: 'https://c1.staticflickr.com/9/8501/8300920648_56ce4fb10f_k.jpg' },
    { id: 12, url: 'https://c1.staticflickr.com/2/1558/26017368400_dc45fbb364_n.jpg', urlxl: 'https://c1.staticflickr.com/2/1558/26017368400_41dff31fbc_k.jpg' },
    { id: 13, url: 'https://c5.staticflickr.com/4/3781/10901734724_ab15461d13_n.jpg', urlxl: 'https://c5.staticflickr.com/4/3781/10901734724_94ed12297a_k.jpg' },
    { id: 14, url: 'https://c8.staticflickr.com/9/8486/8203155911_f29b9bf344_n.jpg', urlxl: 'https://c8.staticflickr.com/9/8486/8203155911_f29b9bf344_c.jpg' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Flickr images';
        this.flickres = Flickres;
    }
    AppComponent.prototype.onSelect = function (flickr) {
        this.selectedFlickr = flickr;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>My flickres</h2>\n        <ul class=\"flickres\" >\n          <li *ngFor=\"let flickr of flickres\" [class.selected]=\"flickr === selectedFlickr\"\n            (click)=\"onSelect(flickr)\">\n            <img src=\"{{flickr.url}}\"/>\n          </li>\n        </ul>\n        <my-flickr-detail [flickr]=\"selectedFlickr\">\n\n        </my-flickr-detail>\n    ",
            styles: ["\n        .flickres {\n          padding: 0;\n        }\n        .flickres li {\n          list-style:none;\n          display: inline-block;\n          width: 25%;\n        }\n        .flickres li img {\n          width: 100%;\n        }\n        .xl {\n          width: 100%;\n        }\n        .selected {\n            opacity: 0.5;\n        }\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map