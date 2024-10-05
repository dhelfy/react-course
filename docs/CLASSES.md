## Вещи которые нужны для понимания и создания классовых компонентов

* `this` - зачастую используется в методах классах, но может использоваться и вне. Если вкратце, то слово `this` просто указывает на то, в каком мы классе / объекте и при чтении кода его даже можно мысленно заменять на имя класса / объекта. Пример:

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" - это "текущий объект", можно даже заменить на user.name
    alert(this.name);
  }

};

user.sayHi()
```
Значение `this` вычисляется в момент вызова метода.

* Метод `constructor` - используется чтобы проинициализировать начальные поля у класса. Пример:
```javascript
// класс можно создать так и поля тут фиксированные
class Animal {
    age: 5,
    hasTail: true,
    type: 'cat'
}

// а можно так и задавать значения при создании
class Animal {
    constructor (params) {
        this.age = params.age,
        this.hasTail = params.hasTail,
        this.type = params.type
    }
}

let dog = new Animal({5, true, 'Dog'})
```
* Наследование и слово `super`
Классы могут наследовать методы и поля родительских классов, для этого используется ключевое слово `extends`. Пример:
```javascript
// создаем класс животного
class Animal {
    constructor (params) {
        this.age = params.age,
        this.hasTail = params.hasTail,
        this.type = params.type
    }
}

// создаем класс кошки который наследует все поля класса Animal
class Cat extends Animal {}
```
А теперь предположим что мы еще хотим, что у кошек было поле для цвета, мы можем просто определить его в классе, но тогда его значение будет статичным, таким, как мы зададим его изначально. Мы помним, что чтобы это решить у нас есть `constructor`. 

НО! Здесь есть нюанс, если мы хотим вызвать конструктор в дочернем классе, то перед этим нам нужно вызвать конструктор класса родителя и для этого есть ключевое слово `super`

```javascript
// class Animal ... 

class Cat extends Animal {
    constructor() {
        //т.к. конструктор принимает параметры, нужно их передать
        super(params)
        this.color = params.color
    }
}
```
* `bind` последний метод. Позволяет привязать контекст вызова к определенному объекту. Пример:
```javascript
const obj = { x: 42 };
function getX() {
  return this.x;
}

const boundGetX = getX.bind(obj);
console.log(boundGetX()); // 42
```