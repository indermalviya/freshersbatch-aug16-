
var a = [0,25,10,50,7,4,3,9,8,20,30,40];
function sortNumberAsc(a,b)
{
	 return a-b;
	
}
function sortNumberDesc(a,b)
{
	 return b-a;
	
}
function asc()
{
         
	   	 document.write("asc");
       	 document.write(a.sort(sortNumberAsc));
       	  document.write("<br>");
       	  
	   
}
function desc()
{
	   	  document.write("desc");
	   	  document.write(a.sort(sortNumberDesc));
       	  document.write("<br>");
       	  
       	 

}


