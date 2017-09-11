//	window.onresize = new Function("window.location.reload();");
	var ie=(document.all)?1:0;
	var hide=-1;
	var isMozilla=false;
	var bDom = document.getElementById?1:0;
	var bVersion=navigator.appVersion;
	isMozilla=(bDom&&parseInt(bVersion)>=5)?1:0;
	opera=window.opera?1:0;

	var isMozilla=false;
	var bDom = document.getElementById?1:0;
	var bVersion=navigator.appVersion;
	isMozilla=(bDom&&parseInt(bVersion)>=5)?1:0;
if(ie)
{
	var menu_x=(screen.width == 800)?[10,280,10,100,637,281,281]:[71,85.5,0,14,42.8,57.2,97];

	var menu_y=[258,258,258,258,258,258,258,258];
}
else
{
	var menu_x=(screen.width == 800)?[10,281,100,281,637,281,281]:[71.3,85.5,0,14.2,42.8,57.2,57.2];
	var menu_y=[258,258,258,258,258,258,258,258];
}	
	var str="";
	str+="<style>\n";
	str+="a.menu{font-family:arial; font-size:12px; color:#000000; text-decoration:none;}\n";
	str+="a.menu:hover{font-family:arial; font-size:12px; color:#000000; text-decoration:none;}\n";
if(ie)
{
	str+="#Mmenu0{filter:alpha(opacity=100); position:absolute;top:" + menu_y[0] + "px;left:" + menu_x[0] + "%;visibility:hidden;z-index:10;}\n"; 
	str+="#Mmenu1{filter:alpha(opacity=100); position:absolute;top:" + menu_y[1] + "px;left:" + menu_x[1] + "%;visibility:hidden;z-index:10;}\n"; 
	str+="#Mmenu2{filter:alpha(opacity=100); position:absolute;top:" + menu_y[2] + "px;left:" + menu_x[2] + "%;visibility:hidden;z-index:10;}\n"; 
	str+="#Mmenu3{filter:alpha(opacity=100); position:absolute;top:" + menu_y[3] + "px;left:" + menu_x[3] + "%;visibility:hidden;z-index:10;}\n"; 
	str+="#Mmenu4{filter:alpha(opacity=100); position:absolute;top:" + menu_y[4] + "px;left:" + menu_x[4] + "%;visibility:hidden;z-index:10;}\n"; 
	str+="#Mmenu5{filter:alpha(opacity=100); position:absolute;top:" + menu_y[5] + "px;left:" + menu_x[5] + "%;visibility:hidden;z-index:10;}\n"; 
	str+="#Mmenu6{filter:alpha(opacity=100); position:absolute;top:" + menu_y[6] + "px;left:" + menu_x[6] + "%;visibility:hidden;z-index:10;}\n"; 
	str+="#Mmenu7{filter:alpha(opacity=100); position:absolute;top:" + menu_y[7] + "px;left:" + menu_x[7] + "%;visibility:hidden;z-index:10;}\n"; 
	

}
else
{
	str+="#Mmenu0{position:absolute;top:" + menu_y[0] +  "px;left:" + menu_x[0] + "%;visibility:hidden;}\n";
	str+="#Mmenu1{position:absolute;top:" + menu_y[1] +  "px;left:" + menu_x[1] + "%;visibility:hidden;}\n";
	str+="#Mmenu2{position:absolute;top:" + menu_y[2] +  "px;left:" + menu_x[2] + "%;visibility:hidden;}\n";
	str+="#Mmenu3{position:absolute;top:" + menu_y[3] +  "px;left:" + menu_x[3] + "%;visibility:hidden;}\n";
	str+="#Mmenu4{position:absolute;top:" + menu_y[4] +  "px;left:" + menu_x[4] + "%;visibility:hidden;}\n";
	str+="#Mmenu5{position:absolute;top:" + menu_y[5] +  "px;left:" + menu_x[5] + "%;visibility:hidden;}\n";
	str+="#Mmenu6{position:absolute;top:" + menu_y[6] +  "px;left:" + menu_x[6] + "%;visibility:hidden;}\n";
	str+="#Mmenu7{position:absolute;top:" + menu_y[7] +  "px;left:" + menu_x[7] + "%;visibility:hidden;}\n";


}
	str+="</style>";
	document.write (str);

	function mout(x){
		
	}


	function hideall(){
		for(i=0;i<8;i++) { 
			if(ie) eval("Mmenu"+i +".style.visibility='hidden';");
			else if (isMozilla){
				var objMDiv = document.getElementById("Mmenu"+i);
				objMDiv.style.visibility="hidden";
			}
			else  document.layers[i].visibility="hide";
			}
	}

function menu(x){
		temp=x;
	//	shideall();
		document.getElementById('Mmenu'+x).style.left = document.getElementById(x).offsetLeft-1+"px";
		document.getElementById('Mmenu'+x).style.width = document.getElementById(x).offsetWidth+1+"px";
		document.getElementById('Mmenu'+x).style.display="block"
		if(ie)
		 eval("Mmenu"+ x +".style.visibility='visible';");
			else if (isMozilla){
				var objMDiv = document.getElementById("Mmenu"+ x);
				objMDiv.style.visibility="visible";
			}
		else  document.layers[x].visibility="show";
	}

function menu1(x){
		temp=x;
		
		//shideall();
		if(ie)
			 eval("Mmenu"+ x +".style.visibility='visible';");
		else if (isMozilla){
				var objMDiv = document.getElementById("Mmenu"+ x);
				objMDiv.style.visibility="visible";
		}
		else  document.layers[x].visibility="show";
	}


	function smout(x,y){
		if (!isMozilla){
		eval("s"+x+y).style.backgroundColor = "#d33e8c";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#d33e8c";
		}
		
	}
	function smoutq(x,y){
		if (!isMozilla){
		eval("s"+x+y).style.backgroundColor = "#ad5994";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#ad5994";
		}
		
	}
	
	function smout2(x,y){
		if (!isMozilla){
		eval("s"+x+y).style.backgroundColor = "#5baab7";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#5baab7";
		}
		
	}
	function smout3(x,y){
		if (!isMozilla){
		eval("s"+x+y).style.backgroundColor = "#98d140";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#98d140";
		}
		
	}
	function smout4(x,y){
		if (!isMozilla){
		eval("s"+x+y).style.backgroundColor = "#f68f76";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#f68f76";
		}
		
	}
function smout5(x,y){
		if (!isMozilla){
		eval("s"+x+y).style.backgroundColor = "#998ec5";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#998ec5";
		}
		
	}
function smout6(x,y){
		if (!isMozilla){
		eval("s"+x+y).style.backgroundColor = "#f0c72c";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#f0c72c";
		}
		
	}
	function smout7(x,y){
		if (!isMozilla){
		eval("s"+x+y).style.backgroundColor = "#2d92ec";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#2d92ec";
		}
		
	}
	
	function smover(x,y){
		if (!isMozilla){
			eval("s"+x+y).style.backgroundColor = "#94024e";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#94024e";
			
		}
	}
		function smoverq(x,y){
		if (!isMozilla){
			eval("s"+x+y).style.backgroundColor = "#6f2b59";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#6f2b59";
			
		}
	}
	function smover2(x,y){
		if (!isMozilla){
			eval("s"+x+y).style.backgroundColor = "#316f79";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#316f79";
			
		}
	}
	function smover3(x,y){
		if (!isMozilla){
			eval("s"+x+y).style.backgroundColor = "#5d8e11";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#5d8e11";
			
		}
	}
	function smover4(x,y){
		if (!isMozilla){
			eval("s"+x+y).style.backgroundColor = "#cb5a3f";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#cb5a3f";
			
		}
	}
	function smover5(x,y){
		if (!isMozilla){
			eval("s"+x+y).style.backgroundColor = "#665a92";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#665a92";
			
		}
	}
	function smover6(x,y){
		if (!isMozilla){
			eval("s"+x+y).style.backgroundColor = "#d2ab1a";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#d2ab1a";
			
		}
	}
	
	function smover7(x,y){
		if (!isMozilla){
			eval("s"+x+y).style.backgroundColor = "#0d4d86";
		}
		else{
			document.getElementById("s"+x+y).style.backgroundColor = "#0d4d86";
			
		}
	}
	
	document.write ("<div id='Mmenu0' style='display:none'>");
	document.write ("<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td tyle='padding-left:1px; padding-right:2px; padding-bottom:2px;'>");
	document.write ("<table cellpadding=6 cellspacing=1 border=0 bgcolor='#ffffff' width=100%>");
	document.write ("<tr bgcolor='#5baab7'><td id='s40' name='s40' onmouseover=smover2('4','0');  onmouseout=smout2('4','0') style='cursor:hand;'><a href='http://templates.entheosweb.com/CSS.asp' class='drop-menu'>CSS</a></td></tr>");
	document.write ("<tr bgcolor='#5baab7'><td id='s41' name='s41' onmouseover=smover2('4','1');  onmouseout=smout2('4','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/Flash-animated.asp' class='drop-menu'>Flash animated</a></td></tr>");
	document.write ("<tr bgcolor='#5baab7'><td id='s42' name='s42' onmouseover=smover2('4','2');  onmouseout=smout2('4','2') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Responsive-web-template.asp' class='drop-menu'>Responsive templates</a></td></tr>");
	document.write ("<tr bgcolor='#5baab7'><td id='s43' name='s43' onmouseover=smover2('4','3');  onmouseout=smout2('4','3') style='cursor:hand;'><a href='http://templates.entheosweb.com/Full-site.asp' class='drop-menu'>Full site </a></td></tr>");
	document.write ("<tr bgcolor='#5baab7'><td id='s44' name='s44' onmouseover=smover2('4','4');  onmouseout=smout2('4','4') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/HTML5-JS-Animated.asp' class='drop-menu'>HTML5 JSAnimated Website Templates</a></td></tr>");
	document.write ("<tr bgcolor='#5baab7'><td id='s45' name='s45' onmouseover=smover2('4','5');  onmouseout=smout2('4','5') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/JS-Animated-Full-Site.asp' class='drop-menu'>JS Animated Templates</a></td></tr>");
	document.write ("<tr bgcolor='#5baab7'><td id='s46' name='s46' onmouseover=smover2('4','6');  onmouseout=smout2('4','6') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Moto-CMS-HTML.asp' class='drop-menu'>Moto Cms Html</a></td></tr>");
	document.write ("</table>");
	document.write ("</td></tr></table>");
	document.write ("</div>");
	
	
	document.write ("<div id='Mmenu1' style='display:none;z-index:999;'>");
	document.write ("<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td tyle='padding-left:1px; padding-right:2px; padding-bottom:2px;'>");
	document.write ("<table cellpadding=6 cellspacing=1 border=0 bgcolor='#ffffff' width=100%>");
	document.write ("<tr bgcolor='#98d140'><td id='s50' name='s50' onmouseover=smover3('5','0');  onmouseout=smout3('5','0') style='cursor:hand;'><a href='http://templates.entheosweb.com/Dynamic-Flash.asp' class='drop-menu'>Dynamic Flash </a></td></tr>");
	document.write ("<tr bgcolor='#98d140'><td id='s51' name='s51' onmouseover=smover3('5','1');  onmouseout=smout3('5','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/Dynamic-flash-photo-galleries.asp' class='drop-menu'>Dynamic flash photo galleries </a></td></tr>");
	document.write ("<tr bgcolor='#98d140'><td id='s52' name='s52' onmouseover=smover3('5','2');  onmouseout=smout3('5','2') style='cursor:hand;'><a href='http://templates.entheosweb.com/Flash-8.asp' class='drop-menu'>Flash 8 </a></td></tr>");
	document.write ("<tr bgcolor='#98d140'><td id='s53' name='s53' onmouseover=smover3('5','3');  onmouseout=smout3('5','3') style='cursor:hand;'><a href='http://templates.entheosweb.com/XML-Flash-Site.asp' class='drop-menu'>XML Flash Site </a></td></tr>");
	document.write ("<tr bgcolor='#98d140'><td id='s54' name='s54' onmouseover=smover3('5','4');  onmouseout=smout3('5','4') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Flash-cms-template.asp' class='drop-menu'>Flash Cms Templates</a></td></tr>");
	document.write ("</table>");
	document.write ("</td></tr></table>");
	document.write ("</div>");
	
	document.write ("<div id='Mmenu2' style='display:none'>");
	document.write ("<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td tyle='padding-left:1px; padding-right:2px; padding-bottom:2px;'>");
	document.write ("<table cellpadding=6 cellspacing=1 border=0 bgcolor='#ffffff' width=100%>");
	document.write ("<tr bgcolor='#f68f76'><td id='s60' name='s60' onmouseover=smover4('6','0');  onmouseout=smout4('6','0') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Corporate-Identity.asp' class='drop-menu'>Corporate Identity</a></td></tr>");
	document.write ("<tr bgcolor='#f68f76'><td id='s61' name='s61' onmouseover=smover4('6','1');  onmouseout=smout4('6','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Logotype-Template.asp' class='drop-menu'>Logotype Template </a></td></tr>");
	document.write ("<tr bgcolor='#f68f76'><td id='s62' name='s62' onmouseover=smover4('6','2');  onmouseout=smout4('6','2') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Powerpoint-Template.asp' class='drop-menu'>Power Point Templates</a></td></tr>");
	document.write ("<tr bgcolor='#f68f76'><td id='s63' name='s63' onmouseover=smover4('6','3');  onmouseout=smout4('6','3') style='cursor:hand;'><a href='http://templates.entheosweb.com/Icon-Sets.asp' class='drop-menu'>Icon Sets</a></td></tr>");
	document.write ("</table>");
	document.write ("</td></tr></table>");
	document.write ("</div>");
	
	document.write ("<div id='Mmenu3' style='display:none'>");
	document.write ("<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td tyle='padding-left:1px; padding-right:2px; padding-bottom:2px;'>");
	document.write ("<table cellpadding=6 cellspacing=1 border=0 bgcolor='#ffffff' width=100%>");
	document.write ("<tr bgcolor='#998ec5'><td id='s70' name='s70' onmouseover=smover5('7','0');  onmouseout=smout5('7','0') style='cursor:hand;'><a href='http://templates.entheosweb.com/Dynamic-Swish.asp' class='drop-menu'>Dynamic Swish</a></td></tr>");
	document.write ("<tr bgcolor='#998ec5'><td id='s71' name='s71' onmouseover=smover5('7','1');  onmouseout=smout5('7','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/Swish-animated.asp' class='drop-menu'>Swish Animated</a></td></tr>");
	document.write ("<tr bgcolor='#998ec5'><td id='s72' name='s72' onmouseover=smover5('7','2');  onmouseout=smout5('7','2') style='cursor:hand;'><a href='http://templates.entheosweb.com/SWiSHmax3-Templates.asp' class='drop-menu'>SWiSHmax3 Templates</a></td></tr>");
	document.write ("<tr bgcolor='#998ec5'><td id='s73' name='s73' onmouseover=smover5('7','3');  onmouseout=smout5('7','3') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Silverlight-Site.asp' class='drop-menu'>Silverlight Templates</a></td></tr>");
	document.write ("</table>");
	document.write ("</td></tr></table>");
	document.write ("</div>");
	
	document.write ("<div id='Mmenu4' style='display:none'>");
	document.write ("<table cellpadding=0 cellspacing=0 width=100% border=0><tr><td tyle='padding-left:1px; padding-right:2px; padding-bottom:2px;'>");
	document.write ("<table cellpadding=6 cellspacing=1 border=0 width=100% bgcolor='#FFFFFF'>");
	//document.write ("<tr bgcolor='#d33e8c'><td id='s21' name='s21' onmouseover=smover('2','1'); onmouseout=smout('2','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/CRE-Loaded-Templates.asp' class='drop-menu'>Creloaded</a></td></tr>");
	document.write ("<tr bgcolor='#d33e8c'><td id='s21' name='s21' onmouseover=smover('2','1'); onmouseout=smout('2','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Magento.asp' class='drop-menu'>Magento Templates</a></td></tr>");
	document.write ("<tr bgcolor='#d33e8c'><td id='s22' name='s22' onmouseover=smover('2','2'); onmouseout=smout('2','2') style='cursor:hand;'><a href='http://templates.entheosweb.com/osCommerce-Templates.asp' class='drop-menu'>OSCommerce</a></td></tr>");
	document.write ("<tr bgcolor='#d33e8c'><td id='s23' name='s23' onmouseover=smover('2','3'); onmouseout=smout('2','3') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/OpenCart.asp' class='drop-menu'>Opencart Templates</a></td></tr>");
	document.write ("<tr bgcolor='#d33e8c'><td id='s24' name='s24' onmouseover=smover('2','4'); onmouseout=smout('2','4') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/PrestaShop.asp' class='drop-menu'>PrestaShop Templates </a></td></tr>");	
	document.write ("<tr bgcolor='#d33e8c'><td id='s25' name='s25' onmouseover=smover('2','5'); onmouseout=smout('2','5') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/VirtueMart.asp' class='drop-menu'>Virtuemart Templates</a></td></tr>");
	document.write ("<tr bgcolor='#d33e8c'><td id='s26' name='s26' onmouseover=smover('2','6'); onmouseout=smout('2','6') style='cursor:hand;'><a href='http://templates.entheosweb.com/Zen-cart-Templates.asp' class='drop-menu'>Zen Cart</a></td></tr>");
	document.write ("<tr bgcolor='#d33e8c'><td id='s27' name='s27' onmouseover=smover('2','7'); onmouseout=smout('2','7') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Jigoshop.asp' class='drop-menu'>Jigoshop</a></td></tr>");
	document.write ("<tr bgcolor='#d33e8c'><td id='s28' name='s28' onmouseover=smover('2','8'); onmouseout=smout('2','8') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/WooCommerce.asp' class='drop-menu'>WooCommerce templates</a></td></tr>");
	document.write ("</table>");
	document.write ("</td></tr></table>");
	document.write ("</div>");

	document.write ("<div id='Mmenu5' style='display:none'>");
	document.write ("<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td tyle='padding-left:1px; padding-right:2px; padding-bottom:2px;'>");
	document.write ("<table cellpadding=6 cellspacing=1 border=0 bgcolor='#ffffff' width=100%>");
	document.write ("<tr bgcolor='#b35c97'><td id='s30' name='s30' onmouseover=smoverq('3','0');  onmouseout=smoutq('3','0') style='cursor:hand;'><a href='http://templates.entheosweb.com/Drupal-Templates.asp' class='drop-menu'>Drupal</a></td></tr>");
	document.write ("<tr bgcolor='#b35c97'><td id='s31' name='s31' onmouseover=smoverq('3','1');  onmouseout=smoutq('3','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/Joomla-Templates.asp' class='drop-menu'>Joomla</a></td></tr>");
	document.write ("<tr bgcolor='#b35c97'><td id='s32' name='s32' onmouseover=smoverq('3','2');  onmouseout=smoutq('3','2') style='cursor:hand;'><a href=' http://templates.entheosweb.com/types/WordPress.asp' class='drop-menu'>Wordpress</a></td></tr>");
	document.write ("<tr bgcolor='#b35c97'><td id='s33' name='s33' onmouseover=smoverq('3','3');  onmouseout=smoutq('3','3') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Tumblr-theme.asp' class='drop-menu'>Tumblr Theme</a></td></tr>");
	document.write ("</table>");
	document.write ("</td></tr></table>");
	document.write ("</div>");
	
	
	document.write ("<div id='Mmenu6' style='display:none'>");
	document.write ("<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td tyle='padding-left:1px; padding-right:2px; padding-bottom:2px;'>");
	document.write ("<table cellpadding=6 cellspacing=1 border=0 bgcolor='#ffffff' width=100%>");
	document.write ("<tr bgcolor='#f0c72c'><td id='s80' name='s80' onmouseover=smover6('8','0');  onmouseout=smout6('8','0') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/After-Effects-Intro.asp' class='drop-menu'>After Effects Intro</a></td></tr>");
	document.write ("<tr bgcolor='#f0c72c'><td id='s81' name='s81' onmouseover=smover6('8','1');  onmouseout=smout6('8','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/AE-logo-reveal.asp' class='drop-menu'>After Effects Logo Reveal</a></td></tr>");
	document.write ("<tr bgcolor='#f0c72c'><td id='s82' name='s82' onmouseover=smover6('8','2');  onmouseout=smout6('8','2') style='cursor:hand;'><a href='http://templates.entheosweb.com/flash_intro_templates/' class='drop-menu'>Flash Intro Templates</a></td></tr>");
	document.write ("</table>");
	document.write ("</td></tr></table>");
	document.write ("</div>");
	
	document.write ("<div id='Mmenu7' style='display:none'>");
	document.write ("<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td tyle='padding-left:1px; padding-right:2px; padding-bottom:2px;'>");
	document.write ("<table cellpadding=6 cellspacing=1 border=0 bgcolor='#ffffff' width=100%>");
	document.write ("<tr bgcolor='#0f7ee4'><td id='s90' name='s90' onmouseover=smover7('9','0');  onmouseout=smout7('9','0') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Facebook-Flash-Template.asp' class='drop-menu'>Facebook Flash Templates </a></td></tr>");
	document.write ("<tr bgcolor='#0f7ee4'><td id='s91' name='s91' onmouseover=smover7('9','1');  onmouseout=smout7('9','1') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Facebook-Flash-CMS-Template.asp' class='drop-menu'>Facebook Flash CMS Templates </a></td></tr>");
	document.write ("<tr bgcolor='#0f7ee4'><td id='s92' name='s92' onmouseover=smover7('9','2');  onmouseout=smout7('9','2') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Facebook-Template.asp' class='drop-menu'>Facebook Templates</a></td></tr>");
	document.write ("<tr bgcolor='#0f7ee4'><td id='s93' name='s93' onmouseover=smover7('9','3');  onmouseout=smout7('9','3') style='cursor:hand;'><a href='http://templates.entheosweb.com/types/Turnkey-CMS-Facebook-Template.asp' class='drop-menu'>Turnkey CMS Facebook Templates</a></td></tr>");
	
	document.write ("</table>");
	document.write ("</td></tr></table>");
	document.write ("</div>");
	