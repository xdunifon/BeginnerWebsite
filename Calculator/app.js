

expressionEl = document.getElementById("expression-el")


document.getElementById("1-btn").addEventListener("click", function() {
    expressionEl.value += "1"
    console.log("1 button clicked")
})

document.getElementById("2-btn").addEventListener("click", function() {
    expressionEl.value += "2"
    console.log("2 button clicked")
})

document.getElementById("3-btn").addEventListener("click", function() {
    expressionEl.value += "3"
    console.log("3 button clicked")
})

document.getElementById("4-btn").addEventListener("click", function() {
    expressionEl.value += "4"
    console.log("4 button clicked")
})

document.getElementById("5-btn").addEventListener("click", function() {
    expressionEl.value += "5"
    console.log("6 button clicked")
})

document.getElementById("6-btn").addEventListener("click", function() {
    expressionEl.value += "6"
    console.log("6 button clicked")
})

document.getElementById("7-btn").addEventListener("click", function() {
    expressionEl.value += "7"
    console.log("7 button clicked")
})

document.getElementById("8-btn").addEventListener("click", function() {
    expressionEl.value += "8"
    console.log("8 button clicked")
})

document.getElementById("9-btn").addEventListener("click", function() {
    expressionEl.value += "9"
    console.log("9 button clicked")
})

document.getElementById("0-btn").addEventListener("click", function() {
    expressionEl.value += "0"
    console.log("0 button clicked")
})

document.getElementById("plus-btn").addEventListener("click", function() {
    expressionEl.value += "+"
    console.log("+")
})

document.getElementById("subtraction-btn").addEventListener("click", function() {
    expressionEl.value += "-"
    console.log("subtract clicked")
})

document.getElementById("multiply-btn").addEventListener("click", function() {
    expressionEl.value += "*"
    console.log("multiply clicked")
})

document.getElementById("divide-btn").addEventListener("click", function() {
    expressionEl.value += "/"
    console.log("divide clicked")
})

document.getElementById("decimal-btn").addEventListener("click", function() {
    expressionEl.value += "."
    console.log("decimal clicked")
})

document.getElementById("expression-el").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        console.log("enter pressed")
        renderExpression()
    }
})

document.getElementById("equals-btn").addEventListener("click", function() {
    console.log("Equals clicked")
    let expression = expressionEl.value

    if (/[^0-9*+./-]/g.test(expression)) {
        expressionEl.value = "Only #s and operators"
    } else {
        solve(expression)
    }
})

function renderExpression() {
    console.log("Equals clicked")
    let expression = expressionEl.value

    if (/[^0-9*+./-]/g.test(expression)) {
        expressionEl.value = "Only #s and operators"
    } else {
        solve(expression)
    }
}

function solve(expression) {
    if (/[*+/-]/g.test(expression)) {
        expressionEl.value = eval(expression)
    }
}