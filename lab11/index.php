<?php

require_once 'parser/RSSParser.php';

$xml = xml_parser_create();
$obj = new Parser\RSSParser();

xml_set_object($xml, $obj);
xml_set_element_handler($xml, 'startElement', 'endElement');
xml_set_character_data_handler($xml, 'characterData');
xml_parser_set_option($xml, XML_OPTION_CASE_FOLDING, false);

$feed = 'https://news.yandex.ru/index.rss';

$fp = fopen($feed, 'r') or die("Can't read XML data!");

while ($data = fread($fp, 4096)) {
    xml_parse($xml, $data, feof($fp)) or die("Can't parse XML data!");
}

fclose($fp);

xml_parser_free($xml);

