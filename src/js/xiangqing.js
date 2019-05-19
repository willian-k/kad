$(function () {
    $('#layout1').load('syhead.html', function () {
        $('.lNav').hide();
        $('.categorys').on('mouseover', function () {
            $('.lNav').show();
        });
        $('.categorys').on('mouseout', function () {
            $('.lNav').hide();
        });
        $('#nav').css('background', 'none');
    });
    $('.wrap_footer').load('syfoot.html');
    var data1 = decodeURI(location.search).slice(1);
    console.log(data1);
    $.ajax({
        type: 'post',
        url: '../api/xiangqing.php',
        async: false,
        data: {
            id: data1,
        },
        success: function (str) {
            var arr = JSON.parse(str);
            console.log(arr);
            var res = arr.map(function (item) {
                return `
                            <a href="../ind.html">首页</a> &gt;
                            <a href="liebiaoye.html" class="noIndx" target="_self" title="药品">
                                药品
                            </a>
                            &gt; <a class="dtl-nav-lastbule" href="javascript:;">${item.name}</a>
                        `
            }).join('');
            $('.wrap-dtl-nav').html(res);
            var res2 = arr.map(function (item) {
                return `<li>
                            <div class="small-img">
                                <img src="${item.img}" />
                            </div>
                        </li>`
            }).join('');
            for (var i = 0; i < 3; i++) {
                res2 += res2;
            }
            $('.animation03').html(res2);
            var res3 = arr.map(function (item) {
                return `<span class="Yico_wai Yico_wai1" style="width: 20px;" title="本品为外用药品，请勿口服！"></span>
                        <span class="Yico_aotc" title="本品为甲类非处方药品，请仔细阅读说明书并按说明使用，或在药师指导下购买和使用"></span>
                        <h1>【正品维价】${item.name}</h1>`
            }).join('');
            $('.prem-proname').html(res3);
            var res4 = arr.map(function (item) {
                return `${item.describe}`
            }).join('');
            $('.prem-prodesc').html(res4);
            var res5 = arr.map(function (item) {
                return `<span class="nophone-rspan1">￥</span>
                        <span class="nophone-rspan2" id="saleprice_value">${item.perice}</span>
                        <span class="grey888 nophone-rspan3">￥<font id="original_price">${item.old_perice}</font></span>`
            }).join('');
            $('.nophone-r').html(res5);
        }
    });
    var magnifierConfig = {
        magnifier: "#magnifier1", //最外层的大容器
        width: 400, //承载容器宽
        height: 400, //承载容器高
        moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 4 //缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);

    $('#text_specBox').children('ul').on('click', 'li', function () {
        $('#text_specBox').find('li').removeClass('dtl-inf-rur');
        $(this).addClass('dtl-inf-rur');
    })
    $('.inf-r-wxhb').on('mouseover', function () {
        $('.wechat-hobao').show();
    })
    $('.inf-r-wxhb').on('mouseout', function () {
        $('.wechat-hobao').hide();
    })
    $('#num_mvalue').attr('mix', 1);
    $('#num_rvalue').on('click', function () {
        var aa = $('#num_mvalue').val();
        aa++;
        $('#num_mvalue').val(aa);
        if (aa > 1) {
            $('#num_lvalue').css('color', '#666');
        }
    })
    $('#num_lvalue').on('click', function () {
        var aa = $('#num_mvalue').val();
        aa--;
        if (aa <= 1) {
            aa = 1;
        }
        $('#num_mvalue').val(aa);
        if (aa == 1) {
            $('#num_lvalue').css('color', 'rgb(207, 207, 207)');
        }
    })
    $('#bybuy').on('click', function () {
        if (getCookie('username')) {
            $.ajax({
                type: 'post',
                url: '../api/chachong.php',
                async: false,
                data: {
                    u_name: getCookie('username'),
                    g_name: $('.prem-proname').children('h1').html(),
                    img: $('.small-img').children('img').attr('src'),
                    num: $('#num_mvalue').val(),
                    pri: $('#saleprice_value').html()
                },
                success: function (str) {
                    console.log(str)
                    if (str == 1 || str == 0) {
                        
                    } else {
                        var arr = JSON.parse(str);
                        var num1 = arr[0].num * 1 + $('#num_mvalue').val() * 1;
                        console.log(num1);
                        $.ajax({
                            type: 'post',
                            url: '../api/jiaru.php',
                            async: false,
                            data: {
                                u_name: getCookie('username'),
                                g_name: $('.prem-proname').children('h1').html(),
                                num: num1
                            },
                            success: function (str) {
                                $.ajax({
                                    type: 'post',
                                    url: '../api/gouwuche.php',
                                    async: true,
                                    data: {
                                        u_name: getCookie('username'),
                                    },
                                    success: function (str) {
                                        var arr = JSON.parse(str);
                                        var abcd = 0;
                                        for (var i = 0; i < arr.length; i++) {
                                            abcd += arr[i].num * 1;
                                        }
                                        $('.tcart').find('span').html(abcd);
                                    }
                                })
                            }
                        })
                    }
                }
            })
        } else {
            location.href = 'denglu.html';
        }
    })
})