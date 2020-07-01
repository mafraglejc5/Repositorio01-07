let calculadora = {
    sumar:function(n1,n2){
        return n1 + n2
    },

    
    restar:function (n1,n2){
        return n1 - n2
    },
    
    multiplicar: function (n1,n2){
        if (n1 ==0 || n2 == 0){   
            return ("no se puede realizar la operacion")
         } else {
             n1 * n2
             return n1*n2
         }
      
    },
    
    dividir: function  (n1,n2){
        if(n1 ==0 || n2==0){
            return ("no se puede dividir si contiene Cero")
        }else {
           return n1/n2
        }
    }
}


module.exports = calculadora // tranforma este objeto en un modulo