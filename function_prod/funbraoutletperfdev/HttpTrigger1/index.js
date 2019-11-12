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

        const html_header = '<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%;background:#f9f9f9"> <tbody> <tr> <td style="padding:22.5pt 22.5pt 22.5pt 22.5pt"> <div align="center"> <table border="1" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%;background:white;border:solid #e1e1e1 1.0pt"> <tbody> <tr> <td style="border:none;padding:7.5pt 7.5pt 7.5pt 7.5pt"> <div align="center"> <table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%"> <tbody> <tr> <td style="padding:11.25pt 11.25pt 11.25pt 11.25pt"> <p class="MsoNormal" style="margin:6.0pt"><b><span style="font-size:13.5pt;font-family:Arial Narrow,sans-serif;color:#999999"> ' +
            'Responsável: ' + nome +
            '</span></b> </p> </td> </tr> <tr> <td colspan="2" style="border-top:solid #e1e1e1 1.0pt;border-left:none;border-bottom:solid #e1e1e1 1.0pt;border-right:none;padding:11.25pt 11.25pt 11.25pt 11.25pt">';

        const html_tables_array = dados.map(dado => {
            const dado_date = dado.date ? 'Ocorrencias em: ' + dado.date : '&nbsp;';

            const table_head = '<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%;border-collapse:collapse"> <tbody> <tr> <td style="border:solid #666666 1.0pt;padding:4.5pt 4.5pt 4.5pt 4.5pt"> <table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%;border-collapse:collapse"> <thead> <tr> <td style="width: 33.3%"> <p class="MsoNormal" align="left" style="text-align:left"> <b><span style="font-size:10.5pt;font-family:Arial,sans-serif;color:#444444">' +
                dado.nome_alarme +
                '</span></b> </p> </td> <td style="width: 33.4%"> <p class="MsoNormal" align="center" style="text-align:center"> <b><span style="font-size:10.5pt;font-family:Arial,sans-serif;color:#444444">' +
                dado.prioridade +
                '</span></b> </p> </td> <td style="width: 33.3%"> <p class="MsoNormal" align="right" style="text-align:right"> <b><span style="font-size:10.5pt;font-family:Arial,sans-serif;color:#444444">' +
                dado_date +
                '</span></b> </p> </td> </tr> </thead> </table> </td> </tr> <tr> <td style="border:solid #666666 1.0pt;border-top:none;padding:4.5pt 4.5pt 4.5pt 4.5pt"> <table border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%;border-collapse:collapse"> <thead> <tr>';

            let row_names = '';
            Object.keys(dado.dados[0]).forEach(col => {
                row_names +=
                    '<td style="border:solid #666666 1.0pt;padding:4.5pt 4.5pt 4.5pt 4.5pt"> <p class="MsoNormal" align="center" style="text-align:center"><b><span style="font-size:8.5pt;font-family:Verdana,sans-serif;color:#333333"> ' +
                    col +
                    ' </span></b></p></td>';
            });
            row_names += '</tr>';

            let row_body = '';
            dado.dados.forEach(row => {
                row_body += '<tr>';
                Object.keys(row).forEach(col => {
                    row_body +=
                        '<td style="border:solid #666666 1.0pt;border-top:none;padding:4.5pt 4.5pt 4.5pt 4.5pt"> <p class="MsoNormal"><span style="font-size:8.5pt;font-family:Verdana,sans-serif;color:#333333">' +
                        row[col] +
                        '</span></p></td>';
                });
                row_body += '</tr>';
            });

            const table_tail = '</thead></table></td></tr></tbody></table><p><span style="font-size:8.5pt;font-family:Arial,sans-serif;color:#444444"><u></u>&nbsp;<u></u></span></p>';

            return table_head + row_names + row_body + table_tail;
        });

        const html_tables = html_tables_array.join('');

        const html_tail = '</td></tr></tbody></table></div></td></tr></tbody></table></div></td></tr></tbody></table>';

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