/****************************************************

        Development by wencms@gmail.com

****************************************************/

function builder(page) {
    
    var page = page;
                
    var doc = document.getElementById("page").contentWindow.document;

    doc.open();

    doc.write('<html>');

    doc.write('<head>');

    doc.write('<title></title>');

    doc.write('<meta charset="utf-8"/>');

    doc.write('<meta name="generator" content="LPCORE (lpcore.ru)"/>');

    doc.write('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/body.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/contact/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/content/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/divider/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/footer/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/header/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/pricing/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/slideshow/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/team/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/shop/style.css"/>');

    doc.write('</head>');

    doc.write('<body>');
    
    if(page.length > 0) {
        
        var notif = document.getElementById("notif");
        
        notif.style.display = "none";
        
        var senotif = document.getElementById("sections_notif");
        
        senotif.style.display = "none";
        
        doc.write('<script type="application/javascript" src="/core/default/js/editor.js"></');

        doc.write('script>');
        
        doc.write(page);
        
        doc.close();
        
    } else {
        
        doc.write('<script type="application/javascript" src="/core/default/js/editor.js"></');

        doc.write('script>');
        
        doc.close();
        
    }
                
}

function builder_menu() {
    
    var notif = document.getElementById("notif");
    
    var senotif = document.getElementById("sections_notif");
    
    var menu = document.getElementById("menu");
    
    if(menu.style.display == "none") {
        
        menu.style.display = "block";
        
        notif.style.display = "none";
        
        senotif.style.display = "none";
        
    } else {
        
        menu.style.display = "none";
        
    }
    
}

function builder_remove(type) {
    
    builder_settings_close();
    
    var doc = document.getElementById("page").contentWindow.document;
    
    var node = doc.getElementById(""+type);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    
    var nodes = document.getElementById("t"+type.replace(/\D+/g,""));
    if (nodes.parentNode) {
        nodes.parentNode.removeChild(nodes);
    }
    
}

function move_settings(e) {
	
	var box = document.getElementsByClassName("builder_menu")[0];
	
	var settings = document.getElementById("settings");
	settings.style.width = "100%";
	settings.style.height = "100%";
	settings.style.zIndex = "1";
	settings.style.position = "fixed";
	
	move(e);
	
	function move(elem) {
		box.style.left = elem.pageX - box.offsetWidth / 2 + 'px';
		box.style.top = elem.pageY - box.offsetHeight / 2 + 'px';
	}
	
	document.onmousemove = function(e) {
		move(e);
	}
	
	document.onmouseup = function(e) {
		document.onmousemove = null;
		box.onmouseup = null;
		settings.removeAttribute('style');
	}
}

function builder_settings(id) {
    
    //var url = prompt("URL-изображения:", "http://");
    
    //builder_settings_setstyle(id,"url('"+url+"')","backgroundImage");
    
    var url = builder_settings_getstyle(id,"background-image");
    
    var height = builder_settings_getstyle(id,"height");
    
    var bg = builder_settings_getstyle(id,"background-color");
    
    var text = builder_settings_getstyle(id,"color");
    
    builder_alert(id,url,height,bg,text);
    
    var senotif = document.getElementById("sections_notif");
    
    senotif.style.display = "none";
    
}

function builder_settings_add(id) {
    
    //var url = prompt("URL-изображения:", "http://");
    
    //builder_settings_setstyle(id,"url('"+url+"')","backgroundImage");
    
    builder_settings_close();
    
    var doc = document.getElementById("page").contentWindow.document;
    
    var node = doc.getElementById(id);
    
    var src = node.innerHTML;
    
    var alertbox = document.getElementById("settings");
    
    alertbox.innerHTML = "<div class='builder_menu'><div class='close' onclick='builder_settings_close()'></div><div class='name' onmousedown='move_settings(this)'>Элементы Секции</div><div class='wapper' id='wapper'><div class='add' id='add'><div class='name'>Добавить Элемент</div></div></div></div>";
    
    var att = document.createAttribute("onclick");
        
    att.value = "builder_settings_addmenu('"+id+"')";
    
    var rev = document.getElementById("add");
        
    rev.setAttributeNode(att);
    
    var wapper = document.getElementById("wapper");
    
    if(src.match('<div class="filter"')) {
        
        var result = src.split('<div class="filter"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Фильтр #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','filter','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','filter','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
    if(src.match('<div class="logo"')) {
        
        var result = src.split('<div class="logo"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Заголовок #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','logo','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','logo','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
    if(src.match('<div class="title"')) {
        
        var result = src.split('<div class="title"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Описание #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','title','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','title','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
    if(src.match('<div class="button"')) {
        
        var result = src.split('<div class="button"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Кнопка #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','button','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','button','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
    if(src.match('<div class="phone"')) {
        
        var result = src.split('<div class="phone"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Телефон #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','phone','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','phone','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
    if(src.match('<div class="subtitle"')) {
        
        var result = src.split('<div class="subtitle"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Подзаголовок #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','subtitle','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','subtitle','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
    if(src.match('<div class="logoimg"')) {
        
        var result = src.split('<div class="logoimg"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Логотип #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','logoimg','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','logoimg','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
    if(src.match('<div class="form"')) {
        
        var result = src.split('<div class="form"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Форма #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','form','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','form','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
    if(src.match('<div class="menu"')) {
        
        var result = src.split('<div class="menu"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Меню #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','menu','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','menu','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
	
	if(src.match('<div class="video"')) {
        
        var result = src.split('<div class="video"');
        
        var n = result.length - 1;
        
        for (var i = 0; i < n; i++) {
        
            var ids = uid();
            
            var idss = uid();
        
            var idst = uid();
        
            wapper.innerHTML += '<div class="item" id="'+idst+'"><div class="name">Видео #'+i+'</div><div class="settings" id="'+idss+'" title="Настройки"></div><div class="remove" id="'+ids+'" title="Удалить"></div></div>';
        
            var att = document.createAttribute("onclick");
        
            att.value = "builder_block_remove('"+id+"','video','"+idst+"','"+i+"')";
    
            var rev = document.getElementById(ids);
        
            rev.setAttributeNode(att);
            
            var att2 = document.createAttribute("onclick");
        
            att2.value = "builder_block_settings('"+id+"','video','"+i+"')";
    
            var rev2 = document.getElementById(idss);
        
            rev2.setAttributeNode(att2);
            
        }
        
    }
    
}

function builder_settings_addmenu(id) {
    
    var id = id;
    
    var wapper = document.getElementById("wapper");
    
    wapper.innerHTML = "";
    
    var ids = uid();
        
    wapper.innerHTML += '<div class="item"><div class="name">Заголовок</div><div class="add" id="'+ids+'" title="Добавить"></div></div>';
        
    var att = document.createAttribute("onclick");
        
    att.value = 'builder_block_add("'+id+'","logo","<div class=text>Заголовок</div>")';
    
    var rev = document.getElementById(ids);
        
    rev.setAttributeNode(att);
    
}

function uid() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4());
}

function builder_alert(id,url,bg,height,text) {
    
    builder_settings_close();
    
    var alert = document.getElementById("settings");
    
    alert.innerHTML = "<div class='builder_menu'><div class='close' onclick='builder_settings_close()'></div><div class='name' onmousedown='move_settings(this)'>Настройки Секции</div><div class='wapper'><div class='title'>Фоновое Изображение:</div><div class='input'><input type='text' name='url' id='url' value='" + url.replace('url("','').replace('")','') + "'></div><div class='title'>Размер Секции:</div><div class='input'><input type='text' name='height' id='height' value='" + bg + "'></div><div class='title'>Цвет Секции:</div><div class='input'><input type='text' name='bg' id='bg' value='" + rgb2hex(height) + "'></div><div class='title'>Цвет Текста:</div><div class='input'><input type='text' name='text' id='text' value='" + rgb2hex(text) + "'></div><div class='save' id='save'>Сохранить</div></div></div>";
    
    var att = document.createAttribute("onclick");
        
    att.value = "builder_settings_save('"+id+"')";
    
    var rev = document.getElementById("save");
        
    rev.setAttributeNode(att);
    
}

function builder_settings_save(id) {
    
    var url = document.getElementById("url").value;
    
    var height = document.getElementById("height").value;
    
    var bg = document.getElementById("bg").value;
    
    var text = document.getElementById("text").value;
    
    builder_settings_setstyle(id,"url('"+url+"')","backgroundImage");
    
    builder_settings_setstyle(id,height,"height");
    
    builder_settings_setstyle(id,bg,"backgroundColor");
    
    builder_settings_setstyle(id,text,"color");
    
    builder_settings_close();
    
}

function rgb2hex(color) {
    
    var color = color.replace("rgb(","").replace(")","").replace(" ","").split(',');
    
    var blue = color[0];
        
    var green = color[1];
        
    var red = color[2];
    
    var rgb = blue | (green << 8) | (red << 16);
    
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
    
}

function builder_settings_close() {
    
    var alert = document.getElementById("settings");
    
    alert.innerHTML = ''; 
    
}

function builder_block_add(id,type,element) {
    
    var doc = document.getElementById("page").contentWindow.document;
    
    var node = doc.getElementById(id);
    
    var add = document.createElement("div");
        
    add.className = type;
        
    add.innerHTML = element;
    
    node.appendChild(add);
    
    builder_settings_add(id);
    
}

function builder_block_remove(id,type,item,i) {
    
    var doc = document.getElementById("page").contentWindow.document;
    
    var node = doc.getElementById(id);
    
    var remove = node.getElementsByClassName(type);
    
    if (remove[i].parentNode) {
        remove[i].parentNode.removeChild(remove[i]);
    }
    
    var items = document.getElementById(item);
    
    if (items.parentNode) {
        items.parentNode.removeChild(items);
    }
    
}

function builder_block_settings(id,type,i) {
    
    builder_settings_close();
    
    var doc = document.getElementById("page").contentWindow.document;
    
    var node = doc.getElementById(id);
    
    var styles = node.getElementsByClassName(type);
    
    var text = doc.defaultView.getComputedStyle(styles[i],null).getPropertyValue('color');
    
    var textsize = doc.defaultView.getComputedStyle(styles[i],null).getPropertyValue('font-size');
    
    var textstyle = doc.defaultView.getComputedStyle(styles[i],null).getPropertyValue('font-family');
    
    var textpos = doc.defaultView.getComputedStyle(styles[i],null).getPropertyValue('text-align');
    
    var alert = document.getElementById("settings");
    
    alert.innerHTML = "<div class='builder_menu'><div class='close' onclick='builder_settings_close()'></div><div class='name' onmousedown='move_settings(this)'>Настройки Элемента</div><div class='wapper'><div class='title'>Цвет Текста:</div><div class='input'><input type='text' name='text' id='text' value='" + rgb2hex(text) + "'></div><div class='title'>Размер Текста:</div><div class='input'><input type='text' name='textsize' id='textsize' value='" + textsize + "'></div><div class='title'>Шрифт Текста:</div><div class='input'><input type='text' name='textstyle' id='textstyle' value='" + textstyle + "'></div><div class='title'>Позиция Текста:</div><div class='input'><input type='text' name='textpos' id='textpos' value='" + textpos + "'></div><div class='save' id='save'>Сохранить</div></div></div>";
    
    var att = document.createAttribute("onclick");
        
    att.value = "builder_block_settings_save('"+id+"','"+type+"','"+i+"')";
    
    var rev = document.getElementById("save");
        
    rev.setAttributeNode(att);
    
}

function builder_block_settings_save(id,type,i) {
    
    var doc = document.getElementById("page").contentWindow.document;
    
    var node = doc.getElementById(id);
    
    var styles = node.getElementsByClassName(type);
    
    var text = document.getElementById("text").value;
    
    var textsize = document.getElementById("textsize").value;
    
    var textstyle = document.getElementById("textstyle").value;
    
    var textpos = document.getElementById("textpos").value;
    
    var textpos = document.getElementById("textpos").value;
    
    if(text.length > 0) {
        
        styles[i].style.color = text;
        
    }
    
    if(textsize.length > 0) {
        
        styles[i].style.fontSize = textsize;
        
    }
    
    if(textstyle.length > 0) {
        
        styles[i].style.fontFamily = textstyle;
        
    }
    
    if(textpos.length > 0) {
        
        styles[i].style.textAlign = textpos;
        
    }
    
    builder_settings_close();
    
    builder_settings_add(id);
    
}

function builder_settings_setstyle(id,value,type) {
    
    var doc = document.getElementById("page").contentWindow.document;
    
    var node = doc.getElementById(id);
    
    if(type == "color") {
        node.style.color = value;
    } else if(type == "height") {
        node.style.height = value;
    } else if(type == "backgroundColor") {
        node.style.backgroundColor = value;
    } else if(type == "backgroundImage") {
        node.style.backgroundImage = value;
    } else if(type == "display") {
        node.style.display = value;
    }
    
}

function builder_settings_getstyle(id,type) {
    
    var doc = document.getElementById("page").contentWindow.document;
    
    var node = doc.getElementById(id);
    
    return doc.defaultView.getComputedStyle(node,null).getPropertyValue(''+type);
    
}

function builder_sections(id, type, name, text) {
    
    var sections = document.getElementById("sections");
        
    var att = document.createAttribute("onclick");
        
    att.value = "builder_remove('"+name+""+id+"')";
    
    var att2 = document.createAttribute("onclick");
    
    att2.value = "builder_settings('"+name+""+id+"')";
    
    var att3 = document.createAttribute("onclick");
    
    att3.value = "builder_settings_add('"+name+""+id+"')";
        
    sections.innerHTML += "<div class='item' id='t"+id+"'><div class='name'><div class='text'>"+text+"</div></div><div class='add' id='a"+type+""+id+"' title='Элементы'></div><div class='settings' id='s"+type+""+id+"' title='Настройки'></div><div class='remove' id='"+type+""+id+"' title='Удалить'></div></div>";
        
    var rev = document.getElementById(type+''+id);
        
    rev.setAttributeNode(att);
    
    var rev2 = document.getElementById('s'+type+''+id);
        
    rev2.setAttributeNode(att2);
    
    var rev3 = document.getElementById('a'+type+''+id);
        
    rev3.setAttributeNode(att3);
    
}
           
function builder_add(type) {
    
    var notif = document.getElementById("menu_notif");
    
    notif.style.display = "none";
    
    builder_menu();
                
    var page = document.getElementById("page").contentWindow.document.body.innerHTML;

    var doc = document.getElementById("page").contentWindow.document;

    var frame = document.getElementById("page");
    
    //var pagehframe.getAttribute()
    
    doc.open();

    doc.write('<html>');

    doc.write('<head>');

    doc.write('<title></title>');

    doc.write('<meta charset="utf-8"/>');

    doc.write('<meta name="generator" content="LPCORE (lpcore.ru)"/>');

    doc.write('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/body.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/contact/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/content/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/divider/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/footer/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/header/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/pricing/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/slideshow/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/team/style.css"/>');

    doc.write('<link rel="stylesheet" type="text/css" href="/core/elements/shop/style.css"/>');
    
    doc.write('<script type="application/javascript" src="/core/default/js/editor.js"></');

    doc.write('script>');

    doc.write('</head>');

    doc.write('<body>');

    doc.write(page);

    if (type == "1") {
        
        var id = page.indexOf("header");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"h","header","Шапка #1");

        doc.write('<div class="header-1" id="header'+id+'">');

        doc.write('<div class="filter"></div>');

        doc.write('<div class="logo">');

        doc.write('<div class="text">Моя Закусочная</div>');

        doc.write('</div>');

        doc.write('<div class="title">');

        doc.write('<div class="text">Хотите вкусно поесть в Уфе? Заглените к нам, у нас уютная атмосфера!</div>');

        doc.write('</div>');

        doc.write('<div class="button">');

        doc.write('<div class="text">Забронировать сейчас</div>');

        doc.write('</div>');

        doc.write('</div>');

    } else if (type == "2") {
        
        var id = page.indexOf("header");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"h","header","Шапка #2");

        doc.write('<div class="header-2" id="header'+id+'">');
        
        doc.write('<div class="filter"></div>');

        doc.write('<div class="logo">');

        doc.write('<div class="text">Моя Компания</div>');

        doc.write('</div>');

        doc.write('<div class="phone">');
        
        doc.write('<div class="text">8 800 800 80 80</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="button">');
        
        doc.write('<div class="text">Заказать звонок</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">Компьютер — это самый удивительный инструмент, с каким я когда-либо сталкивался. Это велосипед для нашего сознания.</div>');

        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "3") {
        
        var id = page.indexOf("header");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"h","header","Шапка #3");

        doc.write('<div class="header-3" id="header'+id+'">');
        
        doc.write('<div class="filter"></div>');

        doc.write('<div class="logo">');

        doc.write('<div class="text">Моя Компания</div>');

        doc.write('</div>');

        doc.write('<div class="menu">');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="text">Контакты</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="text">Вакансии</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="text">Продукты</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="text">Блог</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="text">О Нас</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">С годами я перестал покупать многие вещи просто потому, что они теперь кажутся мне нелепыми.</div>');

        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "4") {
        
        var id = page.indexOf("header");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"h","header","Шапка #4");

        doc.write('<div class="header-4" id="header'+id+'">');
        
        doc.write('<div class="filter"></div>');

        doc.write('<div class="logo">');

        doc.write('<div class="text">Мой Концерт</div>');

        doc.write('</div>');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">Музыка действительно сближает людей. Она позволяет нам переживать одинаковые эмоции. Люди, где бы они не жили, похожи сердцем и духом. Не важно, на каком языке мы говорим, какого цвета наша кожа, каковы наше политическое устройство или проявления нашей любви и веры, музыка доказывает, что мы одинаковы.</div>');

        doc.write('</div>');
        
        doc.write('<div class="form">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Купить Билет</div> ');
        
        doc.write('</div>');
        
        doc.write('<div class="input">');
        
        doc.write('<div class="label">');
        
        doc.write('<div class="text">Ваше Имя:</div>');
        
        doc.write('</div>');
        
        doc.write('<input type="text" name="name"/>');
        
        doc.write('</div>');
        
        doc.write('<div class="input">');
        
        doc.write('<div class="label">');
        
        doc.write('<div class="text">Ваше Телефон:</div>');
        
        doc.write('</div>');
        
        doc.write('<input type="text" name="phone"/>');
        
        doc.write('</div>');
        
        doc.write('<div class="input">');
        
        doc.write('<div class="label">');
        
        doc.write('<div class="text">Способ Оплаты:</div>');
        
        doc.write('</div>');
        
        doc.write('<select name="payment">');
        
        doc.write('<option value="Наличными" selected>Наличными</option>');
        
        doc.write('<option value="Банковска Карта">Банковска Карта</option>');
        
        doc.write('</select>');
        
        doc.write('</div>');
        
        doc.write('<div class="button">');
        
        doc.write('<div class="text">Купить</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "5") {
        
        var id = page.indexOf("header");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"h","header","Шапка #5");

        doc.write('<div class="header-5" id="header'+id+'">');
        
        doc.write('<div class="filter"></div>');
        
        doc.write('<div class="logoimg"></div>');
        
        doc.write('<div class="phone">');
        
        doc.write('<div class="text">8 800 800 80 80</div>');
        
        doc.write('<div class="subtitle">');
        
        doc.write('<div class="text">режим работы<br/>пн. - вс.<br/>с 10:00 до 23:00</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="button">');
        
        doc.write('<div class="text">Заказать Сейчас</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">У меня больше нет конкурентов — в этом моя драма. Я создал чудовище и теперь должен с ним жить.</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "6") {
        
        var id = page.indexOf("header");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"h","header","Шапка #6");

        doc.write('<div class="header-6" id="header'+id+'">');
        
        doc.write('<div class="filter"></div>');
        
        doc.write('<div class="logoimg"></div>');
        
        doc.write('<div class="phone">');
        
        doc.write('<div class="text">8 800 800 80 80</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">Деньги не меняют людей.</div>');
        
        doc.write('<div class="subtitle">');
        
        doc.write('<div class="text">Они показывают их сущность.</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="button">');
        
        doc.write('<div class="text">Оставить Заявку</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "7") {
        
        var id = page.indexOf("contact");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"c","contact","Контакты #1");

        doc.write('<div class="contact" id="contact'+id+'">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="items">');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Наш адрес:</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">г. Уфа,<br/>Маршала Жукова, 450105</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Режим работы:</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">Понедельник - Пятница,<br/>с 9:00 до 23:00</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Телефон, Факс:</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">Тел: 8 800 800 80 80<br/>Факс: 8 800 800 80 80</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Email, Skype:</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">адрес@моякомпания.рф<br/>Skype: МояКомпания</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="map">');
        
        doc.write('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.3822912365113!2d56.06220034888445!3d54.77324664510765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4dde9f9fefbbaab!2z0J_QsNGA0Log0JrQsNGI0LrQsNC00LDQvQ!5e0!3m2!1sru!2sru!4v1480950961789" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "8") {
        
        var id = page.indexOf("contact");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"c","contact","Контакты #2");

        doc.write('<div class="contact-2" id="contact'+id+'">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="items">');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Наш адрес:</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">г. Уфа,<br/>Маршала Жукова, 450105</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Режим работы:</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">Понедельник - Пятница,<br/>с 9:00 до 23:00</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Телефон, Факс:</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">Тел: 8 800 800 80 80<br/>Факс: 8 800 800 80 80</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">Email, Skype:</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">адрес@моякомпания.рф<br/>Skype: МояКомпания</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="map">');
        
        doc.write('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.3822912365113!2d56.06220034888445!3d54.77324664510765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4dde9f9fefbbaab!2z0J_QsNGA0Log0JrQsNGI0LrQsNC00LDQvQ!5e0!3m2!1sru!2sru!4v1480950961789" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "9") {
        
        var id = page.indexOf("contact");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"c","contact","Контакты #3");

        doc.write('<div class="contact-3" id="contact'+id+'">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="items">');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="icon"></div>');
        
        doc.write('<div class="text">Уфа</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">Офис</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="info">');
        
        doc.write('<div class="text">адрес@моякомпания.рф<br/><br/>8 800 800 80 80<br/><br/>г. Уфа, Маршала Жукова, 450105</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="icon"></div>');
        
        doc.write('<div class="text">Москва</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">Офис</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="info">');
        
        doc.write('<div class="text">адрес@моякомпания.рф<br/><br/>8 800 800 80 80<br/><br/>г. Москва, Крымский Вал, 119049</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="item">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="icon"></div>');
        
        doc.write('<div class="text">Екатеринбург</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">Офис</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="info">');
        
        doc.write('<div class="text">адрес@моякомпания.рф<br/><br/>8 800 800 80 80<br/><br/>г. Екатеринбург, Бориса Ельцина, 620031</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "10") {
        
        var id = page.indexOf("contact");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"c","contact","Контакты #4");

        doc.write('<div class="contact-4" id="contact'+id+'">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="info">');
        
        doc.write('<div class="text">Наш адрес: г. Уфа, Маршала Жукова, 450105<br/><br/>Тел: 8 800 800 80 80<br/><br/>Факс: 8 800 800 80 80<br/><br/>Email: адрес@моякомпания.рф<br/><br/>Skype: МояКомпания</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="map">');
        
        doc.write('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.3822912365113!2d56.06220034888445!3d54.77324664510765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4dde9f9fefbbaab!2z0J_QsNGA0Log0JrQsNGI0LrQsNC00LDQvQ!5e0!3m2!1sru!2sru!4v1480950961789" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "11") {
        
        var id = page.indexOf("contact");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"c","contact","Контакты #5");

        doc.write('<div class="contact-5" id="contact'+id+'">');
        
        doc.write('<div class="map">');
        
        doc.write('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.3822912365113!2d56.06220034888445!3d54.77324664510765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4dde9f9fefbbaab!2z0J_QsNGA0Log0JrQsNGI0LrQsNC00LDQvQ!5e0!3m2!1sru!2sru!4v1480950961789" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "12") {
        
        var id = page.indexOf("contact");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"c","contact","Контакты #6");

        doc.write('<div class="contact-6" id="contact'+id+'">');
        
        doc.write('<div class="name">');
        
        doc.write('<div class="text">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="info">');
        
        doc.write('<div class="text">Наш адрес: г. Уфа, Маршала Жукова, 450105<br/><br/>Тел: 8 800 800 80 80<br/><br/>Факс: 8 800 800 80 80<br/><br/>Email: адрес@моякомпания.рф<br/><br/>Skype: МояКомпания</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "13") {
        
        var id = page.indexOf("content");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"cc","content","Контент #1");

        doc.write('<div class="content-1" id="content'+id+'">');
        
        doc.write('<div class="info">');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">Они наступают — мы наступаем.</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">Мы отважно сражаемся, чтобы увидеть проблеск света в этой нескончаемой войне... хоть на мгновение. Война — это целый мир, а мир охвачен войной, где за каждым прицелом стоит человек. И эти люди — мы. Прожжённые жизнью и наивные, честные и преступники. Мы созданы для легенд, но не войдём в историю. Мы — небесные рыцари. Мы — пустынные призраки. Мы — траншейные крысы. И это наши истории.</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="video">');
        
        doc.write('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/7gKcuKkdA1w" frameborder="0" allowfullscreen></iframe>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "14") {
        
        var id = page.indexOf("content");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"cc","content","Контент #2");

        doc.write('<div class="content-2" id="content'+id+'">');
        
        doc.write('<div class="info">');
        
        doc.write('<div class="title">');
        
        doc.write('<div class="text">Они наступают — мы наступаем.</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="text">Мы отважно сражаемся, чтобы увидеть проблеск света в этой нескончаемой войне... хоть на мгновение. Война — это целый мир, а мир охвачен войной, где за каждым прицелом стоит человек. И эти люди — мы. Прожжённые жизнью и наивные, честные и преступники. Мы созданы для легенд, но не войдём в историю. Мы — небесные рыцари. Мы — пустынные призраки. Мы — траншейные крысы. И это наши истории.</div>');
        
        doc.write('<div class="buttons">');
        
        doc.write('<div class="btn"><div class="text">Кнопка</div></div>');
        
        doc.write('<div class="btn"><div class="text">Кнопка</div></div>');
        
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('<div class="video">');
        
        doc.write('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/7gKcuKkdA1w" frameborder="0" allowfullscreen></iframe>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    } else if (type == "15") {
        
        var id = page.indexOf("content");
        
        if(id > 0) {
            var id = id;
        } else if(id < 0) {
            var id = type;
        }
        
        builder_sections(""+id,"cc","content","Контент #3");

        doc.write('<div class="content-3" id="content'+id+'">');
        
        doc.write('<div class="cons">');
        
        doc.write('<div class="cn">');

        doc.write('<div class="title">');

        doc.write('<div class="text">Контент</div>');    
    
        doc.write('</div>');
    
        doc.write('<div class="text">У меня больше нет конкурентов — в этом моя драма. Я создал чудовище и теперь должен с ним жить.</div>');    
    
        doc.write('</div>');
        
        doc.write('<div class="cn">');

        doc.write('<div class="title">');

        doc.write('<div class="text">Контент 2</div>');    
    
        doc.write('</div>');
    
        doc.write('<div class="text">У меня больше нет конкурентов — в этом моя драма. Я создал чудовище и теперь должен с ним жить.</div>');    
    
        doc.write('</div>');
        
        doc.write('<div class="cn right">');

        doc.write('<div class="title">');

        doc.write('<div class="text">Контент 3</div>');    
    
        doc.write('</div>');
    
        doc.write('<div class="text">У меня больше нет конкурентов — в этом моя драма. Я создал чудовище и теперь должен с ним жить.</div>');    
    
        doc.write('</div>');
        
        doc.write('</div>');
        
        doc.write('</div>');

    }
    
    doc.close();
                
}