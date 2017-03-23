/**
 * Created by sam on 17-3-20.
 */
(function($) {
    $.fn.setDiv = function(opt) {
        $this = $(this);
        var defaultOpt = {
            width: 100,
            height: 100,
            backgroundColor: '#000'
        };

        var opt = $.extend({}, defaultOpt, opt);

        var setStyle = function(opt) {
            $this.css(opt);
        };

        setStyle(opt);
    };

    $(document).ready(function () {
        $('[data-setdiv]').each(function () {
            $this = $(this);
            var opt = {
                width: $this.attr('data-width'),
                height: $this.attr('data-height'),
                backgroundColor:$this.attr('data-color')
            };
            $this.setDiv(opt);
            $this.removeAttr('data-setdiv');
        });
    });
})(jQuery);