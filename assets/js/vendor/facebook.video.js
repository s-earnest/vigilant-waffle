window.fbAsyncInit = function() {
    FB.init({
        appId      : '{your-app-id}',
        xfbml      : true,
        version    : 'v2.5'
    });
    // VIDEO PLAYER
    $('.video-inner').click(function(){
        $(this).fadeOut(300);
        my_second_video_player.play();
    })
    // Get Embedded Video Player API Instance
    var my_first_video_player;
	var my_second_video_player;
    FB.Event.subscribe('xfbml.ready', function(msg) {
        if (msg.type === 'video') {
			if (msg.id === 'animation-video'){
				my_first_video_player = msg.instance;
				my_first_video_player.subscribe('finishedPlaying', function(e) {
					my_first_video_player.play();
            	});
			} else if (msg.id === 'promo-video'){
				my_second_video_player = msg.instance;			
			}
        }
    });
};
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));