<?php

    header('content-type:text/html;charset=utf-8');
    
	$url = "https://api.douban.com/v2/movie/in_theaters";

    $content = file_get_contents($url);
	
	echo $content;
