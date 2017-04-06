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
    public year: number = 2016;
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
    public axisY;

    constructor() {
        this.chart = new Chart(this.generateData());
        this.points = this.chart.getPoints();
        this.pointsarray = this.chart.points;
        this.axisY = this.chart.axisY;
    }

    public onDiagramMouseMove(evt) {
        let point = _.find(this.chart.points, (p) => p.x - 5 < evt.screenX - 18 && evt.screenX - 18 < p.x + 5)
        if (point !== undefined) {
            this.additionLineShow = true;
            this.additionLinePoints = `${point.x},100 ${point.x},${point.y}`;
            this.item = {
                cost: point.cost,
                delta: point.delta,
                date: point.date,
                x: point.x,
                y: point.y,
            }
        } else {
            this.additionLineShow = false;
            this.item = null;         
        }
    }

    public generateData() {
        let start: number = 1451606400000;
        let dayStep: number = 86400000;
        let data: Array<Point> = [];
        let cost: number = 55.55;
        for (let i = 0; i < 365; i+=5) {
            let delta: number, date: Date, sign: number;
            sign = Math.random() > 0.5 ? 1 : -1
            delta = Math.random() * 4 * sign;
            date = new Date(start + dayStep * (1 + i));
            cost -= delta;
            data.push(new Point(i, 100 - cost, delta, this.formatDate(date)));
        }
        return data; 
    }

    private formatDate(date) {
        return `${date.getDate() + 1} ${this.months[date.getMonth()].name} ${date.getFullYear()}`;
    }
}