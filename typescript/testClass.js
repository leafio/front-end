console.log("------------start-------")

class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(this.name)
  }
}

// 用法：
console.log("type", typeof User)
let user = new User("John")
user.sayHi()

// class Button {
//   constructor(value) {
//     this.value = value
//   }

//   click = () => {
//     alert(this.value)
//   }
// }

// let button = new Button("hello")
// button.click()
// setTimeout(button.click, 1000) // undefined

class Cat {
  constructor() {}
  static age = 1
  static address = "haha"
  static speak() {
    console.log(this.age, this.name)
  }
}

Cat.speak()

console.log(Cat)

// console.log(JSON.stringify(Cat.objects))
// class Article {
//   static publisher = "Levi Ding"
// }

// alert(Article.publisher) // Levi Ding
