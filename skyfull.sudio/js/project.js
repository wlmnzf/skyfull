function loadImage(url,callback) {
    var img = new Image();
    
    img.src = url;
    img.onload = function(){
        img.onload = null;
        callback.call(img);
    }
}

function CloseModel(event)
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
		
		var showlayer=document.getElementById("showlayer");
		showlayer.style.display="none";
		
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
	var loadingpath="img/elem/loading.gif";
	var showlayer=document.getElementById("showlayer");
	showlayer.style.display="none";
	showlayer.className="loading";
	showlayer.src=loadingpath;
			
	var body=document.getElementsByTagName("body");
	body[0].style.overflowY="hidden";
	
	var shade= document.getElementById("shade");
	shade.style.display="block";
	shade.addEventListener("click",CloseModel,false)
	startrun(shade,"margin-top","0");
	
	var showlayer=document.getElementById("showlayer");
	var src=empty(this.attributes["data-realsrc"])?loadingpath:this.attributes["data-realsrc"].value;
	loadImage(src,function(){
		var showlayer=document.getElementById("showlayer");
		showlayer.className=src==loadingpath?"loading":"";
		showlayer.src=src;
		showlayer.style.display="block";
	})
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
