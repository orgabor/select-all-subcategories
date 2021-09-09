(function( $ ) {
	'use strict';

	jQuery(document).ready(function ($) {
		
		$('#categorychecklist.categorychecklist li label input[type="checkbox"]').on('click', function () {
			//console.log(event);
			const selector = $('#category-' + $(this).val() + ' ul.children li label input[type="checkbox"]');
			var checked = false;
			if ($(this).is(":checked")) {
				var checked = true
			}
			console.log({selector, checked})
			$(selector).each(function (index) {
				$(this).prop("checked", checked);
			});
		});
	})	

})( jQuery );
