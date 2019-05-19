$(function () {
    DomeWebController.init();
});


DomeWebController = {
    pool: {
        element: {
        }
    },
    getEle: function (k) {
        return DomeWebController.pool.element[k];
    },
    setEle: function (k, v) {
        DomeWebController.pool.element[k] = v;
    },
    init: function () {
        var that = DomeWebController;
        that.inits.element();
        that.inits.event();
        that.buildScratchMod();
    },
    inits: {
        element: function () {
            var that = DomeWebController;
            that.setEle("$scratchModContainer",$("#scratch_mod_container"));
            that.setEle("$show1",$("#show_data_1"));
            that.setEle("$show2",$("#show_data_2"));
        },
        event: function () {

        }
    },
    buildScratchMod:function(){
        var that = DomeWebController;
        var $canvas = $(
            ScratchMod({
                'container': that.getEle('$scratchModContainer'),//目标容器
                'bgImgSrc': 'static/img/doge.jpg',//背景图
                //'imgSrc': ,//蒙版图
                //'penImgSrc': ,//擦笔图
                'color': '#2d2d30',//蒙版颜色（有imgSrc的情况下该属性无效）
                'width': 480,//宽度
                'height': 100,//高度
                'eraseRadius':10,//擦除笔的半径(有penImgSrc的情况下无效)
                'sampleStep': 1,//获取擦除百分百时的精度（数字越大精度越小）
                'sampleCD': 500,//获取擦除百分百的时间间隔
                'sampleCallback': that.sampleCallback,//获取擦除百分百的回调函数（返回true后不再回调）,回调的第一个入参为擦除百分百
                'startCallback': that.startCallback//开始刮的回调(只回调一次,回调的第一个入参为生成的元素类型 canvas或div)
            }));
        that.setEle("$scratchMod",$canvas);
        $canvas.css({'backgroundSize':'cover'});
    }
};