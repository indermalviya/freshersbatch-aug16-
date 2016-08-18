function check()
{
	  var mail = document.getElementById("mail").value;
	  var len = mail.length;
	  var i;
	  var ar =[0,0];
	  if(len>25)
	  {
	  	alert("please enter the id less then 25 char");
	  }
	   
	  for(i=0;i<len;i++)
	  {
	  	if(mail.charAt(i)=='@')
	  	{
	  		ar[0]=i; 
	  	}
	  	if(mail.charAt(i)=='.')
	  	{
	  		ar[1]=i; 
	  	}

	  }
	  if(ar[0]=='0')
	  {
	  	alert("not proper please put domain name");
	  }
	  if(ar[0]=='1')
	  {
	  	alert("not proper please put . ");
	  }
	  if(ar[0]>ar[1])
	  {
	  	alert("format is invalid");
	  }
	  else{document.write("welcome "+mail);}
}