
function fun(canvas,p1) {    
    width=height=500;
    center_h=250;
    center_v=250;
    context=canvas.getContext('2d');
    context.clearRect(0,0,width,height);
    context.lineWidth=10;
    context.lineCap='round';
    context.globalCompositeOperation='xor';
    for (i=0;i<50;i++) {
	context.beginPath();
	p1_=p1+i/121.0;
	f1=Math.sin(p1_*7);
	f2=Math.cos(p1_*13);
	context.moveTo(x1=f1*center_h+center_h,y1=f2*center_v+center_v);
	p1__=p1_+i/100.0;
	
	f3=Math.sin(p1__*9);
	f4=Math.cos(p1__*11);
	x2=f3*center_h+center_h;
	y2=f4*center_v+center_v;
	
	/*	context.bezierCurveTo(x1-f1*200,y1-f2*200,
			      x2-f3*200,y2-f4*200,
			      x2,y2);*/
	context.lineTo(x2,y2);
	context.stroke();
    }
}

var c=0;
var cfront=document.getElementById('test1');
var cback=document.getElementById('test2');

function callfun() {
    fun(cback,c+=0.0001);
    cback.display='block';
    cfront.display='none';
    var cb=cback;
    cback=cfront;
    cfront=cb;
    window.setTimeout(callfun,50);

}

callfun();
window.setTimeout(callfun,50);
