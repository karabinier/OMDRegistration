$(document).ready(function()
	{
		// Set specific variable to represent all iframe tags.
		var iFrames = document.getElementById('fallback');

		// Resize heights.
		function iResize()
		{
			// Iterate through all iframes in the page.
			/*for (var i = 0, j = iFrames.length; i < j; i++)
			{*/
				// Set inline style to equal the body height of the iframed content.
				iFrames.style.height = iFrames.contentWindow.document.body.offsetHeight + 'px';
			/*}*/
		}
			// For other good browsers.
			$('#fallback').load(function()
				{
					// Set inline style to equal the body height of the iframed content.
					this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
				}
			);
    
    
    
		// Check if browser is Safari or Opera.
	/*	if ($.browser.safari || $.browser.opera)
		{
			// Start timer when loaded.
			$('#fallback').load(function()
				{
					setTimeout(iResize, 0);
				}
			);

	*/		// Safari and Opera need a kick-start.
		//	for (var i = 0, j = iFrames.length; i < j; i++)
		//	{
	/*			var iSource = iFrames.src;
				iFrames.src = '';
				iFrames.src = iSource;
		//	}
		}
		else
		{

		}
	*/
    }
);