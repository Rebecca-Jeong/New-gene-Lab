// page variables
var pageIntro = 1;
var pagescientist = 90;
var pagescientist2 = 91;
var pageEmoji1 = 2;//5Emoji screen
var pageEmoji11 = 3;//1.1 emoji skill page
var pageEmoji12 = 4;//1.2 emoji skill page
var pageEmoji13 = 5;//1.3 emoji skill page
var pageEmoji14 = 6;//1.4 emoji skill page
var pageEmoji15 = 7;//1.5 emoji skill page
var pageEmoji2 = 8; //5Emoji screen
var pageEmoji21 = 9;//2.1 emoji skill page
var pageEmoji22 = 10;//2.2 emoji skill page
var pageEmoji23 = 11;//2.3 emoji skill page
var pageEmoji24 = 12;//2.4 emoji skill page
var pageEmoji25 = 13;//2.5 emoji skill page
var pageCombine = 14;//combine emoji page
var pageCreate = 15;
var pageState = pageIntro;

var lip = false;
var vamp = false;
var dance = false;
var strong = false;
var pony = false;
var run = false;
var coffee = false;
var dolphin = false;
var rocket = false;
var wand = false;

var song1 = new Audio("https://codehs.com/uploads/8217f0f6b634e143985dbc216489a6f2");
var song2 = new Audio("https://codehs.com/uploads/d05c5c7710bab9f543adef596df93e1e");
var song3 = new Audio("https://codehs.com/uploads/a3e5117485aeef05e9f4a2b2ec8bd17d");
var song4 = new Audio("https://codehs.com/uploads/7003ef08aff260e017bb18a8ffaeb2d9");
var song5 = new Audio("https://codehs.com/uploads/13ea2d5af00c3a95dd4106c413f4cfec");
var song21 = new Audio("https://codehs.com/uploads/4fa794227e18ede580b06b7163959ac5");
var song22 = new Audio("https://codehs.com/uploads/7634345ebd6d44ace1ce751319aaf741");
var song23 = new Audio("https://codehs.com/uploads/2db12ecb7e374e39c95560e771ffa954");
var song24 = new Audio("https://codehs.com/uploads/38f9ff20a4f374c0d4ec15eb56ac5bed");
var song25 = new Audio("https://codehs.com/uploads/4c50f7cbe0bd434cd8310d5e3ff0f14b");


var lippic = new WebImage("https://codehs.com/uploads/c0d8abf33f73572d4133d9586e524955");
lippic.setPosition(30,100);
lippic.setSize(150,150);

var vamppic = new WebImage("https://codehs.com/uploads/6e6a5da0c3d48e9d0ffaa62ef8a002ad");
vamppic.setPosition(30,100);
vamppic.setSize(150,150);

var strongpic = new WebImage("https://codehs.com/uploads/1dc546f9005e2d474b145b24124a8e10");
strongpic.setPosition(30,100);
strongpic.setSize(150,150);

var ponypic = new WebImage("https://codehs.com/uploads/f303e3064fa16b3f3f6d4e54e699b478");
ponypic.setPosition(30,100);
ponypic.setSize(150,150);

var dancepic = new WebImage("https://codehs.com/uploads/805c3d3005c52111fb5a61d5078ec089");
dancepic.setPosition(30,100);
dancepic.setSize(150,150);

var runpic = new WebImage("https://codehs.com/uploads/3d815ae0b785c88aed7a227c72d0437e");
runpic.setPosition(235,100);
runpic.setSize(150,150);

var coffeepic = new WebImage("https://codehs.com/uploads/73dba5396fe7f43ca9cfc55aff60a5e0");
coffeepic.setPosition(235,100);
coffeepic.setSize(150,150);

var dolphinpic = new WebImage("https://codehs.com/uploads/a8a7092c9659339bb14c14cc9bdefd99");
dolphinpic.setPosition(235,100);
dolphinpic.setSize(150,150); 

var rocketpic = new WebImage("https://codehs.com/uploads/dfa0ccc0e53f8388c1895f5775508b9e");
rocketpic.setPosition(235,100);
rocketpic.setSize(150,150); 

var wandpic = new WebImage("https://codehs.com/uploads/f44802bac4334891769e4b4ad066b7af");
wandpic.setPosition(235,100);
wandpic.setSize(150,150); 

var selectbutton = new WebImage("https://codehs.com/uploads/f9086a5dc6c6b2c257a08f95b503c4be");
selectbutton.setPosition(220,360);
selectbutton.setSize(150,105);

var liprun = new WebImage("https://codehs.com/uploads/a3d7c831c508e26f540f0eef4528f7f9");
liprun.setSize(400,480);

var lipcoffee = new WebImage("https://codehs.com/uploads/57a708e379587af1a4ae953cd6de2b82");
lipcoffee.setSize(400,480);

var lipdolphin = new WebImage("https://codehs.com/uploads/8d674391d0e4441421063510d21b8dea");
lipdolphin.setSize(400,480);

var liprocket = new WebImage("https://codehs.com/uploads/6ed19271e57a9260bf4c909cfb302785");
liprocket.setSize(400,480);

var lipwand = new WebImage("https://codehs.com/uploads/de1c8a2add385e12ce8abb874a440b7c");
lipwand.setSize(400,480);

var strongrun = new WebImage("https://codehs.com/uploads/c97f00c4a1ed6461e324e90354921cb8");
strongrun.setSize(400,480);

var strongcoffee = new WebImage("https://codehs.com/uploads/ada07964484c525cf008a525bdd3d9f1");
strongcoffee.setSize(400,480);

var strongdolphin = new WebImage("https://codehs.com/uploads/ba1e5c3c8265cd0787a88ce8de54087d");
strongdolphin.setSize(400,480);

var strongrocket = new WebImage("https://codehs.com/uploads/65a20ec0c7eb6703bd392a882d736f73");
strongrocket.setSize(400,480);

var strongwand = new WebImage("https://codehs.com/uploads/f5e873ee7359feb04d294736166f81de");
strongwand.setSize(400,480);

var dancerun = new WebImage("https://codehs.com/uploads/2fc6598e8ce659c7cc29d270486b394e");
dancerun.setSize(400,480);

var dancecoffee = new WebImage("https://codehs.com/uploads/4f2fa89985b90d6f097e72bf81f0a1cf");
dancecoffee.setSize(400,480);

var dancedolphin = new WebImage("https://codehs.com/uploads/23bde985a4afb01ee03d35c888514057");
dancedolphin.setSize(400,480);

var dancerocket = new WebImage("https://codehs.com/uploads/94b89edb66821742abd885cc99a3fd33");
dancerocket.setSize(400,480);

var dancewand = new WebImage("https://codehs.com/uploads/aae70638a3c6ca12da670a093f212a80");
dancewand.setSize(400,480);

var vamprun= new WebImage("https://codehs.com/uploads/09cc2a8f1ace6a83c966b32dc3b9d9a1");
vamprun.setSize(400,480);

var vampcoffee= new WebImage("https://codehs.com/uploads/9de22a92f0a3faf4472474b38f6fd6ff");
vampcoffee.setSize(400,480);

var vampdolphin= new WebImage("https://codehs.com/uploads/3fc50dcfc7c96c0aae8e86162b08ee76");
vampdolphin.setSize(400,480);

var vamprocket= new WebImage("https://codehs.com/uploads/577f07a7ac6d3e03ca5f9053f5529fdc");
vamprocket.setSize(400,480);

var vampwand= new WebImage("https://codehs.com/uploads/edd9152ad6e722b4f9ae458aa06b4047");
vampwand.setSize(400,480);

var ponyrun= new WebImage("https://codehs.com/uploads/cec16ee8706aa93b08fda78258624582");
ponyrun.setSize(400,480);

var ponycoffee= new WebImage("https://codehs.com/uploads/f95dd507324eb6609470a55ff3826e59");
ponycoffee.setSize(400,480);

var ponydolphin= new WebImage("https://codehs.com/uploads/f1f5c13b1f8e9a036723eaecd8cfd05b");
ponydolphin.setSize(400,480);

var ponyrocket= new WebImage("https://codehs.com/uploads/705a9a10982093697f8720132228f765");
ponyrocket.setSize(400,480);

var ponywand= new WebImage("https://codehs.com/uploads/f134a7b2a986dadd2bf5e70dccc6fc66");
ponywand.setSize(400,480);


function frame(x,y){
    var frame = new WebImage("https://codehs.com/uploads/0657590993ab4f81d1a95ab5a7028f58");
    frame.setPosition(x,y);
    frame.setSize(150,170);
    add(frame);
}
var select1 = "";
var select2 = "";

function intro(){
    var bg = new WebImage("https://codehs.com/uploads/ed22c3ad2d8fce037de05e030a222919");
    bg.setSize(400,480);
    add(bg);
    
    var startbutton = new WebImage("https://codehs.com/uploads/6cac6e6282f2a7fc85136af71e15df77");
    startbutton.setPosition(120,360);
    startbutton.setSize(150,65);
    add(startbutton);
    
}

function scientist(){
    var bg = new WebImage("https://codehs.com/uploads/386ddbb99676181bd8cfbf49064eea45");
    bg.setSize(400,480);
    add(bg);
    var startbutton = new WebImage("https://codehs.com/uploads/c9bf31456d0baa774638891a1c0feb11");
    startbutton.setPosition(220,320);
    startbutton.setSize(150,105);
    add(startbutton);
}
function scientist2(){
    var bg = new WebImage("https://codehs.com/uploads/192f96a1e0fd0da2f86ecd84dbf831d7");
    bg.setSize(400,480);
    add(bg);
    var startbutton = new WebImage("https://codehs.com/uploads/1beae7743be4d187b1bcb72bae68fb83");
    startbutton.setPosition(230,370);
    startbutton.setSize(150,105);
    add(startbutton);
}
function emoji1(){
    var bg = new WebImage("https://codehs.com/uploads/b27f71aaad54fd6032c3e0c6363f4675");
    bg.setSize(400,480);
    add(bg);

}

function emoji11(){
    var bg = new WebImage("https://codehs.com/uploads/95a3e168f8b7b3f7f8bfbb354fbbbef5");
    bg.setSize(400,480);
    add(bg);
    song1.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}

function emoji12(){
    var bg = new WebImage("https://codehs.com/uploads/c8e00e15d9d082a1bf11004840acafa5");
    bg.setSize(400,480);
    add(bg);
    song2.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}

function emoji13(){
    var bg = new WebImage("https://codehs.com/uploads/86707c6785d9ae93c21230f0f40441c8");
    bg.setSize(400,480);
    add(bg);
    song3.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}

function emoji14(){
    var bg = new WebImage("https://codehs.com/uploads/aee5d89f22f72ed9ede32563be4eb6f1");
    bg.setSize(400,480);
    add(bg);
    song4.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}

function emoji15(){
    var bg = new WebImage("https://codehs.com/uploads/5badcf9a680e10b7fa3272369236b815");
    bg.setSize(400,480);
    add(bg);

    song5.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}
function emoji2(){
    var bg = new WebImage("https://codehs.com/uploads/a65e50e0e483cb61fc77a6b8e7f8857d");
    bg.setSize(400,480);
    add(bg);
}

function emoji21(){
    var bg = new WebImage("https://codehs.com/uploads/d9942479252426b9ed4be2c29421e1ce");
    bg.setSize(400,480);
    add(bg);
    song21.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}

function emoji22(){
    var bg = new WebImage("https://codehs.com/uploads/606e357aefec54cbd798436c5d24216e");
    bg.setSize(400,480);
    add(bg);
    song22.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}

function emoji23(){
    var bg = new WebImage("https://codehs.com/uploads/23fbe0cdbd4f44d404ffc1b30ab23078");
    bg.setSize(400,480);
    add(bg);

    song23.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}

function emoji24(){
    var bg = new WebImage("https://codehs.com/uploads/e9b4a39bd555e615f3d5e1c9f6e06586");
    bg.setSize(400,480);
    add(bg);

    song24.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}

function emoji25(){
    var bg = new WebImage("https://codehs.com/uploads/02855a821c4fbbc4d1cc86a5f4d613fb");
    bg.setSize(400,480);
    add(bg);

    song25.play();
    
    var backbutton = new WebImage("https://codehs.com/uploads/957ccae3dc1ef4e35d4711ee33034372");
    backbutton.setPosition(80,370);
    backbutton.setSize(100,105);
    add(backbutton);
}
function combine(){
    var bg = new WebImage("https://codehs.com/uploads/173949a66127ee567b8c1c85870e2460");
    bg.setSize(400,480);
    add(bg);
    var txt = new Text("You selected...","40pt Arial");
    txt.setPosition(40,50);
    add(txt);
    var plus = new Text("+","40pt Arial");
    plus.setPosition(190,190);
    add(plus);
}
function create(){
    var bg = new WebImage("https://codehs.com/uploads/8faca9ff946c23dd805a4d334d27e78e");
    bg.setSize(400,480);
    add(bg);
}
function userInput(e){
    var mouseX = e.getX();
    var mouseY = e.getY();
    //println(mouseX+","+mouseY);
    if(pageState == pageIntro){
        if (mouseX>120 && mouseX<360 && mouseY>360 && mouseY<425){
            scientist();
            pageState = pagescientist;
        }
    }if(pageState == pagescientist){
        if(mouseX>220 && mouseX<360 && mouseY>350 && mouseY<390){
            scientist2();
            pageState = pagescientist2;
        }
    }if(pageState == pagescientist2){
        if(mouseX>250 && mouseX<370 && mouseY>400 && mouseY<450){
            emoji1();
            pageState = pageEmoji1;
        }
    }if(pageState == pageEmoji1){
        if(mouseX>15 && mouseX<115 && mouseY>136 && mouseY<210){
            emoji11();
            pageState = pageEmoji11;
        }else if(mouseX>157 && mouseX<243 && mouseY>140 && mouseY<225){
            emoji12();
            pageState = pageEmoji12;
        }else if(mouseX>286 && mouseX<366 && mouseY>123 && mouseY<234){
            emoji13();
            pageState = pageEmoji13;
        }else if(mouseX>65 && mouseX<151 && mouseY>257 && mouseY<349){
            emoji14();
            pageState = pageEmoji14;
        }else if(mouseX>243 && mouseX<334 && mouseY>268 && mouseY<350){
            emoji15();
            pageState = pageEmoji15;
        }
        if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (lip==true)){
            select1="lippic";
            emoji2();
            pageState = pageEmoji2;
        }if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (strong==true)){
            select1="strongpic";
            emoji2();
            pageState = pageEmoji2;
        }if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (dance==true)){
            select1="dancepic";
            emoji2();
            pageState = pageEmoji2;
        }if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (vamp==true)){
            select1="vamppic";
            emoji2();
            pageState = pageEmoji2;
        }if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (pony==true)){
            select1="ponypic";
            emoji2();
            pageState = pageEmoji2;
        }
    }if(pageState == pageEmoji11 ){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song1.pause();
            emoji1();
            lip = true;
            pageState = pageEmoji1;
            if(lip == true){
                frame(1,90);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji12 ){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song2.pause();
            emoji1();
            
            strong = true;
            pageState = pageEmoji1;
            song2.pause();
            if(strong == true){
                frame(130,90);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji13){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song3.pause();
            emoji1();
            
            dance = true;
            pageState = pageEmoji1;
            song3.pause();
            if(dance == true){
                frame(253,90);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji14){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song4.pause();
            emoji1();
            
            vamp = true;
            pageState = pageEmoji1;
            song4.pause();
            if(vamp == true){
                frame(37,220);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji15){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song5.pause();
            emoji1();
            pony = true;
            pageState = pageEmoji1;
            song5.pause();
            if(pony == true){
                frame(215,220);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji2){
        if(mouseX>15 && mouseX<115 && mouseY>136 && mouseY<210){
            emoji21();
            pageState = pageEmoji21;
        }else if(mouseX>157 && mouseX<243 && mouseY>140 && mouseY<225){
            emoji22();
            pageState = pageEmoji22;
        }else if(mouseX>286 && mouseX<366 && mouseY>123 && mouseY<234){
            emoji23();
            pageState = pageEmoji23;
        }else if(mouseX>65 && mouseX<151 && mouseY>257 && mouseY<349){
            emoji24();
            pageState = pageEmoji24;
        }else if(mouseX>243 && mouseX<334 && mouseY>268 && mouseY<350){
            emoji25();
            pageState = pageEmoji25;
        }
        if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (run==true)){
            select2="runpic";
            combine();
            pageState = pageCombine;
        }if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (coffee==true)){
            select2="coffeepic";
            combine();
            pageState = pageCombine;
        }if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (dolphin==true)){
            select2="dolphinpic";
            combine();
            pageState = pageCombine;
        }if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (rocket==true)){
            select2="rocketpic";
            combine();
            pageState = pageCombine;
        }if((mouseX>228 && mouseX<366 && mouseY>386 && mouseY<430) && (wand==true)){
            select2="wandpic";
            combine();
            pageState = pageCombine;
        }
    }if(pageState == pageCombine){
        if(select1 == "lippic"){
            add(lippic);
        }else if(select1 == "vamppic"){
            add(vamppic);
        }else if(select1 == "strongpic"){
            add(strongpic);
        }else if(select1 == "ponypic"){
            add(ponypic);
        }else if(select1 == "dancepic"){
            add(dancepic);
        }if(select2 == "runpic"){
            add(runpic);
        }else if(select2 == "coffeepic"){
            add(coffeepic);
        }else if(select2 =="dolphinpic"){
            add(dolphinpic);
        }else if(select2 =="rocketpic"){
            add(rocketpic);
        }else if(select2 == "wandpic"){
            add(wandpic);
        }

        var generate = new WebImage("https://codehs.com/uploads/1d5ff1cdab483f5041bfd98858a9fdfc");
        generate.setPosition(60,220);
        generate.setSize(330,200);
        add(generate);
        if(mouseX>84 && mouseX<340 && mouseY>255 && mouseY<370){
            create();
            pageState = pageCreate;
        }
    }if(pageState == pageCreate){
        if(select1 == "lippic"){
            if(select2 == "runpic"){
                add(liprun);
            }else if(select2 == "coffeepic"){
                add(lipcoffee);
            }else if(select2 == "dolphinpic"){
                add(lipdolphin);
            }else if(select2 == "rocketpic"){
                add(liprocket);
            }else if(select2 == "wandpic"){
                add(lipwand);
            }
        }if(select1 == "strongpic"){
            if(select2 == "runpic"){
                add(strongrun);
            }else if(select2 == "coffeepic"){
                add(strongcoffee);
            }else if(select2 == "dolphinpic"){
                add(strongdolphin);
            }else if(select2 == "rocketpic"){
                add(strongrocket);
            }else if(select2 == "wandpic"){
                add(strongwand);
            }
        }if(select1 == "dancepic"){
            if(select2 == "runpic"){
                add(dancerun);
            }else if(select2 == "coffeepic"){
                add(dancecoffee);
            }else if(select2 == "dolphinpic"){
                add(dancedolphin);
            }else if(select2 == "rocketpic"){
                add(dancerocket);
            }else if(select2 == "wandpic"){
                add(dancewand);
            }
        }if(select1 == "vamppic"){
            if(select2 == "runpic"){
                add(vamprun);
            }else if(select2 == "coffeepic"){
                add(vampcoffee);
            }else if(select2 == "dolphinpic"){
                add(vampdolphin);
            }else if(select2 == "rocketpic"){
                add(vamprocket);
            }else if(select2 == "wandpic"){
                add(vampwand);
            }
        }if(select1 == "ponypic"){
            if(select2 == "runpic"){
                add(ponyrun);
            }else if(select2 == "coffeepic"){
                add(ponycoffee);
            }else if(select2 == "dolphinpic"){
                add(ponydolphin);
            }else if(select2 == "rocketpic"){
                add(ponyrocket);
            }else if(select2 == "wandpic"){
                add(ponywand);
            }
        }
        
    }if(pageState == pageEmoji21 ){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song21.pause();
            emoji2();
            run = true;
            pageState = pageEmoji2;
            if(run == true){
                frame(1,90);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji22 ){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song22.pause();
            emoji2();
            coffee = true;
            pageState = pageEmoji2;
            if(coffee == true){
                frame(130,90);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji23){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song23.pause();
            emoji2();
            dolphin = true;
            pageState = pageEmoji2;
            if(dolphin == true){
                frame(253,90);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji24){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song24.pause();
            emoji2();
            rocket = true;
            pageState = pageEmoji2;
            if(rocket == true){
                frame(37,220);
                add(selectbutton);
            }
        }
    }if(pageState == pageEmoji25){
        if(mouseX>80 && mouseX<160 && mouseY>370 && mouseY<475){
            song25.pause();
            emoji2();
            wand = true;
            pageState = pageEmoji2;
            if(wand == true){
                frame(195,220);
                add(selectbutton);
            }
        }
    }
}




function start(){
    intro();
    mouseClickMethod(userInput);
}