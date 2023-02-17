const sayHello = (variables) => {
    return `
    <div>
        <h2>Hello ${variables.name}.</h2>
        <p>You are ${variables.age} years old and your Birthday is on ${variables.birthDate}</p>
    </div>
    `
}

const templateVars = {
    name: 'Balwant',
    age: 42,
    birthDate: '22nd June'
}
let result = sayHello(templateVars)
console.log(result);
