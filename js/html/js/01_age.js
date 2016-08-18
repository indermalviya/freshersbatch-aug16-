function calAge()
{
    var Curage = document.getElementById("age").value;
 var d = new Date();
 Curage = Curage - d.getFullYear();
 alert("your birth year is "+Curage);

}