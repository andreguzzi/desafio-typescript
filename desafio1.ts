/*
Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {};
employee.code = 10;
employee.name = "John";
*/

// R: para rodar o código acima é necessário fazer uma interface employee

interface employee {
    code: number,
    name: string
}

(() => {
    const employeeJohn : employee = {
        code: 10,
        name: "John"
    }
    console.log(employeeJohn.name)
})();