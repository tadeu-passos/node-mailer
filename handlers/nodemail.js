var nodemailer = require('nodemailer');
const ruptura = require('./ruptura.json');
const ativacao = require('./ativacao.json');

const handler_mail = function (req, res, next) {
    const { email_to, email_subject } = JSON.parse(req.params.emailObj);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'artefact.test.br@gmail.com',
            pass: 'work@artefact'
        }
    });

    const email_promises = email_to.map(el_to => {
        // const el_ruptura = ruptura.filter(a=>(a.EMAIL===el_to));
        // const el_ativacao = ativacao.filter(a=>(a.EMAIL===el_to));
        // console.log(el_ruptura);
        // console.log(el_ativacao);

        var mailOptions = {
            from: 'artefact.test.br@gmail.com',
            to: el_to,
            subject: email_subject,
            // text: email_text
            html: '<div style="margin: auto; display: flex; outline: 0; padding: 20px; border-radius: 4px; justify-content: center; background-color: #f5f5f5;" tabindex="-1"> <div style="width: 100%;"> <h6 style="font-size: 1.25rem; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; font-weight: 500; line-height: 1.6; letter-spacing: 0.0075em;margin: 0;"> ' +
                'Responsável: ' +
                el_to +
                ' </h6> <div style="min-width: 890px; width: 100%; margin-top: 24px; overflow-x: auto; margin-bottom: 16px;border-radius: 4px;color: rgba(0, 0, 0, 0.87); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; background-color: #fff; border-style: solid;border-width: thin;border-color: #dadce0;"> <div style="padding-left: 16px; padding-right: 16px; padding-top: 16px; min-height: 64px;display: flex; position: relative; align-items: center;"> <table style="min-width: 650px;width: 100%; display: table; border-spacing: 0; border-collapse: collapse;"> <tr> <td style="width: 34%"> <h6 style="font-size: 1.25rem; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; font-weight: 500; line-height: 1.6; letter-spacing: 0.0075em;margin: 0;"> Ruptura nas Lojas </h6> </td> <td style="width: 33%"> <h6 style="text-align: center; font-size: 1.25rem; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; font-weight: 500; line-height: 1.6; letter-spacing: 0.0075em;margin: 0;"> Prioridade: <span style="color: red">Alta</span> </h6> </td> <td style="width: 33%"> <p style="color: rgba(0, 0, 0, 0.54);text-align: right; min-width: 160px; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif;"> Ocorrencias em: 11-Set </p> </td> </tr> </table> </div> <table style="min-width: 650px;width: 100%; display: table; border-spacing: 0; border-collapse: collapse;"> <thead style="display: table-header-group;"> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;"> <th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Loja </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Produto </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Perda Estimada por Dia </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Dias em Ruptura </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Rede </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Bandeira </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Estado </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Cidade </th> <th style="flex-direction: row-reverse;padding: 6px 16px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Endereço / Descrição loja </th> </tr> </thead> <tbody style="display: table-row-group;"> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;"> <th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="row"> 8545 </th> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> ABSOLUT REGULAR 1L </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> R$ 550 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> 3 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> CARREFOUR </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> HIPER </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> SP </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> São paulo </td> <td style="flex-direction: row-reverse;padding: 6px 16px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> Marginal Tietê - Limão </td> </tr> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;"> <th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="row"> 8545 </th> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> ABSOLUT REGULAR 1L </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> R$ 550 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> 3 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> CARREFOUR </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> HIPER </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> SP </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> São paulo </td> <td style="flex-direction: row-reverse;padding: 6px 16px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> Marginal Tietê - Limão </td> </tr> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;"> <th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="row"> 8545 </th> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> ABSOLUT REGULAR 1L </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> R$ 550 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> 3 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> CARREFOUR </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> HIPER </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> SP </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> São paulo </td> <td style="flex-direction: row-reverse;padding: 6px 16px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> Marginal Tietê - Limão </td> </tr> </tbody> </table> </div> <div style="min-width: 890px; width: 100%; margin-top: 24px; overflow-x: auto; margin-bottom: 16px;border-radius: 4px;color: rgba(0, 0, 0, 0.87); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; background-color: #fff; border-style: solid;border-width: thin;border-color: #dadce0;"> <div style="padding-left: 16px; padding-right: 16px; padding-top: 16px; min-height: 64px;display: flex; position: relative; align-items: center;"> <table style="min-width: 650px;width: 100%; display: table; border-spacing: 0; border-collapse: collapse;"> <tr> <td style="width: 34%"> <h6 style="font-size: 1.25rem; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; font-weight: 500; line-height: 1.6; letter-spacing: 0.0075em;margin: 0;"> Inativação de Produtos </h6> </td> <td style="width: 33%"> <h6 style="text-align: center; font-size: 1.25rem; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; font-weight: 500; line-height: 1.6; letter-spacing: 0.0075em;margin: 0;"> Prioridade: <span style="color: red">Alta</span> </h6> </td> <td style="width: 33%"> <p style="color: rgba(0, 0, 0, 0.54);text-align: right; min-width: 160px; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif;"> Ocorrencias em: 11-Set </p> </td> </tr> </table> </div> <table style="min-width: 650px;width: 100%; display: table; border-spacing: 0; border-collapse: collapse;"> <thead style="display: table-header-group;"> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;"> <th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Loja </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Produto </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Perda Estimada por Dia </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Data inativação </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Rede </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Bandeira </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Estado </th> <th style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Cidade </th> <th style="flex-direction: row-reverse;padding: 6px 16px 6px 4px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> Endereço / Descrição loja </th> </tr> </thead> <tbody style="display: table-row-group;"> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;"> <th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="row"> 8545 </th> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> ABSOLUT REGULAR 1L </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> R$ 550 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> 3 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> CARREFOUR </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> HIPER </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> SP </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> São paulo </td> <td style="flex-direction: row-reverse;padding: 6px 16px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> Marginal Tietê - Limão </td> </tr> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;"> <th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="row"> 8545 </th> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> ABSOLUT REGULAR 1L </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> R$ 550 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> 3 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> CARREFOUR </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> HIPER </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> SP </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> São paulo </td> <td style="flex-direction: row-reverse;padding: 6px 16px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> Marginal Tietê - Limão </td> </tr> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;"> <th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="row"> 8545 </th> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> ABSOLUT REGULAR 1L </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> R$ 550 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> 3 </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> CARREFOUR </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> HIPER </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> SP </td> <td style="flex-direction: row-reverse;padding: 6px 4px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> São paulo </td> <td style="flex-direction: row-reverse;padding: 6px 16px 6px 4px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: center; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;"> Marginal Tietê - Limão </td> </tr> </tbody> </table> </div> </div> </div>'
        };

        return transporter.sendMail(mailOptions);
    });

    Promise.all(email_promises)
        .then(() => {
            res.status(200).send({success: true});
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send({success: false})
        })

    // res.send('email sent!');
};


module.exports = handler_mail;