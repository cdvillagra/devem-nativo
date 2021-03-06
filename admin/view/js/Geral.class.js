/* 
-------------------------------------------------------------------- 
DEVEM License, versão 1.0 [Nativo]
Copyright (c) 2015 DVillagra. All rights reserved.
--------------------------------------------------------------------

Algumas observações de uso da framework:

  1. O uso de métodos e funções nativas da framework, requer um certo
     conhecimento mínimo de programação e lógica, com enfase em orientação
     a objeto e conhecimento em arquitetura MVC.
 
  2. Como sugestão, ao realizar alterações em quaquer arquivo do path Core
     o desenvolvedor deverá executar a sua implementação de forma generica
     para que em qualquer parte do sistema que utilizar o bloco implementado
     se comporte da forma esperada.

  3. Qualquer comunicação que o terceiro precisar realizar com a equipe
     de desenvolvimento ou qualquer outra equipe da DVILLAGRA, terá que
     ser realizada via formulário através da seguinte URL:
     <http://www.dvillagra.com.br/contato>".

ESTE SOFTWARE É FORNECIDO PELA EQUIPE DE DESENVOLVIMENTO DA DVILLAGRA
E POR SER UM SOFTWARE OPENSOURCE, NÃO GARANTE QUALQUER FUNCIONAMENTO
DA APLICAÇÃO DESENVOLVIDA PELO TERCEIRO, EM QUALQUER CIRCUNSTANCIA.
A CONTRIBUIÇÃO [IMPLEMENTAÇÃO] COM A FRAMEWORK É SEMPRE BEM VINDA, 
PORTANTO O TERCEIRO PODERÁ ENVIAR SUA CONTRIBUIÇÃO SEMPRE QUE QUISER
PARA QUE A EQUIPE DE HOMOLOGAÇÃO ANALISE E APROVE/REPROVE. EM CASO DE
APROVAÇÃO A CONTRIBUIÇÃO SERÁ INCLUIDA COMO PATCH VERSION. QUALQUER 
OUTRA INCLUSÃO DE SERVIDOR SERÁ REALIZADA PELA EQUIPE DE DESENVOLVIMENTO
DA DVILLAGRA, ONDE ALTERAÇÕES GERAIS HOMOLOGADAS SERÃO INSERIDAS COMO 
MINOR VERSION E FECHAMENTOS DE VERSÃO SERÁ INSERIDA COMO MAJOR VERSION.
--------------------------------------------------------------------
*/

//# Cria objeto primario caso não exista
if (typeof devem == 'undefined') { devem = new Object(); }

//# Cria objeto secundário relacionado à classe quando não existir
if (typeof devem.geral == 'undefined') { devem.geral = new Object(); }

//# Decladração das funções dentro do objeto criado
devem.geral = {

    register: function (){

        devem.geral.init();

    },

    init: function(){


        $("#navbar div div.sidebar-collapse").click(function(){

            var w = '38px';

            $(".dv_versao span").toggle();

            if($(".dv_versao span").is(':hidden'))
                w = '25px';

            $(".dv_versao img").css('width',w);

        });

    },

    deslogar: function(){

        $.post('principal/deslogar',function(){

            window.location.href = devem.core.defaults.url('login', null, true);

        });

    },

    displayLoader: function(){

        $(".mask").toggle();
        $("#loader").toggle();

    }

};

//# Chama a função de registro depois que terminar de ler o documento
$(document).ready(devem.geral.register);