(function($) {
    $.fn.disclaimer = function(options) {
        var defaultOptions = {
            color : 'red',
            fontSize : '14px',
            isCapitalize : true
        };

        var opt = $.extend({},defaultOptions,options);
        var $this = $(this);

        $this.css({
            color : opt.color,
            fontSize : opt.fontSize
        });

        if(opt.isCapitalize) {
            $this.css('textTransform','capitalize');
        } else {
            $this.css('textTransform','uppercase');
        }

        $this.text('this is testing text for text-disclaimer plugin');
    };

    $(document).ready(function() {
        $('[data-disclaimer]').each(function(index,item) {
            $item = $(item);
            $item.disclaimer({
                color : $item.data('color'),
                fontSize : $item.data('fontsize'),
                isCapitalize : $item.data('iscapitalize')
            });
            $item.removeAttr('data-disclaimer');
        });
    });
})(jQuery);
