$(function () {
    $('#layout1').load('syhead.html', function () {
        $('#nav').hide();
        $('.header_r').hide();
        $('.header').append('<div class="head_r"><img src="//res.360kad.com/theme/default/img/user/2015/shop_p2.png"></div>');
    });
    $('.wrap_footer').load('syfoot.html');
    $.ajax({
        type: 'post',
        url: '../api/gouwuche.php',
        async: false,
        data: {
            u_name: getCookie('username')
        },
        success: function (str) {
            var arr = JSON.parse(str);
            console.log(arr);
            var res = arr.map(function (item) {
                return `<li data-id="${item.id}">
                            <div class="disb item1"><label for="" class="single-chose"><i class="on"><input type="checkbox"
                                            class="check-box-input" name="product" id="${item.id}"
                                            value="${item.id}" redemp=""></i></label></div>
                            <div class="disb item2"><a href="xiangqing.html?${item.id}" target="_blank" title="${item.g_name}"><img
                                        src="${item.img}"
                                        alt="${item.g_name}"></a></div>
                            <div class="disb item3">
                                <p><i class="icon0 icon01"></i><a href="xiangqing.html?${item.id}" target="_blank"
                                        title="${item.g_name}">${item.g_name}</a></p>
                            </div>
                            <div class="disb item4">¥${item.pri}</div>
                            <div class="disb item5"><span class="reduct-btn" id="reduct-btn">-</span><input type="text"
                                    maxlength="3" id="${item.id}" class="num-txt"
                                    value="${item.num}"><span class="reduct-btn" id="add-btn">+</span>
                            </div>
                            <div class="disb item6">省<span class="save-price">¥30.00</span>元</div>
                            <div class="disb item8">￥<span id="${item.id}">${(item.num*item.pri-30).toFixed(2)}</span></div>
                            <div class="disb item9"><span class="delte-btn"
                                    id="${item.id}">删除</span></div>
                        </li>`
            }).join('');
            $('.pro-list-box').html(res);
        }
    })
    update();
    $('.pro-list-box').on('click', '#add-btn', function () {
        var num = $(this).prev().val();
        num++;
        $(this).prev().val(num);
        total($(this)); //刷新小计
        $.ajax({
            type: 'post',
            url: '../api/shuliang.php',
            async: true,
            data: {
                g_id: $(this).prev().attr('id'),
                num: $(this).prev().val()
            },
            success: function (str) {
                console.log(str);
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
    });
    $('.pro-list-box').on('click', '#reduct-btn', function () {
        var num = $(this).next().val();
        num--;
        if (num <= 1) { //设置下限
            num = 1;
        }
        $(this).next().val(num);
        total($(this)); //刷新小计
        $.ajax({
            type: 'post',
            url: '../api/shuliang.php',
            async: true,
            data: {
                g_id: $(this).next().attr('id'),
                num: $(this).next().val()
            },
            success: function (str) {
                console.log(str);
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
    });
    $('.num-txt').on('input', function () {
        var num = $(this).val();
        if (num <= 1) {
            num = 1;
        }
        $(this).val(num);
        total($(this)); //刷新小计
        $.ajax({
            type: 'post',
            url: '../api/shuliang.php',
            async: true,
            data: {
                g_id: $(this).attr('id'),
                num: $(this).val()
            },
            success: function (str) {
                console.log(str);
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
    });

    function total(now) {
        var num = $(now).parent().find('.num-txt').val();
        var price = $(now).parent().prev().text().slice(1);
        var xiaoji = (num * price - 30).toFixed(2);
        $(now).parent().next().next().html('￥<span>' + xiaoji + '</span>');
        all();
    }
    $('.delte-btn').on('click', function () {
        var res = confirm('确定从购物车中删除此商品？');
        if (res) {
            $.ajax({
                type: 'post',
                url: '../api/shanchu.php',
                async: true,
                data: {
                    g_id: $(this).attr('id'),
                },
                success: function (str) {
                    console.log(str);
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
            $(this).parent().parent().remove();
        }
        update();
    });

    function update() {
        var len = $('.pro-list-box').children().size();
        if (len == 0) {
            $('.order-msg-wrap').hide();
            $('.cart-nothings').show();
        } else {
            $('.order-msg-wrap').show();
            $('.cart-nothings').hide();
        }
    }
    $('#full-chose-input').click(function () {
        var istrue = $('#full-chose-input').prop('checked');
        $('.check-box-input').prop('checked', istrue);
        $('#full-chose-input-end').prop('checked', istrue);
        all();
    });
    $('#full-chose-input-end').click(function () {
        var istrue = $('#full-chose-input-end').prop('checked');
        $('.check-box-input').prop('checked', istrue);
        $('#full-chose-input').prop('checked', istrue);
        all();
    });
    var arr = [];

    function all() {
        arr = []; //存被勾选的复选框的下标
        $('.pro-list-box .check-box-input').each(function (i, item) {
            if ($(item).prop('checked')) {
                //被勾选了，把下标存起来
                arr.push(i);
            }
        });
        //总数量
        var num = 0;
        //总价格
        var price = 0;

        arr.forEach(function (item) {
            num += $('.num-txt').eq(item).val() * 1;
            price += $('.item8').eq(item).children('span').html() * 1;
        });

        console.log(num, price.toFixed(2));

        //渲染到节点
        $('.product-nums').html(num);
        $('.product-total-price').html('￥' + price.toFixed(2));
        $('.save').html('￥' + 30 * arr.length);
        $('.total-price').html('￥' + price.toFixed(2));
    }
    $('.pro-list-box').on('click', '.check-box-input', function () {
        var len = $('.pro-list-box .check-box-input:checked').size();
        var total = $('.pro-list-box .check-box-input').size();
        if (len == total) {
            //全都勾选了
            $('#full-chose-input-end').prop('checked', true);
            $('#full-chose-input').prop('checked', true);
        } else {
            $('#full-chose-input-end').prop('checked', false);
            $('#full-chose-input').prop('checked', false);
        }
        all(); //刷新总数量和总价格
        if ($(this).prop('checked')) {
            $(this).parent().parent().parent().parent().addClass('act');
        } else {
            $(this).parent().parent().parent().parent().removeClass('act');
        }
    });
    $('.delte-full-btn').click(function () {
        for (var i = arr.length - 1; i >= 0; i--) {
            $.ajax({
                type: 'post',
                url: '../api/shanchu.php',
                async: true,
                data: {
                    g_id: $('.pro-list-box').children('li').eq(arr[i]).data('id'),
                },
                success: function (str) {
                    console.log(str);
                }
            })
            //从数组的尾部开始删除
            $('.pro-list-box').children('li').eq(arr[i]).remove();
            all(); //刷新总数量和总价格
            update();
        }
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
        //		
    });

})