$(document).ready(function(){
    $('#cli').click(function(){
         prompt('Digite qualquer coisa!');
    });

    $('#ocu').click(function(){
       $('h1').hide();
       $('a').hide();
    });

    $('#exi').click(function(){
       $('h1').show();
       $('a').show();
    });

    $('#for').click(function(){
        $('body').addClass('active');
    });

    $('#des').click(function(){
        $('body').removeClass('active');
    });

    $('a').on('click',function(){
        $(this).text('Você clicou!');
    }); 

    $('a').on('mouseover',function(){
        $(this).text('Não Clique!');
    }); 

    $('a').on('mouseleave',function(){
        $(this).text('Clique aqui!');
    }); 

});