$.ajax({
    url: "checkauth.php",
    type: "GET",
    data: ({}),
    dataType: "json",
    success: function(request) {
        if (request === "Good") {
            window.location.href = "main.php";
        }
    }
});


jQuery(document).ready(function() {
    var user;
    $.ajax({
        url: "sso.php",
        type: "GET",
        data: ({}),
        dataType: "json",
        success: function(request) {
            user = request['login_ad'];
            console.log(request);
            $(".profile-image-login").attr("src", "photo/" + request['login_ad'] + ".jpg")
            $('.header').text(request['name']);
        }
    });
    $(".auth").click(function() {
        var pass = $("#password").val();
        $.ajax({
            url: "auth.php",
            type: "GET",
            data: ({ AuthPass: pass, AuthUser: user }),
            dataType: "json",
            success: function(request) {
                if (request !== null) {
                    $.ajax({
                        url: "login.php",
                        type: "GET",
                        data: ({}),
                        dataType: "json",
                        success: function(request) {
                            window.location.href = "main.php";
                        }
                    });


                }
            }
        });
    });
    particlesJS.load('particles-js', '/particles.js-master/particles.json');
});