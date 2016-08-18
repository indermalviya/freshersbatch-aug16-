var i;

function pri()
{
	  
	   var num1 = document.getElementById("num1").value; 
	   var num2 = document.getElementById("num2").value; 
	   i = num1;  
	   
	   for(i=num1;i<=num2;i++)
	   {
	   	 call(i)
	 	
	 		
	 	
	   }
	   
       function call(u)
       {
	      var k;
	     if(u<2)
	      {
		
	      }
	     if(u==2)
	      {
	 	    document.write(i);
	      }
	     else
	     {
		   for(k=2;k<u;k++)
           if(u%k==0)
            {
          	 return;
            }
            else
            {
          	  document.write(i);
            }

	     }
        }
	  


}

