function calculator(c){
    const expression = document.getElementById("display")
    let number = expression.innerHTML
    if(!isNaN(c)){
        console.log(c,)
        expression.innerHTML=number*10+c
    }
    else{
        
        if(c != "="){
                document.getElementById("operand2").innerHTML=number
                console.log(number)
                document.getElementById("display").innerHTML=''
                document.getElementById('operation').innerHTML=c 
        }
        
        else{
            let oprand=parseInt(number)
            let oprand2=parseInt(document.getElementById("operand2").innerHTML)
            let x = document.getElementById("operation").innerHTML
            switch(x){
                case '+':
                    var answer = oprand+oprand2;    
                    break;
                
                case '-':
                    var answer = oprand -oprand2;
                    break;
                    
                case '/':
                    var answer= oprand / oprand2
                    break;

                case '*':
                    var answer = oprand * oprand2
                    break;

            }
            console.log(oprand, oprand2, answer, x)
            document.getElementById("display").innerHTML=answer;
            
        } 
    }
}
    
