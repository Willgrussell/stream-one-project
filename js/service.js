app.animation('.slide-toggle-js', function () {
    return {
        enter: function (element, done) {
            $(element).hide().slideDown(function () {
                done();
            });
        }
        , leave: function (element, done) {
            $(element).slideUp(function () {
                done();
            });
        }
    };
});