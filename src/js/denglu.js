$(function () {
    var isok = true;

    function qh() {
        var timer;
        if (isok) {
            $('.container-right-wrap').hide();
            $('#qrLogin').show();
            timer = setTimeout(function () {
                $('#qrScanFaild').show();
            }, 20000)
        } else {
            $('#qrLogin').hide();
            $('.container-right-wrap').show();
            clearTimeout(timer);
            $('#qrScanFaild').hide();
        }
        isok = !isok;
    }
    $('.container-ewm').on('click', function () {
        qh();
    });
    var timer;
    $('.sm-pic').on('mouseenter', '.sm-pic-left', function () {
        timer = setTimeout(function () {
            $('.sm-pic-left').stop().animate({
                'margin-left': 0,
            }, function () {
                $('.sm-pic-right').fadeIn();
            });
        }, 1000)
    });
    $('.sm-pic').mouseleave(function () {
        clearTimeout(timer);
        $('.sm-pic-right').hide();
        $('.sm-pic-left').stop().animate({
            'margin-left': 88,
        })
    });
    $('#IsRemberName').on('click', function () {
        if ($(this).prop("checked")) {
            $('.login-prompt').show();
        } else {
            $('.login-prompt').hide();
        }
    })

    function pd() {
        if ($('#UserName').val()) {
            $('#idPrompt').children('.input-prompt').hide();
            if ($('#UserPassword').val()) {
                $('#idPrompt').children('.input-prompt').hide();
                $.ajax({
                    type: 'post',
                    url: '../api/yhxinxi.php',
                    async: true,
                    data: {
                        username: $('#UserName').val(),
                        password: $('#UserPassword').val()
                    },
                    success: function (str) {
                        if (str == 'yes') {
                            setCookie('username', $('#UserName').val(), 3);
                            location.href = '../ind.html'
                        } else {
                            $('#idPrompt .prompt-size').html('您输入的账户名不存在或密码不匹配，请从新输入！');
                            $('#idPrompt .input-prompt').show();
                        }
                    }
                })
            } else {
                $('#pwdPrompt').children('.input-prompt').show();
                $('#pwdPrompt').find('span').html('请输入您的密码！');
            }
        } else {
            $('#idPrompt').children('.input-prompt').show();
            $('#idPrompt').find('span').html('登录名不能为空！');
        }
    }
    $('#LoginButton').on('click', function () {
        pd();

    })
    $('#UserName').on('input', function () {
        if ($('#UserName').val()) {
            $('#idPrompt').children('.input-prompt').hide();
        } else {
            $('#idPrompt').children('.input-prompt').show();
            $('#idPrompt').find('span').html('登录名不能为空！');
        }
    })
    $('#UserPassword').on('input', function () {
        if ($('#UserPassword').val()) {
            $('#pwdPrompt').children('.input-prompt').hide();
        } else {
            $('#pwdPrompt').children('.input-prompt').show();
            $('#pwdPrompt').find('span').html('请输入您的密码！');
        }
    })
    $('#header').load('dlzchead.html', function () {
        $('.header-list2').html('欢迎登录');
    })
    $('#footer').load('dlzcfoot.html');
})