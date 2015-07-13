(function() {

    /* Utilities */

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }


    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }


    /* Site */

    var $cover = document.getElementById('cover'),
        $loadingIcon = document.getElementById('loading-icon');

    function fadeOut(el, ms, callback) {
        var opacity = 1,
            interval = 50,
            gap = interval / ms;

        function fade() {
            opacity -= gap;
            el.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(fading);
                el.style.display = 'none';
                callback.apply();
            }
        }

        var fading = setInterval(fade, interval);
    }

    function init() {
        if ($cover) {
            setTimeout(function() {
                fadeOut($cover, 1750, function() {
                    $loadingIcon.style.display = 'none';
                    document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace(/(?:^|\s)loading(?!\S)/g, '');
                });
            }, 1500);
        } else {
            document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace(/(?:^|\s)loading(?!\S)/g, '');
        }


    }

    init();


}());
