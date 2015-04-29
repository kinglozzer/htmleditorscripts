<?php

$cmsConfig = HtmlEditorConfig::get('cms');

$cmsConfig->enablePlugins(
	array('htmleditorscripts' => '../../../' . basename(dirname(__FILE__)) . '/javascript/editor_plugin_src.js')
);

$validEls = $cmsConfig->getOption('extended_valid_elements');
$validEls .= ',script[async|crossorigin|defer|language|src|type]';
$cmsConfig->setOption('extended_valid_elements', $validEls);
