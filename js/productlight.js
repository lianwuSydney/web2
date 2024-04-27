let switchsun = document.getElementById('switchsun');
let switchmoon = document.getElementById('switchmoon');
let languagelight = document.getElementById('languagelight');
let languagedark = document.getElementById('languagedark');

let body = document.getElementById('body');
let navbarld=document.getElementById('navbar');
let dropdowncontentwhite=document.getElementById('dropdown-contentwhite');
let dropdowncontentwhite2=document.getElementById('dropdown-contentwhite2');
let productfirstcontainer=document.getElementById('productfirstcontainer');
let mainimg1=document.getElementById('mainimg1');
let mainimg2=document.getElementById('mainimg2');
let lightimageproducts1=document.getElementById('lightimageproducts1');
let lightimageproducts2=document.getElementById('lightimageproducts2');
let product1text=document.getElementById('product1text');
let product1introright1=document.getElementById('product1introright1');
let product1introleft2=document.getElementById('product1introleft2');
let product1introright2=document.getElementById('product1introright2');
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
    console.log(productfirstcontainer.className);
    if(productfirstcontainer.className.indexOf('light-firstcontainer')!=-1){
        productfirstcontainer.className='product-first-container dark-firstcontainer';
    }else{
        productfirstcontainer.className='product-first-container light-firstcontainer';
    }
    console.log(mainimg1.className);
    if(mainimg1.className.indexOf('light-mainimg1')!=-1){
        mainimg1.className='main-image1 dark-mainimg1';
    }else{
        mainimg1.className='main-image1 light-mainimg1';
    }
    console.log(mainimg2.className);
    if(mainimg2.className.indexOf('light-mainimg2')!=-1){
        mainimg2.className='main-image2 dark-mainimg2';
    }else{
        mainimg2.className='main-image2 light-mainimg2';
    }

    //product1-container
    console.log(lightimageproducts1.className);
    if(lightimageproducts1.className.indexOf('light-imageproducts1')!=-1){
        lightimageproducts1.className='product1-image-products1 dark-imageproducts1';
    }else{
        lightimageproducts1.className='product1-image-products1 light-imageproducts1';
    }
    console.log(lightimageproducts2.className);
    if(lightimageproducts2.className.indexOf('light-imageproducts2')!=-1){
        lightimageproducts2.className='product1-image-products2 dark-imageproducts2';
    }else{
        lightimageproducts2.className='product1-image-products2 light-imageproducts2';
    }
    console.log(product1text.className);
    if(product1text.className.indexOf('light-product1text')!=-1){
        product1text.className='product1-text dark-product1text';
    }else{
        product1text.className='product1-text light-product1text';
    }

    //product1intro-container
    console.log(product1introright1.className);
    if(product1introright1.className.indexOf('light-product1introright1')!=-1){
        product1introright1.className='product1intro-right-module1 dark-product1introright1';
    }else{
        product1introright1.className='product1intro-right-module1 light-product1introright1';
    }
    console.log(product1introleft2.className);
    if(product1introleft2.className.indexOf('light-product1introleft2')!=-1){
        product1introleft2.className='product1intro-left-module2 dark-product1introleft2';
    }else{
        product1introleft2.className='product1intro-left-module2 light-product1introleft2';
    }
    console.log(product1introright2.className);
    if(product1introright2.className.indexOf('light-product1introright2')!=-1){
        product1introright2.className='product1intro-right-module2 dark-product1introright2';
    }else{
        product1introright2.className='product1intro-right-module2 light-product1introright2';
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
let intelligentroboticarm = document.getElementById('intelligentroboticarm');
let product1location = document.getElementById('product1location');
let product1textlocation = document.getElementById('product1textlocation');
let product1introtxttitle1 = document.getElementById('product1introtxttitle1');
let product1introtxt11 = document.getElementById('product1introtxt11');
let product1introtxt12 = document.getElementById('product1introtxt12');
let product1introtxt13 = document.getElementById('product1introtxt13');
let product1introtxt14 = document.getElementById('product1introtxt14');
let product1introtxt15 = document.getElementById('product1introtxt15');
let product1introtxt16 = document.getElementById('product1introtxt16');
let product1introtxttitle2 = document.getElementById('product1introtxttitle2');
let product1introtxt21 = document.getElementById('product1introtxt21');
let product1introtxttitle3 = document.getElementById('product1introtxttitle3');
let product1introtxt31 = document.getElementById('product1introtxt31');

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
    console.log(intelligentroboticarm.className);
    if(intelligentroboticarm.className.indexOf('intelligentroboticarmen')!=-1){
        intelligentroboticarm.className='intelligentroboticarmch';
    }else{
        intelligentroboticarm.className='intelligentroboticarmen';
    }

    //second
    console.log(product1location.className);
    if(product1location.className.indexOf('product1locationen')!=-1){
        product1location.className='product1-location product1locationch';
    }else{
        product1location.className='product1-location product1locationen';
    }
    console.log(product1textlocation.className);
    if(product1textlocation.className.indexOf('product1textlocationen')!=-1){
        product1textlocation.className='product1-text-location product1textlocationch';
    }else{
        product1textlocation.className='product1-text-location product1textlocationen';
    }

    //third
    console.log(product1introtxttitle1.className);
    if(product1introtxttitle1.className.indexOf('product1introtxttitleen1')!=-1){
        product1introtxttitle1.className='product1intro-txttitle product1introtxttitlech1';
    }else{
        product1introtxttitle1.className='product1intro-txttitle product1introtxttitleen1';
    }
    console.log(product1introtxt11.className);
    if(product1introtxt11.className.indexOf('product1introtxten11')!=-1){
        product1introtxt11.className='product1intro-txt1 product1introtxtch11';
    }else{
        product1introtxt11.className='product1intro-txt1 product1introtxten11';
    }
    console.log(product1introtxt12.className);
    if(product1introtxt12.className.indexOf('product1introtxten12')!=-1){
        product1introtxt12.className='product1intro-txt product1introtxtch12';
    }else{
        product1introtxt12.className='product1intro-txt product1introtxten12';
    }
    console.log(product1introtxt13.className);
    if(product1introtxt13.className.indexOf('product1introtxten13')!=-1){
        product1introtxt13.className='product1intro-txt1 product1introtxtch13';
    }else{
        product1introtxt13.className='product1intro-txt1 product1introtxten13';
    }
    console.log(product1introtxt14.className);
    if(product1introtxt14.className.indexOf('product1introtxten14')!=-1){
        product1introtxt14.className='product1intro-txt product1introtxtch14';
    }else{
        product1introtxt14.className='product1intro-txt product1introtxten14';
    }
    console.log(product1introtxt15.className);
    if(product1introtxt15.className.indexOf('product1introtxten15')!=-1){
        product1introtxt15.className='product1intro-txt1 product1introtxtch15';
    }else{
        product1introtxt15.className='product1intro-txt1 product1introtxten15';
    }
    console.log(product1introtxt16.className);
    if(product1introtxt16.className.indexOf('product1introtxten16')!=-1){
        product1introtxt16.className='product1intro-txt product1introtxtch16';
    }else{
        product1introtxt16.className='product1intro-txt product1introtxten16';
    }
    console.log(product1introtxttitle2.className);
    if(product1introtxttitle2.className.indexOf('product1introtxttitleen2')!=-1){
        product1introtxttitle2.className='product1intro-txttitle product1introtxttitlech2';
    }else{
        product1introtxttitle2.className='product1intro-txttitle product1introtxttitleen2';
    }
    console.log(product1introtxt21.className);
    if(product1introtxt21.className.indexOf('product1introtxten21')!=-1){
        product1introtxt21.className='product1intro-txt product1introtxtch21';
    }else{
        product1introtxt21.className='product1intro-txt product1introtxten21';
    }
    console.log(product1introtxttitle3.className);
    if(product1introtxttitle3.className.indexOf('product1introtxttitleen3')!=-1){
        product1introtxttitle3.className='product1intro-txttitle product1introtxttitlech3';
    }else{
        product1introtxttitle3.className='product1intro-txttitle product1introtxttitleen3';
    }
    console.log(product1introtxt31.className);
    if(product1introtxt31.className.indexOf('product1introtxten31')!=-1){
        product1introtxt31.className='product1intro-txt product1introtxtch31';
    }else{
        product1introtxt31.className='product1intro-txt product1introtxten31';
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
