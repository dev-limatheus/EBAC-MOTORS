 $(document).ready(function(){
            $('#carousel-imagens').slick({
                autoplay:true
            })

            $('.menu-hamb').click(function(){
                $('nav').slideToggle();  //ao clicar abaixa ou sobe o menu hamburguer
            })


            $('#tel').mask('(00) 00000-0000')

            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    tel: {
                        required: true
                    },
                    email: {
                        required: true, 
                        email: true
                    },
                    mensagem: {
                        required: true
                    },
                },
                messages: {
                nome: 'Digite seu nome.',
                email: 'Digite seu E-mail.',
                tel: 'Digite seu número.'
                }, 
                submitHandler: function(form){
                    console.log(form)
                },
                invalidHandler: function(evento, validador){
                    let camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos){
                        alert(`Existem ${camposIncorretos} campos incorretos`)
                    }
                }
            })

        $('.lista-veiculos button').click(function(){
            const destino = $('#contato');

            const nomeVeiculo = $(this).parent().find('h3').text();

            $('#veiculo-interesse').val(nomeVeiculo);

            $('html').animate({
                scrollTop: destino.offset().top
            }, 1000)
        })
        })