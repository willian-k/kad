$(function () {
    $('.hNavList').on('mouseover', 'li', function () {
        $(this).addClass('Yhover');
    })
    $('.hNavList').on('mouseout', 'li', function () {
        $(this).removeClass('Yhover');
    })
    $('#pageText').on('focus', function () {
        $(this).css('color', 'rgb(51, 51, 51)');
        $(this).attr('placeholder', '');
        $('.search_history').show();
    })
    $('#pageText').on('blur', function () {
        $(this).css('color', 'rgb(153, 153, 153)');
        $(this).attr('placeholder', '铁打损伤');
        $('.search_history').hide();
    })
    $('.search_history').on('mouseout', function () {
        $('.search_history').hide();
    })
    $('.search_history').on('mouseover', '.search_history_r', function () {
        $('.search_history').show();
    })
    $('.search_history').on('mouseover', '.search_history_l', function () {
        $('.search_history').show();
    })
    $('#kad-mc-ask1').on('mouseover', function () {
        $(this).css('color', 'rgb(0,99,200)');
        $(this).children('i').css('border-color', 'rgb(0,99,205) transparent transparent');
        $(this).children('#kad-mc-askBox1').show();
    })
    $('#kad-mc-ask1').on('mouseout', function () {
        $(this).children('#kad-mc-askBox1').hide();
        $(this).css('color', 'rgb(20,20,20)');
        $(this).children('i').css('border-color', 'rgb(0,0,0) transparent transparent');
    })
    $('#kad-mc-ask2').on('mouseover', function () {
        $(this).css('color', 'rgb(0,99,200)');
        $(this).children('i').css('border-color', 'rgb(0,99,205) transparent transparent');
        $(this).children('#kad-mc-askBox').show();
    })
    $('#kad-mc-ask2').on('mouseout', function () {
        $(this).children('#kad-mc-askBox').hide();
        $(this).css('color', 'rgb(20,20,20)');
        $(this).children('i').css('border-color', 'rgb(0,0,0) transparent transparent');
    })

    function html1() {
        var html = '';
        for (var i = 0; i < 10; i++) {
            html += `<li>
                        <div class="list_t">
                            <a href="###"><b>专科用药</b></a>
                            |
                            <a href="###">肾宝片</a>
                            &nbsp;
                            <a href="###">阿胶</a>
                        </div>
                        <div class="lNav_pop">${i}</div>
                    </li>`
        }
        $('#lNav_lists').html(html);
    };
    html1();
    //swiper基本款
    var s1 = new Swiper('.swiper-container', {
        autoplay: { //自动轮播
            delay: 3000, //间隔时间
            disableOnInteraction: false //拖拽完后还能继续自动轮播
        },
        loop: true, //无缝
        navigation: { //上下按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: { //焦点跟随
            el: '.swiper-pagination',
            clickable: true, //点击焦点跳到指定图片
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>'; //生成焦点数字
            }
        },
        mousewheel: false, //滚动滑轮可以切图
        effect: 'fade' //选用:效果
    });

    var oBox = document.getElementById('swiper-container');

    oBox.onmouseover = function () { //鼠标经过停止
        s1.autoplay.stop();
    }

    oBox.onmouseout = function () { //鼠标离开就运动
        s1.autoplay.start();
    }
    $(".swiper-pagination-bullet").hover(function () {
        $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
    }, function () {
        mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
    })
    $('#swiper-container').on('mouseover', function () {
        $('.swiper-button-prev').show();
        $('.swiper-button-next').show();
    })
    $('#swiper-container').on('mouseout', function () {
        $('.swiper-button-prev').hide();
        $('.swiper-button-next').hide();
    })
    $(".timeBar").each(function () {
        $(this).countdownsync({
            dayTag: "",
            hourTag: "<label class='tt hh dib vam'>00</label><span>时</span>",
            minTag: "<label class='tt mm dib vam'>00</label><span>分</span>",
            secTag: "<label class='tt ss dib vam'>00</label><span>秒</span>",
            dayClass: ".dd",
            hourClass: ".hh",
            minClass: ".mm",
            secClass: ".ss",
            isDefault: false,
            showTemp: 1

        }, function () {
            location.reload();
        });
    });

    function html2() {
        var html = '';
        for (var i = 0; i < 10; i++) {
            html += `<li>
                        <div class="zhe" style="background:url(./img/zebg.png) no-repeat;">
                            <span class="zheS">5.5</span>折</div>
                        <p style="text-align:center"><a href="###"><img style="width:150px;height:150px;"
                                    src="./img/CgAgFVwXVD6ABCVuAAEliPYwqb4335.jpg_320x320.jpg"
                                    title="恒健 跌打万花油 10ml"></a></p>
                        <div class="clum">
                            <dl>
                                <dd class="secentLi"><a href="###" title="恒健 跌打万花油 10ml">恒健 跌打万花油 10ml</a></dd>
                                <dd class="thirdLi"><span class="newPrice">￥1.6</span><span
                                        class="oldPrice">￥2.9</span></dd>
                            </dl>
                        </div>
                    </li>`
        }
        $('#hotProC').children('ul').html(html);
    }
    html2();

    function isok1() {
        var isok = true;
        $('.direction').on('click', ('span'), function () {
            if (isok) {
                $('#hotProC').children('ul').stop().animate({
                    'left': -1198
                }, 500);
                $('#hotPage').children('.reduction').html(2);
            } else {
                $('#hotProC').children('ul').stop().animate({
                    'left': 0
                }, 500);
                $('#hotPage').children('.reduction').html(1);
            }
            isok = !isok;
        })
    }
    isok1();

    function html3() {
        var html = '';
        for (var i = 0; i < 5; i++) {
            html += `<li><a href="###" class="imgpro"><img style="width:180px;height:180px;"
                                src="./img/CgAgFFt-KjyAP7EbAAFa1-VxzZM565.jpg_180x180.jpg" title="汇仁 肾宝片 0.7g*126片"></a>
                        <div class="hotPadding">
                            <p class="nameC"><a href="###" title="汇仁 肾宝片 0.7g*126片">汇仁 肾宝片 0.7g*126片</a></p>
                            <p class="priceC">￥322.00</p>
                        </div>
                    </li>`
        }
        $('#changeP').children('ul').html(html);
        $('#changeP').find('li').eq(4).css('margin-right', 0);
    }
    html3();

    function html4() {
        var html = '';
        for (var i = 0; i < 20; i++) {
            html += `<li><a href="###">风寒感冒</a></li>`
        }
        $('.louLink').children('ul').html(html);
        $('.louLink').find('a').eq(0).css('color', '#f7082a');
        $('.louLink').find('a').eq(6).css('color', '#f7082a');
        $('.louLink').find('a').eq(10).css('color', '#f7082a');
        $('.louLink').find('a').eq(13).css('color', '#f7082a');
    }
    html4();

    function html5() {
        var html = `<li class="floor_m">
                        <a id="ad_home_floor1_m2" href="###"><img
                                src="./img/CgAgFFvFW3GAA4miAAEERnmMokg886.jpg"
                                alt="1F家庭常备"></a>
                    </li>`;
        for (var i = 0; i < 4; i++) {
            html += `<li>
                        <p class="pic">
                            <a href="###"><img border="0"
                                    alt="太极 藿香正气口服液 10ml*10支/盒" title="太极 藿香正气口服液 10ml*10支/盒"
                                    src="./img/CgAgFVqovGaAPIktAAHZ-I95LeU816.jpg_180x180.jpg"></a>
                        </p>
                        <p class="proName"><a href="###"
                                title="太极 藿香正气口服液 10ml*10支/盒">
                                理气和中 高性价比
                            </a></p>
                        <p class="proNumber"><a href="###"
                                title="太极 藿香正气口服液 10ml*10支/盒">太极 藿香正气口服液 10ml*10支/盒</a></p>
                        <p class="proPrice">￥23.80</p>
                    </li>`
        }
        $('.contextR').children('ul').html(html);
    }
    html5();
    //swiper基本款
    var s11 = new Swiper('.swiper-container2', {
        autoplay: { //自动轮播
            delay: 3000, //间隔时间
            disableOnInteraction: false, //拖拽完后还能继续自动轮播
            speed: 400
        },
        loop: true, //无缝
        navigation: { //上下按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: { //焦点跟随
            el: '.swiper-pagination',
            clickable: true, //点击焦点跳到指定图片
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>'; //生成焦点数字
            }
        },
        mousewheel: false, //滚动滑轮可以切图
        effect: 'slide' //选用:效果
    });

    var oBox1 = document.getElementById('swiper-container2');

    oBox1.onmouseover = function () { //鼠标经过停止
        s11.autoplay.stop();
    }

    oBox1.onmouseout = function () { //鼠标离开就运动
        s11.autoplay.start();
    }
    var s12 = new Swiper('.swiper-container1', {
        autoplay: { //自动轮播
            delay: 3000, //间隔时间
            disableOnInteraction: false, //拖拽完后还能继续自动轮播
            speed: 400
        },
        loop: true, //无缝
        navigation: { //上下按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: { //焦点跟随
            el: '.swiper-pagination',
            clickable: true, //点击焦点跳到指定图片
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>'; //生成焦点数字
            }
        },
        mousewheel: false, //滚动滑轮可以切图
        effect: 'slide' //选用:效果
    });

    var oBox2 = document.getElementById('swiper-container1');

    oBox2.onmouseover = function () { //鼠标经过停止
        s12.autoplay.stop();
    }

    oBox2.onmouseout = function () { //鼠标离开就运动
        s12.autoplay.start();
    }

    function html6() {
        var html = '';
        for (var i = 0; i < 20; i++) {
            html += `<li><a href="###">体温计</a></li>`
        }
        $('.louLink').eq(1).children('ul').html(html);
        $('.louLink').eq(1).find('a').eq(0).css('color', '#f7082a');
        $('.louLink').eq(1).find('a').eq(2).css('color', '#f7082a');
        $('.louLink').eq(1).find('a').eq(10).css('color', '#f7082a');
        $('.louLink').eq(1).find('a').eq(16).css('color', '#f7082a');
    }
    html6();

    function html7() {
        var html = '';
        for (var i = 0; i < 14; i++) {
            html += `<li>
                        <a href="###" id="ad_home_hotlogo01">
                            <img src="./img/CgAgEFbj3d-AZnuBAAAKXWNhZL8937.jpg"
                                alt="百多邦">
                        </a>
                    </li>`
        }
        $('.hotBrand').children('ul').html(html);
    }
    html7();

    function html8() {
        var html = '';
        for (var i = 0; i < 10; i++) {
            html += `<a href="###">环球医药招商网</a>`
        }
        $('.linkBox').html(html);
    }
    html8();
    var usn = getCookie('username');
    console.log(usn);
    if (usn) {
        $('.YnewNoLogin').hide();
        $('.YnewYesLogin').show();
        $('.YnewYesLogin').children('.YUserName').children('a').html(usn);
    }
    $('.Yout').on('click', 'a', function () {
        removeCookie('username');
        $('.YnewNoLogin').show();
        $('.YnewYesLogin').hide();
        location.href = 'html/denglu.html'
    })
    if (getCookie('username')) {
        $.ajax({
            type: 'post',
            url: 'api/gouwuche.php',
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
    };
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 300) {
            $('#fixed_searchBox').show();
            $('#searchForm').css({
                'position': 'fixed',
                'top': '5px',
                'z-index': 8
            });
        } else {
            $('#fixed_searchBox').hide();
            $('#searchForm').attr('style','');
        }
    })
    $('#lNav_lists').on('mouseover', 'li', function () {
        $(this).children('.lNav_pop').show();
        $(this).children('.lNav_pop').css({
            'color': '#000',
            'font-size': '50px'
        });
        $(this).addClass('active');
        $(this).find('a').css('color', '#3195ff');
        $(this).find('b').css('color', '#036dde');
    })
    $('#lNav_lists').on('mouseout', 'li', function () {
        $(this).children('.lNav_pop').hide();
        $(this).removeClass('active');
        $(this).find('a').css('color', '#c2d8fe');
        $(this).find('b').css('color', '#fff');
    })
})