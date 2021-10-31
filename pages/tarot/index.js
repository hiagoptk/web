import styles from '../../styles/Tarot.module.css'

import HeaderPage from "../../components/HeaderPages/HeaderPage"
import FooterPage from "../../components/FooterPages/FooterPage"

const Tarot = () => {
    return (
        <div className={styles.container}>
            <HeaderPage />
            <div className={styles.main}>
                <div className={styles.head}>
                    <h2 className={styles.title}>TAROT</h2>
                    <p className={styles.description}>
                        Compreendendo a teia da vida que te rodeia.
                    </p>
                </div>
                

                <form id="fs-frm" name="department-contact-form" acceptCharset="utf-8" className={styles.form} action="https://formspree.io/f/mayagnrd" method="post">
                    <fieldset id="fs-frm-inputs">
                        <label htmlFor="full-name">Seu nome completo</label>
                        <input type="text" name="name" id="full-name" placeholder="Primeiro e Ultimo" required=""/>
                        <br/>
                        <label htmlFor="email-address">Email</label><br/>
                        <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
                        <br/>
                        <label htmlFor="department">Assunto</label><br/>
                            <select name="department" id="department" required="">
                                <option value="Select" selected="" disabled="">Leitura...</option>
                                <option value="Leitura Geral">Leitura Geral</option>
                                <option value="Leituras de Amor">Leituras de Amor</option>
                                <option value="Mandala de Ano Novo">Mandala de Ano Novo</option>
                                <option value="Mandala Astrológica">Mandala Astrológica </option>
                            </select>
                        <br/>
                        <label htmlFor="message">Message</label><br/>
                        <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
                    </fieldset>
                    <input className={styles.btnForm} type="submit" value="Send Message"/>
                </form>
            </div>
            <FooterPage />
        </div>
    );
}

export default Tarot;