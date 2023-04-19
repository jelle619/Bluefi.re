import Link from 'next/link'
import styles from "./form.module.css"
import Script from 'next/script'


export default function Form() {
    return (
        <form className={styles.form} name="contact" action="https://formsubmit.co/15884d84a323bdb3d242684adb02875e" method="POST">
            <fieldset>
                <legend>Your information</legend>
                Name<br></br>
                <input type="text" name="name" placeholder="How would you like to be addressed?" required></input><br></br>
                E-mail address<br></br>
                <input type="email" name="email" placeholder="Where should I send my response to?" required></input>
            </fieldset>
            <br></br>
            <fieldset>
                <legend>Your message</legend>
                Subject<br></br>
                <input type="text" name="subject" placeholder="What is your message about?" required></input><br></br>
                Message<br></br>
                <textarea name="message" placeholder="What would you like to send me, nitty-gritty details included?" rows="4" required></textarea>
            </fieldset>
            <p>Information sent through this form is subject to the <Link href="https://formsubmit.co/privacy.pdf" target="_blank">FormSubmit privacy policy</Link>.</p>
            <input type="submit" value="Submit"></input>
        </form>
    );
}