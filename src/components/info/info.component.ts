import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'info',
    templateUrl: 'info.component.html',
    styleUrls: ['info.component.css']
})

export class Info {
    @Input() item;
    public x: number;
    public y: number;
    constructor() {}
    ngOnInit() {
        this.x = this.item ? this.item.x : '0';
        this.y = this.item ? this.item.y : '0';
    };
    ngOnChanges() {
        this.x = this.item ? this.item.x : '0';
        this.y = this.item ? this.item.y : '0';
    }
}