// $(function(){
// var toggle_main_menu_flag = "a";
//
// $(".toggle_main_menu_button").click(function(){
//    if (toggle_main_menu_flag == "a") {
//       $(".toggle_main_menu").animate({ "right": "+=50px" },  {duration: 500} );
//       toggle_main_menu_flag = "b";
//    }
//    else {
//       $(".toggle_main_menu").animate({ "left": "+=50px" },  {duration: 500} );
//       toggle_main_menu_flag = "a";
//    }
// });
// });

$(function() {
var flag1126 = 'a';

$('.toggle_main_menu_button').click(function() {

if(flag1126 == 'a') {
$(this).animate({'left': '+=100px'},500);
$(".toggle_main_menu").animate({'left': '+=100px'},500);
flag1126 = 'b';
}

else {
$(this).animate({'left': '-=100px'},500);
$(".toggle_main_menu").animate({'left': '-=100px'},500);
flag1126 = 'a';
}
});
});
