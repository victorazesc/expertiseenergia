import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { useState } from 'react';

export function Agendor({ mobile }: any) {
    const [sendedEmail, setSendedEmail] = useState<boolean>(false);
    const [loadingButton, setLoadingButton] = useState<boolean>(false);

    const contactFormSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Nome muito curto!')
            .max(50, 'Nome muito longo!')
            .required('O nome é obrigatório'),
        phone: Yup.string()
            .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone inválido')
            .required('O telefone é obrigatório'),
        email: Yup.string().email('Email invalido!').required('O email é obrigatório'),
    });


    const handleSubmit = async (e: any) => {
        try {
            setLoadingButton(true)
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e)
            });

            if (response.ok) {
                setSendedEmail(true)
                setTimeout(() => { setSendedEmail(false), setLoadingButton(false) }, 5000)
            } else {
                console.error('Erro ao enviar e-mail:', response.statusText);
            }
        } catch (error) {
            setLoadingButton(false)
            console.error('Erro ao enviar e-mail:', error);
        }
    };
    return (
        <>
            <section className='bg-cyan-100 py-20 px-4' id='simulate-form'>
                <div className='container mx-auto flex md:flex-row flex-col justify-between gap-20'>
                    <div className='w-full sm:w-1/2'>
                        <h1 className='text-4xl font-bold py-8'>Faça sua Simulação</h1>

                        <p className='text-xl py-6'>Descubra quanto seria seu investimento de  forma gratuita
                            preencha seus dados e um de nossos especialistas entrará em contato</p>
                        <p className='text-xl'>Acreditamos que bons resultados são baseados em transparencia e comunicação</p>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <div className='bg-white rounded-3xl px-8 py-8'>
                            {sendedEmail ?
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img src="images/rounded-check.svg" alt="" width={130} />
                                    <h1 className='text-2xl font-medium py-4'>
                                        Sua solicitação de contato foi concluída!
                                    </h1>
                                    <h2 className='text-xl'>Enviamos um email para você</h2>
                                </div>
                                :
                                <>
                                    <Formik
                                        validationSchema={contactFormSchema}
                                        initialValues={{
                                            name: '',
                                            phone: '',
                                            email: '',
                                        }}
                                        onSubmit={async (values) => {
                                            handleSubmit(values)
                                        }}
                                    >
                                        {({ errors, touched, isValidating }) => (
                                            <Form style={{ display: "flex", flexDirection: "column" }}>
                                                <Field id="name" name="name" placeholder="Nome" />
                                                {errors.name && touched.name && <div className='text-red-400 text-sm -mt-5'>{errors.name}</div>}
                                                <Field
                                                    name="phone"
                                                    render={({ field }: any) => (
                                                        <InputMask
                                                            {...field}
                                                            mask="(99) 99999-9999"
                                                            maskChar=""
                                                            placeholder="(XX) XXXXX-XXXX"
                                                            type="text"
                                                        />
                                                    )}
                                                />
                                                {errors.phone && touched.phone && <div className='text-red-400 text-sm -mt-5'>{errors.phone}</div>}
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    type="email"
                                                    className="mb-7"
                                                />
                                                {errors.email && touched.email && <div className='text-red-400 text-sm -mt-5'>{errors.email}</div>}
                                                <br />
                                                {
                                                    loadingButton ? <button disabled={true} className="agendor-button" id="submit-agendor-form" type="submit"
                                                    ><img src="images/loading.svg" width={35} alt="" /></button> : <button className="agendor-button mt-5" id="submit-agendor-form" type="submit"
                                                    >enviar</button>
                                                }

                                            </Form>
                                        )}
                                    </Formik>

                                </>


                            }
                        </div>
                        <p className='text-center py-4 text-zinc-500'>A nossa empresa esta comprometida em respeitar sua privacidade</p>
                    </div>


                </div>
            </section>


            {/* <section id="simulate-mobile">
                <div style={{ margin: !mobile ? '32px 96px' : '' }}>
                    {mobile && <div style={{
                        minHeight: '300px',
                        display: 'flex',
                        alignContent: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        fontFamily: "'Droid Sans', sans-serif",
                        color: 'white',
                        background: '#0dc937',
                        padding: 30
                    }}>
                        <p style={{ fontSize: "20px", lineHeight: "1.25" }}>Faça sua simulação</p>
                        <p style={{ lineHeight: 1.25 }}><br /></p>
                        <p style={{ lineHeight: 1.25 }}>Descubra quanto seria seu investimento
                            gatuitamente.
                        </p>
                        <p style={{ lineHeight: 1.25 }}><br /></p>
                        <p style={{ lineHeight: 1.25 }}>Preencha seus dados e um de nossos
                            especialistas
                            entrará em contato.</p>
                        <p style={{ lineHeight: 1.25 }}><br /></p>
                    </div>
                    }


                    <div style={{
                        display: 'flex',
                        minWidth: '100%',
                        borderColor: '#ffffff',
                        borderRadius: '1px',
                        borderWidth: '10px',
                        borderTopStyle: 'solid',
                        borderBottomStyle: 'solid',
                        borderLeftStyle: 'solid',
                        borderRightStyle: 'solid',
                    }}>


                        {!mobile && <div style={{
                            background: '#0dc937',
                            flex: '7 0 0',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '32px'
                        }}>
                            <div style={{
                                minHeight: '300px',
                                display: 'flex',
                                alignContent: 'center',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                fontFamily: "'Droid Sans', sans-serif",
                                color: 'white'
                            }}>
                                <p style={{ fontSize: "20px", lineHeight: "1.25" }}>Faça sua simulação</p>
                                <p style={{ lineHeight: 1.25 }}><br /></p>
                                <p style={{ lineHeight: 1.25 }}>Descubra quanto seria seu investimento
                                    gatuitamente.
                                </p>
                                <p style={{ lineHeight: 1.25 }}><br /></p>
                                <p style={{ lineHeight: 1.25 }}>Preencha seus dados e um de nossos
                                    especialistas
                                    entrará em contato.</p>
                                <p style={{ lineHeight: 1.25 }}><br /></p>
                            </div>
                        </div>}

                        <div style={{ background: "white", flex: "5 0 0", padding: "32px" }}>
                            {sendedEmail ?
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img src="images/check-mark.png" alt="" width={130} />
                                    <h1 className='text-2xl'>
                                        Sua solicitação de contato foi enviada!
                                    </h1>
                                    <h2 className='text-xl'>Enviamos um email para você</h2>
                                </div>
                                :
                                <Formik
                                    validationSchema={contactFormSchema}
                                    initialValues={{
                                        name: '',
                                        phone: '',
                                        email: '',
                                    }}
                                    onSubmit={async (values) => {
                                        handleSubmit(values)
                                    }}
                                >
                                    {({ errors, touched, isValidating }) => (
                                        <Form style={{ display: "flex", flexDirection: "column" }}>
                                            <Field id="name" name="name" placeholder="Nome*" />
                                            {errors.name && touched.name && <div className='text-red-400 text-sm -mt-5'>{errors.name}</div>}
                                            <Field
                                                name="phone"
                                                render={({ field }: any) => (
                                                    <InputMask
                                                        {...field}
                                                        mask="(99) 99999-9999"
                                                        maskChar=""
                                                        placeholder="(XX) XXXXX-XXXX"
                                                        type="text"
                                                    />
                                                )}
                                            />
                                            {errors.phone && touched.phone && <div className='text-red-400 text-sm -mt-5'>{errors.phone}</div>}
                                            <Field
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                type="email"
                                                className="mb-7"
                                            />
                                            {errors.email && touched.email && <div className='text-red-400 text-sm -mt-5'>{errors.email}</div>}
                                            <br />
                                            {
                                                loadingButton ? <button disabled={true} className="agendor-button" id="submit-agendor-form" type="submit"
                                                ><img src="images/loading.svg" width={35} alt="" /></button> : <button className="agendor-button mt-5" id="submit-agendor-form" type="submit"
                                                >enviar</button>
                                            }

                                        </Form>
                                    )}
                                </Formik>
                            }
                        </div>
                    </div>
                </div>
            </section > */}
        </>
    )
}
