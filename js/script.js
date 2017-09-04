	window.onscroll = function() {
		scrollFunction()
	};

	function scrollFunction() {
	    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
	        document.getElementById("topBtn").style.display = "block";
	    } else {
	        document.getElementById("topBtn").style.display = "none";
	    }
	}

	function topFunction() {
	    document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
	}
