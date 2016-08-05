const removeTheIntro = function () {
	$("#intro").remove();
};

$(document).keypress(function (e) {
	if (e.keyCode === 13) { /* enter */
		var focused = $(".p:focus");
		focused.after('<div class="p" contentEditable="true"></div>').next().focus();
		e.preventDefault();
	}
});

$(document).keydown(function (e) {
	if (e.keyCode === 38) { /* up */
		//var latestPosition = ...;
		//var currentPosition = ...;
	}
});
