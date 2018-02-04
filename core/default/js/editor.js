/****************************************************

        Development by wencms@gmail.com

****************************************************/

function editor(e) {
    
	var e = e || window.event;
    
	var elem = e.srcElement || e.target;
    
    if(elem.className == "text"){
        
        elem.setAttribute('contentEditable', 'true');
        
        elem.style.outline="2px dashed #D80000";
        
    }
    
}

function image(e) {
    
    var e = e || window.event;
    
    var url = window.getComputedStyle(e, null).getPropertyValue('background-image').match(/url\(([^)]+)\)/i);
    
    var urlres = url[1].replace('"','').replace('"','');
       
    alert(urlres.replace(/^.*\/\/[^\/]+/, '').split('/').pop());
    
}

function save(e) {
    
	var e = e || window.event;
    
	var elem = e.srcElement || e.target;
    
    elem.removeAttribute('contentEditable');
    
    elem.style.outline = "";
    
    var generatedSource = new XMLSerializer().serializeToString(document);
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("POST", "/editor/save");
    
    var pagesrc = generatedSource.replace(/\s{2,}/g, '');
    
    var data = new FormData();
    
    data.append('src', ''+pagesrc);
        
    xhr.send(data);
    
}

var editors = document.querySelector('body');
editors.setAttribute('onmouseover', 'editor(event)');
editors.setAttribute('onmouseout', 'save(event)');
editors.setAttribute('oncontextmenu', 'return false;');