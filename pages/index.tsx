import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm, SubmitHandler } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string; 
  message: string;
}; 

const Home: NextPage = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<ContactFormValues> =  (data: any) => {

      console.log(data)
    }
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Makazo marketplace</title>
        <meta name="description" content="Makazo marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Makazo</a>
        </h1>

        <p className={styles.description}>
        Save on money transfer fees when you send presents to Your Loved Ones back home.  
        <br />
        Make sure that your needy loved ones actually receive the things they need! 

      
        </p>

        <div className={styles.grid}>
            <div className={styles.card}>
                <p>Complete the form below and we will get back intouch with your ASAP</p>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true })} type="text" placeholder="Enter Your name " className={styles.formInput}/>
                    <p className={styles.formError}>{errors.name && <span>Name is required</span>}</p>

                    <input {...register("email", { required: true })} type="email" placeholder="Enter Your email " className={styles.formInput}/>
                    <p className={styles.formError}>{errors.email && <span>Email is required</span>}</p>

                    <input {...register("phone", { required: true })} type="text" placeholder="Enter Your Phone " className={styles.formInput}/>
                    <p className={styles.formError}>{errors.name && <span>Phone is required</span>}</p>

                    <br />
                    <textarea {...register("message", { required: true })}  rows={5} placeholder="Enter Your Message " className={styles.formInput}/>
                    <p className={styles.formError}>{errors.name && <span>Message is required</span>}</p>

                        {/* <input type="submit" /> */}
                        <button type="submit" className="btn-primary">Submit Your Message</button>
                </form>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by Makazo 2021-2022
      </footer>
    </div>
  )
}

export default Home
