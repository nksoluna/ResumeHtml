$(document).on('click' , 'div a' , function() {
    $(this).addClass('active').siblings().removeClass('active')
})

$(document).on('click' , 'ul a' , function () {
    $(this).addClass('skill-active').siblings().removeClass('skill-active')
})
