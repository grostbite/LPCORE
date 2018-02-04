<html>

    <head>
    
        <title>LPCORE: <?php echo $name; ?></title>
        
        <meta charset="utf-8"/>
        
        <meta name="generator" content="LPCORE (lpcore.ru)"/>
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		
		<link rel="stylesheet" type="text/css" href="/core/default/css/style.css"/>
        
        <script type="application/javascript" src="/core/default/js/main.js"></script>
        
    </head>
    
    <body>
        
        <div class="start" id="menu">
            <div class="block">
                <div class="text">LPCORE</div>
            </div>
            <div class="block">
                <div class="notif">
                    <div class="text">
                        Попробуй, это действительно просто
                    </div>
                </div>
                <a href="/start" class="button">Создать Landing Page бесплатно</a>
            </div>
        </div>
    
        <?php include "core/views/".$content_view; ?>
        
        <div class="footer">
            <div class="panel">
                <div class="text">&copy; Разработка и поддержка веб-сервиса. Хайбуллин Д. Д., <?php echo date('Y'); ?></div>
                <div class="contact">wencms@gmail.com (по вопросам сотрудничества)</div>
            </div>
        </div>
    
    </body>
    
</html>