$(function(){
	var imgs=["https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_01.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_02.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_03.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_04.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_05.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_06.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_07.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_08.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_09.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_10.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_11.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_12.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_13.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_14.webp", "https://cdn.jsdelivr.net/gh/xiao-lin52/cdn-assets/images/background_15.webp"];
	if ('true' == 'true') {
	function shuffle(arr){
		/*From countercurrent-time*/
		var n = arr.length;
		while(n--) {
		var index = Math.floor(Math.random() * n);
		var temp = arr[index];
		arr[index] = arr[n];
		arr[n] = temp;
		}
	}
	shuffle(imgs);
	}
	if ('body') {
	$('body').backstretch(
		imgs,
	{
		duration: "40000",
		fade: "1500"
	});
	} else {
	$.backstretch(
		imgs,
	{
		duration: "40000",
		fade: "1500"
	});
	}
});