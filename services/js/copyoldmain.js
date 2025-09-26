const fecha = new Date();
let minutes = fecha.getMinutes();
let hour = fecha.getHours();
let day = fecha.getDay();
let mes = fecha.getMonth();
let year = fecha.getFullYear();
$(window).on("load",()=>{
    $(".langs").each((l,p)=>{
        let id = $(p).attr("id");
        $(p).click(()=>{
            let nlang = [[75,60,78],[90,75,71],[85,85,80],[60,55,48],[78,52,45],[70,50,40],[80,75,82],[73,69,73]];
            $("#in-lang").text(id);
            $(".mstatA").css({
                "background":`conic-gradient(#6dddff 0% ${(nlang[l][0]+nlang[l][1]+nlang[l][2])/3}%,
                #40119836 ${(nlang[l][0]+nlang[l][1]+nlang[l][2])/3}% 100%)`
            });
            $("#in-lang").css({
                "background":`url(resources/assets/images/svgs/${id}.svg) center 25px / 25px no-repeat`         
            });
            $(".spA1").css({"background":`conic-gradient(#6dddff 0% ${nlang[l][0]}%, #40119836 ${nlang[l][0]}% 100%)`});
            $(".spB1").css({"background":`conic-gradient(#6dddff 0% ${nlang[l][1]}%, #40119836 ${nlang[l][1]}% 100%)`});
            $(".spC1").css({"background":`conic-gradient(#6dddff 0% ${nlang[l][2]}%, #40119836 ${nlang[l][2]}% 100%)`});
        });
    });
});
$(document).ready(()=>{
    $("#loader").fadeOut("slow");
    const esmovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    (function(){
        let canvas = document.getElementById('stars_background');
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < 100; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 1, true);
            ctx.fillStyle = '#eee';
            ctx.fill();
        }
    }(jQuery));
    function ax(){
        $(".langs").each((x,s)=>{
            console.log(s+" - "+x);
        });
    }
    (function(){
        $("#bfont").text(encabezado);
        $("#mfont").text(subtitle);
        $("#ocontainer").html(opciones);
        $(".d-myprofile").html(my_profile);
        $("#title-cont").html(myskillstitle);
        $(".rec-text").html(intro_projects);
        $(".cards").html(projects);
        $(".motiv").css("animation","positionA 205s linear 1s infinite alternate");
        $("#motivx").css("animation","positionB 220s linear 1s infinite alternate");
        $("#motivy").css("animation","positionC 180s linear 1s infinite alternate");
    }(jQuery));

    (function(){
        $(".option").each((ind,elem)=>{
            $(elem).click(()=>{
                $(".option").removeClass("active-option");
                $(elem).addClass("active-option");
                $("html,body").animate({
                    scrollTop: $(`#source_${ind}`).offset().top
                },1000);
            });
        });
        $(".used-tech").each((c,x)=>{
            let lng = $(x).attr("id");
            $(x).css({
                "background":`url(resources/assets/images/svgs/${lng}.svg) center / 20px no-repeat,linear-gradient(45deg, #67b4eb51,#110f25cf)`
            });
        });
    }(jQuery));

    //scroll control
    $(window).on("scroll",()=>{
        let marks = 0;
        let tp = $(window).scrollTop();
        $(".source").each((index,elemento)=>{
            let elem = $(`#source_${index}`).offset().top-300;
            if(tp >= elem){
                $(elemento).removeClass("active-source");
                $(`.option`).removeClass("active-option");
                $(`#source_${index}`).removeClass("inactive-source");
                $(`#source_${index}`).addClass("active-source");
                $(`#option_${index}`).addClass("active-option");
            }
            else {
                $(`#source_${index}`).addClass("inactive-source");
            }
        });
    });
    let mark = 0;
    $(".open-menu-button").click((e)=>{
        if(mark == 0){
            $("#mcontainer").css({"animation":"left-in .5s linear .1s both"});
            $("#mcontainer").css({"display":"flex"});
            $("#mcontainer").html(`
                <span class="close-menu" id="cmenu"></span>
                ${opciones}
                <span class="foot">© Cryptocore ${year}</span>
            `);
            mark = 1;
        }
        $(".option").each((ind,elem)=>{
            $(elem).click(()=>{
                $(".option").removeClass("active-option");
                $(elem).css({"animation":"unset"});
                $(elem).addClass("active-option");
                $("#mcontainer").css({"animation":"left-out .5s linear .1s both"});
                setTimeout(()=>{
                    $("#mcontainer").css({"display":"none"});
                    mark = 0;
                    $("html,body").animate({
                        scrollTop: $(`#source_${ind}`).offset().top-80
                    },700);
                },600);
            });
            $(elem).mouseover(()=>{
                $(elem).css({"animation":"onhover .5s both","color":"#6dddff"});
                $(elem).mouseleave(()=>{
                    $(elem).css({"animation":"outhover .5s both","color":"#eee"});
                });
            });
        });
        $(".close-menu").click(()=>{
            $("#mcontainer").css({"animation":"left-out .5s linear .1s both"});
            setTimeout(()=>{
                $("#mcontainer").css({"display":"none"});
                mark = 0;
            },900);
        });
    });
    $("#user_text").keyup(()=>{
        let utext = $("#user_text").val();
        utext = utext.length;
        let chars = 130-utext;
        if(chars <= 10){
            $("#maxchar").css({"color":"#c5005c","font-weight":"600"});
        }
        else {
            $("#maxchar").css({"color":"#6dddff"});
        }
        $("#maxchar").text(chars);
        if(chars == 130){
            $("#maxchar").text("");
        }
    });
    $("#send-form").on("submit",(e)=>{
        e.preventDefault();
        let name = $("#user_name").val();
        let tel = $("#user_tel").val();
        let text = $("#user_text").val();
        $(".ennv").css({"opacity":"0"});
        $(".ennv").attr("disabled","true");
        setTimeout(()=>{
            $(".spinx").css({"display":"flex"});
        },300);
        setTimeout(()=>{
            if(esmovil){
                location.href=`
                    https://wa.me/+573106574835?text=✪%20*Nombre:*%20%20_${name}_%0A%0A✪%20*Número%20de%20teléfono:*%20%20_${tel}_%0A%0A✪%20${text}%0A%0A*✪%20El%20${day}/${mes}/${year}%20a%20las%20${hour}:${minutes}*%0A%0A%0A%0A©Cryptocore%20${year}
                `;
            }
            else {
                location.href=`https://web.whatsapp.com/send/?phone=%2B573106574835&text=%0A%E2%9C%AA+%2ANombre%3A%2A++_${name}_%0A%0A%E2%9C%AA+%2AN%C3%BAmero+de+tel%C3%A9fono%3A%2A++_${tel}_%0A%0A%E2%9C%AA+${text}%0A%0A%E2%9C%AA+%2AEl+${day}+/+${mes}+/+${year}+a+las+${hour}:${minutes}%2A%0A%0A%0A%0A%C2%A9Cryptocore+2024&type=phone_number&app_absent=0`;location.href=`https://web.whatsapp.com/send/?phone=%2B573106574835&text=%0A%E2%9C%AA+%2ANombre%3A%2A++_${name}_%0A%0A%E2%9C%AA+%2AN%C3%BAmero+de+tel%C3%A9fono%3A%2A++_${tel}_%0A%0A%E2%9C%AA+${text}%0A%0A%E2%9C%AA+%2AEl+${day}+/+${mes}+/+${year}+a+las+${hour}:${minutes}%2A%0A%0A%0A%0A%C2%A9Cryptocore+2024&type=phone_number&app_absent=0`;
            }          
        },3000);
    })
});