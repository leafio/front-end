var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
function log(val) {
    console.log(val);
}
var arr = ["1", "2", "3"];
var newArr = ["he", "ll", "o"];
log(arr);
log(newArr);
function to_String(o) {
    console.log(o.toString());
}
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var color = Color.Red;
    log(color);
    var Animal = void 0;
    (function (Animal) {
        Animal[Animal["Dog"] = 2] = "Dog";
        Animal[Animal["Cat"] = 3] = "Cat";
        Animal[Animal["Bird"] = 4] = "Bird";
    })(Animal || (Animal = {}));
    var animal = Animal.Cat;
    log(animal);
    var animalName = Animal[4];
    log(animalName);
}
{
    var haha = "";
    var strLen = haha.length;
    var dodo = "";
    var dodoLen = dodo.length;
}
{
    var foo = "前端专栏";
    foo = 9527;
    log(foo);
}
{
    var foo = "前端专栏";
    var answer = foo;
    log(answer);
}
{
    function getName(o) {
        return o.name;
    }
    var cat = {
        name: "哆啦A梦"
    };
    var dog = { name: "旺财", age: 3 };
    getName(cat);
    getName(dog);
}
{
    var p1 = {
        x: 10,
        y: 10
    };
}
{
    var Rect = /** @class */ (function () {
        function Rect(x, y) {
            this.x = x;
            this.y = y;
        }
        Rect.prototype.getRect = function () {
            return this.x * this.y;
        };
        return Rect;
    }());
    var Cube = /** @class */ (function (_super) {
        __extends(Cube, _super);
        function Cube(x, y, z) {
            var _this = _super.call(this, x, y) || this;
            _this.z = z;
            return _this;
        }
        Cube.prototype.getCube = function () {
            return this.x * this.y * this.z;
        };
        return Cube;
    }(Rect));
    var shape = new Cube(22, 44, 55);
    log(shape.getCube());
}
