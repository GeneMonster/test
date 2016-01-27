(function () {

	function Index() {
		console.log('Index init...');
	};

	Index.prototype.base = function () {
		console.log('Base...');
	};

	var index = new Index();

	index.base();
	
})();