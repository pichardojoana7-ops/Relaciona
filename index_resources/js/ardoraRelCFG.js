//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=30; scoreInc=5; scoreDec=5
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Excelent"; messageTime=""; messageError="Try again"; messageErrorG="Try again"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Have breakfast</p>","<p>Brush my teeth</p>","<p>Get up of my bed</p>","<p>Go to school</p>","<p>Watch a movie</p>","<p>Play with my friends</p>"];
var iL=["","","","","",""];
var order=["","","","","",""]; orderR=["","","","","",""];indexR=0; indexL=0;
var cR=["","","","","",""]; ansRL=["MA==","Mg==","MQ==","Mw==","NA==","NQ=="];
var iR=["<div  align='center'><img alt='' src='index_resources/media/WhatsApp_Image_2025-10-07_at_2.20.38_PM.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/WhatsApp_Image_2025-10-07_at_2.20.39_PM.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/WhatsApp_Image_2025-10-07_at_2.20.38_PM__1_.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/WhatsApp_Image_2025-10-07_at_2.21.33_PM.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/WhatsApp_Image_2025-10-07_at_2.22.40_PM.jpeg'></div>","<div  align='center'><img alt='' src='index_resources/media/WhatsApp_Image_2025-10-07_at_2.24.12_PM.jpeg'></div>"];
var auR=[1,3,2,4,5,6];
