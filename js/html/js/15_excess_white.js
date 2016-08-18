
function check()
{
	  
	  var san = document.getElementById("san").value;
	  var k =0;
      var j;
	  var len = san.length;
	  for(i=0;i<len;i++)
	  {  
	      	if(san.charAt(i)!=" ")
	      	{
	            j=j.concat(san.charAt(i));
	      	}  
	  	  
	  }
	  
	  	  	document.write(j);
	  		
	 
}


