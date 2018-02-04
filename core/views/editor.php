<?php

$menu = $_SERVER['REQUEST_URI'];

?>
<div class="menu">
            <div class="logo">LPCORE</div>
            <div class="menu">
                <a href="/editor"<?php if($menu == "/editor") { echo ' class="active"'; } else {} ?>><div class="text">РЕДАКТОР</div></a>
                <a href="/editor/orders"<?php if($menu == "/editor/orders") { echo ' class="active"'; } else {} ?>><div class="text">ЗАЯВКИ</div></a>
                <a href="/editor/services"<?php if($menu == "/editor/services") { echo ' class="active"'; } else {} ?>><div class="text">СЕРВИСЫ</div></a>
                <a href="/editor/settings"<?php if($menu == "/editor/settings") { echo ' class="active"'; } else {} ?>><div class="text">НАСТРОЙКИ</div></a>
            </div>
            <div class="user">wencms@gmail.com</div>
        </div>
<?php

if($menu == "/editor") {
    
?>
        <div class="builder" id="menu">
            <div class="menu_notif" id="menu_notif"></div>
            <div class="section" onclick="builder_add('1')">
                <img src="/core/elements/header/1.png"/>
            </div>
            <div class="section" onclick="builder_add('2')">
                <img src="/core/elements/header/2.png"/>
            </div>
            <div class="section" onclick="builder_add('3')">
                <img src="/core/elements/header/3.png"/>
            </div>
            <div class="section" onclick="builder_add('4')">
                <img src="/core/elements/header/4.png"/>
            </div>
            <div class="section" onclick="builder_add('5')">
                <img src="/core/elements/header/5.png"/>
            </div>
            <div class="section" onclick="builder_add('6')">
                <img src="/core/elements/header/6.png"/>
            </div>
            <div class="section" onclick="builder_add('7')">
                <img src="/core/elements/contact/1.png"/>
            </div>
            <div class="section" onclick="builder_add('8')">
                <img src="/core/elements/contact/2.png"/>
            </div>
            <div class="section" onclick="builder_add('9')">
                <img src="/core/elements/contact/3.png"/>
            </div>
            <div class="section" onclick="builder_add('10')">
                <img src="/core/elements/contact/4.png"/>
            </div>
            <div class="section" onclick="builder_add('11')">
                <img src="/core/elements/contact/5.png"/>
            </div>
            <div class="section" onclick="builder_add('12')">
                <img src="/core/elements/contact/6.png"/>
            </div>
            <div class="section" onclick="builder_add('13')">
                <img src="/core/elements/content/1.png"/>
            </div>
            <div class="section" onclick="builder_add('14')">
                <img src="/core/elements/content/2.png"/>
            </div>
            <div class="section" onclick="builder_add('15')">
                <img src="/core/elements/content/3.png"/>
            </div>
        </div>

        <div class="sections" id="sections"></div>

        <div class="sections_notif" id="sections_notif"></div>

        <div id="settings"></div>

        <div class="editor">
            <iframe id="page" width="100%" height="100%" src="/editor/site"></iframe>
            <div class="addnotif" id="notif"></div>
            <div class="add" onclick="builder_menu()">Добавить секцию</div>
            <script>builder('');</script>
        </div>    

<?php
    
} else if($menu == "/editor/orders") {

?>

        <div class="page">
    
            <div class="name">Мои Заявки</div>
    
            <div class="wapper"></div>

        </div>

<?php
    
} else if($menu == "/editor/services") {

?>

        <div class="page">
    
            <div class="name">Сервисы</div>
    
            <div class="wapper"></div>

        </div>

<?php
    
} else if($menu == "/editor/settings") {

?>

        <div class="page">
    
            <div class="name">Настройки</div>
    
            <div class="wapper"></div>

        </div>

<?php
    
}

?>