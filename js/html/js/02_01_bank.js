var accName,accBal,accNo;
function Bank(accName,accBal,accNo,amount)
{
	  this.accNO = accNo;
	  this.accName = accName;
	  this.accBal = accBal;
	  this.amount = amount
	  
}
function withdraw()
{
	  accName = document.getElementById("accName").value;
	  accBal =  document.getElementById("accBal").value;
	  accNo =   document.getElementById("accNo").value;
      amount =  document.getElementById("amount").value;
	  var obj = new Bank(accName,accBal,accNo,amount);
	  obj.accBal =  parseInt(accBal) - parseInt(amount);
	  document.getElementById("amount").value = 0;
	  document.getElementById("accBal").value = obj.accBal;
}
function deposite()
{
      accName = document.getElementById("accName").value;
	  accBal =  document.getElementById("accBal").value;
	  accNo =   document.getElementById("accNo").value;
      amount =  document.getElementById("amount").value;
	  var obj = new Bank(accName,accBal,accNo,amount);
	  obj.accBal =  parseInt(accBal) + parseInt(amount);
	  document.getElementById("amount").value = 0;
	  document.getElementById("accBal").value = obj.accBal;
}
