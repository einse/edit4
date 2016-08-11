const removeTheIntro = function () {
	$("#intro").remove();
};

$(document).keypress(function (e) {
	if (e.keyCode === 13) { /* enter */
		// Create new paragraph
		var focused = $(".p:focus");
		focused.after('<div class="p" contentEditable="true"></div>').next().focus();
		e.preventDefault();
		// Highlight the 1st paragraph like others ("as usual").
		var pInitial = $(".p-initial");
		if (pInitial.length === 1) {
			pInitial.removeClass("p-initial");
		}
	}
});

$(document).keydown(function (e) {
	if (e.keyCode === 38) { /* up */
		//var latestPosition = ...;
		//var currentPosition = ...;
	}
});
