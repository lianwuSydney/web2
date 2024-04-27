let switchsun = document.getElementById('switchsun');
let switchmoon = document.getElementById('switchmoon');
let languagelight = document.getElementById('languagelight');
let languagedark = document.getElementById('languagedark');

let body = document.getElementById('body');
let navbarld=document.getElementById('navbar');
let dropdowncontentwhite=document.getElementById('dropdown-contentwhite');
let dropdowncontentwhite2=document.getElementById('dropdown-contentwhite2');
let mainimage1=document.getElementById('mainimage1');
let mainimage2=document.getElementById('mainimage2');
let contectfirsttexttitle=document.getElementById('contectfirsttexttitle');
let contectaboutuscontainer=document.getElementById('contectaboutuscontainer');
let membertitle=document.getElementById('membertitle');
let membercontainer1=document.getElementById('membercontainer1');
let membercontainer2=document.getElementById('membercontainer2');
let membercard1=document.getElementById('membercard1');
let membercard2=document.getElementById('membercard2');
let membercard12=document.getElementById('membercard12');
let membercard22=document.getElementById('membercard22');
let membercard13=document.getElementById('membercard13');
let membercard23=document.getElementById('membercard23');
let membercard14=document.getElementById('membercard14');
let footer = document.getElementById('footer');
let lightinfo1 = document.getElementById('lightinfo1');
let lightinfo2 = document.getElementById('lightinfo2');
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
    console.log(header.className);
    if(header.className.indexOf('lightheader')!=-1){
        header.className='header darkheader';
    }else{
        header.className='header lightheader';
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
    //firstcontainer
    console.log(mainimage1.className);
    if(mainimage1.className.indexOf('light-mainimage1')!=-1){
        mainimage1.className='main-image1 dark-mainimage1';
    }else{
        mainimage1.className='main-image1 light-mainimage1';
    }
    console.log(mainimage2.className);
    if(mainimage2.className.indexOf('light-mainimage2')!=-1){
        mainimage2.className='main-image2 dark-mainimage2';
    }else{
        mainimage2.className='main-image2 light-mainimage2';
    }
    console.log(contectfirsttexttitle.className);
    if(contectfirsttexttitle.className.indexOf('light-contectfirsttexttitle')!=-1){
        contectfirsttexttitle.className='contect-first-texttitle dark-contectfirsttexttitle';
    }else{
        contectfirsttexttitle.className='contect-first-texttitle light-contectfirsttexttitle';
    }
    //aboutus
    console.log(contectaboutuscontainer.className);
    if(contectaboutuscontainer.className.indexOf('light-contectaboutuscontainer')!=-1){
        contectaboutuscontainer.className='contect-aboutus-container dark-contectaboutuscontainer';
    }else{
        contectaboutuscontainer.className='contect-aboutus-container light-contectaboutuscontainer';
    }
    //members
    console.log(membertitle.className);
    if(membertitle.className.indexOf('light-membertitle')!=-1){
        membertitle.className='member-title dark-membertitle';
    }else{
        membertitle.className='member-title light-membertitle';
    }
    console.log(membercontainer1.className);
    if(membercontainer1.className.indexOf('light-membercontainer1')!=-1){
        membercontainer1.className='member-container1 dark-membercontainer1';
    }else{
        membercontainer1.className='member-container1 light-membercontainer1';
    }
    console.log(membercontainer2.className);
    if(membercontainer2.className.indexOf('light-membercontainer2')!=-1){
        membercontainer2.className='member-container2 dark-membercontainer2';
    }else{
        membercontainer2.className='member-container2 light-membercontainer2';
    }
    console.log(membercard1.className);
    if(membercard1.className.indexOf('light-membercard1')!=-1){
        membercard1.className='member-card1 dark-membercard1';
    }else{
        membercard1.className='member-card1 light-membercard1';
    }
    console.log(membercard2.className);
    if(membercard2.className.indexOf('light-membercard2')!=-1){
        membercard2.className='member-card2 dark-membercard2';
    }else{
        membercard2.className='member-card2 light-membercard2';
    }
    console.log(membercard12.className);
    if(membercard12.className.indexOf('light-membercard12')!=-1){
        membercard12.className='member-card1 dark-membercard12';
    }else{
        membercard12.className='member-card1 light-membercard12';
    }
    console.log(membercard22.className);
    if(membercard22.className.indexOf('light-membercard22')!=-1){
        membercard22.className='member-card2 dark-membercard22';
    }else{
        membercard22.className='member-card2 light-membercard22';
    }
    console.log(membercard13.className);
    if(membercard13.className.indexOf('light-membercard13')!=-1){
        membercard13.className='member-card1 dark-membercard13';
    }else{
        membercard13.className='member-card1 light-membercard13';
    }
    console.log(membercard23.className);
    if(membercard23.className.indexOf('light-membercard23')!=-1){
        membercard23.className='member-card2 dark-membercard23';
    }else{
        membercard23.className='member-card2 light-membercard23';
    }
    console.log(membercard14.className);
    if(membercard14.className.indexOf('light-membercard14')!=-1){
        membercard14.className='member-card1 dark-membercard14';
    }else{
        membercard14.className='member-card1 light-membercard14';
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
let dropdownhome = document.getElementById('dropdownhome');
let designphilosophy = document.getElementById('designphilosophy');
let aboutuslanguage = document.getElementById('aboutuslanguage');
let aboutustitle1 = document.getElementById('aboutustitle1');
let contectaboutustitle = document.getElementById('contectaboutustitle');
let contectaboutustext = document.getElementById('contectaboutustext');
let members1 = document.getElementById('members1');
let member11 = document.getElementById('member11');
let member12 = document.getElementById('member12');
let member13 = document.getElementById('member13');
let member21 = document.getElementById('member21');
let member22 = document.getElementById('member22');
let member23 = document.getElementById('member23');
let member31 = document.getElementById('member31');
let member32 = document.getElementById('member32');
let member33 = document.getElementById('member33');
let member41 = document.getElementById('member41');
let member42 = document.getElementById('member42');
let member43 = document.getElementById('member43');
let member51 = document.getElementById('member51');
let member52 = document.getElementById('member52');
let member53 = document.getElementById('member53');
let member61 = document.getElementById('member61');
let member62 = document.getElementById('member62');
let member63 = document.getElementById('member63');
let member71 = document.getElementById('member71');
let member72 = document.getElementById('member72');
let member73 = document.getElementById('member73');

let footermechanicpioneer = document.getElementById('footermechanicpioneer');
let footercompanyemail = document.getElementById('footercompanyemail');
let footercompanyphone = document.getElementById('footercompanyphone');
let footercompanyaddress = document.getElementById('footercompanyaddress');
let footercompanyaddress2 = document.getElementById('footercompanyaddress2');
let copyright = document.getElementById('copyright');

var roboticarmproducts = document.getElementById('roboticarmproducts');
var productshowcasevideos = document.getElementById('productshowcasevideos');
function changeLanguage() {
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

    //first
    console.log(aboutustitle1.className);
    if(aboutustitle1.className.indexOf('aboutustitleen1')!=-1){
        aboutustitle1.className='aboutustitlech1';
    }else{
        aboutustitle1.className='aboutustitleen1';
    }

    //second
    console.log(contectaboutustitle.className);
    if(contectaboutustitle.className.indexOf('contectaboutustitleen')!=-1){
        contectaboutustitle.className='contect-aboutus-title contectaboutustitlech';
    }else{
        contectaboutustitle.className='contect-aboutus-title contectaboutustitleen';
    }
    console.log(contectaboutustext.className);
    if(contectaboutustext.className.indexOf('contectaboutustexten')!=-1){
        contectaboutustext.className='contect-aboutus-text contectaboutustextch';
    }else{
        contectaboutustext.className='contect-aboutus-text contectaboutustexten';
    }

    //third
    console.log(members1.className);
    if(members1.className.indexOf('membersen')!=-1){
        members1.className='membersch';
    }else{
        members1.className='membersen';
    }
    console.log(member11.className);
    if(member11.className.indexOf('member11en')!=-1){
        member11.className='member11ch';
    }else{
        member11.className='member11en';
    }
    console.log(member12.className);
    if(member12.className.indexOf('member12en')!=-1){
        member12.className='member12ch';
    }else{
        member12.className='member12en';
    }
    console.log(member13.className);
    if(member13.className.indexOf('member13en')!=-1){
        member13.className='member13ch';
    }else{
        member13.className='member13en';
    }
    console.log(member21.className);
    if(member21.className.indexOf('member21en')!=-1){
        member21.className='member21ch';
    }else{
        member21.className='member21en';
    }
    console.log(member22.className);
    if(member22.className.indexOf('member22en')!=-1){
        member22.className='member22ch';
    }else{
        member22.className='member22en';
    }
    console.log(member23.className);
    if(member23.className.indexOf('member23en')!=-1){
        member23.className='member23ch';
    }else{
        member23.className='member23en';
    }
    console.log(member31.className);
    if(member31.className.indexOf('member31en')!=-1){
        member31.className='member31ch';
    }else{
        member31.className='member31en';
    }
    console.log(member32.className);
    if(member32.className.indexOf('member32en')!=-1){
        member32.className='member32ch';
    }else{
        member32.className='member32en';
    }
    console.log(member33.className);
    if(member33.className.indexOf('member33en')!=-1){
        member33.className='member33ch';
    }else{
        member33.className='member33en';
    }
    console.log(member41.className);
    if(member41.className.indexOf('member41en')!=-1){
        member41.className='member41ch';
    }else{
        member41.className='member41en';
    }
    console.log(member42.className);
    if(member42.className.indexOf('member42en')!=-1){
        member42.className='member42ch';
    }else{
        member42.className='member42en';
    }
    console.log(member43.className);
    if(member43.className.indexOf('member43en')!=-1){
        member43.className='member43ch';
    }else{
        member43.className='member43en';
    }
    console.log(member51.className);
    if(member51.className.indexOf('member51en')!=-1){
        member51.className='member51ch';
    }else{
        member51.className='member51en';
    }
    console.log(member52.className);
    if(member52.className.indexOf('member52en')!=-1){
        member52.className='member52ch';
    }else{
        member52.className='member52en';
    }
    console.log(member53.className);
    if(member53.className.indexOf('member53en')!=-1){
        member53.className='member53ch';
    }else{
        member53.className='member53en';
    }
    console.log(member61.className);
    if(member61.className.indexOf('member61en')!=-1){
        member61.className='member61ch';
    }else{
        member61.className='member61en';
    }
    console.log(member62.className);
    if(member62.className.indexOf('member62en')!=-1){
        member62.className='member62ch';
    }else{
        member62.className='member62en';
    }
    console.log(member63.className);
    if(member63.className.indexOf('member63en')!=-1){
        member63.className='member63ch';
    }else{
        member63.className='member63en';
    }
    console.log(member71.className);
    if(member71.className.indexOf('member71en')!=-1){
        member71.className='member71ch';
    }else{
        member71.className='member71en';
    }
    console.log(member72.className);
    if(member72.className.indexOf('member72en')!=-1){
        member72.className='member72ch';
    }else{
        member72.className='member72en';
    }
    console.log(member73.className);
    if(member73.className.indexOf('member73en')!=-1){
        member73.className='member73ch';
    }else{
        member73.className='member73en';
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
