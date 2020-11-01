let a ="";

// 前四排
for(let i=1; i<=4; i++){    
    let space = " ";    
    let star = " ";   
    for(let j = 1; j <= 4-i; j++){  //循环输出空格
        space = space + " ";
    }
    for(let k = 1; k <= i; k++){    //循环输出*
        star = star + "*" + " ";
    }    
    a = a + space + star +"\n";
 }

//  后三排
 for(let i = 4-1; i > 0; i--){    
    let space = " ";    
    let star = " ";    
    for(let m=1; m<=4-i; m++){        
        space += " ";    
    }    
    for(let n=1; n<=i; n++){        
        star += "*" + " ";    
    }     
    a = a + space + star + "\n";
}
 console.log(a);
