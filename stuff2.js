
function funcs(){
	 let ch=event.key;
	if(ch=='a'){t.set1(20*cnt,20,0);sqA(t,200);cnt++;}
	if(ch=='c'){t.set1(300,200,0);spin(t,1000,1);}
	if(ch=='b'){t.set1(350,450,-90);v(t,250);}
    if(ch=='s'){t.set1(300,400,0);star2(t,8,50);}
	if(ch=='r'){t.set1(100,200,0);rowstar2(t,strAr[3],8,50);}
	if(ch=='z'){tS.set1(100,100,0);manystar2(tS,4,5,10,40);}
	if(ch=='x'){tS.set1(200,200,0);cat(tS);}
    if(ch=='y'){tS.set1(200,200,0);catch1(tS);}
	if(ch=='k'){tS.set1(50,300,0);koch(tS,500,3);}
    if(ch=='u'){moveBox();}
	if(ch=='v'){stopBox();}
}

function thro(tt){
	tt.fd(200);alert("x is "+t.xpos());
	return tt;
	
}

function catch1(tt){
tt=thro(tt);tt.rt(90);tt.fd(100);
tt.rt(90);
tt=thro(tt);	
	
}

function cat(tt){

	tt=rowstar2(tt,4,10,50);

	tt.rt(90);tt.fd(100);tt.lt(90);
	tt=rowstar2(tt,4,10,50);
}


function star2(t,num,len){
	for(let k=0;k<num;k=k+1){
		t.fd(len);t.bk(len);t.rt(360/num);
	}
	
}

function rowstar2(tt,numrow,num1,len1){
	let xp=tt.xpos();let yp=tt.ypos();
		for(let k=0;k<numrow;k=k+1){
	star2(tt,num1,len1);tt.fd(2*len1);	
	}
tt.set1(xp,yp,0);//return tt;
//tt.bk(numrow*2*len1);
tt.rt(90);tt.fd(2*len1);tt.lt(90);
}

function manystar2(tt,numcol,numrow,num1,len1){
	for(let j=0;j<numcol;j=j+1){
	rowstar2(tt,numrow,num1,len1);	
	}
	}

function spin(t,num,x){
if(x>num){t.fd(100);//alert("x is "+x);
}
else{
//t.fd(strAr[4]);t.rt(4*x);x=x+3;
spin(t,num,x);
}

}

function v(t,len){
	if(len<5){}
	else{
t.rt(25);t.fd(len);v(t,len/2);
t.bk(len);t.lt(50);t.fd(len);
v(t,len/2);t.bk(len);t.rt(25);		
	}
}

function koch(t,len,lev){
	if(lev<1){t.fd(len);}
	else{
		koch(t,len/3,lev-1);t.lt(60);
		koch(t,len/3,lev-1);t.rt(120);
		koch(t,len/3,lev-1);t.lt(60);
		koch(t,len/3,lev-1);
	}
}

function fib(num){
	if(num<2){return num;}
    else{return fib(num-2)+fib(num-1);}
}
 
function prtout(){
	document.getElementById("par1").innerHTML="fib is "+fib(strAr[5])+" fib ";
 }

function moveBox(){
	st=setInterval(prt,500);
	}

function stopBox(){
	clearInterval(st);
}

function prt(){
	document.getElementById("par1").innerHTML=" counting up at "+moveX();
	cnting=cnting+1;
	newLen=10*cnting;
	sqA(tPrt,newLen);
	if(cnting>15){cnting=0;clear_Can();}
	p2.style.left=moveX()+"px";
}//150px  ie"px" is a string







