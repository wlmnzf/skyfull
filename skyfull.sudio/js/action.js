function showRight()
{
	var list=document.getElementsByName("list_right"); 
	var left_side=document.getElementById("left_side"); 
    left_side.style.width="400"px";
    
	for(var i=0;i<list.length;i++)
	   {
	   	  list[i].style.display="block";
	   }
}

function hideRight()
{
	var list=document.getElementsByName("list_right"); 
	var left_side=document.getElementById("left_side"); 
    left_side.style.width="200px";
    
	for(var i=0;i<list.length;i++)
	   {
	   	  list[i].style.display="none";
	   }
}


window.onload
=function()
{
//	alert("sss");
    var list=document.getElementsByName("list_hover"); 
    
    for(var i=0;i<list.length;i++)
    {
    	list[i].addEventListener("mouseover",showRight,false);
	  	list[i].addEventListener("mouseleave",hideRight,false);
    }
	



            function someAnimation(args){
                document.getElementById("animation").style.opacity=args;
            }
      
}
