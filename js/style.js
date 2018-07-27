// // <i class="fa fa-toggle-on" aria-hidden="true"></i>
// window.onload=function(){
// 	var oBtn1=document.getElementById('anniu');
// 	var oBtn2=oBtn1.getElementById('btn-an');
// 	var oI=oBtn2.getElementsByTagName('i');

// 	// for(var i=0;i<oI.length;i++){
// 	// 	oI(i);
// 	// }

// 	oBtn2.onclick=function(){
// 		oI(0).style.display='none';
// 		oI(1).style.display='block';
// 	}
// }
// window.onload=function(){
// 	var oBtn1=document.getElementById('anniu');
// 	var oI1=document.getElementById('i1');
// 	var oI2=document.getElementById('i2');
// 	var oAll=document.getElementById('all');

// 	oBtn1.onclick=function(){
// 		oI1.style.display='none';
// 		oI2.style.display='block';
// 		document.body.style.backgroundColor = '#ccc';
// 		oAll.style.color='#000';
// 	}
// }
window.onload=function ()
{
	var oBtnShow=document.getElementById('but');
	var oBtnClose=document.getElementById('btn_close');
	var oBottom=document.getElementById('zns_bottom');
	var oBox=document.getElementById('zns_box');
	
	oBtnShow.onclick=function ()
	{
		startMove(oBottom, 'right', 0, function (){
			oBox.style.display='block';
			startMove(oBox, 'bottom', 0);
		});
	};
	oBtnClose.onclick=function ()
	{
		startMove(oBox, 'bottom', -315, function (){
			oBox.style.display='none';
			
			startMove(oBottom, 'right', -165);
		});
	};





	//
	function getStyle(obj, name)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[name];
		}
		else
		{
			return getComputedStyle(obj, false)[name];
		}
	}
	
	function startMove(obj, attr, iTarget, fnEnd)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			var cur=0;
			
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}
			
			var speed=(iTarget-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur==iTarget)
			{
				clearInterval(obj.timer);
				
				if(fnEnd)fnEnd();
			}
			else
			{
				if(attr=='opacity')
				{
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;
					
					document.getElementById('txt1').value=obj.style.opacity;
				}
				else
				{
					obj.style[attr]=cur+speed+'px';
				}
			}
		}, 30);
	}
};