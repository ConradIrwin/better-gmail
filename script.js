(function() { 

	chrome.extension.sendRequest({reqtype: 'o'}, function(response) {
		var css;
				
		if (response.o.ads) {
	
css = "div[class='u5'] {display:none} div[class='nH u8'] {display:none}";
			
			
css += ".iY .Bu:last-child > .nH {height: 0px !important;	overflow: hidden !important;	width: 0px !important;}.iY .Bu:first-child + .Bu {display: none !important;}.iY {width: 100% !important;}";

css+=".iY .Bu:last-child .nH > .nH > .nH:first-child {position: absolute !important;right: 0!important;top: 5px !important;	font-size: 70% !important;}";

css+=".iY .Bu:last-child .hj {font-size: 100% !important;	margin: 0 auto !important;	float: right !important;	padding: 5px 8px 0px !important;	border-style: solid !important;	border-width: 0px !important;	border-bottom-width: 0px !important;position: relative;}.iY .Bu:last-child .hj:hover {	z-index: 2 !important;}";

css+=".hk {	float: left !important;	padding: 0 !important;}.hk span {	display: block !important;	width: auto !important;	height: 1.8em !important;	line-height: 1.8em !important;	padding: 0 8px !important;	/*border: 1px solid #BBBBBB ;	border-left-color: #FFFFFF !important*/}.hk:first-child span {	border-left-color: #BBBBBB !important;}.hk u {	text-decoration: none !important;}.hk img {	margin-bottom: 2px !important;}.hk span:hover {	border-top-color: #939393 !important;	border-bottom-color: #939393 !important;}";

css+= "h1.ha {max-width:650px; overflow:hidden;}";// limit width of title so it wont over run new window link
css+= "div.ii.gt > div {max-width:700px !important;}";// limit width of message	
	
css+= "h1.ha {overflow:hidden;}";// limit width of title so it wont over run new window link
css+= "h1.ha span.hP {max-width:600px; float:left; display:block}";
css+= "div.ii.gt > div {max-width:700px !important;}";// limit width of message
css+= ".hj{background:none !important}"; //hide the bg of the newwindow link in ninja theme

css += "div[class='MI'] {display:none}"; //hide new ads system on the bottom of email
css += "div.nH.MC, div.z0DeRc { display: none !important; }";//hide bottom ads
css += "div.hQfrn, .OH0apf { display: none !important; }";	
	
//			css += "div[class='u5'] {display:none} div[class='nH u8'] {display:none}";
//			
//			css += ".iY .Bu:last-child > .nH {height: 0px !important;	overflow: hidden !important;	width: 0px !important;}.iY .Bu:first-child + .Bu {display: none !important;}.iY {width: 100% !important;}";
//			
//			css+=".iY .Bu:last-child .nH > .nH > .nH:first-child {position: absolute !important;right: 0!important;top: 5px !important;	font-size: 70% !important;}";
//			
//			css+=".iY .Bu:last-child .hj {font-size: 100% !important;	margin: 0 auto !important;	float: right !important;	padding: 5px 8px 0px !important;	border-style: solid !important;	border-width: 0px !important;	border-bottom-width: 0px !important;position: relative;}.iY .Bu:last-child .hj:hover {	z-index: 2 !important;}";
//			
//			css+=".hk {	float: left !important;	padding: 0 !important;}.hk span {	display: block !important;	width: auto !important;	height: 1.8em !important;	line-height: 1.8em !important;	padding: 0 8px !important;	/*border: 1px solid #BBBBBB ;	border-left-color: #FFFFFF !important*/}.hk:first-child span {	border-left-color: #BBBBBB !important;}.hk u {	text-decoration: none !important;}.hk img {	margin-bottom: 2px !important;}.hk span:hover {	border-top-color: #939393 !important;	border-bottom-color: #939393 !important;}";
//						
//			css+= "h1.ha {/*max-width:650px;*/ overflow:hidden;}";// limit width of title so it wont over run new window link
//			css+= "h1.ha span.hP {max-width:600px; float:left; display:block}";
//			css+= "div.ii.gt > div {max-width:700px !important;}";// limit width of message
//			css+= ".hj{background:none !important}"; //hide the bg of the newwindow link in ninja theme
//			
//			css += "div[class='MI'] {display:none}"; //hide new ads system on the bottom of email
//			css += "div.nH.MC, div.z0DeRc { display: none !important; }";//hide bottom ads
//			css += "div.hQfrn, .OH0apf { display: none !important; }";
		}
	
		if (response.o.chat) {
			css += "div[class=\"nH pp T0\"]:nth-child(4) { border:0 !important; }";
			css += "div.nH.s { display: none !important }";// hide chat in google apps
			css += ".T0, .TZ {border:0 !important; border-top:none}"; //hide chat border in portugee gmail
			css+=".pS.s{ display: none !important }";
		}
		
		if (response.o.footer) {
			css += ".nH.l2.ov {visibility:hidden !important;}";
		}
		
		if (response.o.invite) {
			css += "div[class=\"nH pp T0\"]:nth-child(5) { border:0 !important}";
			css += ".pS.pY{display: none !important;}";// hide invite in portugal gmail
		}

		if (response.o.web) {
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Search the Web')").hide();//english USa
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Search the web')").hide();//english UK
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Im Web suchen')").hide();//deustch
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Telusuri Web')").hide();//bahasa indonesian
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Cari di Web')").hide();//bahasa malayu
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Cerca al web')").hide();//catala`
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Najít na webu')").hide();//cesky
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Søg på nettet')").hide();//dansk
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Otsi veebist')").hide();//Eesti keel
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Buscar en la Web')").hide();//espanol
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Bilatu sarean')").hide();//euskara
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Hanapan ang Web')").hide();//filipino
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Rechercher sur le Web')").hide();//francais
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Pretraži web')").hide();//hrvatsky
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Cerca sul Web')").hide();//italiano
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Leita á vefnum')").hide();//islenska
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Tafuta Wavuti')").hide();//kiswahili
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Meklēt tīmeklī')").hide();//latviesu
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Ieškoti internete')").hide();//lietuviu
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Keresés a weben')").hide();//magyar
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Zoeken op het web')").hide();//neitherlands
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Søk på nettet')").hide();//norsk
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Szukaj w internecie')").hide();//polski
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Pesquisar na web')").hide();//portugee brazil
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Pesquisar a Web')").hide();//portugee portugal
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Căutaţi pe web')").hide();//romana
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Hľadať na webe')").hide();//slovenki
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Iskanje po spletu')").hide();//slovenscina
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Verkkohaku')").hide();//soumi
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Sök på webben')").hide();//svenska
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Tìm kiếm trên Web')").hide();//tieng viet
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Web'de Ara')").hide();//turkce
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Αναζήτηση στον Ιστό')").hide();//Ελληνικά
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Поиск в Интернете')").hide();//Русский
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Претражи Веб')").hide();//Српски
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Веб-пошук')").hide();//Українська
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Търсене в мрежата')").hide();//Български
			$("div.J-Zh-I.J-J5-Ji.L3:contains('वेब शोधा')").hide();//मराठी
			$("div.J-Zh-I.J-J5-Ji.L3:contains('वेब खोजें')").hide();//हिन्दी
			$("div.J-Zh-I.J-J5-Ji.L3:contains('搜尋網頁')").hide();//中文（繁體）
			$("div.J-Zh-I.J-J5-Ji.L3:contains('搜索网络')").hide();//中文（简体）
			$("div.J-Zh-I.J-J5-Ji.L3:contains('ウェブを検索')").hide();//日本語
			$("div.J-Zh-I.J-J5-Ji.L3:contains('Google 검색')").hide();//한국어
		}
		
		if (response.o.contact) {
			css += "div[class=\"qk\"] > span[class='p9 ou'] {display:none}";//hide contacts and task in app
			css += "div[class='CX pp'] {display:none}";//hide contacts
			css += "div[class='T4 pp'] {visibility:hidden; font-size:1px!important; margin:0 !important; padding:0 !important}div[id=':rf'] {font-size:1px !important; margin:0 !important; padding:0 !important}";//hide tasks
		}
		
		if (response.o.window) {
			css += "div[class='hj'] > div:first-child {display:none}";
			css += "div[class='hj'] > div:nth-child(2) {display:none} ";
			css += "div[class='hj'] > div:nth-child(5) {display:none}";
			css += "div[class='hj'] > div:nth-child(3) {display:none}";
		}
		
		if (response.o.row) {
			css += "table.zt tr:hover { background: "+response.o.color+"}";
//			css += "table.zt tr.yO:hover { background: "+response.o.color+"} table.zt tr.zE:hover { background: "+response.o.color+"}";
		}
		
		if (response.o.icon) {
			css += "table img[title$=xls], table img[title$=XLS], table img[title$=xlsx], table img[title$=XLSX] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important; background-position: top left !important; background-image:url(https://mail.google.com/mail/u/0/images/xls.gif) !important; }";
			
			css += "table img[title$=mp3], table img[title$=MP3], table img[title$=wma], table img[title$=WMA], table img[title$=aac], table img[title$=AAC], table img[title$=wav], table img[title$=WAV], table img[title$=flac], table img[title$=FLAC] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important; background-position: top left !important; background-image:url(https://mail.google.com/mail/u/0/images/sound.gif)!important; }";
			
			css+= "table img[title$=doc], table img[title$=DOC], table img[title$=docx], table img[title$=DOCX] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important; background-position: top left !important;  background-image:url(https://mail.google.com/mail/u/0/images/doc.gif) !important; }";
		
		
			css+= "table img[title$=html], table img[title$=HTML], table img[title$=js], table img[title$=xml] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important; background-position: top left !important;  background-image:url(https://mail.google.com/mail/u/0/images/html2.gif) !important; }";
		
		
			css += "table img[title$=zip], table img[title$=ZIP],table img[title$=rar], table img[title$=RAR], table img[title$=tgz], table img[title$=TGZ], table img[title$=tar], table img[title$=TAR] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important; background-position: top left !important;background-image: url(https://mail.google.com/mail/u/0/images/zip.gif) !important; }";
						
			css+=" table img[title$=pdf], table img[title$=PDF] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important; background-position: top left !important; background-image:url(https://mail.google.com/mail/u/0/images/pdf.gif) !important; }";

			
			css+="td.yf img[title$=tif], td.yf img[title$=tiff], td.yf img[title$=jpeg], td.yf img[title$=JPEG], td.yf img[title$=TIF], td.yf img[title$=TIFF], td.yf img[title$=bmp], td.yf img[title$=jpg], td.yf img[title$=gif], td.yf img[title$=png], td.yf img[title$=BMP], td.yf img[title$=JPG], td.yf img[title$=GIF], td.yf img[title$=PNG], td.gH img[title$=tif], td.gH img[title$=tiff], td.gH img[title$=jpeg], td.gH img[title$=JPEG], td.gH img[title$=TIF], td.gH img[title$=TIFF], td.gH img[title$=bmp], td.gH img[title$=jpg], td.gH img[title$=gif], td.gH img[title$=png], td.gH img[title$=BMP], td.gH img[title$=JPG], td.gH img[title$=GIF], td.gH img[title$=PNG] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important; background-position: top left !important; background-image:url(\"data:image/gif;base64,R0lGODlhEAAQALMPAPHv3hZpyg8wX6+sovzSSdKsOc/FnZp4PPOlqNm1SrUhKMbGxoSEhAAAAP///////yH5BAEAAA8ALAAAAAAQABAAAARa8ElGq5X4Mcc7Z02meR4VYhvJNew5qt3ipg5yGJ6MOkug/IBEwaCbBI4+BWE5nCEFgsSSUDg4j4JBYVqdAQJQhlZ4sO48gHIZdM4ZBvAZLDZb2O/4oqbF70cAADs=\") !important; }";
			
				
			css+="table img[title$=ppt], table img[title$=pps], table img[title$=PPT], table img[title$=PPS], table img[title$=pptx], table img[title$=ppsx], table img[title$=PPTX],table img[title$=pot], table img[title$=PPSX] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important;background-position: top left !important;background-image: url(https://mail.google.com/mail/u/0/images/ppt.gif) !important;}";

		
			css+="table img[title$=mov], table img[title$=MOV],table img[title$=m4v],table img[title$=mp4],table img[title$=M4V],table img[title$=MP4], table img[title$=avi], table img[title$=AVI], table img[title$=wmv], table img[title$=WMV],table img[title$=amv],table img[title$=AMV],table img[title$=mpeg],table img[title$=MPEG],table img[title$=mkv],table img[title$=MKV],table img[title$=flv], table img[title$=FLV]{ width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important;background-position: top left !important;background-image: url(data:image/gif;base64,R0lGODlhEAAQALMAAAAAAP///4SEhFRba8bGxjxYk0FZjFpbX0dZgU1bdkJalE9acv///wAAAAAAAAAAACH5BAEHAAwALAAAAAAQABAAAARJkElBq5WYicA7F0CmeR4VYhvJAew5csZBEm4aFMXg0WiHF4kOb+L7ITjD182IrBULC6GTg9NJezDZbqpqYruBpIBALpvFrbQ6AgA7) !important;}";
				
			css+="table img[title$=txt] { width:0px!important; height:0px!important; padding-left:16px!important; padding-top:16px!important;background-position: top left !important;background-image: url(https://mail.google.com/mail/u/0/images/txt.gif)!important;}";
			

		}
		
		if (response.o.contact) {
			css+=".spContact, .spTask{padding: 0px 6px;}";

			if($(".cM").size()>0){
				var label = 'Mail';
			} else {
				var label = 'Calendar';
			}

			var html = '<li class="gbt"><a class="gbgt spA"><span class="gbtb2"></span>'
					   '<span class="gbts spContact"><span>' + label + '</span></span></a></li>'+
					   '<li class="gbt"><a class="gbgt spA"><span class="gbtb2"></span>' +
					   '<span class="gbts spTask"><span>Tasks</span></span></a></li>';

			$('#gb #gbg .gbtc').prepend(html);
			$('.spA').hover(
				function(e){
					$(this).addClass('gbzt-hvr');
				},
				function(){
					$(this).removeClass('gbzt-hvr');
				}
			);
			
			$('.spContact').click(function(){
				var evt = document.createEvent("MouseEvents");
				evt.initMouseEvent("click", true, true, window,
				0, 0, 0, 0, 0, false, false, false, false, 0, null);
					
				if($(".cM").length){
					$(".spContact").text('Contacts');
					if($(".is").length){
						$(".is")[0].dispatchEvent(evt);
					}else{
						window.location="https://mail.google.com/mail/u/0/?shva=1#inbox";
					}
				}else{
					$(".spContact").text('Mail');
					var iel = $('div.CX.pp div.z9.ou')[0];
					var ipa = $('div.qk span.p9.ou#\\:rd')[0];
					var iop = $('div.qk span#\\:rf')[0];	
					if(iel){iel.dispatchEvent(evt);}
					else if(ipa){ipa.dispatchEvent(evt);}
					else if(iop){iop.dispatchEvent(evt);}
				}
				
			});
		}
		
		// apply the css above on gmail
		if (typeof GM_addStyle != "undefined") {
			GM_addStyle(css);
		} else if (typeof PRO_addStyle != "undefined") {
			PRO_addStyle(css);
		} else if (typeof addStyle != "undefined") {
			addStyle(css);
		} else {
			var heads = document.getElementsByTagName("head");
			if (heads.length > 0) {
				var node = document.createElement("style");
				node.type = "text/css";
				node.appendChild(document.createTextNode(css));
				heads[0].appendChild(node); 
				
			}
		}
		

		
		$('.spTask').click(function(){
			var evt = document.createEvent("MouseEvents");
			evt.initMouseEvent("click", true, true, window,
			0, 0, 0, 0, 0, false, false, false, false, 0, null);
			var el = $('div.T4.pp div.T3')[0];
			var pa = $('div.qk span#\\:re')[0];
			if(el){el.dispatchEvent(evt);}
			else if(pa){pa.dispatchEvent(evt);}
			
		});
				//		$('html.cQ').css({
				//			'overflow-y':'auto',
				//			'height':'39%',
				//			'width':'39%'
				//		});
				//		
				//		setTimeout(function(){
				//			$(window).css({
				//				'height':'99%',
				//				'width':'99%'
				//			});		
				//			$(window).css({
				//				'height':'100%',
				//				'width':'100%'
				//			});
				//		
				//		},500);

		
//		$('html.cQ').css({
//			'height':'100%',
//			'width':'100%'
//		});
		
							//in progresss
				//			var wh = $('body:eq(0)').height();
				//			var rh = parseInt(wh)-300;
				//			$('div.Cp').css({
				//				'height': rh + 'px',
				//				'overflow-x':'hidden'
				//			});
			
		
		
		
//		alert(window[0].innerHeight);
//		if($('div.Cp').length){alert('de');}

	});//end chrome extension request
})();
