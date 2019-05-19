$(function () {
    $('#layout').load('syhead.html', function () {
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
    var ye = 1;
    var num = 12;
    var page = 1;
    var pages;

    function fenye(a) {
        $.ajax({
            type: 'post',
            url: '../api/fenye.php',
            async: false,
            data: {
                ye: a,
                num: num
            },
            success: function (str) {
                var arr = JSON.parse(str);
                console.log(arr);
                var res = arr.data.map(function (item) {
                    return `<li>
                                <input type="hidden">
                                <div style="border-color: rgb(255, 255, 255);">
                                    <p class="Ypic">
                                        <a href="xiangqing.html?${item.id}" target="_blank"><img
                                                src="${item.img}"
                                                border="0" alt="${item.name}" title="${item.name}"
                                                style="width:180px;height:180px"></a>
                                        <img src="../img/yin_ico.gif" class="yin_ico"
                                            title="隐私配送" style="display: none;">

                                    </p>
                                    <p class="Yname">
                                        <span class="ico_otc"></span>
                                        <a class="name" target="_blank" href="xiangqing.html?${item.id}"
                                            title="${item.name}">
                                            ${item.name}
                                            <span class="Yspec"></span>
                                        </a>
                                    </p>
                                    <p class="Yadv">${item.describe}
                                    </p>
                                    <p class="Ypribox" id="promote_${item.id}">
                                    <span class="RMB">￥${item.perice}<font style="font-size: 8px;margin-left: 5px;">起</font></span>
                                        <i class="RMB">￥${item.old_perice}</i>
                                    </p>
                                    <p class="Yhave"><span></span></p>
                                </div>
                            </li>`
                }).join('');
                $('#YproductList').html(res);
                pages = Math.ceil(arr.total / arr.num);
            }
        })
    }
    fenye(ye);
    $(".zxf_pagediv").createPage({
        pageNum: pages,
        current: 1,
        backfun: function (e) {
            console.log(e); //回调
            $.ajax({
                type: 'post',
                url: '../api/fenye.php',
                async: false,
                data: {
                    ye: e.current,
                    num: num
                },
                success: function (str) {
                    var arr = JSON.parse(str);
                    fenye(arr.ye);
                }
            })
        }
    });
    $('.zxfinput').attr({
        'min': 1,
        'max': pages,
        'onfocus': "this.blur();"
    });
    $('#YproductList').on('mouseover','li',function(){
        $(this).children('div').css('border-color','rgb(255, 0, 0)');
        $(this).find('.yin_ico').css('display','inline');
    })
    $('#YproductList').on('mouseout','li',function(){
        $(this).children('div').css('border-color','rgb(255, 255, 255)');
        $(this).find('.yin_ico').css('display','none');
    })
})