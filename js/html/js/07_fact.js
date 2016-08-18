

function fact()
{
	  var i;
      var f=1;
	  var num = document.getElementById("fac").value; 
	  for(i=1;i<=num;i++)
	  {
	    f = i*f;
	  }
	  document.write("factorial is"+f);
      

}


