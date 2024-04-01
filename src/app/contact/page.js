import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from '@/app/styles/contact.module.css';
import ContactForm from '../components/ContactForm';
const Page = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact us </h1>
                <ContactCard />
                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56033.13703111978!2d79.76831085802833!3d28.627632160641447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a03f1389ce2003%3A0x9b73320ef48baac0!2sPilibhit%2C%20Uttar%20Pradesh%20262001!5e0!3m2!1sen!2sin!4v1711989356626!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} className={styles.mapping} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Page
