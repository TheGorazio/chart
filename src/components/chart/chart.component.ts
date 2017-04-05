import { Component } from '@angular/core';
import { Chart, Point } from './addition';
import * as _ from 'underscore';

@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
})

export class ChartComponent {
    public chart: Chart;
    public points: string = '';
    public year: number = new Date().getFullYear();
    public item = null
    public additionLineShow = false;
    public additionLinePoints;
    public pointsarray;
    public months = [
        {
            name: 'Январь',
            shift: 10
        },
        {
            name: 'Февраль',
            shift: 10 + (700 / 12) * 1
        },
        {
            name: 'Март',
            shift: 10 + (700 / 12) * 2
        },
        {
            name: 'Апрель',
            shift: 10 + (700 / 12) * 3
        },
        {
            name: 'Май',
            shift: 10 + (700 / 12) * 4
        },
        {
            name: 'Июнь',
            shift: 10 + (700 / 12) * 5
        },
        {
            name: 'Июль',
            shift: 10 + (700 / 12) * 6
        },
        {
            name: 'Август',
            shift: 10 + (700 / 12) * 7
        },
        {
            name: 'Сентябрь',
            shift: 10 + (700 / 12) * 8
        },
        {
            name: 'Октябрь',
            shift: 10 + (700 / 12) * 9
        },
        {
            name: 'Ноябрь',
            shift: 10 + (700 / 12) * 10
        },
        {
            name: 'Декабрь',
            shift: 10 + (700 / 12) * 11
        },
    ];

    constructor() {
        this.chart = new Chart(this.generateData());
        this.points = this.chart.getPoints();
        this.pointsarray = this.chart.points;
        console.log(this.pointsarray);
    }

    public onDiagramMouseMove(evt) {
        let element = _.find(this.chart.points, (e) => e.x === evt.screenX - 18);
        if (element !== undefined) {
            this.additionLineShow = true;
            this.additionLinePoints = `${element.x},100 ${element.x},${element.y}`;
            this.item = {
                cost: element.cost,
                delta: element.delta,
                x: element.x,
                y: element.y
            }
            console.log(this.item);
        } else {
            this.additionLineShow = false;
            this.item = null;         
        }
    }

    public onDiagramClick(evt) {
        console.log(evt);
    }

    public generateData() {
        let array: Array<Point> = [];
        for(let i = 0; i < 365; i++) {
            let y,c,d;
            y = Math.random() * 100;
            c = Math.random() * 100;
            d = Math.random();
            array.push(new Point(y,i*(500/365)*2,c,d));
        }

        //return array;
        return [
            new Point(0, 15, 1, 1),
            new Point(10, 30, 2, 1) ,
            new Point(20, 33, 3, 1) ,
            new Point(30, 40, 4, 1) ,
            new Point(40, 64, 5, 1),
            new Point(50, 10, 6, 1),
            new Point(60, 23, 7, 1),
            new Point(70, 53, 8, 1)
        ];
    }
}