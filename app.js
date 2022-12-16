$('a[href="#project-1"]').click(function(){
    $("div#project-title-1").css({'display' : 'block'})
    $("div#project-title-2").css({'display' : 'none'})
    $("div#project-title-3").css({'display' : 'none'})
    $("html, body").animate({ scrollTop: 1000 }, 1000);
})

$('a[href="#project-2"]').click(function(){
    $("div#project-title-1").css({'display' : 'none'})
    $("div#project-title-2").css({'display' : 'block'})
    $("div#project-title-3").css({'display' : 'none'})
    $("html, body").animate({ scrollTop: 1000 }, 1000);
})

$('a[href="#project-3"]').click(function(){
    $("div#project-title-1").css({'display' : 'none'})
    $("div#project-title-2").css({'display' : 'none'})
    $("div#project-title-3").css({'display' : 'block'})
    $("html, body").animate({ scrollTop: 1000 }, 1000);
})