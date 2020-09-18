const cards = require('./cards.json'); 
const li = require('../pdvend.json');
const cardsBlog = require('../cards-blog.json');
const db = require('../database/db');

module.exports = {
    locals: {
        cards,
        li,
        cardsBlog,
        db,
        oms: {
            title:'OMS', 
            descriptionTitle: 'Total conectividade e flexibilidade em toda operação',
            description: 'Promove uma visão e uma jornada de compra unificada para cada cliente, de forma que ele tenha uma melhor experiência, seja qual for o canal de entrada, além da visibilidade integrada dos seus estoques.',
            titleSection: 'Soluções de acordo com a necessidade do seu negócio:', 
            descriptionSection:'Uma plataforma pensada de ponta a ponta. Seja para entregas próximas e pontuais ou para retirada num ponto de entrega, ou ainda para envio ao cliente com frota própria, terceirizada ou Correios, você não precisa se preocupar em negociar e configurar cada item em separado. Trazemos uma solução completa.',
            titleForm: 'Cadastre seu negócio'
        },
        pdvend: {
            title:'PDVend', 
            descriptionTitle: 'PDV completo e eficiente para o seu negócio', 
            description: 'Aplicativo para Pontos de Venda que te permite ter gestão e controle do seu negócio, com facilidade e mobilidade. Sua loja aberta onde você estiver.', 
            titleForm: 'Cadastre seu negócio'
        },
        emites: {
            title:'Emites', 
            descriptionTitle: 'Emissor de notas fiscais eletrônicas', 
            description: 'Integra-se a sistemas de ponto de venda, marketplaces, e-commerces e smart terminals. Emita notas fiscais eletrônicas independente do seu tipo de atividade ou modelo de negócios e fora do seu ERP.', 
            titleForm: 'Cadastre seu negócio'
        },
        store: {
            title:'Store', 
            descriptionTitle: 'Comece a vender online rápido', 
            description: 'Monte seu E-commerce com plataforma multilojas e design responsivo para vendas pela web e celular.', 
            titleSection: 'Seu ecommerce rápido', 
            descriptionSection:'Com integração total ao Nexaas.Omnichannel, suas lojas físicas, ecommerce e marketplaces numa visão única. Veja todos os seus estoques, faça transferências, com todos os ajustes fiscais necessários. Recebimento com boleto e cartão de crédito', 
            titleForm: 'Cadastre seu negócio'
        },
        suite: {
            title:'Suíte Omnichannel', 
            descriptionTitle: 'Qualquer canal, experiência única', 
            description: 'Visão única dos seus pedidos em vendas online em marketplaces, ecommerce e sua loja física. Veja seus estoques integrados, com inteligência fiscal e menos infraestrutura.',
            titleSection: 'Conectividade e flexibilidade em toda operação', 
            descriptionSection:'Promove uma visão e uma jornada de compra unificada para cada cliente, de forma que ele tenha uma melhor experiência, seja qual for o canal de entrada, além da visibilidade integrada dos seus estoques.', 
            titleForm: 'Cadastre seu negócio'
        },
        myFinance: {
            title:'MyFinance', 
            descriptionTitle: 'Gestão financeira acessível e integrada', 
            description: 'Permite que você organize os recebíveis, integre com o banco, classifique os lançamentos e faça muito mais, no smartphone, tablet ou computador.', 
            titleForm: 'Cadastre seu negócio'
        },
        contact: {
            title:'Contato', 
            descriptionTitle: 'Fale com a Nexaas', 
            description: 'Deixe seu melhor e-mail para receber informações de nossos produtos, planos e assinaturas.', 
            titleForm: 'Converse com o suporte'

        }
    }
};