
(function(){
    const googletag = window.googletag || {};
	const breakpoints = [1280, 1084, 1024, 768, 600, 460, 360, 320];
    let viewportWidthOrig = window.innerWidth;
	let resizeTimeout;
	function getBreakPoint(breakpoint, index){
		const param = this[0];
		// bigger to smaller than breakpoint OR smaller to bigger than breakpoint
		if ((viewportWidthOrig > breakpoint && window.innerWidth <= breakpoint)
			|| (viewportWidthOrig < breakpoint && window.innerWidth >= breakpoint)) {
			if( googletag.pubadsReady && param === 'resize') {
				googletag.pubads().clear();
				googletag.pubads().refresh();
			}
			return true; //break loop if we found traversed breakpoint
		}
	}

	document.addEventListener('DOMContentLoaded', function(event){
		const eventType = event.type;
		breakpoints.some( getBreakPoint, [eventType] );
	});

	window.addEventListener('resize', function(event){
		const eventType = event.type;
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function(){
			breakpoints.some( getBreakPoint, [eventType] );
			viewportWidthOrig = window.innerWidth;
		}, 100);
	});

})();
