var calcular = document.getElementById('calcular'); /* getElementById faz chamar no HTMl o que esta declarado no ID*/
var numero1 = document.getElementById('numero1').value;
    numero1=Number.parseFloar(numero1); 
var numero2 = document.getElementById('numero2').value;
    numero2=Number.parseFloat(numero2)
var numero3 = document.getElementById('numero3').value;
    numero3=Number.parseFloat(numero3);
var resp = document.getElementById('resultado').innerHTML; /* declarando variavel para a div resultado do HTML */

function calculo() /*Dando para o botão a função dos cálculos abaixo*/
{
    var delta = (document.getElementById('numero2').value*document.getElementById('numero2').value) - 4*document.getElementById('numero1').value*document.getElementById('numero3').value;  /* delta = (b*b) -4*a*c   */

        if(delta < 0)
            {
                document.getElementById('resultado').innerHTML ='Delta: ' +delta;
                document.getElementById('raiz1').innerHTML='DELTA (RAIZ REAL)';
            }  
                if(numero2 = document.getElementById('numero2').value ==0)
                {
                    document.getElementById('resultado').innerHTML='Equação de 2º grau incompleta';
                    document.getElementById('raiz1').innerHTML='Pois valor B é: '+0;
                }
                    if(delta > 0)
                        {
                            var raiz1 = (-document.getElementById('numero2').value + Math.sqrt(delta)) /(2*document.getElementById('numero1').value);
                            var raiz2 = (-document.getElementById('numero2').value - Math.sqrt(delta)) /(2*document.getElementById('numero1').value);
                            raiz1Arred=raiz1.toFixed(3);
                            raiz2Arred=raiz2.toFixed(3);
                            document.getElementById('raiz1').innerHTML = '1° raiz= '+raiz1Arred;
                            document.getElementById('raiz2').innerHTML = '2° raiz= '+ raiz2Arred;
                            document.getElementById('resultado').innerHTML='Delta: '+delta;
                        }
                            if(numero3 = document.getElementById('numero3').value ==0)
                            {
                                document.getElementById('resultado').innerHTML='Equação de 2º grau incompleta';
                                document.getElementById('raiz1').innerHTML='Pois valor C é: '+0;
                                document.getElementById('raiz2').innerHTML = ' ';
                            }
                                if(document.getElementById('numero1').value == 0)
                                {
                                    document.getElementById('resultado').innerHTML='Equação 1° Grau';
                                    document.getElementById('raiz1').innerHTML='A = 0 - Coeficiente Incorreto';
                                    document.getElementById('raiz2').innerHTML=' ';
                                }
                                    if(document.getElementById('numero1').value == 0 && document.getElementById('numero2').value == 0 && document.getElementById('numero3').value == 0) 
                                    {
                                        document.getElementById('resultado').innerHTML='ERRO';
                                        document.getElementById('raiz1').innerHTML=' ';
                                        document.getElementById('raiz2').innerHTML= ' '; 
                                    }   
}
function limpar() /*faz o botao  ter a funcao de limpar os valores que estao atribuidos abaixo */ 
{
    document.getElementById('numero1').value=' ';
    document.getElementById('numero2').value=' ';
    document.getElementById('numero3').value=' ';
    document.getElementById('resultado').innerHTML=' ';
    document.getElementById('raiz1').innerHTML=' ';
    document.getElementById('raiz2').innerHTML= ' ';
}