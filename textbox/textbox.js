/**
 *
 * Created by zhanghongdou on 2017/4/13.
 */
$.fn.textbox = function() {
    var $this = $(this);
    var $input = $this.find('input');
    var _switchLabel = function() {
        if ($input.val()) {
            $this.addClass('focus');
        } else {
            $this.removeClass('focus');
        }
    }

    $input.on('focusin', function() {
        $this.addClass('focus');
    });
    $input.on('focusout', function() {
        if (!$input.val()) {
            $this.removeClass('focus');
        }
    });
    $input.on('change', _switchLabel);
    _switchLabel();
};
$(document).ready(function() {
    $("[data-textbox]").each(function(index, item) {
        $(item).textbox();
        $(item).attr('textbox-load', '');
        $(item).removeAttr("data-textbox")
    });
});