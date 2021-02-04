"use strict";
//Abstract Products
//Concrete Products
var FilledCircle = /** @class */ (function () {
    function FilledCircle() {
    }
    FilledCircle.prototype.drawCircle = function () {
        var ctx = GetContext();
        if (ctx == null)
            return;
        ctx.fillStyle = 'green';
        ctx.ellipse(150, 150, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
    };
    return FilledCircle;
}());
var FilledSquare = /** @class */ (function () {
    function FilledSquare() {
    }
    FilledSquare.prototype.drawSquare = function () {
        var ctx = GetContext();
        if (ctx == null)
            return;
        ctx.fillStyle = 'green';
        ctx.fillRect(150, 150, 50, 50);
    };
    return FilledSquare;
}());
var FilledTriangle = /** @class */ (function () {
    function FilledTriangle() {
    }
    FilledTriangle.prototype.drawTriangle = function () {
        var ctx = GetContext();
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
    };
    return FilledTriangle;
}());
//Concrete Factory
var FilledShapeFactory = /** @class */ (function () {
    function FilledShapeFactory() {
    }
    FilledShapeFactory.prototype.createCircle = function () {
        return new FilledCircle();
    };
    FilledShapeFactory.prototype.createSquare = function () {
        return new FilledSquare();
    };
    FilledShapeFactory.prototype.createTriangle = function () {
        return new FilledTriangle();
    };
    return FilledShapeFactory;
}());
//Luksus funktion
function GetContext() {
    var canvas = document.getElementById('myCanvas');
    return canvas.getContext("2d");
}
//Stupid setup
var factory = new FilledShapeFactory();
var circleBtn = document.getElementById("circleBtn");
circleBtn.addEventListener("click", function () { return factory.createCircle().drawCircle(); });
var squareBtn = document.getElementById("squareBtn");
squareBtn.addEventListener("click", function () { return factory.createSquare().drawSquare(); });
var triangleBtn = document.getElementById("triangleBtn");
triangleBtn.addEventListener("click", function () { return factory.createTriangle().drawTriangle(); });
