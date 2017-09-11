/*
Simple Image Trail script- By JavaScriptKit.com
Visit http://www.javascriptkit.com for this script and more
This notice must stay intact
*/

var offsetfrommouse=[15,25]; //image x,y offsets from cursor position in pixels. Enter 0,0 for no offset
var displayduration=0; //duration in seconds image should remain visible. 0 for always.

var defaultimageheight = 40;	// maximum image size.
var defaultimagewidth = 40;	// maximum image size.

var timer;

function gettrailobj(){
if (document.getElementById)
return document.getElementById("preview_div").style
}

function gettrailobjnostyle(){
if (document.getElementById)
return document.getElementById("preview_div")
}


function truebody(){
return (!window.opera && document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}


function hidetrail(){	
	gettrailobj().display= "none";
	document.onmousemove=""
	gettrailobj().left="-500px"
	clearTimeout(timer);
}

function showtrail(imagename,title,width,height){
	i = imagename
	t = title
	w = width
	h = height
	timer = setTimeout("show('"+i+"',t,w,h);",200);
}
function show(imagename,title,width,height){
 
    var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth - offsetfrommouse[0]
	var docheight=document.all? Math.min(truebody().scrollHeight, truebody().clientHeight) : Math.min(window.innerHeight)

	if( (navigator.userAgent.indexOf("Konqueror")==-1  || navigator.userAgent.indexOf("Firefox")!=-1 || (navigator.userAgent.indexOf("Opera")==-1 && navigator.appVersion.indexOf("MSIE")!=-1)) && (docwidth>650 && docheight>500)) {
		( width == 0 ) ? width = defaultimagewidth: '';
		( height == 0 ) ? height = defaultimageheight: '';
			
		width+=30
		height+=55
		defaultimageheight = height
		defaultimagewidth = width
	
		document.onmousemove=followmouse; 
		
		
		newHTML = '<div class="border_preview" style="width:'+  width +'px;"><div id="loader_container"><div id="loader"><div align="center" class="loading_temp_pre">Loading template preview...</div><div id="loader_bg"><div id="progress"> </div></div></div></div>';
		newHTML = newHTML + '<h4 class="title_h21">' + ' '+title + '</h4>'
		
    	newHTML = newHTML + '<div class="preview_temp_load"><img onload="javascript:remove_loading();" src="' + imagename + '" border="0"></div>';
		newHTML = newHTML + '</div>'; 
		
		
		if(navigator.userAgent.indexOf("MSIE")!=-1 && navigator.userAgent.indexOf("Opera")==-1 ){
			newHTML = newHTML+'<iframe src="about:blank" scrolling="no" frameborder="0" width="'+width+'" height="'+height+'"></iframe>';
		}		
		
		
		gettrailobjnostyle().innerHTML = newHTML;
		gettrailobj().display="block";
		
	}
}

function followmouse(e){

	var xcoord=offsetfrommouse[0]
	var ycoord=offsetfrommouse[1]

	var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-15
	var docheight=document.all? Math.min(truebody().scrollHeight, truebody().clientHeight) : Math.min(window.innerHeight)

	if (typeof e != "undefined"){
		if (docwidth - e.pageX < defaultimagewidth + 2*offsetfrommouse[0]){
			xcoord = e.pageX - xcoord - defaultimagewidth; // Move to the left side of the cursor
		} else {
			xcoord += e.pageX;
		}
		if (docheight - e.pageY < defaultimageheight + 2*offsetfrommouse[1]){
			if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('safari/index.html') > -1)
				ycoord=Math.max(0,(2*offsetfrommouse[1] + defaultimageheight + e.pageY - docheight - truebody().scrollTop))
			else
				ycoord += e.pageY - Math.max(0,(2*offsetfrommouse[1] + defaultimageheight + e.pageY - docheight - truebody().scrollTop));
		} else {
			ycoord += e.pageY;
		}

	} else if (typeof window.event != "undefined"){
		if (docwidth - event.clientX < defaultimagewidth + 2*offsetfrommouse[0]){
			xcoord = event.clientX + truebody().scrollLeft - xcoord - defaultimagewidth; // Move to the left side of the cursor
		} else {
			xcoord += truebody().scrollLeft+event.clientX
		}
		if (docheight - event.clientY < (defaultimageheight + 2*offsetfrommouse[1])){
			ycoord += event.clientY + truebody().scrollTop - Math.max(0,(2*offsetfrommouse[1] + defaultimageheight + event.clientY - docheight));
		} else {
			ycoord += truebody().scrollTop + event.clientY;
		}
	}
	gettrailobj().left=xcoord+"px"
	gettrailobj().top=ycoord+"px"

}


var t_id = setInterval(animate,20);
var pos=0;
var dir=2;
var len=0;

function animate()
{
var elem = document.getElementById('progress');
if(elem != null) {
if (pos==0) len += dir;
if (len>32 || pos>79) pos += dir;
if (pos>79) len -= dir;
if (pos>79 && len==0) pos=0;
elem.style.left = pos;
elem.style.width = len;
}
}

function remove_loading() {
this.clearInterval(t_id);
var targelem = document.getElementById('loader_container');
targelem.style.display='none';
targelem.style.visibility='hidden';
var t_id = setInterval(animate,60);
}


function showtrail_quest(width,height){

	w = width
	h = height
	timer = setTimeout("show_quest(w,h);",200);

}

function show_quest(width,height)
{
		
    var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth - offsetfrommouse[0]
	var docheight=document.all? Math.min(truebody().scrollHeight, truebody().clientHeight) : Math.min(window.innerHeight)

	if( (navigator.userAgent.indexOf("Konqueror")==-1  || navigator.userAgent.indexOf("Firefox")!=-1 || (navigator.userAgent.indexOf("Opera")==-1 && navigator.appVersion.indexOf("MSIE")!=-1)) && (docwidth>650 && docheight>500)) {
		( width == 0 ) ? width = defaultimagewidth: '';
		( height == 0 ) ? height = defaultimageheight: '';
	
		title="14573.html"
		
		width+=30
		height+=55
		defaultimageheight = height
		defaultimagewidth = width
	
		document.onmousemove=followmouse_quest; 
	
		newHTML = '<div class="border_preview" style="width:'+  width +'px;height:'+ height +'px">';
		newHTML = newHTML + '<table><tr><td height="5px" colspan=3></td><tr><td height="5px"></td><td  bgcolor="#D20100" ></td><td></td></tr><tr><td></td><td>'
		newHTML = newHTML + '<B style="font:Verdana;color:#D20100">What is non-unique purchase?</B><BR>'
		newHTML = newHTML + 'Our templates can be sold repeatedly to different customers.'
		newHTML = newHTML + 'Non-exclusive purchase means that other people can buy the template you have chosen. <BR>'
		newHTML = newHTML + '<B style="font:Verdana;color:#D20100">What is unique purchase?</B><BR>'
		newHTML = newHTML + 'If you choose \'unique price\', it guarantees that you are the last person to buy this template.'
		newHTML = newHTML + 'After the exclusive purchase occurs the template is permanently removed from our sales directory '
		newHTML = newHTML + 'and is never available to other customers again. Only you and people who bought the template before you will own it.<BR>'
		newHTML = newHTML + '<B>Note:</B> Nevertheless, you can\'t redistribute'
		newHTML = newHTML + 'or resell templates either after NON-UNIQUE or after UNIQUE purchase. <BR>'
		newHTML = newHTML + '</tD><td></td></tR><tr><td height="5px"></td><td  bgcolor="#D20100" ></td><td></td></tr><tr><td ></td><td><B style="font:Verdana;color:#D20100">Entheos</B></td><td></td></tr></table>'
		newHTML = newHTML + '</div>'; 
		
		
		if(navigator.userAgent.indexOf("MSIE")!=-1 && navigator.userAgent.indexOf("Opera")==-1 ){
			newHTML = newHTML+'<iframe src="about:blank" scrolling="no" frameborder="0" width="'+width+'" height="'+height+'"></iframe>';
		}		
		
		gettrailobjnostyle_quest().innerHTML = newHTML;
		gettrailobj_quest().display="block";
		
	}
}


function gettrailobj_quest(){
if (document.getElementById)
return document.getElementById("preview_div_quest").style
}


function gettrailobjnostyle_quest(){
if (document.getElementById)
return document.getElementById("preview_div_quest")
}


function followmouse_quest(e){

	var xcoord=offsetfrommouse[0]
	var ycoord=offsetfrommouse[1]

	var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-15
	var docheight=document.all? Math.min(truebody().scrollHeight, truebody().clientHeight) : Math.min(window.innerHeight)

	if (typeof e != "undefined"){
		if (docwidth - e.pageX < defaultimagewidth + 2*offsetfrommouse[0]){
			xcoord = e.pageX - xcoord - defaultimagewidth; // Move to the left side of the cursor
		} else {
			xcoord += e.pageX;
		}
		if (docheight - e.pageY < defaultimageheight + 2*offsetfrommouse[1]){
			ycoord += e.pageY - Math.max(0,(2*offsetfrommouse[1] + defaultimageheight + e.pageY - docheight - truebody().scrollTop));
		} else {
			ycoord += e.pageY;
		}

	} else if (typeof window.event != "undefined"){
		if (docwidth - event.clientX < defaultimagewidth + 2*offsetfrommouse[0]){
			xcoord = event.clientX + truebody().scrollLeft - xcoord - defaultimagewidth; // Move to the left side of the cursor
		} else {
			xcoord += truebody().scrollLeft+event.clientX
		}
		if (docheight - event.clientY < (defaultimageheight + 2*offsetfrommouse[1])){
			ycoord += event.clientY + truebody().scrollTop - Math.max(0,(2*offsetfrommouse[1] + defaultimageheight + event.clientY - docheight));
		} else {
			ycoord += truebody().scrollTop + event.clientY;
		}
	}
	gettrailobj_quest().left=xcoord+"px"
	gettrailobj_quest().top=ycoord+"px"

}

function Replay(id,url)
{
	document.getElementById(id).src=url;
}
function hidetrail_quest(){	
	gettrailobj_quest().display= "none";
	document.onmousemove=""
	gettrailobj_quest().left="-500px"
	clearTimeout(timer);
	
}




function showtrail_desc(width,height,content,admincontent){


	w = width
	h = height
	c =	content
	a = admincontent
	
	timer = setTimeout("show_desc(w,h,c,a);",200);

}

function show_desc(width,height,content,admincontent)
{
		
    var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth - offsetfrommouse[0]
	var docheight=document.all? Math.min(truebody().scrollHeight, truebody().clientHeight) : Math.min(window.innerHeight)

	if( (navigator.userAgent.indexOf("Konqueror")==-1  || navigator.userAgent.indexOf("Firefox")!=-1 || (navigator.userAgent.indexOf("Opera")==-1 && navigator.appVersion.indexOf("MSIE")!=-1)) && (docwidth>650 && docheight>500)) {
		( width == 0 ) ? width = defaultimagewidth: '';
		( height == 0 ) ? height = defaultimageheight: '';
	
		
		
		width+=30
		height+=55
		height=0
		defaultimageheight = height
		defaultimagewidth = width
	
		document.onmousemove=followmouse_desc; 
		
		newHTML = '<div class="border_preview" style="width:'+  width +'px;">';
		newHTML = newHTML + '<table><tr><td>'
		newHTML = newHTML + content
		newHTML = newHTML + '<BR>'
		newHTML = newHTML + admincontent
		newHTML = newHTML + '</tD></tr></table>'
		newHTML = newHTML + '</div>'; 
		
		if(navigator.userAgent.indexOf("MSIE")!=-1 && navigator.userAgent.indexOf("Opera")==-1 ){
			newHTML = newHTML+'<iframe src="about:blank" scrolling="no" frameborder="0" width="'+width+'" height="'+height+'"></iframe>';
		}		
		gettrailobjnostyle_desc().innerHTML = newHTML;
		gettrailobj_desc().display="block";
		
	}
}


function gettrailobj_desc(){
			
if (document.getElementById)
return document.getElementById("preview_div_desc").style
}


function gettrailobjnostyle_desc()
{
	
	if (document.getElementById)
	return document.getElementById("preview_div_desc")
}


function followmouse_desc(e)
{

	var xcoord=offsetfrommouse[0]
	var ycoord=offsetfrommouse[1]

	var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-15
	var docheight=document.all? Math.min(truebody().scrollHeight, truebody().clientHeight) : Math.min(window.innerHeight)

	if (typeof e != "undefined"){
		if (docwidth - e.pageX < defaultimagewidth + 2*offsetfrommouse[0]){
			xcoord = e.pageX - xcoord - defaultimagewidth; // Move to the left side of the cursor
		} else {
			xcoord += e.pageX;
		}
		if (docheight - e.pageY < defaultimageheight + 2*offsetfrommouse[1]){
			ycoord += e.pageY - Math.max(0,(2*offsetfrommouse[1] + defaultimageheight + e.pageY - docheight - truebody().scrollTop));
		} else {
			ycoord += e.pageY;
		}

	} else if (typeof window.event != "undefined"){
		if (docwidth - event.clientX < defaultimagewidth + 2*offsetfrommouse[0]){
			xcoord = event.clientX + truebody().scrollLeft - xcoord - defaultimagewidth; // Move to the left side of the cursor
		} else {
			xcoord += truebody().scrollLeft+event.clientX
		}
		if (docheight - event.clientY < (defaultimageheight + 2*offsetfrommouse[1])){
			ycoord += event.clientY + truebody().scrollTop - Math.max(0,(2*offsetfrommouse[1] + defaultimageheight + event.clientY - docheight));
		} else {
			ycoord += truebody().scrollTop + event.clientY;
		}
	}
	gettrailobj_desc().left=xcoord+"px"
	gettrailobj_desc().top=ycoord+"px"

}

function hidetrail_desc(){	
	gettrailobj_desc().display= "none";
	document.onmousemove=""
	gettrailobj_desc().left="-500px"
	clearTimeout(timer);
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}