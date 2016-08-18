var k =0;
function check()
{
	  
	  var san = document.getElementById("san").value;
	  var i =0,j;
	  i = san.length;
	  for(j=0;j<i;j++)
	  {
	  	  if(san.charAt(j)==" ")
	  	  {
	  	  	 k++;
	  	  }
	  	
	  }
	  k = i-k;	  
	  	  	document.write("no of char"+k);
	  		
	 
}


