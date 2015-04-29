/**
 * editor_plugin_src.js
 */

(function($, tinymce) {
	tinymce.create('tinymce.plugins.HtmlEditorScripts', {
		init : function(ed, url) {
			ed.onSaveContent.addToTop(function(ed, o) {
				var content = $(o.content);
				content.find('.ss-htmleditorfield-file.embed').each(function() {
					var el = $(this);
					var shortCode = '[embed width="' + el.attr('width') + '"'
										+ ' height="' + el.attr('height') + '"'
										+ ' class="' + el.data('cssclass') + '"'
										+ ' thumbnail="' + el.data('thumbnail') + '"'
										+ ']' + el.data('url')
										+ '[/embed]';
					el.replaceWith(shortCode);
				});

				// Insert outerHTML in order to retain all nodes incl. <script>
				// tags which would've been filtered out with jQuery.html().
				// Note that <script> tags might be sanitized separately based on editor config.
				o.content = '';
				content.each(function() {
					if(this.outerHTML !== undefined) {
						o.content += this.outerHTML;
					}
				});

				// Prevent other onSaveContent events firing
				return false;
			});
		},

		getInfo : function() {
			return {
				longname : 'HtmlEditorScripts',
				author : 'Loz Calver',
				authorurl : 'https://github.com/kinglozzer',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('htmleditorscripts', tinymce.plugins.HtmlEditorScripts);
})(jQuery, tinymce);
