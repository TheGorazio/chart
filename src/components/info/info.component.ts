import { Component, Input } from '@angular/core';
import ItemService from '../../services/itemService';

export interface Item {
    cost: number,
    delta: number
}

@Component({
    selector: 'info',
    template: `
        <div class="info">{{item.cost}} <> {{item.delta}}</div>
    `,
    styles: [
        `
        .info {
            position: absolute;
            z-index: 10;
            top: ${this.item ? this.item.y+'px' : ''};
            left: ${this.item ? this.item.x+'px' : ''};

            background-color: white;
            padding: 5px;
            color: black;
        }
        `
    ]
})

export class Info {
    constructor(private itemService: ItemService) {}
    ngOnInit() {console.log(this.item)};    
}