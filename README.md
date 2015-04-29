# HtmlEditorScripts

Enable `<script>` tags in SilverStripe’s `HtmlEditorField`. An implementation of [this PR](https://github.com/silverstripe/silverstripe-framework/pull/3617) to enable this functionality in 3.1.

## Installation

`composer require kinglozzer/htmleditorscripts`

No extra setup is needed as this module adds `<script>` tags to `extended_valid_elements`.

## Notes

- Only set up to work with the default CMS `HtmlEditorConfig` instance. Copy the approach in `_config.php` to enable it in other config instances;
- Prevents other `editor.onSaveContent` plugin events firing: as we can’t remove the SilverStripe event that strips the `<script>` tags (as we don’t have a variable to reference in `ed.onSaveContent.remove()`), we have to simply stop other events from running.
