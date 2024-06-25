import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import Image from "next/image"
import CurrencyInput from './CurrencyInput';
import ConsumptionInput from './ConsumptionInput';

export function Agendor({ mobile }: any) {

    return (
        <>
            <section className='bg-[#2F3F3A] py-20 px-4' id='simulate-form'>
                <div className='container mx-auto flex md:flex-row flex-col justify-between gap-20'>
                    <div className='w-full flex justify-center md:items-end items-center flex-col md:w-1/2 text-white'>
                        <Image src="/images/money.png" alt="check" className='block md:hidden' height={140} width={141} />
                        <div className='flex md:justify-end md:items-end flex-col px-2 w-full'>
                            <h1 className='md:ml-10 md:text-[40px] text-[24px] bg-[#FFE3CA] relative md:p-2 md:pr-8 md:w-96 md:text-right text-center font-bold text-black'><span className='text-orange-400'>⚠️</span> Não perca mais tempo e dinheiro!</h1>
                            <div className='md:w-[448px] md:text-right text-center'>
                                <p className='text-xl font-bold  py-6'>Temos o projeto perfeito para você economizar até 95% da sua conta de luz</p>
                                <p className='text-xl'>Faça uma simulação e converse gratuitamente com um de nossos especialistas para iniciar o projeto que vai realmente fazer diferença nas suas economias.</p>
                            </div>
                        </div>
                        <Image src="/images/money.png" alt="check" className='md:block hidden' height={340} width={321} />
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <div className='bg-white rounded-3xl px-8 py-8'>
                            <h3 className='text-2xl font-extrabold'>Faça uma simulação grátis</h3>
                            <p>Insira os dados abaixo e consulte o quanto você pode economizar anualmente com energia sustentável.</p>
                            <br />

                            <ContentToggle />
                        </div>
                        <p className='text-center py-4 text-zinc-500'>A nossa empresa esta comprometida em respeitar sua privacidade</p>
                    </div>


                </div>
            </section >
        </>
    )
}


const ContentToggle = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

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
        averageValue: Yup.string()
            .required('Digite um valor!'),
        substation: Yup.string().required('Selecione uma opção!'),
        knowledge: Yup.string().required('Selecione uma opção!'),
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
        <div onClick={handleClick} >
            <div className='block md:hidden'>
                {!isVisible &&
                    <button onClick={handleClick} type='button' className="text-[#169576] font-bold  w-full md:hidden block ">
                        <span className="flex items-center justify-center uppercase"> iniciar simulação </span>
                    </button>
                }
            </div>

            <div className={`${isVisible ? 'block' : 'md:block hidden'}`}>
                {sendedEmail ?
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image src="images/rounded-check.svg" alt="check" width={130} height={130} />
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
                                averageValue: '',
                                consumption: '',
                                substation: '',
                                knowledge: ''

                            }}
                            onSubmit={async (values) => {
                                handleSubmit(values)
                            }}
                        >
                            {({ errors, touched, isValidating }) => (
                                <Form style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="name">Nome</label>
                                    <Field id="name" name="name" />
                                    {errors.name && touched.name && <div className='text-red-400 text-sm -mt-5'>{errors.name}</div>}
                                    <label htmlFor="email">E-mail</label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="mb-7"
                                    />
                                    {errors.email && touched.email && <div className='text-red-400 text-sm -mt-5'>{errors.email}</div>}
                                    <label htmlFor="name">Telefone</label>
                                    <Field
                                        name="phone"
                                        render={({ field }: any) => (
                                            <InputMask
                                                {...field}
                                                mask="(99) 99999-9999"
                                                maskChar=""
                                                type="text"
                                            />
                                        )}
                                    />
                                    {errors.phone && touched.phone && <div className='text-red-400 text-sm -mt-5 mb-5'>{errors.phone}</div>}
                                    <p className='-mt-5 text-sm font-light'>Deixe o seu telefone WhatsApp para que um de nossos especialistas entre em contato</p>

                                    <div className='pt-4 flex flex-col'>
                                        <label htmlFor="name">Valor médio da conta de luz</label>
                                        <Field name="averageValue" component={CurrencyInput} placeholder="R$ 0,00" />

                                        {errors.averageValue && touched.averageValue && <div className='text-red-400 text-sm -mt-5'>{errors.averageValue}</div>}
                                    </div>
                                    <label htmlFor="name">Consumo médio em kWh</label>
                                    <Field name="consumption" component={ConsumptionInput} placeholder="0 kWh" />

                                    {errors.phone && touched.phone && <div className='text-red-400 text-sm -mt-5'>{errors.phone}</div>}

                                    <label className="block text-gray-700 font-medium mb-2">Há subestação de energia no imóvel?</label>
                                    <div className="flex items-center space-x-4">
                                        <label className="custom-radio">
                                            <Field type="radio" name="substation" value="Sim" className="form-radio" />
                                            <span className="radio-btn"></span>
                                            Sim
                                        </label>

                                        <label className="custom-radio">
                                            <Field type="radio" name="substation" value="Não" className="form-radio" />
                                            <span className="radio-btn"></span>
                                            Não
                                        </label>
                                    </div>
                                    {errors.substation && touched.substation && <div className='text-red-400 text-sm mt-0'>{errors.substation}</div>}
                                    <div className='pt-4'>
                                        <label className="block text-gray-700 font-medium mb-2">Como você conheceu a Expertise?</label>
                                        <div className="flex flex-wrap gap-4 items-start justify-start">

                                            <label className="custom-radio">
                                                <Field type="radio" name="knowledge" value="Redes sociais" className="form-radio" />
                                                <span className="radio-btn"></span>
                                                Redes sociais
                                            </label>

                                            <label className="custom-radio">
                                                <Field type="radio" name="knowledge" value="TV" className="form-radio" />
                                                <span className="radio-btn"></span>
                                                TV
                                            </label>

                                            <label className="custom-radio">
                                                <Field type="radio" name="knowledge" value="Site" className="form-radio" />
                                                <span className="radio-btn"></span>
                                                Site
                                            </label>

                                            <label className="custom-radio">
                                                <Field type="radio" name="knowledge" value="Anúncios" className="form-radio" />
                                                <span className="radio-btn"></span>
                                                Anúncios
                                            </label>

                                            <label className="custom-radio">
                                                <Field type="radio" name="knowledge" value="Stand" className="form-radio" />
                                                <span className="radio-btn"></span>
                                                Stand
                                            </label>

                                            <label className="custom-radio">
                                                <Field type="radio" name="knowledge" value="Outros" className="form-radio" />
                                                <span className="radio-btn"></span>
                                                Outros
                                            </label>

                                        </div>
                                        {errors.knowledge && touched.knowledge && <div className='text-red-400 text-sm mt-0'>{errors.knowledge}</div>}
                                    </div>


                                    <br />
                                    {
                                        loadingButton ? <button disabled={true} className="agendor-button" id="submit-agendor-form" type="submit"
                                        ><Image src="images/loading.svg" width={35} height={35} alt="loading" /></button> : <button className="agendor-button mt-5" id="submit-agendor-form" type="submit"
                                        >enviar</button>
                                    }

                                </Form>
                            )}
                        </Formik>
                    </>
                }

            </div>

        </div>
    );
};