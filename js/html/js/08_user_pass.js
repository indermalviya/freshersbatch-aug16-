	  var count=0;

function check()
{
	  
	  var name = document.getElementById("name").value;
	  var pass = document.getElementById("pass").value; 

	  if(name==='inder' && pass=='inder')
	  {
	  		document.write("welcome Inder");
	  }

	  if(name!='inder' && pass!='inder' && count!=3)
	  {
	  	  
          alert("please enter the correct username and password");
          count++;
	  }
	  if(count==3)
	  {
	  	document.write("Error You Have used Your Three attempts");
	  }
      

}


