
var a = [0,0,0,0,0];function count()
{
	var str = document.getElementById("str").value; 
    var k =str.length;
    var i =0;
    
    for(i=0;i<k;i++)
    {
    	if(str.charAt(i)=='a')
    	{
    		a[0]++;
    	}
    	if(str.charAt(i)=='e')
    	{
    		a[1]++;
    	}
    	if(str.charAt(i)=='i')
    	{
    		a[2]++;
    	}
    	if(str.charAt(i)=='o')
    	{
    		a[3]++;
    	}
	   if(str.charAt(i)=='u')
    	{
    		a[4]++;
    	}

             

    }
    

      document.write(a);
      




      document.write("<br>");	
    
    

}



