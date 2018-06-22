$(document).ready(() => {
    $('#run').click((event) => {
        event.preventDefault();
        loop();
    });

    $('#stop').click((event) => {
        event.preventDefault();
        noLoop();
    });

    $('#reset').click((event) => {
        event.preventDefault();
        reset();
    });

    $('#R').hover(() => {
        $(document).mousemove(() => {
            $('#Rval').text($('#R').val());
        })
    });

    $('#G').hover(() => {
        $(document).mousemove(() => {
            $('#Gval').text($('#G').val());
        })
    });

    $('#B').hover(() => {
        $(document).mousemove(() => {
            $('#Bval').text($('#B').val());
        })
    });

    $('#multi-color').click(() => {
        $('input[type=range]').prop('disabled', $('#multi-color').prop('checked'));
    })
});
