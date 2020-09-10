var divs = document.getElementsByClassName("_3l3x");


for (var i = 0; i < divs.length; i++) {

      var para = divs[i].textContent;
        if(para.contains('@'))
        {
	var values = para.split(' ');
	for (var j = 0; j < values.length; j++)
	{
        		if(values[j].contains('@'))
       		{
            		   console.log(values[j]);
		 }
	}
        }      
   }