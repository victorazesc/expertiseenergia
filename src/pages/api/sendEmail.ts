import transporter from "@/configs/nodemailer.config";

type LeadBody = {
    name: string;
    email: string;
    phone: string;
    averageValue?: string;
    consumption?: string;
    substation?: string;
    knowledge?: string;
    homeType?: string;
};

export default async function handler(
    req: { method?: string; body?: LeadBody },
    res: any
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    try {
        const {
            name,
            email,
            phone,
            averageValue = "-",
            consumption = "-",
            substation = "-",
            knowledge = "-",
            homeType = "-",
        } = req.body || ({} as LeadBody);

        // validações básicas
        if (!name || !email || !phone) {
            return res.status(400).json({ message: "Campos obrigatórios ausentes." });
        }

        // dispara a criação no Agendor (não bloqueia envio de email se falhar)
        // await handle_agendor_form_submission({
        //     name,
        //     email,
        //     phone,
        //     averageValue,
        //     consumption,
        //     substation,
        //     knowledge,
        //     homeType,
        // });

        // ========== EMAIL PARA O CLIENTE ==========
        const userEmailOptions = {
            from: 'Expertise Energia Solar <vendas@expertiseenergia.com.br>',
            to: email,
            subject: 'Cooperando com a vida das pessoas',
            html: htmlToCustomer({ name }),
        };

        // ========== EMAIL INTERNO COM OS DADOS DO LEAD ==========
        const internalRecipient =
            process.env.LEADS_INBOX_EMAIL || 'victorazesc@hotmail.com';

        const internalEmailOptions = {
            from: 'Expertise Energia Solar <vendas@expertiseenergia.com.br>',
            to: [internalRecipient, 'victorazesc@hotmail.com'],
            subject: `Novo lead do site - ${name}`,
            html: htmlToInternal({
                name,
                email,
                phone,
                averageValue,
                consumption,
                substation,
                knowledge,
                homeType,
            }),
        };

        // envia ambos (em paralelo)
        await Promise.all([
            transporter.sendMail(userEmailOptions),
            transporter.sendMail(internalEmailOptions),
        ]);

        return res.status(200).json({ message: "E-mail enviado com sucesso" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return res.status(500).json({ message: "Erro ao enviar e-mail" });
    }
}

/* -------------------- HTMLs -------------------- */

function htmlToCustomer({ name }: { name: string }) {
    return `
  <table align="center" cellpadding="0" cellspacing="0" width="100%" style="background:#ffffff">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%">
          <tr>
            <td align="center" style="padding:16px">
              <img src="https://expertiseenergia.com.br/images/expertise-logo.png" alt="Expertise Energia" width="150" style="display:block;border:0;outline:none;height:auto;max-width:150px" />
            </td>
          </tr>

          <tr>
            <td style="padding:0 18px 8px 18px; font-family:Helvetica,Arial,sans-serif; color:#333">
              <h1 style="margin:0; font-size:20px; line-height:1.4">Olá ${escapeHtml(name)},</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:0 18px; font-family:Helvetica,Arial,sans-serif; color:#555; font-size:14px; line-height:1.6">
              <p style="margin:0 0 12px 0">Estamos muito felizes pelo seu contato com a nossa empresa.</p>
              <p style="margin:0 0 12px 0">Nossos especialistas já receberam os seus dados e em breve vamos fazer contato. Fique atento ao celular.</p>
              <p style="margin:0 0 12px 0">Muito obrigado!</p>
            </td>
          </tr>

          <tr>
            <td style="padding:12px 18px; font-family:Helvetica,Arial,sans-serif; color:#333; font-size:14px; line-height:1.6">
              <strong>Expertise Energia Solar</strong><br/>
              <span>(92) 98451-2299</span>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:16px">
              <img src="https://expertiseenergia.com.br/images/email-footer.png" alt="" width="564" style="display:block;border:0;outline:none;height:auto;max-width:564px" />
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:8px 18px 18px 18px; font-family:Helvetica,Arial,sans-serif; color:#888; font-size:11px; line-height:1.4">
              Enviado por <b>www.expertiseenergia.com.br</b><br/>
              Edifício Celebration Smart Offices, sala 3 - Vieiralves - CEP 69053-100 - Manaus/AM
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}

function htmlToInternal(payload: LeadBody) {
    const row = (label: string, value?: string) => `
    <tr>
      <td style="padding:10px 12px; border-bottom:1px solid #eee; background:#fff; font-family:Helvetica,Arial,sans-serif; font-size:14px; color:#555;">
        <strong style="color:#333">${label}:</strong>
      </td>
      <td style="padding:10px 12px; border-bottom:1px solid #eee; background:#fff; font-family:Helvetica,Arial,sans-serif; font-size:14px; color:#333;">
        ${escapeHtml(value || "-")}
      </td>
    </tr>`;

    return `
  <table align="center" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f7fb">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" width="640" style="max-width:640px;width:100%; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 6px 24px rgba(0,0,0,.06);">
          <tr>
            <td style="padding:20px; background:linear-gradient(135deg,#06454A,#0E7C86);">
              <table width="100%">
                <tr>
                  <td align="left">
                    <img src="https://expertiseenergia.com.br/images/expertise-logo.png" alt="Expertise Energia" width="160" style="display:block;border:0;outline:none;height:auto;max-width:160px" />
                  </td>
                  <td align="right" style="font-family:Helvetica,Arial,sans-serif; color:#000; font-size:20px;">
                    Novo lead do site
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 20px; font-family:Helvetica,Arial,sans-serif; color:#222;">
              <h2 style="margin:0 0 6px 0; font-size:18px;">Detalhes do Lead</h2>
              <p style="margin:0; color:#666; font-size:13px;">Recebemos um novo lead através do formulário do site.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 20px 20px 20px;">
              <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; background:#fafafa; border:1px solid #eee;">
                ${row("Nome", payload.name)}
                ${row("E-mail", payload.email)}
                ${row("Telefone", payload.phone)}
                ${row("Tipo de imóvel", payload.homeType)}
                ${row("Valor médio da conta (R$)", payload.averageValue)}
                ${row("Consumo médio (kWh)", payload.consumption)}
                ${row("Há subestação no imóvel?", payload.substation)}
                ${row("Como nos conheceu", payload.knowledge)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:14px 20px; font-family:Helvetica,Arial,sans-serif; color:#888; font-size:11px; background:#ffffff; border-top:1px solid #eee;">
              <em>Este e-mail foi gerado automaticamente pelo site.</em>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}

/* -------------------- Agendor -------------------- */

async function handle_agendor_form_submission({
    name,
    email,
    phone,
    averageValue,
    consumption,
    substation,
    knowledge,
    homeType,
}: LeadBody) {
    try {
        const apiKey = process.env.AGENDOR_API_TOKEN;
        if (!apiKey) return;

        const personPayload = {
            name,
            contact: { email, mobile: phone },
            leadOrigin: "Site",
            customFields: {
                tipo_de_imovel: homeType,
                valor_medio_da_conta_de_luz: averageValue,
                consumo_medio_em_kwh: consumption,
                existe_substacao_no_imovel: substation,
                como_conheceu_a_expertise: knowledge,
            },
        };

        const personRes = await fetch("https://api.agendor.com.br/v3/people", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${apiKey}`,
            },
            body: JSON.stringify(personPayload),
        });

        if (!personRes.ok) {
            console.warn("Agendor person error:", await safeText(personRes));
            return;
        }

        const personData = await personRes.json();
        const personId = personData?.data?.id;
        const personName = personData?.data?.name;

        if (!personId) return;

        const dataBusiness = {
            title: personName || name,
            person: personId,
            funnel: process.env.AGENDOR_FUNNEL,
        };

        const dealsRes = await fetch(
            `https://api.agendor.com.br/v3/people/${personId}/deals`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${apiKey}`,
                },
                body: JSON.stringify(dataBusiness),
            }
        );

        if (!dealsRes.ok) {
            console.warn("Agendor deal error:", await safeText(dealsRes));
        }
    } catch (err) {
        console.error("Agendor error:", err);
    }
}

/* -------------------- Utils -------------------- */

function escapeHtml(str: string) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

async function safeText(r: Response) {
    try {
        return await r.text();
    } catch {
        return "(no body)";
    }
}