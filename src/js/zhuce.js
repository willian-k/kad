$(function () {
    $('#header').load('dlzchead.html', function () {
        $('.header-list2').html('欢迎注册');
        $('.header').append('<div class="header-list3">已有账号，<a href="denglu.html">立即登录&gt;</a></div>');
    })
    $('#footer').load('dlzcfoot.html');

    function open() {
        var isok = true;

        $('#isShowPwd').on('click', function () {
            if (isok) {
                $(this).addClass('open');
                $('#txtPwd').attr('type', 'text');
            } else {
                $(this).removeClass('open');
                $('#txtPwd').attr('type', 'password');
            }
            isok = !isok;
        })
    }
    open();
    var isok1 = false;
    $('#txtMobile').on('blur', function () {
        var reg = /^1[3-9]\d{9}$/
        if ($('#txtMobile').val()) {
            if (reg.test($('#txtMobile').val())) {
                $.ajax({
                    type: 'post',
                    url: '../api/chongfu.php',
                    async: true,
                    data: 'username=' + $('#txtMobile').val(),
                    success: function(str){
                        if(str == 'yes'){
                            $('#mobileIcon').hide();
                            $('#mobileErrorMsg').show();
                            $('#mobileErrorMsg').children('.prompt-size').html('该手机号已存在，您可以直接使用该号码进行 <a href="denglu.html"> 直接登录</a>！');
                        }else{
                            isok1 = true;
                            $('#mobileIcon').show();
                            $('#mobileErrorMsg').hide();
                        }
                    }
                })
            } else {
                $('#mobileIcon').hide();
                $('#mobileErrorMsg').show();
                $('#mobileErrorMsg').children('.prompt-size').html('手机号码不正确！');
                isok1 = false;
            }
        } else {
            $('#mobileIcon').hide();
            $('#mobileErrorMsg').show();
            $('#mobileErrorMsg').children('.prompt-size').html('请输入手机号码!');
            isok1 = false;
        }
        isko();
    })
    var isok2 = false;
    $('#txtPwd').on('keyup', function () {
        var reg = /^[a-zA-Z0-9]\w{5,7}$/;
        if ($('#txtPwd').val()) {
            if (reg.test($('#txtPwd').val())) {
                isok2 = true;
                $('#pwdErrorMsg').hide();
            } else {
                $('#pwdErrorMsg').show();
                $('#pwdErrorMsg').children('.prompt-size').html('密码长度必须大于六位数！');
                isok2 = false;
            }
        } else {
            $('#pwdErrorMsg').show();
            $('#pwdErrorMsg').children('.prompt-size').html('请输入密码！');
            isok2 = false;
        }
        isko();
    })
    var isok3 = false;

    function isko() {
        if (isok1 && isok2) {
            $('#getCode').removeClass('background-gray');
            isok3 = true;
        } else {
            $('#getCode').addClass('background-gray');
            isok3 = false;
        }
    }
    var arr;
    $('#getCode').on('click', function () {
        if (isok3) {
            $.ajax({
                type: 'post',
                url: '../api/duanxin.php',
                async: true,
                data: 'userphone=' + $('#txtMobile').val(),
                success: function (str) {
                    arr = JSON.parse(str);
                    console.log(arr);
                }
            })
            var a = 30;
            var timer = setInterval(function () {
                $('#getCode').attr('disabled', true);
                $('#getCode').html('请稍等' + a + '秒!');
                $('#getCode').addClass('background-gray');
                isok3 = false;
                if (a < 0) {
                    clearInterval(timer);
                    isok3 = true;
                    $('#getCode').html('点击获取短信验证码');
                    $('#getCode').removeClass('background-gray');
                }
                a--;
            }, 1000)

        }
    })
    var isok4 = false;
    $('#txtMobileCode').on('keyup', function () {
        var reg = /^\d{6}$/;
        if (reg.test($('#txtMobileCode').val())) {
            $('#toLogin').removeClass('background-gray');
            isok4 = true;
        } else {
            $('#toLogin').addClass('background-gray');
            isok4 = false;
        }
    })
    $('#toLogin').on('click', function () {
        if (isok4) {
            if ($('#txtMobileCode').val() == arr.phonecode) {
                $.ajax({
                    type: 'post',
                    url: '../api/zhuce.php',
                    async: true,
                    data: {
                        username: $('#txtMobile').val(),
                        password: $('#txtPwd').val()
                    },
                    success: function(str) {
                        console.log(str);
                    }
                })
                location.href = '../ind.html';
                setCookie('username',$('#txtMobile').val(),3);
            } else {
                $('#mobileCodeErrorMsg').show();
            }
        }
    })
})