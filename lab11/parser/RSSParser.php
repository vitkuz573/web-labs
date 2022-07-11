<?php

namespace Parser;

require_once 'RSSItem.php';

class RSSParser {
    var $tag;
    var $item;

    function startElement($parser, $tag, $attributes)
    {
        if ('item' == $tag) {
            $this->item = new RSSItem();
        } elseif (!empty($this->item)) {
            $this->tag = $tag;
        }
    }

    function endElement($parser, $tag)
    {
        if ('item' == $tag) {
            $this->item->display();
            unset($this->item);
        }
    }

    function characterData($parser, $data)
    {
        if (!empty($this->item)) {
            if (isset($this->item->{$this->tag})) {
                $this->item->{$this->tag} .= trim($data);
            }
        }
    }
}