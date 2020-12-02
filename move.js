let xcor=200;let ycor=200;
let xspd=5;let yspd=4;

function moveX(){
xcor=xcor+xspd;
if(xcor<0||xcor>500){xspd=-1*xspd;}
return xcor;
}

function moveY(){
ycor=ycor+yspd;
if(0<ycor||ycor>500){yspd=-1*yspd;}
return ycor;
}
