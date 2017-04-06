export class Point {
    public y: number;
    public x: number;
    public cost: number;
    constructor(x: number, y: number, public delta: number, public date: string) {
        
        this.y = 100 - y;
        this.x = x * (680 / 365) + 20;
        this.cost = y;
    }
}

export class Chart {
    constructor(public points: Array<Point>) {
        this.points = points;
        let ys = this.points.map((point) => point.y);
        let max = Math.max(...(ys)) * 1.5;
        let min = Math.min(...(ys));
        if (min < 0) {
            this.params.min = min - 10;
        } else {
            min = 0;
        }
        let step = Math.round((max - min) / 4);
        for (let i = 0; i < 5; i++) {
            if (i == 0)
                this.axisY.push({
                    value: min,
                    y: 100
                })
            else
                this.axisY.push({
                    value: step * i,
                    y: 20 * (5 - i)
                });
        }
        this.axisY.push({
            value: max + 10,
            y: 0
        });
    }
    
    public axisY: Array<object> = [];
    public params = {
        min: 0,
        max: 0
    }

    public getPoints() {
        let pointString: string = 'M';
        this.points.forEach((point) => pointString += `${point.x},${point.y} `);
        return pointString;
    }
}



    