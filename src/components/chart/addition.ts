export class Point {
    constructor(public x: number, public y: number, public cost: number, public delta: number) {
        this.y = 100 - y;
        this.x = x * 1.4 + 20;
    }
}

export class Chart {
    constructor(public points: Array<Point>) {

    }
    public getPoints() {
        let pointString: string = '';
        this.points.forEach((point) => pointString += `${point.x},${point.y} `);
        return pointString;
    }
}
    