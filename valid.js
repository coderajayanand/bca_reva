console.log(5+6);



function validate()
{
	var x = parseInt(document.getElementById('num1').value);
	console.log(x);
	if(x==6946)
	{
		document.getElementById('link1').style.display = "block";
	}
	else
	{
		document.getElementById('result').innerHTML = "MADAM AVRE !!, CORRECT PASSWORD TYPE MAADI";
	}
}