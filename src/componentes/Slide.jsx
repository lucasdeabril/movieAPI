import React from "react";

let controle1 = 0
let controle2 = 0
let controle3 = 0
let controle4 = 0
let controle5 = 0

const slide= (props)=>{
        let push1 = document.querySelector('.push1')
        let push2 = document.querySelector('.push2')
        let push3 = document.querySelector('.push3')
        let push4 = document.querySelector('.push4')
        let push5 = document.querySelector('.push5')
        
    if(props=='left1'){
        if(controle1>=0){

        }else{
            controle1 += 300
            push1.style.marginLeft= `${controle1}px` 
        }
       
        
        
    }else if(props=='right1'){
        if(controle1<=-1500){

        }else{
            controle1 -= 300
            push1.style.marginLeft= `${controle1}px` 
        }
    } else if(props=='left2'){
        if(controle2>=0){

        }else{
            controle2 += 308
            push2.style.marginLeft= `${controle2}px` 
        }
       
        
        
    }else if(props=='right2'){
        if(controle2<=-1500){

        }else{
            controle2 -= 308
            push2.style.marginLeft= `${controle2}px` 
        }
    }
     else if(props=='left3'){
        if(controle3>=0){

        }else{
            controle3 += 308
            push3.style.marginLeft= `${controle3}px` 
        }
       
        
        
    }else if(props=='right3'){
        if(controle3<=-1500){

        }else{
            controle3 -= 308
            push3.style.marginLeft= `${controle3}px` 
        }
    }
     else if(props=='left4'){
        if(controle4>=0){

        }else{
            controle4 += 308
            push4.style.marginLeft= `${controle4}px` 
        }
       
        
        
    }else if(props=='right4'){
        if(controle4<=-1500){

        }else{
            controle4 -= 308
            push4.style.marginLeft= `${controle4}px` 
        }
    }
     else if(props=='left5'){
        if(controle5>=0){

        }else{
            controle5 += 308
            push5.style.marginLeft= `${controle5}px` 
        }
       
        
        
    }else if(props=='right5'){
        if(controle5<=-1500){

        }else{
            controle5 -= 308
            push5.style.marginLeft= `${controle5}px` 
        }
    }
}

export default slide