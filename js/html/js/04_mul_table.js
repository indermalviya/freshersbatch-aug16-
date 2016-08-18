

function table()
{
	  var i;
	  var num = document.getElementById("num").value; 
	  for(i=1;i<=10;i++)
	  {
	  document.write(num*i);
	  document.write("<br>");
	
	  }
	  
	  var k = confirm("do you want to continue");
	  if(k==true)
	  {
	    location.reload();
	 	
	  }
	  else
	  {
	    document.write("thanku");
	  	
	  } 

}


