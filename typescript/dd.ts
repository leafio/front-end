interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName
}

let user = { firstName: "Jane", lastName: "User" }

document.body.innerHTML = greeter(user)

function log(val?: any): void {
  console.log(val)
}
let arr: string[] = ["1", "2", "3"]
let newArr: Array<string> = ["he", "ll", "o"]
log(arr)
log(newArr)

function to_String(o: object): void {
  console.log(o.toString())
}

{
  enum Color {
    Red,
    Green,
    Blue,
  }
  let color: Color = Color.Red
  log(color)
  enum Animal {
    Dog = 2,
    Cat,
    Bird,
  }
  let animal = Animal.Cat
  log(animal)
  let animalName = Animal[4]
  log(animalName)
}

{
  let haha: any = ""
  let strLen = (<string>haha).length

  let dodo: any = ""
  let dodoLen = (dodo as string).length
}
{
  let foo: string | number = "前端专栏"
  foo = 9527
  log(foo)
}
{
  let foo: string | number = "前端专栏"
  let answer: string = foo as string
  log(answer)
}
{
  interface Animal {
    name: string
    age?: number
  }
  function getName(o: Animal) {
    return o.name
  }
  let cat = {
    name: "哆啦A梦",
  }
  let dog = { name: "旺财", age: 3 }
  getName(cat)
  getName(dog)
}
{
  interface Point {
    readonly x: number
    readonly y: number
  }
  let p1: Point = {
    x: 10,
    y: 10,
  }
}
{
  class Rect {
    x: number
    y: number
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }
    getRect() {
      return this.x * this.y
    }
  }

  interface RectIFS extends Rect {
    z: number
    getCube(): number
  }
  class Cube extends Rect implements RectIFS {
    z: number
    constructor(x: number, y: number, z: number) {
      super(x, y)
      this.z = z
    }
    getCube(): number {
      return this.x * this.y * this.z
    }
  }
  let shape = new Cube(22, 44, 55)
  log(shape.getCube())
}

{
  interface Dog {
    name: string
    age: number
  }
  let list: Dog[] = [
    {
      name: "tom",
      age: 3,
    },
    {
      name: "jerry",
      age: 9,
    },
  ]
  list.forEach((item) => {
    console.log(item.name + "  " + item.age)
  })
}
