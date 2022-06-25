canvas=
document.getElementById("myCanvas");
canvas.getcontext("2d").beginpath();
canvas.getcontext("2d").strokestyle ="red";
canvas.getcontext("2d").linewidth = 1 ;
canvas.getcontext("2d").rect( 150,143,430,200);
canvas.getcontext("2d").stroke();
ctx=canvas.getcontext("2d");
ctx.beginpath();
ctx.strokestyle ="red";
ctx.linewidth = 1 ;
ctx.rect( 150,143,430,200);
ctx.stroke();
mouse_x= e.clientX;
mouse_y= e.clientY;
canvas.addEventListner("mousedown",my_Mousedown);

function my_Mousedown(e)
{
  color=document.getElementById("color").value;
  console.log(color);
  mouse_x= e.clientX - canvas.offSetLeft;
  mouse_y= e.clientY - canvas.offSettop;
  console.log("X="+ mouse_x + "Y=" + mouse_y);
  circle(mouse_x , mouse_y)
}
function circle(mouse_x , mouse_y)
{
    ctx.beginpath();
    ctx.strokestyle ="red";
    ctx.linewidth = 1 ;
    ctx.rect( 150,143,430,200);
    ctx.stroke();  
}
