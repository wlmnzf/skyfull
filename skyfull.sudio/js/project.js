function CloseModel(e)
{
	var e = event||window.event;

	var frame=document.getElementById("frame");
	var divLeft=frame.getBoundingClientRect().left;
	var divTop=frame.getBoundingClientRect().top;
	var divWidth=frame.getBoundingClientRect().width;
	var divHeight=frame.getBoundingClientRect().height;
	
	if(divLeft<=e.clientX&&e.clientX<=divLeft+divWidth&&divTop<=e.clientY&&e.clientY<=divTop+divHeight)
	{
		
	}
	else
	{
		if (window.innerHeight)
		    winHeight = window.innerHeight;
		else if ((document.body) && (document.body.clientHeight))
		    winHeight = document.body.clientHeight;
		
		
		var shade= document.getElementById("shade");
		startrun(shade,"margin-top",winHeight,function(){
			var shade= document.getElementById("shade");
			shade.style.display="none";
			var body=document.getElementsByTagName("body");
			body[0].style.overflowY="auto";
		});

	}
	
}

function ShowModal()
{
	var body=document.getElementsByTagName("body");
	body[0].style.overflowY="hidden";
	
	var shade= document.getElementById("shade");
	shade.style.display="block";
	shade.addEventListener("click",CloseModel,false)
	startrun(shade,"margin-top","0");
}

window.onload
=function()
{
    var items=document.getElementsByName("item"); 
    for(var i=0;i<items.length;i++)
    {
    	items[i].addEventListener("click",ShowModal,false)
    }
}
