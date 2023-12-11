'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import PinkButton from './buttons/pink_button';

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactMe: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const labelClass = `mb-1.5 block subheading-lg-md font-darkergrotesque text-black`;
    const inputClass = `w-full rounded-3xl border-none bg-white py-3 px-4 subheading-lg-regular font-darkergrotesque 
    text-gray-700 outline-none focus:border-primary-200 focus:outline-none focus:ring-0 focus:shadow-md`;

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return ( 
        <section className="bg-primary-200 py-16">
            <div className="max-w-[1280px] mx-auto px-5">
                <h2 className="font-cherryswash h3-base text-primary mb-6">Contact Me</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-5'>
                        <label htmlFor='name' className={labelClass}>
                            Full Name:
                        </label>
                        <input
                        type='text'
                        placeholder='Full Name'
                        className={`${inputClass} capitalize`}
                        {...register('name', { required: true })}
                        />
                    </div>
                    <div className='mb-5'>
                        <label
                        htmlFor='email'
                        className={labelClass}
                        >
                            Email Address:
                        </label>
                        <input
                        type='email'
                        placeholder='example@domain.com'
                        className={inputClass}
                        {...register('email', { required: true })}
                        />
                    </div>
                    <div className='mb-5'>
                        <label
                        htmlFor='subject'
                        className={labelClass}
                        >
                            Subject:
                        </label>
                        <input
                        type='text'
                        placeholder='Subject'
                        className={inputClass}
                        {...register('subject', { required: true })}
                        />
                    </div>
                    <div className='mb-5'>
                        <label
                        htmlFor='message'
                        className={labelClass}
                        >
                            Message:
                        </label>
                        <textarea
                        rows={4}
                        placeholder='Type your message'
                        className={inputClass}
                        {...register('message', { required: true })}
                        ></textarea>
                    </div>
                    <div className='flex justify-center pt-3'>
                        <PinkButton title={'Submit'}/>
                    </div>
                </form>
            </div>
        </section>
    );
}
 
export default ContactMe;