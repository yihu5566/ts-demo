// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// console.log(Role.Reporter)
// console.log(Role)

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了',
}

// 异构枚举 不建议使用
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 0
enum Char {
    // const member
    a,
    b = Char.a,
    c = 1 + 3,
    // computed member
    d = Math.random(),
    e = '123'.length,
    f = 4
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1
    // May = () => 5
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

// 请注意，根据 TypeScript 的类型系统，枚举类型的变量只能接受其成员的值作为有效赋值。在这种情况下，e 和 f 的赋值是不允许的，因为类型 E 和 F 的成员只有 0 和 1。
// let e: E = 3
// let f: F = 3

// console.log(e === f)

// let e1: E.a = 3
// let e2: E.b = 3
// let e3: E.a = 3

// console.log(e1 === e2)
// console.log(e1 === e3)

let g1: G = G.a
let g2: G.a = G.a















