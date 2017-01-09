(function($) {
    var $box = $("#box");
    var $bg = $("#bg");
    var $bgcolor = $("#bgcolor");
    var $btn = $("#btn");
    var $process = $("#process");
    var status = false;
    var ox = 0;
    var left = 0;
    var bgleft = 0;
    
    var setBtnPosition = function (left) {
        $btn.css('left',left);
        $bgcolor.width(left);
        $process.html('Rrocess: ' + parseFloat(left/2).toFixed(2) + '%');
    };
    
    $btn.mousedown(function (e) {
        ox = e.pageX - left;
        status = true;
    });

    $(document).mouseup(function (e) {
        status = false;
    });

    $box.mousemove(function (e) {
        if(status) {
            left = e.pageX - ox;
            if(left < 0) {
                left = 0;
            }
            if(left > 200) {
                left = 200;
            }
            setBtnPosition(left);
        }
    });
    
    $bg.click(function (e) {
        if(!status) {
            bgleft = $bg.offset().left;
            left = e.pageX - bgleft;
            if(left < 0) {
                left = 0;
            }
            if(left > 200) {
                left = 200;
            }
            setBtnPosition(left);
        }
    })

})(jQuery);
