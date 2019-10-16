module.exports = function (context, req) {
    var nodemailer = require('nodemailer');

    if ((req.query.Nome || (req.body && req.body.Nome)) && (req.query.Email || (req.body && req.body.Email)) && (req.query.Subject || (req.body && req.body.Subject)) && (req.query.Dados || (req.body && req.body.Dados))) {
        const nome = req.query.Nome || req.body.Nome;
        const email = req.query.Email || req.body.Email;
        const subject = req.query.Subject || req.body.Subject;
        const dados = req.query.Dados || req.body.Dados;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'artefact.test.br@gmail.com',
                pass: 'work@artefact'
            }
        });

        const html_header = '<div style="margin: auto; display: flex; outline: 0; padding: 20px; border-radius: 4px; justify-content: center; background-color: #f5f5f5;" tabindex="-1"> <div style="width: 100%;"> <h6 style="font-size: 1.25rem; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; font-weight: 500; line-height: 1.6; letter-spacing: 0.0075em;margin: 0;"> ' +
            'Responsável: ' + nome + '</h6> ';
        const html_tables_array = dados.map(dado => {
            const row_names_array = dado.dados[0];
            let row_names = '';
            Object.keys(row_names_array).forEach(col => {
                row_names += '<th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.54); font-size: 0.75rem; font-weight: 500; line-height: 1.3125rem;display: table-cell; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="col"> ' +
                    col + ' </th>';
            });

            let row_body = '';
            dado.dados.forEach(row => {
                row_body += '<tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;">';
                Object.keys(row).forEach(col => {
                    row_body += '<th style="padding: 6px 24px 6px 16px;color: rgba(0, 0, 0, 0.87); font-weight: 400;display: table-cell; font-size: 0.875rem; text-align: left; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; line-height: 1.43; border-bottom: 1px solid rgba(224, 224, 224, 1); letter-spacing: 0.01071em; vertical-align: inherit;" scope="row">' +
                        row[col] + '</th>';
                });
                row_body += '</tr>';
            });

            const dado_date = dado.date ? 'Ocorrencias em: ' + dado.date : '';

            return '<div style="min-width: 890px; width: 100%; margin-top: 24px; overflow-x: auto; margin-bottom: 16px;border-radius: 4px;color: rgba(0, 0, 0, 0.87); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; background-color: #fff; border-style: solid;border-width: thin;border-color: #dadce0;"> <div style="padding-left: 16px; padding-right: 16px; padding-top: 16px; min-height: 64px;display: flex; position: relative; align-items: center;"> <table style="min-width: 650px;width: 100%; display: table; border-spacing: 0; border-collapse: collapse;"> <tr> <td style="width: 34%"> <h6 style="font-size: 1.25rem; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; font-weight: 500; line-height: 1.6; letter-spacing: 0.0075em;margin: 0;">' +
                dado.nome_alarme +
                '</h6> </td> <td style="width: 33%"> <h6 style="text-align: center; font-size: 1.25rem; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif; font-weight: 500; line-height: 1.6; letter-spacing: 0.0075em;margin: 0;"><span style="color: rgba(0, 0, 0, 0.54)">' +
                dado.prioridade +
                '</span> </h6> </td> <td style="width: 33%"> <p style="color: rgba(0, 0, 0, 0.54);text-align: right; min-width: 160px; font-family: \'Roboto\', \'Helvetica\', \'Arial\', sans-serif;"> ' +
                 dado_date +
                '</p> </td> </tr> </table> </div> <table style="min-width: 650px;width: 100%; display: table; border-spacing: 0; border-collapse: collapse;"> <thead style="display: table-header-group;"> <tr style="color: inherit; display: table-row; outline: 0; vertical-align: middle;">' +
                row_names +
                '</tr> </thead> <tbody style="display: table-row-group;">' +
                row_body +
                '</tbody> </table> </div>'
        });

        const html_tables = html_tables_array.join('');

        const html_tail = '</div> </div>';


        const mailOptions = {
            from: 'artefact.test.br@gmail.com',
            to: email,
            subject: subject,
            // text: email_text
            html: html_header + html_tables + html_tail

        };

        transporter.sendMail(mailOptions)
            .then(() => {
                console.log("success!");
                context.res = {
                    body: "success: true"
                };
                context.done()
            })
            .catch((error) => {
                console.log(error);
                context.res = {
                    status: 400,
                    body: "success: false"
                };
                context.done()
            });
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
        context.done()
    }
};