<?php

namespace Parser;

class RSSItem {
    var $title = '';
    var $description = '';
    var $link = '';
    var $pubDate = '';

    function display()
    {
        printf('<p><a href="%s">%s</a><br />%s<br />Дата публикации: %s</p>', $this->link, htmlspecialchars($this->title), htmlspecialchars($this->description), date('d.m.y h:i:s', strtotime($this->pubDate)));
    }
}
