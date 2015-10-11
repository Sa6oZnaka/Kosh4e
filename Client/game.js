var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };

var rilizvamLi=false;
var kartinka=new Image();
kartinka.src="primernakartinka.png";
var canvas = document.getElementById("canvas-id");
canvas.width = 1366;
canvas.height = 768;

var Map=new Image();Map.src="Map1.jpg";
var Map2=new Image();Map2.src="Map2.jpg";
var contrast=100;
var Contrast2=10;

var X=0;
var Y=0;


var logoimg=new Image();logoimg.src="logo.jpg";
var logobol=false;
var startimer=0;

var ciganina=new Image();ciganina.src="help.jpg";

var names=[];
var descriptions=[];

var recikliranokosh4e=new Image();recikliranokosh4e.src="reciklirano kosh4e.jpg";

var SelectedKosh4e=1;

var SelectedMap=false;

var timertostart=0;

var NoImage=new Image();NoImage.src="no-image.png";

var onhelp=false;



var openmenu2=0;
var openmenu3=0;


function create2d(n, m) {
    var array = [];
    for (var i = 0; i < n; ++i) {
        array[i] = [];
        for (var j = 0; j < m; ++j) {
            array[i][j] = 0;
        }
    }
    return array;
}


var test11=0;
var tset12=0;

var test21=0;
var tset22=0;

var test31=0;
var tset32=0;



var broiKX=[];
var broiKY=[];

var broiKX2=[];
var broiKY2=[];

var broiKX3=[];
var broiKY3=[];


for(test11=0;test11<100;test11++){
    broiKX[test11]=-100;
}
for(test12=0;test12<100;test12++){
    broiKY[test12]=-100;
}

for(test21=0;test21<100;test21++){
    broiKX2[test21]=-100;
}
for(test22=0;test22<100;test22++){
    broiKY2[test22]=-100;
}

for(test31=0;test31<100;test31++){
    broiKX3[test31]=-100;
}
for(test32=0;test32<100;test32++){
    broiKY3[test32]=-100;
}



$.ajax({
        type: "GET",
        url: "/koshche"
    }).success(function(rows) {
        for(var c=0;c<rows.length;c++){    
            broiKX[broikosh4eta]=rows[c].x;
            broiKY[broikosh4eta]=rows[c].y;  
            broikosh4eta++;
            
            if(rows[c].type==1){
                broiKX[broikosh4eta]=rows[c].x;
                broiKY[broikosh4eta]=rows[c].y;
                broikosh4eta++;

            }

            if(rows[c].type==2){
                broiKX2[broikosh4eta2]=rows[c].x;
                broiKY2[broikosh4eta2]=rows[c].y;
                broikosh4eta2++;
            }

            if(rows[c].type==3){
                broiKX3[broikosh4eta3]=rows[c].x;
                broiKY3[broikosh4eta3]=rows[c].y;
                broikosh4eta3++;
            }
        }
    
     });


//var map = create2d(100000, 100000);


var kosh4e = create2d(1000, 1000);

var martin;

var scroolX2;
var scroolX3;

var ZoomX=675;
var ZoomY=0;

var PressL=false;
var PressR=false;

var PressU=false;
var PressD=false;

var helpmenu=0;

var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var myX, myY,mishkaX,mishkaY;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)

var audio=new Audio();
audio.src="tsundere.mp3";

myY=100;
myX= 10;  //Davame i na4alna stoinost. Qko.
//Redove kod napisani izvun koq da e funkcia (kakvito bqha tez) se izpulnqvat pri startiraneto.


var openmenu;

function zele(){//koda napisan vuv va6a vunkcia puk se izpulnqva 4ak kato q izvikame otnqkude
	//console.log("zle.si"); //printva v console-a. natisnete 	F12 da q vidite
	
	//NIKAKVI log-ove, shtoto ne raboti v Internet Explorer
}

var L=0,R=0,U=0,D=0;

var d2,d3;
var b,b2,b3;
window.addEventListener("keydown", function (args) {	//Vika se pri natiskane na kopche
    if(!rilizvamLi){console.log(args.keyCode);}  		//pechatame koda na natisnatoto kopche
	//nikakvi logove
    
    openmenu=0;
    
    openmenu2=0;
    openmenu3=0;
    
    openhelp=0;
    martin=0;
    onhelp=0;
    
    if(! martin){
        if(args.keyCode==72){
            martin=1;;


        }
    }else{
        martin=0;    
    }
    
    
    if(args.keyCode==72 && martin){
         //   martin=0;


        }
    /*if(args.keyCode==37){
        X++;
    }
    if(args.keyCode==39){
        X--;
    }
    
    if(args.keyCode==38){
        Y++;
    }
    if(args.keyCode==40){
        Y--;
    }*/
    
    
    if(args.keyCode==77){
        SelectedMap =! SelectedMap;    
    }
    
    if(args.keyCode==75){
        SelectedKosh4e++;
        if(SelectedKosh4e==4){
            SelectedKosh4e=1;
        }
    }
       
    //////////////////////////////// low //////////////////////////
    
    if(args.keyCode==68){
       // mishkaX+=5;
        R=1;
    }
    if(args.keyCode==65){
       // mishkaX-=5;
        L=1;
    }
    
     if(args.keyCode==83){
       // mishkaY+=5;
         D=1;
    }
    if(args.keyCode==87){
      //  mishkaY-=5;
        U=1;
    }
    
    ///////////////////////////////////////////////////////////////
    if(args.keyCode==32){
        
        console.log("////////// START ///////////");
        console.log("//broikosh4eta=19");
        for(b=0;b<broikosh4eta;b++){
                
            
            console.log("broiKX[" + b + "]=" + broiKX[b-1]+ ";");
            console.log("broiKY[" + b + "]=" + broiKY[b-1]+ ";");
            
            
            
            
        }
        console.log("// FI //"); 
    
        
        console.log("// ST //");

        for(b2=0;b2<broikosh4eta2;b2++){
                
            
            console.log("broiKX2[" + b2 + "]=" + broiKX2[b2-1]+ ";");
            console.log("broiKY2[" + b2 + "]=" + broiKY2[b2-1]+ ";");
            
            
            
            
        }
        console.log("// FI"); 
    
        
        console.log("// ST");

        for(b3=0;b3<broikosh4eta3;b3++){
                
            
            console.log("broiKX3[" + b3 + "]=" + broiKX3[b3-1]+ ";");
            console.log("broiKY3[" + b3 + "]=" + broiKY3[b3-1]+ ";");
            
            
            
            
        }
        console.log("////////// FINISH ///////////"); 
    }
    
    
    
    
    
    if(args.keyCode==37){
        PressL=true;
    }
    if(args.keyCode==39){
        PressR=true;
    }
    if(args.keyCode==38){
        PressU=true;
    }
    if(args.keyCode==40){
        PressD=true;
    }
    
    
    if(args.keyCode==107){
        scroolX2=1;  
    }
    
    if(args.keyCode==187){
        scroolX2=1;    
    }
    
    
    if(args.keyCode==109){
        scroolX3=1; 
    }
    if(args.keyCode==189){
        scroolX3=1; 
    }
    
    
    
    
    
    audio.play();//FIREFOX FEYLZ!!!
}, false);


var broikosh4eta=0;
var broikosh4eta2=0;
var broikosh4eta3=0;



////////////////////////////////////







var d;

///////////////////////////////////

window.addEventListener("mousedown", function (args) {	//Vika se pri natiskane na kopche
    
    
    
    
    
    if(args.button==1){
    
        
        
        
        
    if(SelectedKosh4e==1){
        broiKX[broikosh4eta]=mishkaX-X;
        broiKY[broikosh4eta]=mishkaY-Y;
        broikosh4eta++;
        
        
        
        
    }
    
    if(SelectedKosh4e==2){
        broiKX2[broikosh4eta2]=mishkaX-X;
        broiKY2[broikosh4eta2]=mishkaY-Y;
        broikosh4eta2++;
    }
    
    if(SelectedKosh4e==3){
        broiKX3[broikosh4eta3]=mishkaX-X;
        broiKY3[broikosh4eta3]=mishkaY-Y;
        broikosh4eta3++;
    }
    
    if(onhelp){
     helpmenu=1;   
        
    }
        if(mishkaX>canvas.width-60 && mishkaY>canvas.height-60){
            martin=false;
            onhelp=0;
        }
        
    $.ajax({
        type: "POST",
        url: "/koshche",
        data:{x:mishkaX-X,
              y:mishkaY-Y,
              description:"123",
              name:"Martin",
              type:SelectedKosh4e},
        dataType:"json"
    });
    openmenu=0;
        openmenu2=0;
        openmenu3=0;
        martin=0;
        //openhelp=0;
    }
    if(args.button==0){
        
        if(onhelp){
        martin=1;
        
        }
        if(mishkaX>canvas.width/3){
            openmenu=0;
            openmenu2=0;
            openmenu3=0;
            openhelp=0;
           // martin=0;
            //martin=0;
        }
        
         if(mishkaX>canvas.width/3 && mishkaX<canvas.width-200 && mishkaY<canvas.height-100){

            martin=0;
            //martin=0;
        }
        
        for(d=0;d<broikosh4eta;d++){
            if(mishkaX-X>broiKX[d] && mishkaY-Y>broiKY[d] && mishkaX-X<broiKX[d]+40 && mishkaY-Y<broiKY[d]+40){
                //console.log(mishkaX,mishkaY,broiKX[0],broiKY[0]);
                
                
                //alert("MARTINE TI NE SI MANGAL!!!");    
                openmenu=1;
            }
        }
        for(d2=0;d2<broikosh4eta;d2++){
            if(mishkaX-X>broiKX2[d2] && mishkaY-Y>broiKY2[d2] && mishkaX-X<broiKX2[d2]+40 && mishkaY-Y<broiKY2[d2]+40){
                //console.log(mishkaX,mishkaY,broiKX[0],broiKY[0]);
                
                
                //alert("MARTINE TI NE SI MANGAL!!!");    
                openmenu2=1;
            }
        }
        for(d3=0;d3<broikosh4eta;d3++){
            if(mishkaX-X>broiKX3[d3] && mishkaY-Y>broiKY3[d3] && mishkaX-X<broiKX3[d3]+40 && mishkaY-Y<broiKY3[d3]+40){
                //console.log(mishkaX,mishkaY,broiKX[0],broiKY[0]);
                
                
                //alert("MARTINE TI NE SI MANGAL!!!");    
                openmenu3=1;
            }
        }
        
        
        
    }
    
}, false);


window.addEventListener("keyup", function (args) {	//vika se pri puskane na kopche natiskano do sega
    //tova e po- dobroto mqsto da sluchvate deistvia s natiskanoto kopche
	if(args.keyCode==37){  //ako e strelka nalevo
		myX=myX-50;  //mestim nalevo
	}
    
    
    
     if(args.keyCode==68){
       // mishkaX+=5;
        R=0;
    }
    if(args.keyCode==65){
       // mishkaX-=5;
        L=0;
    }
    
     if(args.keyCode==83){
       // mishkaY+=5;
         D=0;
    }
    if(args.keyCode==87){
      //  mishkaY-=5;
        U=0;
    }
    
    
    
    
    
    
    
    if(args.keyCode==189){
        scroolX3=0; 
    }
    
    
    if(args.keyCode==187){
        scroolX2=0;    
    }
    
    
     if(args.keyCode==37){
        PressL=false;
    }
    if(args.keyCode==39){
        PressR=false;
    }
    if(args.keyCode==38){
        PressU=false;
    }
    if(args.keyCode==40){
        PressD=false;
        PressD=false;
    }
    
    
    if(args.keyCode==107){
    //    scroolX2=0;  
    }
    
    
    if(args.keyCode==109){
      //  scroolX3=0; 
    }
    
    
    
    
    
    audio.pause();
}, false);

window.addEventListener("mousemove", function (args) {
	//console.log(args.clientX, args.clientY);	//kude e premestena mishkata
	//Nikakvi log-ove
    //myY=args.clientY;
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
    
    
    if(mishkaX>canvas.width-130 && mishkaY>canvas.height-30){
        onhelp=1;
    }else{
        if(! martin){
        onhelp=0;
        }
    }
    
  //  canvas.width-130,canvas.height-30, 130,30
    
    
    
    
    audio.currentTime=args.clientX;
}, false);

var a=0;
X=1;
function update() {	//specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
	myX=myX+5;//dvijim se postoqnno nadesno
    
    startimer++;
    if(L){
        mishkaX-=2;
    }
    if(R){
        mishkaX+=2;
    }
    
    
    if(U){
        mishkaY-=2;
    }
    if(D){
        mishkaY+=2;
    }
    
    ///////////////////////////////////

    if(martin){
        //martin=1;
        onhelp=1;
    }
    
    
    ////////////////////////////////
   timertostart++;
    
    //broikosh4eta=19;
    
    if(PressL){
        if(X<0.5){
        X+=3.3; 
        }
    }
    if(PressR){
        if(X>-666){
        X-=3.3; 
        }
    }
    if(PressU){
        if(Y<0){
        Y+=3.3; 
        }
    }
    if(PressD){
        if(Y>-666){
        Y-=3.3;   
        }
    }
    
    if(scroolX2){
      //  ZoomX+=3;  
       // scroolX2=0;
       // scroolX3=0;
    }
    
   if(scroolX3){
       // ZoomX-=3;  
       //scroolX2=0;
      //  scroolX3=0;
    }
    
    console.log(broikosh4eta,broiKX[0],broiKY[0]);
    
    
	setTimeout(update, 10);	//kolko chesto da se dviji
}

var a,a2,a3;

var I,J;


function draw() {	//specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);	//NEBAR!
    context.globalAlpha = 1;    				//NEBAR!
    
    
  // for(a=0;a<contrast;a++){
    
       // context.fillStyle = "rgba(29, 0, 255, 0.4)";//izbor na cvqt
     //   context.fillRect(0, 0, canvas.width,canvas.height);	//risuvane na zapulnen kvadrat s izbrania cvqt
   // }
    
    
    
  
    
    context.fillStyle = "rgba(0, 0, 0, 0.45)";//izbor na cvqt
        context.fillRect(0,0,100000,100000);
    
    
    
    
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    
    if(! SelectedMap){
        context.drawImage(Map,0+X,0+Y,canvas.width+ZoomX,canvas.height+ZoomX);
    }else{
        context.drawImage(Map2,0+X,0+Y,canvas.width+ZoomX,canvas.height+ZoomX);
    }
    // PINS ////////////////////////////
    
    
    
    
      context.fillStyle = "rgba(0, 0, 0, 0.29)";
    context.font = "15px Arial";
    context.fillText("Кошче - 1.0.0 by Sa6o & Marto team", 10, 20);
    
    
    for(a=0;a<100;a++){
       context.fillStyle = "rgb(0, 0, 0)";//izbor na cvqt
    context.fillRect(broiKX[a]+X,broiKY[a]+Y, 10,20);
         
    
    }
    for(a2=0;a2<100;a2++){
       context.fillStyle = "rgb(118, 118, 118)";//izbor na cvqt
    context.fillRect(broiKX2[a2]+X,broiKY2[a2]+Y, 10,20);
        

    }
    
    for(a3=0;a3<100;a3++){
     //  context.fillStyle = "rgb(255, 226, 0)";//izbor na cvqt
   // context.fillRect(broiKX3[a3]+X,broiKY3[a3]+Y, 10,20);
        
        context.drawImage(recikliranokosh4e,broiKX3[a3]+X,broiKY3[a3]+Y, 10,20);
           
    }
    
    
    if(SelectedKosh4e==1){
        context.fillStyle = "rgb(0, 0, 0)";//izbor na cvqt
        context.fillRect(canvas.width-40,0, 40,40);
        context.fillStyle = "rgb(0, 0, 0)";
        context.font = "15px Arial Black";
        context.fillText("Смесено кошче", canvas.width-280, 50);
        
        
        
        
    }
    if(SelectedKosh4e==2){
        context.fillStyle = "rgb(137, 134, 134)";//izbor na cvqt
        context.fillRect(canvas.width-40,0, 40,40);
        context.fillStyle = "rgb(85, 85, 85)";
        context.font = "15px Arial Black";
        context.fillText("Малко кошче", canvas.width-280, 50);
        
    }if(SelectedKosh4e==3){
        context.drawImage(recikliranokosh4e,canvas.width-40,0, 40,40);
        
        context.fillStyle = "rgb(0, 72, 17)";
        context.font = "15px Arial Black";
        context.fillText("Кошче за рециклиране", canvas.width-280, 50);
        
    }
    
    if(openmenu){
        context.fillStyle = "rgba(255, 255, 255, 0.99)";//izbor na cvqt
        context.fillRect(0,0, canvas.width/3,canvas.height);
        context.drawImage(NoImage,20,20, canvas.width/3-50,370);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6)";
        context.font = "15px Arial";
        context.fillText("Тип", 20, 380+30);
        
        context.fillStyle = "rgb(0, 0, 0)";//izbor na cvqt
        context.fillRect(20+350+10+5,380+5+5+5, 30,30);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6))";
        context.font = "15px Arial";
        context.fillText("Смесено кошче",  80, 380+30);
        
        
        context.fillStyle = "rgba(0, 0, 0, 0.6))";
        context.font = "15px Arial";
        context.fillText("Информация", 20, 380+30+30+30);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6)";
        context.font = "15px Arial";
        context.fillText("Няма информация за това кошче", 20, 380+30+30+30+30);
    }
    
    if(openmenu2){
        context.fillStyle = "rgba(255, 255, 255, 0.99)";//izbor na cvqt
        context.fillRect(0,0, canvas.width/3,canvas.height);
        context.drawImage(NoImage,20,20, canvas.width/3-50,370);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6)";
        context.font = "15px Arial";
        context.fillText("Тип", 20, 380+30);
        
        context.fillStyle = "rgb(59, 59, 59)";//izbor na cvqt
        context.fillRect(20+350+10+5,380+5+5+5, 30,30);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6))";
        context.font = "15px Arial";
        context.fillText("Малко смесено кошче",  80, 380+30);
        
        
        context.fillStyle = "rgba(0, 0, 0, 0.6))";
        context.font = "15px Arial";
        context.fillText("Информация", 20, 380+30+30+30);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6)";
        context.font = "15px Arial";
        context.fillText("Няма информация за това кошче", 20, 380+30+30+30+30);
    }
    
    if(openmenu3){
        context.fillStyle = "rgba(255, 255, 255, 0.99)";//izbor na cvqt
        context.fillRect(0,0, canvas.width/3,canvas.height);
        context.drawImage(NoImage,20,20, canvas.width/3-50,370);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6)";
        context.font = "15px Arial";
        context.fillText("Тип", 20, 380+30);
        
        
        
        context.fillStyle = "rgb(10, 128, 0)";//izbor na cvqt
        context.fillRect(20+350+10+5,380+5+5+5, 30,30);
        
        context.drawImage(recikliranokosh4e,20+350+10+5,380+5+5+5, 30,30);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6))";
        context.font = "15px Arial";
        context.fillText("Кофа за рециклиране",  80, 380+30);
        
        
        context.fillStyle = "rgba(0, 0, 0, 0.6))";
        context.font = "15px Arial";
        context.fillText("Информация", 20, 380+30+30+30);
        
        context.fillStyle = "rgba(0, 0, 0, 0.6)";
        context.font = "15px Arial";
        context.fillText("Няма информация за това кошче", 20, 380+30+30+30+30);
    }
    
    
    if(! onhelp){
    context.fillStyle = "rgba(0, 0, 0, 0.47)";//izbor na cvqt
    context.fillRect(canvas.width-130,canvas.height-30, 130,30);
        context.fillStyle = "rgb(0, 0, 0)";
        context.font = "15px Arial";
        context.fillText("Помощ (H)", canvas.width-100,canvas.height-11);
        
    }else{
        context.fillStyle = "rgba(0, 0, 0, 0.84)";//izbor na cvqt
        context.fillRect(canvas.width-130,canvas.height-30, 130,30);
        context.fillStyle = "rgb(255, 255, 255)";
        context.font = "15px Arial";
        context.fillText("Помощ", canvas.width-100,canvas.height-11);
    }
    context.fillStyle = "rgb(0, 0, 0)";
        context.font = "15px Arial";
        context.fillText("Вид кошче (което ще поставите)", canvas.width-280, 20);
    
    if(martin){
        context.fillStyle = "rgb(255, 255, 255)";//izbor na cvqt
        context.fillRect(0,0, canvas.width/3,canvas.height);
        
        
        context.drawImage(ciganina,0,0, canvas.width/3,canvas.height);
    
    }
    
    if(startimer<150){
        context.drawImage(logoimg,0,0,canvas.width,canvas.height);
    }
    requestAnimationFrame(draw);	//NEBAR!
    
    context.beginPath();
    context.arc(mishkaX,mishkaY,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
}
update();	//purvo vikane. ne go zatrivai!
draw();	//purvo vikane. ne go zatrivai!