jQuery(document).ready(function(){
    $('ul.tabnav_ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('ul.tabnav_ul li').removeClass('current');
        $('.tab_content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
});