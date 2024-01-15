import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const dataEmail = req.body;
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [process.env.EMAIL_TO ?? ''],
        subject: dataEmail.subject,
        react: EmailTemplate({ name: dataEmail.name, message: dataEmail.message, email: dataEmail.email }),
        text: dataEmail.message,
    });

    if (error) {
        return res.status(400).json(error);
    }

    res.status(200).json(data);
};
