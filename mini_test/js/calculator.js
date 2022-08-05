let display = document.querySelector('.display');
let displayContent = '';
let buttons = document.querySelectorAll('button');

let operatorCheck = true;
let operatorReplace = false;
let dotCheck = true;
let equalsCheck = true;


buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        switch(button.value){
            case 'operator' :   
                if(operatorCheck === false && operatorReplace === false ){                                   
                    displayContent += e.target.textContent;  
                    display.innerHTML = displayContent;           
                    operatorCheck = true;
                    operatorReplace = true;
                    equalsCheck =false; 
                    break;
                } else if ( operatorReplace === true){
                   displayContent = displayContent.slice(0 , -1);
                   displayContent += e.target.textContent; 
                   display.innerHTML = displayContent;  
                   equalsCheck =false;       
                   break;
                }
            case 'ac' :                                        
                    displayContent = '';                  
                    display.innerHTML = displayContent;  
                    operatorCheck = true;
                    break;
            case 'equals' :     
                if(operatorCheck === false && equalsCheck === false) {
                    displayContent = (new Function('return '+displayContent.replace('÷','/').replace('x','*')))();
                    display.innerHTML = displayContent;
                    operatorCheck = false;
                    equalsCheck = true;
                    dotCheck === true
                    break;        
                }else{
                    break;
                } 
            case 'dot' :     
                if(dotCheck === true) {
                    displayContent += e.target.textContent; 
                    display.innerHTML = displayContent;  
                    dotCheck = false;       
                    operatorCheck = true;
                   break;       
                }else{
                    break;
                }                                   
            default : 
                    if(equalsCheck === true ){
                        displayContent = '';
                        displayContent += e.target.textContent;  
                        display.innerHTML = displayContent; 
                        operatorCheck = false;  
                        operatorReplace = false; 
                        equalsCheck =false;    
                        dotCheck === true   
                        break;  
                    }else {
                        displayContent += e.target.textContent;  
                        display.innerHTML = displayContent; 
                        operatorCheck = false;  
                        operatorReplace = false; 
                        equalsCheck =false;  
                        dotCheck === true     
                        break;  
                    }                     
        }
    })
})