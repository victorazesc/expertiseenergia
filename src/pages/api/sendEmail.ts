import transporter from "@/configs/nodemailer.config";


export default async function handler(req: { method: string; body: { name: any; email: any; phone: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
    if (req.method === 'POST') {
        const { name, email, phone } = req.body;
        handle_agendor_form_submission({ name, email, phone })

        const mailOptions = {
            from: 'Expertise Energia Solar <vendas@expertiseenergia.com.br>',
            to: email,
            sender: 'Expertise Energia Solar',
            subject: 'Cooperando com a vida das pessoas',
            html: `<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="x_bodyTable"
      style="border-collapse:collapse; width:100%; height:100%; margin:0; padding:0; background-color:#ffffff">
      <tbody>
          <tr>
              <td align="center" valign="top" id="x_bodyCell"
                  style="width:100%; height:100%; margin:0; padding:0; border-top:0">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                      <tbody>
                          <tr>
                              <td align="center" valign="top" class="x_section1Column"
                                  style="background-color:transparent; border-top:0; border-bottom:0px; padding-top:0px; padding-bottom:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                      class="x_sectionContainer"
                                      style="border-collapse:collapse; width:100%; max-width:600px!important; background-color:transparent">
                                      <tbody>
                                          <tr>
                                              <td valign="top" style="">
                                                  <table class="x_columnContainer" align="left" border="0" cellpadding="0"
                                                      cellspacing="0" width="600f"
                                                      style="width:600px; border-collapse:collapse">
                                                      <tbody>
                                                          <tr>
                                                              <td class="x_columnContainerCell" valign="top"
                                                                  style="font-size:16px; line-height:110%; font-family:Helvetica,Arial,sans-serif; color:#666666">
                                                                  <table border="0" cellpadding="0" cellspacing="0"
                                                                      width="100%" class="x_columnContainerSize"
                                                                      style="border-collapse:collapse; width:100%; max-width:600px!important; background-color:transparent">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td valign="top" style="">
                                                                                  <table align="left" border="0"
                                                                                      cellpadding="0" cellspacing="0"
                                                                                      width="390"
                                                                                      class="x_columnContainer"
                                                                                      style="width:390px; border-collapse:collapse">
                                                                                      <tbody>
                                                                                          <tr>
                                                                                              <td class="x_columnContainerCell"
                                                                                                  valign="top"
                                                                                                  style="word-break:break-word; vertical-align:top; text-align:left; font-size:11px; line-height:120%; font-family:Helvetica,Arial,sans-serif; color:#888888; padding-top:9px; padding-left:9px; padding-bottom:9px; padding-right:9px">
                                                                                                  Seja bem-vindo à
                                                                                                  Expertise </td>
                                                                                          </tr>
                                                                                      </tbody>
                                                                                  </table>
                                                                                  <table align="left" border="0"
                                                                                      cellpadding="0" cellspacing="0"
                                                                                      width="210"
                                                                                      class="x_columnContainer"
                                                                                      style="width:210px; border-collapse:collapse">
                                                                                      <tbody>
                                                                                          <tr>
                                                                                              <td class="x_columnContainerCell"
                                                                                                  valign="top"
                                                                                                  style="word-break:break-word; vertical-align:top; text-align:left; font-size:11px; line-height:120%; font-family:Helvetica,Arial,sans-serif; color:#888888; padding-top:9px; padding-left:9px; padding-bottom:9px; padding-right:9px">
                                                                                                  </td>
                                                                                          </tr>
                                                                                      </tbody>
                                                                                  </table>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" class="x_section1Column"
                                  style="background-color:transparent; border-top:0; border-bottom:0px; padding-top:0px; padding-bottom:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                      class="x_sectionContainer"
                                      style="border-collapse:collapse; width:100%; max-width:600px!important; background-color:transparent">
                                      <tbody>
                                          <tr>
                                              <td valign="top" style="">
                                                  <table class="x_columnContainer" align="left" border="0" cellpadding="0"
                                                      cellspacing="0" width="600"
                                                      style="width:600px; border-collapse:collapse">
                                                      <tbody>
                                                          <tr>
                                                              <td class="x_columnContainerCell" valign="top"
                                                                  style="font-size:16px; line-height:110%; font-family:Helvetica,Arial,sans-serif; color:#666666">
                                                                  <table width="100%" border="0" cellspacing="0"
                                                                      cellpadding="0"
                                                                      style="border-collapse:collapse!important">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td bgcolor="transparent" align="center"
                                                                                  style="padding-top:9px; padding-bottom:9px; padding-left:18px; padding-right:18px">
                                                                                <Image data-imagetype="External"
                                                                                      src="https://expertiseenergia.com.br/images/expertise-logo.png"
                                                                                      alt="" width="150" border="0"
                                                                                      class="x_img-max"
                                                                                      style="border:0; line-height:100%; outline:none; display:block; max-width:150px; height:auto">
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                                  <table width="100%" border="0" cellspacing="0"
                                                                      cellpadding="0"
                                                                      style="border-collapse:collapse!important">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td bgcolor="transparent" align="left"
                                                                                  class="x_padding"
                                                                                  style="font-size:16px; line-height:150%; font-family:Helvetica,Arial,sans-serif; color:#666666; padding:9px 18px; word-break:break-word!important">
                                                                                  <h1 style="line-height:125%">Olá ${name}
                                                                                  </h1>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                                  <table width="100%" border="0" cellspacing="0"
                                                                      cellpadding="0"
                                                                      style="border-collapse:collapse!important">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td bgcolor="transparent" align="left"
                                                                                  class="x_padding"
                                                                                  style="font-size:16px; line-height:150%; font-family:Helvetica,Arial,sans-serif; color:#666666; padding:9px 18px; word-break:break-word!important">
                                                                                  <p style="line-height:150%">Estamos
                                                                                      muito felizes pelo seu contato com a
                                                                                      nossa empresa.</p>
                                                                                  <p style="line-height:150%">Nossos
                                                                                      especialistas já receberam os seus
                                                                                      dados e em breve vamos fazer contato, fique atento ao celular.
                                                                                  </p>
                                                                                  <p style="line-height:150%">Muito obrigado!</p>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                                  <table width="100%" border="0" cellspacing="0"
                                                                      cellpadding="0"
                                                                      style="border-collapse:collapse!important">
                                                                      <tbody>
                                                              <tr>
                                                                              <td bgcolor="transparent" align="left" style="font-size:16px;line-height:150%;font-family:Helvetica,Arial,sans-serif;color:#666666;padding:9px 18px;word-break:break-word!important">
                                                                          <p style="line-height: 1;"><span style="font-family:sans-serif">
                                              <strong>Expertise Energia Solar</strong>
                                </span><br><br>
  <span style="font-family:sans-serif">
                                
                                                                                       <strong>(92) 98451-2299</strong></span>
  </p>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                                  <table width="100%" border="0" cellspacing="0"
                                                                      cellpadding="0"
                                                                      style="border-collapse:collapse!important">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td bgcolor="transparent" align="center"
                                                                                  style="padding-top:9px; padding-bottom:9px; padding-left:18px; padding-right:18px">
                                                                                  <Image data-imagetype="External"
                                                                                   src="https://expertiseenergia.com.br/images/email-footer.png"
                                                                                   alt="" width="564" border="0"
                                                                                   class="x_img-max"
                                                                                   style="border:0; line-height:100%; outline:none; display:block; max-width:564px; height:auto">
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" class="x_section1Column"
                                  style="background-color:transparent; border-top:0; border-bottom:0px; padding-top:0px; padding-bottom:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                      class="x_sectionContainer"
                                      style="border-collapse:collapse; width:100%; max-width:600px!important; background-color:transparent">
                                      <tbody>
                                          <tr>
                                              <td valign="top" style="">
                                                  <table class="x_columnContainer" align="left" border="0" cellpadding="0"
                                                      cellspacing="0" width="600"
                                                      style="width:600px; border-collapse:collapse">
                                                      <tbody>
                                                          <tr>
                                                              <td class="x_columnContainerCell" valign="top"
                                                                  style="font-size:16px; line-height:110%; font-family:Helvetica,Arial,sans-serif; color:#666666">
                                                                  <table class="x_columnContainer" align="left" border="0"
                                                                      cellpadding="0" cellspacing="0" width="600"
                                                                      style="width:600px; border-collapse:collapse">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td class="x_columnContainerCell"
                                                                                  valign="top"
                                                                                  style="font-size:11px; line-height:120%; font-family:Helvetica,Arial,sans-serif; color:#888888; text-align:center; padding-top:9px; padding-bottom:9px; padding-left:9px; padding-right:9px">
                                                                                  <p
                                                                                      style="font-size:11px!important; margin:0; line-height:120%">
                                                                                      Enviado por
                                                                                      <b>www.expertiseenergia.com.br</b>
                                                                                  </p>
                                                                                  <p
                                                                                      style="font-size:11px!important; margin:0; line-height:120%">
                                                                                      Edifício Celebration Smart Offices, sala 3 - Vieiralves - CEP 69.053-100 - Manaus/AM
                                                                                  </p>
                                                                                  <p
                                                                                      style="font-size:11px!important; margin:0; line-height:120%">
                                                                                      Se deseja não receber mais mensagens
                                                                                      como esta, <a
                                                                                          href="https://u31176135.ct.sendgrid.net/ls/click?upn=d-2BS0U8Ym2E2aF6xU-2BG4blnN6LLSCEsL2WTADX-2FXuokwqJjhbVOVWMHCL-2FPEmdGr9c7Cns3k1-2Bl3J5WXaWsib00L8QAyh0eLp5ISHp2Npkz4tgELMnAmNc8L8UlWo-2Bey8XxrUO5llhyCZjdhLE5lcifYjzdy4TY5XqFKdxtENeV2YW94CPmTT23Zr6-2FdWblRxNEUs8HfqqiGUFu4zX0wlqw-3D-3DaDhu_XsGA-2Fgkm2IVk-2FlYw8ReyfOsHL5DTpY-2Bd8UNKV0Z-2BkomADHP6WK3RVLLYXKNonyaw5wwaJAlH-2Fji5cWVKZ2T0dYERCLQM4ihDflhimo5UkcSmeJ374kX0vFrGrvg5uiwLCAl-2BPAnNRDeq8I4a4fnvRptaKayrPvtbkffOWa3-2BPnOHvfUiaGFJpJDKS4-2BuzuonNJU-2Fi1Nl7mpfyFOxPGkbAxrPeeLkgKIDHg5r6Bty4yOO-2FKdbdLPr1G-2FW-2BPWEoHV8FQWBwGKMZULz4wJnH4rcej6ML9zRFFLRY1haBvb2acfOfra-2FhSTZbn8rqqVzehQbIyMnNeyHvvuZ74mGj9Sna56qpZ-2BIf0Ljcc8vspp50Gb-2F3JcHLDCu4z-2BdthQmplAAnWo8w3b833LqcgkY6GMk9bq76xgp5KX7MgcDjNmuDqf0298YmzqZOs7ZR53b-2FDb3g6ITsi7eXulYV0t1-2BnbsA5u9yNbo5Qpjz1UQ-2FBjheWbvTkz5sBD-2BIlygaHImcykoa5uspaZQbzf1I-2FI0jfV6c0PaQmnpPcZaPMkkw-2BsKpfrUbjDF-2BB-2BeDYl1fC5hjvCnCfvfgue1-2Bafo6yYKQ74RpsoLRZvgY-2FV30wmv4PV-2F1qw3zAblC-2BsppufXntn-2BlbyQFIXATMYI79S76QT3onlXbmtRqDJE9JSoizb6HMz0LzEs7u8RAYcTs6gQ3KrdnEId-2BnW07s6-2FXFDcQM34oS4ULifWyLoh-2FQcyayx6ml4Ii5TUcgGIVAj41ZgOJWAzXpeMfdPGllrD631nvkmoGTmrY5YLIThMRueK3Pc6nzcxNZkCt6fzXmjhUbbMPuTHhzH9"
                                                                                          target="_blank"
                                                                                          rel="nofollow noopener noreferrer"
                                                                                          data-auth="NotApplicable"
                                                                                          data-scanner-ignore=""
                                                                                          style="color:#333333; text-decoration:underline"
                                                                                          data-linkindex="1">clique
                                                                                          aqui</a>. </p><span
                                                                                      style="display:none; font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden">•</span>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
      </tbody>
  </table>`
        };

        try {
            // Envia o e-mail
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'E-mail enviado com sucesso' });
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            res.status(500).json({ message: 'Erro ao enviar e-mail' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}

async function handle_agendor_form_submission({ name, email, phone }: any) {
    try {
        const apiKey = process.env.AGENDOR_API_TOKEN;
        const dataPerson = {
            "name": name,
            "contact": {
                "email": email,
                "mobile": phone,
            },
            "leadOrigin": "Site",
        };

        const apiUrlPerson = 'https://api.agendor.com.br/v3/people';
        const responsePerson = await fetch(apiUrlPerson, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${apiKey}`,
            },
            body: JSON.stringify(dataPerson)
        });

        // Extrair o ID da pessoa criada
        const dataPersonResponse = await responsePerson.json();
        const personId = dataPersonResponse.data.id
        const personName = dataPersonResponse.data.name

        // Construir o payload para a API do Agendor para criar um negócio associado à pessoa
        const dataBusines = {
            "title": personName,
            "person": personId, // ID da pessoa criada
            "funnel": process.env.AGENDOR_FUNNEL,
        };

        // Configuração da requisição API para criar um negócio no Agendor
        const apiUrlBusines = `https://api.agendor.com.br/v3/people/${personId}/deals`;

        // Requisição para a API do Agendor para criar um negócio

        const responseBusines = await fetch(apiUrlBusines, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${apiKey}`,
            },
            body: JSON.stringify(dataBusines)
        });


        return;
    } catch (error) {
        console.error(error)
    }

}
