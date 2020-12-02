function sq(t1,len){
	let xc=event.clientX;let yc=event.clientY;
	//xc=xc+10;yc=yc-10;
	t1.set1(xc,yc,0);
t1.fd(len);t1.rt(90);t1.fd(len);t1.rt(90);
t1.fd(len);t1.rt(90);t1.fd(len);t1.rt(90);
}

function sqA(t1,len){
t1.fd(len);t1.rt(90);t1.fd(len);t1.rt(90);
t1.fd(len);t1.rt(90);t1.fd(len);t1.rt(90);
}

function row(t1,len){
	for(let j=1;j<21;j=j+1){
		sqA(t1,len);t1.fd(len);
	}
}

function tess(){
	t.set1(100,100,0);
	row(t,30);
	t.set1(50,20,0);
	rowsqs(t,40,20);
	}
 
 function stars(){
 str=document.getElementById("text1").value;
strAr=[];
	strAr=str.split(',');    
	t.set1(300,200,0);	
	star(t,strAr[0],strAr[1],strAr[2]);
//document.getElementById("par1").innerHTML=strAr[5];
	  
	  }

function star(t,num,num1,len){
	for(let j=0;j<num1;j=j+1){
		t.fd(len);t.rt(360*num/num1);
	}
}


function poly1(){
	t.set1(100,200,45);
	 sqA(t,100);t.rt(90);
	 sqA(t,50);
}

function rowsqs(t,len,num){
	for(let j=1;j<num+1;j=j+1){
		sqA(t,len);t.fd(len);t.rt(90);
		t.fd(len);t.lt(90);
	}
}
