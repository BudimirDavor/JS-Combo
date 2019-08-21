function myFun() 
{
    var age, voteable;
    age = document.getElementById("age").value;
	if (age<18)
	{
		voteable = "Too young";
	}
	else
	{
		voteable = "Old enough";
	}
    document.getElementById("demo").innerHTML = voteable + " to vote.";
}