function getstyle(obj,name){
  if(obj.currentStyle){
      return obj.currentStyle[name];
    }else{
      return getComputedStyle(obj,false)[name];
    }
}

function startrun(obj,attr,target,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
      var cur = 0;
        if(attr == "opacity"){
          cur = Math.round(parseFloat(getstyle(obj,attr))*100);
        }else{
          cur = parseInt(getstyle(obj,attr));
        }
      var speed = (target-cur)/8;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        
        if(cur == target){
          clearInterval(obj.timer);
            if(fn){
              fn();
            }
        }else{
          if(attr == "opacity"){
                obj.style.filter = "alpha(opacity="+(cur+speed)+")";
              obj.style.opacity = (cur+speed)/100;
            }else{
            obj.style[attr] = cur + speed + "px";
            }
        }
        
    },30)
}



function showRight()
{
	var list=document.getElementsByName("list_right"); 
	var left_side=document.getElementById("left_side"); 
    //left_side.style.width="400"px";
     for(var i=0;i<list.length;i++)
	   {
	   	  list[i].style.opacity=0
	   	  list[i].style.display="block";
	   	  startrun(list[i],"opacity","100")
	   }
    startrun(left_side,"width","400")
    
}

function hideRight()
{
	var list=document.getElementsByName("list_right"); 
	var left_side=document.getElementById("left_side"); 
    //left_side.style.width="200px";
     startrun(left_side,"width","200")
	for(var i=0;i<list.length;i++)
	   {
	   	  startrun(list[i],"opacity","0",function(){
	   	    	var list=document.getElementsByName("list_right"); 
	   	    	for(var i=0;i<list.length;i++)
	   	  			list[i].style.display="none";
	   	  })
	   }
}


window.onload
=function()
{
    var list=document.getElementsByName("list_hover"); 
    
    for(var i=0;i<list.length;i++)
    {
    	list[i].addEventListener("mouseenter",showRight,false);
	  	list[i].addEventListener("mouseleave",hideRight,false);
    } 
}
