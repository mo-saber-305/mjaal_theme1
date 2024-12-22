$(document).ready(function () {
    $('.auth-sec .right-sec .middle-box .otp-box .otp-input').on('input', function () {
        if ($(this).val().length === 1) {
            // Move to the next input if it exists
            $(this).next('.otp-input').focus();
        }
    });

    $('.auth-sec .right-sec .middle-box .otp-box .otp-input').on('keydown', function (e) {
        if (e.key === 'Backspace' && $(this).val() === '') {
            // Move to the previous input if it exists
            $(this).prev('.otp-input').focus();
        }
    });
});