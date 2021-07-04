class Calculator{
   constructor(prevOperandandTextElement, currentOperandandTextElement) {
       this.prevOperandandTextElement = prevOperandandTextElement
       this.currentOperandandTextElement = currentOperandandTextElement
       this.clear()
    }

   clear() {
       this.current_operand = ''
       this.prev_operand = ''
       this.operation = undefined

}

delet() {

}

appendNumber(number){
    if(number ==="." && this.current_operand.includes(".")) return
this.current_operand = this.current_operand.toString() + number.toString()
}

chooseOperation(operation){
    if (this.current_operand === '') return
    if(this.prev_operand !== "") {
       this.compute() 
    }
    this.operation = operation
    this.prev_operand = this.current_operand
    this.current_operand = ""

}

compute(){
    let computation
    const prev = parseFloat(this.prev_operand)
    const current = parseFloat(this.current_operand)
    if (isNaN(prev) || isNaN(current)) return
    switch(this.operation){
       case '+':
        computation = prev + current   
        break
        case '-':
        computation = prev - current   
        break
        case '*':
        computation = prev * current   
        break
        case '÷':
        computation = prev / current   
        break
        default: 
        return
    }
    this.current_operand = computation 
    this.operation = undefined
    this.prev_operand = ''
    
} 

updateDisplay(){
    this.currentOperandandTextElement.innerText = this.current_operand
    this.prevOperandandTextElement.innerText = this.prev_operand

 }
}





const numberBtn = document.querySelectorAll(".data_number");
const operationBtn = document.querySelectorAll(".data_operation");
const equalsBtn = document.querySelector("#data_equals");
const deleteBtn = document.querySelector(".data_delete");
const allClearBtn = document.querySelector(".data_all_clear");
const prevOperandandTextElement = document.querySelector("#data_prev_operand");
const currentOperandandTextElement = document.querySelector("#data_current_operand");
const current_operand = document.querySelector(".currentOperand");
const prev_operand = document.querySelector(".prevOperand")


const calculator = new Calculator(prevOperandandTextElement, 
    currentOperandandTextElement)

    numberBtn.forEach(button => {
        button.addEventListener("click", function (e){
            e.preventDefault();
            calculator.appendNumber(button.innerText) 
            calculator.updateDisplay()

        })
    })

    operationBtn.forEach(button => {
        button.addEventListener("click", function (e){
            e.preventDefault();
            calculator.chooseOperation(button.innerText) 
            calculator.updateDisplay()

        })
    })


    equalsBtn.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
        
    })