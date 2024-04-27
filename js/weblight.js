let switchsun = document.getElementById('switchsun');
let switchmoon = document.getElementById('switchmoon');
let languagelight = document.getElementById('languagelight');
let languagedark = document.getElementById('languagedark');

let body = document.getElementById('body');
let home=document.getElementById('home');
let logosun=document.getElementById('logosun');
let logomoon=document.getElementById('logomoon');
let navbarld=document.getElementById('navbar');
let dropdowncontentwhite=document.getElementById('dropdown-contentwhite');
let dropdowncontentwhite2=document.getElementById('dropdown-contentwhite2');
let robotictext = document.getElementById('robotic');
let content=document.getElementById('content');
let triangle1 = document.getElementById('triangle1');
let triangle2 = document.getElementById('triangle2');
let triangle3 = document.getElementById('triangle3');
let triangle4 = document.getElementById('triangle4');
let footer = document.getElementById('footer');
let lightinfo1 = document.getElementById('lightinfo1');
let lightinfo2 = document.getElementById('lightinfo2');

var lunbuo1=document.getElementById('imglist1');
var flag1=true;
var lunbuo2=document.getElementById('imglist2');
var flag2=true;
var lunbuo3=document.getElementById('imglist3');
var flag3=true;
var produxtld1=document.getElementById('produxtld1');
var flag4=true;
switchsun.onclick=function () {

    //查询sun
    console.log(switchsun.className);
    if(switchsun.className.indexOf('sun1')!=-1){
        switchsun.className='switch1 moon1';
    }else{
        switchsun.className='switch1 sun1';
    }
    //moon
    console.log(switchmoon.className);
    if(switchmoon.className.indexOf('sun2')!=-1){
        switchmoon.className='switch2 moon2';
    }else{
        switchmoon.className='switch2 sun2';
    }
    
    //body
    console.log(body.className);
    if(body.className.indexOf('lightbody')!=-1){
        body.className='body darkbody';
    }else{
        body.className='body lightbody';
    }

    //header
    console.log(home.className);
    if(home.className.indexOf('light-home')!=-1){
        home.className='home dark-home';
    }else{
        home.className='home light-home';
    }
    console.log(logosun.className);
    if(logosun.className.indexOf('light-logo1')!=-1){
        logosun.className='logo1 dark-logo1';
    }else{
        logosun.className='logo1 light-logo1';
    }
    console.log(logomoon.className);
    if(logomoon.className.indexOf('light-logo2')!=-1){
        logomoon.className='logo2 dark-logo2';
    }else{
        logomoon.className='logo2 light-logo2';
    }

    //目录
        //languagechange
    console.log(languagelight.className);
    if(languagelight.className.indexOf('languagelight1')!=-1){
        languagelight.className='switch4 languagedark1';
    }else{
        languagelight.className='switch4 languagelight1';
    }
    console.log(languagedark.className);
    if(languagedark.className.indexOf('languagelight2')!=-1){
        languagedark.className='switch3 languagedark2';
    }else{
        languagedark.className='switch3 languagelight2';
    }
        //others
    console.log(navbarld.className);
    if(navbarld.className.indexOf('light-navbar')!=-1){
        navbarld.className='navbar dark-navbar';
    }else{
        navbarld.className='navbar light-navbar';
    }
    console.log(dropdowncontentwhite.className);
    if(dropdowncontentwhite.className.indexOf('light-contentwhite')!=-1){
        dropdowncontentwhite.className='dropdown-contentwhite dark-contentwhite';
    }else{
        dropdowncontentwhite.className='dropdown-contentwhite light-contentwhite';
    }
    console.log(dropdowncontentwhite2.className);
    if(dropdowncontentwhite2.className.indexOf('light-contentwhite2')!=-1){
        dropdowncontentwhite2.className='dropdown-contentwhite2 dark-contentwhite2';
    }else{
        dropdowncontentwhite2.className='dropdown-contentwhite2 light-contentwhite2';
    }

    //轮播图
    if(flag1){
        lunbuo1.src="image/img/1yongdark.jpg";
        flag1=false;
    }else{
        lunbuo1.src="image/img/1yong.jpg";
        flag1=true;
    }
    if(flag2){
        lunbuo2.src="image/lunbuoimg/2yongdark.jpg";
        flag2=false;
    }else{
        lunbuo2.src="image/lunbuoimg/2yong.jpg";
        flag2=true;
    }
    if(flag3){
        lunbuo3.src="image/lunimg/1yongdark.jpg";
        flag3=false;
    }else{
        lunbuo3.src="image/lunimg/1yong.jpg";
        flag3=true;
    }

    //产品简介
    if(flag4){
        produxtld1.src="image/produxt1/produxtdark1.jpg";
        flag4=false;
    }else{
        produxtld1.src="image/produxt1/produxt1.jpg";
        flag4=true;
    }
    console.log(robotictext.className);
    if(robotictext.className.indexOf('lightrobotic')!=-1){
        robotictext.className='robotic-container darkrobotic';
    }else{
        robotictext.className='robotic-container lightrobotic';
    }

    //产品优势介绍
    console.log(content.className);
    if(content.className.indexOf('lightcontent')!=-1){
        content.className='content darkcontent';
    }else{
        content.className='content lightcontent';
    }
    console.log(triangle1.className);
    if(triangle1.className.indexOf('lighttriangle1')!=-1){
        triangle1.className='triangle darktriangle1';
    }else{
        triangle1.className='triangle lighttriangle1';
    }
    console.log(triangle2.className);
    if(triangle2.className.indexOf('lighttriangle2')!=-1){
        triangle2.className='triangle2 darktriangle2';
    }else{
        triangle2.className='triangle2 lighttriangle2';
    }
    console.log(triangle3.className);
    if(triangle3.className.indexOf('lighttriangle3')!=-1){
        triangle3.className='triangle3 darktriangle3';
    }else{
        triangle3.className='triangle3 lighttriangle3';
    }
    console.log(triangle4.className);
    if(triangle4.className.indexOf('lighttriangle4')!=-1){
        triangle4.className='triangle4 darktriangle4';
    }else{
        triangle4.className='triangle4 lighttriangle4';
    }

    //footer
    console.log(footer.className);
    if(footer.className.indexOf('lightfooter')!=-1){
        footer.className='footer darkfooter';
    }else{
        footer.className='footer lightfooter';
    }
    console.log(lightinfo1.className);
    if(lightinfo1.className.indexOf('lightinfo1')!=-1){
        lightinfo1.className='image-info1 darkinfo1';
    }else{
        lightinfo1.className='image-info1 lightinfo1';
    }
    console.log(lightinfo2.className);
    if(lightinfo2.className.indexOf('lightinfo2')!=-1){
        lightinfo2.className='image-info2 darkinfo2';
    }else{
        lightinfo2.className='image-info2 lightinfo2';
    }
}



//中英转换
let firstnameen1 = document.getElementById('firstnameen1');
let dropdownhome = document.getElementById('dropdownhome');
let designphilosophy = document.getElementById('designphilosophy');
let aboutuslanguage = document.getElementById('aboutuslanguage');
let roboticlocation = document.getElementById('robotic-location');
let robotictextlocation = document.getElementById('robotic-text-location');
let contentitemtexttitle1 = document.getElementById('contentitemtexttitle1');
let contentitemtexttitle2 = document.getElementById('contentitemtexttitle2');
let contentitemtexttitle3 = document.getElementById('contentitemtexttitle3');
let contentitemtexttitle4 = document.getElementById('contentitemtexttitle4');
let contentitemtext1 = document.getElementById('contentitemtext1');
let contentitemtext2 = document.getElementById('contentitemtext2');
let contentitemtext3 = document.getElementById('contentitemtext3');
let contentitemtext4 = document.getElementById('contentitemtext4');
let footermechanicpioneer = document.getElementById('footermechanicpioneer');
let footercompanyemail = document.getElementById('footercompanyemail');
let footercompanyphone = document.getElementById('footercompanyphone');
let footercompanyaddress = document.getElementById('footercompanyaddress');
let footercompanyaddress2 = document.getElementById('footercompanyaddress2');
let copyright = document.getElementById('copyright');

var roboticarmproducts = document.getElementById('roboticarmproducts');
var productshowcasevideos = document.getElementById('productshowcasevideos');
function changeLanguage() {
    //firstname
    console.log(firstnameen1.className);
    if(firstnameen1.className.indexOf('firstnameen1')!=-1){
        firstnameen1.className='firstname1 firstnamech1';
    }else{
        firstnameen1.className='firstname1 firstnameen1';
    }

    //目录
    console.log(dropdownhome.className);
    if(dropdownhome.className.indexOf('dropdownhomeen')!=-1){
        dropdownhome.className='dropdownhomech';
    }else{
        dropdownhome.className='dropdownhomeen';
    }
    console.log(roboticarmproducts.className);
    if(roboticarmproducts.className.indexOf('roboticarmproductsen')!=-1){
        roboticarmproducts.className='roboticarmproductsch';
        if (window.innerWidth <= 950) {
            document.getElementById('dropdown-contentwhite').style.width = window.innerWidth+"px"; 
        } else {
            document.getElementById('dropdown-contentwhite').style.width = "100px";
        }
    }else{
        roboticarmproducts.className='roboticarmproductsen';
        if (window.innerWidth <= 950) {
            document.getElementById('dropdown-contentwhite').style.width = window.innerWidth+"px";
        } else {
            document.getElementById('dropdown-contentwhite').style.width = "178px";
        }
    }
    console.log(productshowcasevideos.className);
    if(productshowcasevideos.className.indexOf('productshowcasevideosen')!=-1){
        productshowcasevideos.className='productshowcasevideosch';
        if (window.innerWidth <= 950) {
            document.getElementById('dropdown-contentwhite2').style.width = window.innerWidth+"px"; 
        } else {
            document.getElementById('dropdown-contentwhite2').style.width = "140px";
        }
    }else{
        productshowcasevideos.className='productshowcasevideosen';
        if (window.innerWidth <= 950) {
            document.getElementById('dropdown-contentwhite2').style.width = window.innerWidth+"px";
        } else {
            document.getElementById('dropdown-contentwhite2').style.width = "207px";
        }
    }
    console.log(designphilosophy.className);
    if(designphilosophy.className.indexOf('designphilosophyen')!=-1){
        designphilosophy.className='designphilosophych';
    }else{
        designphilosophy.className='designphilosophyen';
    }
    console.log(aboutuslanguage.className);
    if(aboutuslanguage.className.indexOf('aboutuslanguageen')!=-1){
        aboutuslanguage.className='aboutuslanguagech';
    }else{
        aboutuslanguage.className='aboutuslanguageen';
    }

    //robotic
    console.log(roboticlocation.className);
    if(roboticlocation.className.indexOf('roboticlocationen')!=-1){
        roboticlocation.className='roboticlocationch';
    }else{
        roboticlocation.className='roboticlocationen';
    }
    console.log(robotictextlocation.className);
    if(robotictextlocation.className.indexOf('robotictextlocationen')!=-1){
        robotictextlocation.className='robotictextlocationch';
    }else{
        robotictextlocation.className='robotictextlocationen';
    }

    //design
    console.log(contentitemtexttitle1.className);
    if(contentitemtexttitle1.className.indexOf('contentitemtexttitleen1')!=-1){
        contentitemtexttitle1.className='content-item-texttitle contentitemtexttitlech1';
    }else{
        contentitemtexttitle1.className='content-item-texttitle contentitemtexttitleen1';
    }
    console.log(contentitemtexttitle2.className);
    if(contentitemtexttitle2.className.indexOf('contentitemtexttitleen2')!=-1){
        contentitemtexttitle2.className='content-item-texttitle contentitemtexttitlech2';
    }else{
        contentitemtexttitle2.className='content-item-texttitle contentitemtexttitleen2';
    }
    console.log(contentitemtexttitle3.className);
    if(contentitemtexttitle3.className.indexOf('contentitemtexttitleen3')!=-1){
        contentitemtexttitle3.className='content-item-texttitle contentitemtexttitlech3';
    }else{
        contentitemtexttitle3.className='content-item-texttitle contentitemtexttitleen3';
    }
    console.log(contentitemtexttitle4.className);
    if(contentitemtexttitle4.className.indexOf('contentitemtexttitleen4')!=-1){
        contentitemtexttitle4.className='content-item-texttitle contentitemtexttitlech4';
    }else{
        contentitemtexttitle4.className='content-item-texttitle contentitemtexttitleen4';
    }
    console.log(contentitemtext1.className);
    if(contentitemtext1.className.indexOf('contentitemtexten1')!=-1){
        contentitemtext1.className='content-item-text contentitemtextch1';
    }else{
        contentitemtext1.className='content-item-text contentitemtexten1';
    }
    console.log(contentitemtext2.className);
    if(contentitemtext2.className.indexOf('contentitemtexten2')!=-1){
        contentitemtext2.className='content-item-text contentitemtextch2';
    }else{
        contentitemtext2.className='content-item-text contentitemtexten2';
    }
    console.log(contentitemtext3.className);
    if(contentitemtext3.className.indexOf('contentitemtexten3')!=-1){
        contentitemtext3.className='content-item-text contentitemtextch3';
    }else{
        contentitemtext3.className='content-item-text contentitemtexten3';
    }
    console.log(contentitemtext4.className);
    if(contentitemtext4.className.indexOf('contentitemtexten4')!=-1){
        contentitemtext4.className='content-item-text contentitemtextch4';
    }else{
        contentitemtext4.className='content-item-text contentitemtexten4';
    }
    
    //footer
    console.log(footermechanicpioneer.className);
    if(footermechanicpioneer.className.indexOf('footermechanicpioneeren')!=-1){
        footermechanicpioneer.className='footermechanicpioneerch';
    }else{
        footermechanicpioneer.className='footermechanicpioneeren';
    }
    console.log(footercompanyemail.className);
    if(footercompanyemail.className.indexOf('footercompanyemailen')!=-1){
        footercompanyemail.className='footercompanyemailch';
    }else{
        footercompanyemail.className='footercompanyemailen';
    }
    console.log(footercompanyphone.className);
    if(footercompanyphone.className.indexOf('footercompanyphoneen')!=-1){
        footercompanyphone.className='footercompanyphonech';
    }else{
        footercompanyphone.className='footercompanyphoneen';
    }
    console.log(footercompanyaddress.className);
    if(footercompanyaddress.className.indexOf('footercompanyaddressen')!=-1){
        footercompanyaddress.className='footercompanyaddressch';
    }else{
        footercompanyaddress.className='footercompanyaddressen';
    }
    console.log(footercompanyaddress2.className);
    if(footercompanyaddress2.className.indexOf('footercompanyaddressen2')!=-1){
        footercompanyaddress2.className='footercompanyaddressch2';
    }else{
        footercompanyaddress2.className='footercompanyaddressen2';
    }
    console.log(copyright.className);
    if(copyright.className.indexOf('copyrighten')!=-1){
        copyright.className='copyright copyrightch';
    }else{
        copyright.className='copyright copyrighten';
    }

}
window.addEventListener('resize', changeLanguage);
