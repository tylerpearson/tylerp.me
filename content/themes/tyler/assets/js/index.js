(function() {

    if ($('body').hasClass('home-template')) {

        var DRIBBBLE_API_TOKEN = '2982b6f5520299137430aac46d2532cc3b00583ff8c39378471b5e5cf6117c61';

        $.get('https://api.dribbble.com/v1/users/tylerpearson/shots?access_token=' + DRIBBBLE_API_TOKEN)
            .then(function(shots) {
                var html = [];

                for (var i=0; i<10; i++) {
                    var shot = shots[i];
                    html.push('<li class="shot-wrap" style="background-image: url(' + shot.images.normal + ');">');
                    html.push('<a href="' + shot.html_url + '">' + shot.title + '</a>');
                    html.push('</li>');
                }

                $('.js-dribbble-list').html(html.join(''));
            });
    }

}());
