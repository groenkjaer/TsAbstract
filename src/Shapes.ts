//Abstract Products

interface ICircle{
    drawCircle(): void 
}

interface ISquare{
    drawSquare(): void
}

interface ITriangle{
    drawTriangle(): void
}

//Concrete Products
class FilledCircle implements ICircle{
    drawCircle(): void {
        let ctx = GetContext();
        if (ctx == null)
            return;

        ctx.fillStyle = 'green';
        ctx.ellipse(150, 150, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
    }
}

class FilledSquare implements ISquare{
    drawSquare(): void {
        let ctx = GetContext();
        if (ctx == null)
            return;

        ctx.fillStyle = 'green';
        ctx.fillRect(150, 150, 50, 50);
    }
}

class FilledTriangle implements ITriangle{
    drawTriangle(): void {
        let ctx = GetContext();
        if (ctx == null)
            return;

        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.lineTo(150, 300);
        ctx.lineTo(300, 300);
        ctx.closePath();

        ctx.lineWidth = 10;
        ctx.strokeStyle = 'green';
        ctx.stroke();

        ctx.fillStyle = 'green';
        ctx.fill();
    }
}

//Abstract Factory

interface IShapeFactory{
    createCircle() : ICircle
    createSquare() : ISquare
    createTriangle() : ITriangle
}

//Concrete Factory

class FilledShapeFactory implements IShapeFactory{
    createCircle(): ICircle {
        return new FilledCircle();
    }
    createSquare(): ISquare {
        return new FilledSquare();
    }
    createTriangle(): ITriangle {
        return new FilledTriangle();
    }
}

//Luksus funktion
function GetContext() : CanvasRenderingContext2D | null {
    let canvas = document.getElementById('myCanvas')! as HTMLCanvasElement;
    return canvas.getContext("2d");
}

//Stupid setup
let factory = new FilledShapeFactory();

let circleBtn = document.getElementById("circleBtn")!;
circleBtn.addEventListener("click", () => factory.createCircle().drawCircle())

let squareBtn = document.getElementById("squareBtn")!;
squareBtn.addEventListener("click", () => factory.createSquare().drawSquare())

let triangleBtn = document.getElementById("triangleBtn")!;
triangleBtn.addEventListener("click", () => factory.createTriangle().drawTriangle())


