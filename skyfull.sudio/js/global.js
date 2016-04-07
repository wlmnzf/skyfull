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

function empty(obj)
{
	if(obj==undefined||obj==""||obj==null)
	   return true;
	  return false;
}
