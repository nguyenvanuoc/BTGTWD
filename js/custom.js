var expandMenu;
(function($) {
    "use strict";
    if ($('.scroll-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scroll-top').addClass('show');

                } else {
                    $('.scroll-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
            
        });
        $('.scroll-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
   
    var data =$('#total-visiter').text();
    var arr = data.split('');
    var fLen = arr.length;
    var html="";
    for (var i = 0; i < fLen; i++) {
        html+="<span>"+arr[i] + "</span>";
    };   
    $("#total-number").html(html);
    if(window.innerWidth<=1000){
        $(".header .navbar-nav a").click(function(e){
            var el=$(this),
                parent=$(this).parent();
            if(parent.find(">.dropdown-menu").length){
                  e.preventDefault();
                  parent.siblings().removeClass("active");
                  if(parent.hasClass("active")){
                    parent.removeClass("active");    
                  }else{
                    parent.addClass("active");    
                  }
                  
            }
        });
        $(".nav-toggle").click(function(){
            $(".navbar-nav").addClass("open");
            $("#overlay").addClass("show");
        });
        $("#overlay").click(function(){
            $(".navbar-nav").removeClass("open");
            $(this).removeClass("show");
        });
    }

    var my_date_format = function(id){
        var d = new Date();
        var weekday=['Chủ Nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy']
        var month = ['tháng 01', 'tháng 02', 'tháng 03', 'tháng 04', 'tháng 05', 'tháng 06', 'tháng 07', 'tháng 08', 'tháng 09', 'tháng 10', 'tháng 11', 'tháng 2'];
        var date = weekday[d.getDay()] + ", ngày " + d.getDate() +  " " + month[d.getMonth()] + " năm " + d.getFullYear();
        var time = d.toLocaleTimeString().toLowerCase().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
        $(id).text(date);
        
    };
    my_date_format(".timesytem");
    
})(jQuery);

