function handleScroll(){
	if(lazyBlocks)
		for(var i=0; i<lazyBlocks.length; i++){
			var block=lazyBlocks[i];
			if(!block.woke && elementInViewport(block)){
				block.woke=true;

				var elements=block.querySelectorAll('.lazy-element');
				for(var j=0; j<elements.length; j++){
					addWakeUpElementEvent(elements[j], j);
				}
			}
		}

	var doc=document.documentElement;
	var left=(window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	var top=(window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	//var parallax='center '+(50+top/10)+'%';
	var parallax='center '+(0+top/15)+'%';

	(document.getElementsByTagName('header')[0]).style.backgroundPosition=parallax;
}




var lazyBlocks;

window.addEventListener('load', function(){

	lazyBlocks=document.querySelectorAll('div.lazy-block');
	handleScroll();
	this.addEventListener('scroll', handleScroll, false);


	/* char selector */
	for(var i=0; i<MAX_CHARS; i++){
		var div=document.createElement('div');
		div.addEventListener('click', setCharacterFromSelector, false);
		div.charId=i;
		document.getElementById('char-selector').appendChild(div);
	}
	setCharacter(0);
}, false);







function setCharacterFromSelector(){
	setCharacter(this.charId);
}



var nextCharacter=-1;
var characterLock=false;
var MAX_CHARS=4;
function setCharacter(charId){

	if(!characterLock && charId!=nextCharacter){
		characterLock=true;
		nextCharacter=charId;

		var DELAY=80;

		for(var i=0; i<MAX_CHARS; i++){
			document.getElementById('char-selector').children[i].className=charId===i?'selected':'';
		}
		window.setTimeout(function(){
			document.getElementById('chara').className='anim-left';
		}, 0);
		window.setTimeout(function(){
			document.getElementById('chartext').className='anim-left';
		}, DELAY*2);
		window.setTimeout(function(){
			document.getElementById('charb').className='anim-left';
		}, DELAY*4);



		window.setTimeout(function(){
			document.getElementById('chara').className='anim-right';
			document.getElementById('chara').src='resources/cast/char'+charId+'a.jpg';
		}, DELAY*4);
		window.setTimeout(function(){
			document.getElementById('chartext').className='anim-right';
			document.getElementById('chartext').innerHTML=document.getElementById('char'+charId).innerHTML;
		}, DELAY*6);
		window.setTimeout(function(){
			document.getElementById('charb').className='anim-right';
			document.getElementById('charb').src='resources/cast/char'+charId+'b.jpg';
		}, DELAY*8);



		window.setTimeout(function(){
			document.getElementById('chara').className='';
		}, DELAY*8);
		window.setTimeout(function(){
			document.getElementById('chartext').className='';
			characterLock=false;
		}, DELAY*10);
		window.setTimeout(function(){
			document.getElementById('charb').className='';
		}, DELAY*12);
	}
	
	window.setTimeout

	window.setTimeout(function(){
	}, 1000);
}








































/* mQuery */
function MQ(t){this.q=Marq._buildQuery(t),this._ul(),this.q[0]&&(this.style=this.q[0].style),this._isArray=!1}function m(t){return new MQ(t)}function mCreate(t,e){var r=document.createElement(t);if("object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&("html"===i?r.innerHTML=e[i]:"class"===i?r.className=e[i]:i.startsWith("style")||i.startsWith("css")?r.style[i.replace(/^(style|css)(:- )?/,"")]=e[i]:r[i]=e[i]);return m(r)}var Marq=function(){var t=navigator.userAgent.match(/MSIE (\d+)/),e=t?parseInt(t[1]):!1;return Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=this.length>>>0,r=Number(arguments[1])||0;for(r=0>r?Math.ceil(r):Math.floor(r),0>r&&(r+=e);e>r;r++)if(r in this&&this[r]===t)return r;return-1}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),r=this,i=function(){},n=function(){return r.apply(this instanceof i&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,n.prototype=new i,n}),String.prototype.toCamel||(String.prototype.toCamel=function(){return this.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,e){return 0==e?t.toLowerCase():t.toUpperCase()}).replace(/\s|-+/g,"")}),{isCompatible:document.querySelectorAll,isIE:e,isMobile:/(Mobi|Android|WiiU|3DS|Playstation Vita)/.test(navigator.userAgent),_buildQuery:function(t){if("string"==typeof t){if(/^#[\w\-]+$/.test(t)){var e;return(e=document.getElementById(t.replace("#","")))?[e]:[]}return/^\w+$/.test(t)?document.getElementsByTagName(t):document.querySelectorAll(t)}return t.q?t.q:t.length?t:[t]},_forceToArray:function(t){if(8===e){for(var r=[],i=0;i<t.length;i++)r.push(t[i]);return r}return Array.prototype.slice.call(t)},_getBlockType:function(t){return"LI"===t.nodeName?"list-item":"TABLE"===t.nodeName?"table":"TR"===t.nodeName?"table-row":"TD"===t.nodeName?"table-cell":"block"},_getCSSNumVal:function(t,e){var r;return t.style[e]?r=t.style[e]:t.currentStyle?r=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle?(s=document.defaultView.getComputedStyle(t,""),r=s&&s.getPropertyValue(e.toCamel())):r=0,r=parseInt(r.replace(/[^\d\-\.]/g,"")),r||(r=0),r},_hasClass:function(t,e){return t.className&&t.className.split(/ +/).indexOf(e)>=0},setOpacity:function(t,r){8===e?t.style.filter="alpha(opacity="+parseInt(100*r)+")":t.style.opacity=r},preventDefault:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},stopPropagation:function(t){"undefined"!=typeof t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},setWarnOnLeaving:function(t){t?window.onbeforeunload=function(t){return t=t||window.event,t&&(t.returnValue=!0),!0}:window.onbeforeunload=null},currentTarget:function(t){return t.currentTarget?t.currentTarget:t.srcElement}}}();MQ.prototype._ta=function(){this._isArray||(this.q=Marq._forceToArray(this.q),this._isArray=!0)},MQ.prototype._ul=function(){this.length=this.q.length},MQ.prototype.get=function(t){return 0==this.q.length?null:"undefined"!=typeof t?this.q[t]:this.q[0]},MQ.prototype.getAll=function(t){return this._ta(),this.q},MQ.prototype.first=function(){return this.q=[this.q[0]],this.length=1,this._isArray=!0,this},MQ.prototype.last=function(){return this.q=[this.q[this.q.length-1]],this.length=1,this._isArray=!0,this},MQ.prototype.eq=function(t){return this.q=[this.q[t]],this.length=1,this._isArray=!0,this},MQ.prototype.gt=function(t){return this._ta(),this.q=this.q.slice(t+1),this._ul(),this},MQ.prototype.lt=function(t){return this._ta(),this.q=this.q.slice(0,t),this._ul(),this},MQ.prototype.slice=function(t,e){return this._ta(),this.q=this.q.splice(t,e),this._ul(),this},MQ.prototype.children=function(){for(var t=[],e=0;e<this.q.length;e++)t=t.concat(Marq._forceToArray(this.q[e].children));return this.q=t,this._ul(),this._isArray=!0,this},MQ.prototype.find=function(t){for(var e=[],r=0;r<this.q.length;r++)e=e.concat(Marq._forceToArray(this.q[r].querySelectorAll(t)));return this.q=e,this._ul(),this._isArray=!0,this},MQ.prototype.add=function(t){return this._ta(),this.q=this.q.concat(Marq._forceToArray(Marq._buildQuery(t))),this._ul(),this},MQ.prototype.append=function(t){for(var e=Marq._buildQuery(t),r=0;r<e.length;r++)e[r].parentElement&&e[r].parentElement.removeChild(e[r]),this.q[0].appendChild(e[r]);return this},MQ.prototype.appendTo=function(t){for(var e=Marq._buildQuery(t),r=0;r<this.q.length;r++)this.q[r].parentElement&&this.q[r].parentElement.removeChild(this.q[r]),e[0].appendChild(this.q[r]);return this},MQ.prototype.prepend=function(t){for(var e=Marq._buildQuery(t),r=0;r<e.length;r++)e[r].parentElement&&e[r].parentElement.removeChild(e[r]),this.q[0].insertBefore(e[r],this.q[0].children[0]);return this},MQ.prototype.prependTo=function(t){for(var e=Marq._buildQuery(t),r=0;r<this.q.length;r++)this.q[r].parentElement&&this.q[r].parentElement.removeChild(this.q[r]),e[0].insertBefore(this.q[r],e[0].children[0]);return this},MQ.prototype.empty=function(){for(var t=0;t<this.q.length;t++)for(;this.q[t].firstChild;)this.q[t].removeChild(this.q[t].firstChild);return this},MQ.prototype.remove=function(t){if("string"==typeof t)for(var e=0;e<this.q.length;e++)for(var r=this.q[e].querySelectorAll(t),i=0;i<r.length;i++)this.q[e].removeChild(r[i]);else for(var e=0;e<this.q.length;e++)this.q[e].parentElement.removeChild(this.q[e]);return this},MQ.prototype.info=function(t){var e=this.q[0].offsetWidth,r=this.q[0].offsetHeight;return t&&(e+=Marq._getCSSNumVal(this.q[0],"borderLeftWidth")+Marq._getCSSNumVal(this.q[0],"borderRightWidth"),r+=Marq._getCSSNumVal(this.q[0],"borderTopWidth")+Marq._getCSSNumVal(this.q[0],"borderBottomWidth")),{width:e,height:r,offsetTop:Math.round(this.q[0].getBoundingClientRect().top),offsetLeft:Math.round(this.q[0].getBoundingClientRect().left),positionTop:this.q[0].offsetTop,positionLeft:this.q[0].offsetLeft}},MQ.prototype.addEvent=function(t,e,r){for(var i=0;i<this.q.length;i++){var n;n=r?e.bind(this.q[i]):e,8===Marq.isIE?this.q[i].attachEvent("on"+t,n):this.q[i].addEventListener(t,n,!1)}return this},MQ.prototype.removeEvent=function(t,e){for(var r=0;r<this.q.length;r++)8===Marq.isIE?this.q[r].detachEvent("on"+t,e):this.q[r].removeEventListener(t,e);return this},MQ.prototype.show=function(){for(var t=0;t<this.q.length;t++)this.q[t].style.display=Marq._getBlockType(this.q[t]);return this},MQ.prototype.hide=function(){for(var t=0;t<this.q.length;t++)this.q[t].style.display="none";return this},MQ.prototype.toggle=function(){for(var t=0;t<this.q.length;t++)this.q[t].style.display!==Marq._getBlockType(this.q[t])?this.q[t].style.display=Marq._getBlockType(this.q[t]):this.q[t].style.display="none";return this},MQ.prototype.html=function(t){if(void 0===t)return this.q[0].innerHTML;for(var e=0;e<this.q.length;e++)this.q[e].innerHTML=t;return this},MQ.prototype.css=function(t,e){if(void 0===e)return this.q[0].style[t];t=t.toCamel();for(var r=0;r<this.q.length;r++)this.q[r].style[t]=e;return this},MQ.prototype.hasClass=function(t){for(var e=0;e<this.q.length;e++)if(Marq._hasClass(this.q[e],t))return!0;return!1},MQ.prototype.addClass=function(t){for(var e=t.replace(/^ +| +$/g,"").split(/ +/),r=0;r<this.q.length;r++)for(var i=0;i<e.length;i++)this.q[r].className?Marq._hasClass(this.q[r],e[i])||(this.q[r].className+=" "+e[i]):this.q[r].className=e[i];return this},MQ.prototype.removeClass=function(t){for(var e=/^ +| +$/g,r=t.replace(e,"").split(/ +/),i=0;i<r.length;i++)r[i]="^"+r[i]+"$|^"+r[i]+" +| +"+r[i]+" +| +"+r[i]+"$";for(var n=new RegExp(r.join("|"),"g"),i=0;i<this.q.length;i++)this.q[i].className&&(this.q[i].className=this.q[i].className.replace(n," ").replace(e,""));return this},MQ.prototype.toggleClass=function(t){for(var e=/^ +| +$/g,r=t.replace(e,"").split(/ +/),i=new Array(r.length),n=0;n<r.length;n++)i[n]="^"+r[n]+"$|^"+r[n]+" +| +"+r[n]+" +| +"+r[n]+"$";for(var s=new RegExp(i.join("|"),"g"),n=0;n<this.q.length;n++)for(var o=0;o<r.length;o++)this.q[n].className?Marq._hasClass(this.q[n],r[o])?this.q[n].className=this.q[n].className.replace(s," ").replace(e,""):this.q[n].className+=" "+r[o]:this.q[n].className=r[o]};
