function divide()
{
 var num1 = document.getElementById("num1").value;
 var num2 = document.getElementById("num2").value;

 if(num2==0)
 {
 	alert("second no is zero");
 }
 else
 {
     var no = num1/num2;
    document.write("division is" +no);	

 }
 
 
 

}