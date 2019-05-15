
        $(document).ready(function(){
            $('ul.akkordeon li > h3').click(function(){
                if(!$(this).hasClass('active')){    //если "кликнутый" пункт неактивный:
                    $('ul.akkordeon li > h3').removeClass('active').next('div').slideUp(); //делаем неактивными все пункты и скрываем все блоки
                    $(this).addClass('active'); //активируем "кликнутый" пункт
                    $(this).next('div').slideDown(200); //раскрываем следующий за ним блок с описанием
                }   else {    //иначе:
                    $(this).removeClass('active').next('div').slideUp();    //скрываем данный пункт
                }
            });
        });
    
    