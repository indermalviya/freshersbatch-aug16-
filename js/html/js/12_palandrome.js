	 
var k =0;
function check()
{
	  var name = document.getElementById("name").value;
	  var i =0,j=0,t=0;
	  i = name.length-1;
	  while(i>j)
	  {
	  	  if(name.charAt(i)==name.charAt(j))
	  	  {
	  	  	  if(name.charAt(i)=='a'||name.charAt(j)=='a'||name.charAt(i)=='e'||name.charAt(j)=='e'||name.charAt(i)=='i'||name.charAt(j)=='i'||name.charAt(i)=='o'||name.charAt(j)=='o'||name.charAt(i)=='u'||name.charAt(j)=='u')
	  	  	  {
	  	  	  	 t=1;
	  	  	  }

	  	  	i--;
	  	  	j++;
	  	  }
	  	  else
	  	  {
	  	  	k = 1;
	  	  	i--;
	  	  	j++;

	  	  }
	  }  
	  if(k==1&&t==1)
	  {
	  	  	document.write("Give string is consonant");
	  }
	  else if(k==0&&t==0)
	  {
	  		document.write("Give string is palindrome and not conso");
	  }
	  else if(k==0&&t==1)
	  {
	  	document.write("Give string is palindrome and but conso");
	  }

}


