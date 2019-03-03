function displaynum(n) {
        document.calculator.answer.value = document.calculator.answer.value + n
    }

    function clearFunction(){
        document.calculator.answer.value = ""
     }
     
     //code for equals starts here
    function equals() {
        document.calculator.answer.value = eval(document.calculator.answer.value)   
    }
                        
    function applyFunction(){
        var myOption = document.calculator.functions.options[document.calculator.functions.options.selectedIndex].value;
        var num = eval(document.calculator.answer.value)
        
        switch(myOption)
        {
            case 'abs':
                document.calculator.answer.value = Math.abs(num)
            break
            case 'tan':
                document.calculator.answer.value = Math.tan(num)
            break
            case 'sin':
                document.calculator.answer.value = Math.sin(num)
            break
            case 'cos':
                document.calculator.answer.value = Math.cos(num)
            break
            case 'log':
                document.calculator.answer.value = Math.log(num)
            break
            case 'floor':
                document.calculator.answer.value = Math.floor(num)
            break
            case 'ceil':
                document.calculator.answer.value = Math.ceil(num)
            break
            case 'exp':
                document.calculator.answer.value = Math.exp(num)
            break
        }
    }

     //code for equals ends here		
    function negation() {
        document.calculator.answer.value = document.calculator.answer.value * (-1)
    }