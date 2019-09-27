function playvideo() {
	var maintitle = document.getElementById("maintitle");
	var introductionvideo = document.getElementById("video");
	maintitle.style.display = "none";
	introductionvideo.style.display = "block";
}

function finished() {
	var maintitle = document.getElementById("maintitle");
	var introductionvideo = document.getElementById("video");
	maintitle.style.display = "block";
	introductionvideo.style.display = "none";
}