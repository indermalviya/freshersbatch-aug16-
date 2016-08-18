function sortAsc(a,b)
{
	return a-b;
}

function ops()
{
       
	   var a = [0,25,10,50,7,4,3,9,8,20,30,40]; 
	   var i=0;
	   var j=0;
	   
	   a.sort(sortAsc);
       while(a[i]!=null)
       {
       	 j = j+ a[i];
       	 i++;

       }
       document.write("minimum num is"+a[0]);
	   document.write("<br>");
	   var k = i-1;
	   document.write("maximum num is"+a[k]);
	   document.write("<br>");
	   document.write("sum is"+j);
	   document.write("<br>");
	   var avg = j/i;
	   document.write("average is"+avg);
	 
	   
}


