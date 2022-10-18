$(document).ready(function(){
    $(".darkButton").click(function(){
        $("body").removeClass("light").addClass("dark")
    })

    $(".lightButton").click(function(){
        $("body").removeClass("dark").addClass("light")
    })

    $(".toggleButton").click(function(){
        $("body").toggleClass("dark")
        $("body").toggleClass("light")
    })
})