let alt=document.getElementById('altura')
let peso=document.getElementById('peso')
let res=document.getElementById('res')

function calcular(){
    if(Number(alt.value)==0 && Number(peso.value)==0){
        alert('[ERROR] insira os dados corretamente')
    }else{
        let s1= Number(alt.value*alt.value)
        let s2=Number(peso.value/s1).toFixed(1)
        if(Number(s2)<18.5){
            res.innerHTML=''
            res.innerHTML+=`seu imc é ${s2} você está <strong>ABAIXO DO PESO!<strong>`  
        }
        else if(Number(s2)>=18.5 && Number(s2)<=24.9){
            res.innerHTML=''
            res.innerHTML+=`seu imc é ${s2} você está <strong>COM O PESO NORMAL!<strong>`
        }
        else if(Number(s2)>=25 &&  Number(s2)<=29.9){
            res.innerHTML=''
            res.innerHTML+=`seu imc é ${s2} você está <strong>SOBREPESO!<strong>`
        }
        else if(Number(s2)>=30 && Number(s2)<=34.9){
            res.innerHTML=''
            res.innerHTML+=`seu imc é ${s2} você está <strong> COM OBESIDADE GRAU 1!<strong>`
        }
        else if(Number(s2)>=35 && Number(s2)<=39.9){
            res.innerHTML=''
            res.innerHTML+=`seu imc é ${s2} você está <strong> COM OBESIDADE GRAU 2!<strong>`
        }

        else{
            Number(s2)>=40
            res.innerHTML=''
            res.innerHTML+=`seu imc é ${s2} você está <strong>COM O PESO NORMAL<strong>`
        }
        
         
    }
    alt.value=''
    peso.value=''
    alt.focus()
    peso.focus()
}