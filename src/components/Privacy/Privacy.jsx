import React from 'react';
import styles from './Privacy.module.scss';

const Privacy = () => {
  return (
    <div className={styles.privacy}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textWrapper}>
            <span className={styles.preTitle}>Privatësia & Politika</span>
            <h1>Privatësia Juaj Është e Rëndësishme</h1>
            <div className={styles.subtitleWrapper}>
              <span className={styles.line}></span>
              <p className={styles.subtitle}>Si i mbrojmë dhe përdorim të dhënat tuaja</p>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.policySection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Angazhimi Ynë</span>
          <h2>Politika e Privatësisë</h2>
          <div className={styles.separator}></div>
          <div className={styles.policyContent}>
            <p>
              Ne e vlerësojmë privatësinë tuaj dhe jemi të përkushtuar për të mbrojtur informacionin tuaj personal. Kjo politikë përshkruan se si ne mbledhim, përdorim dhe mbrojmë të dhënat tuaja kur ndërveproni me faqen dhe shërbimet tona.
            </p>
            <h3>Çfarë Informacionesh Mbledhim</h3>
            <ul>
              <li>Informacion identifikues personal (Emri, adresa e emailit, numri i telefonit, etj.)</li>
              <li>Të dhëna përdorimi dhe cookies për analiza dhe funksionalitet të faqes</li>
            </ul>
            <h3>Si i Përdorim Informacionet Tuaja</h3>
            <ul>
              <li>Për të ofruar dhe përmirësuar shërbimet tona</li>
              <li>Për të komunikuar me ju rreth llogarisë ose porosive tuaja</li>
              <li>Për të personalizuar përvojën tuaj në faqen tonë</li>
              <li>Për të përmbushur detyrimet ligjore</li>
            </ul>
            <h3>Mbrojtja e të Dhënave</h3>
            <p>
              Ne zbatojmë masa të ndryshme sigurie për të ruajtur sigurinë e informacionit tuaj personal. Të dhënat tuaja janë të aksesueshme vetëm nga personeli i autorizuar dhe nuk shiten kurrë palëve të treta.
            </p>
            <h3>Të Drejtat Tuaja</h3>
            <ul>
              <li>Të aksesoni, përditësoni ose fshini informacionin tuaj personal</li>
              <li>Të çregjistroheni nga komunikimet marketinguese</li>
              <li>Të kërkoni informacion mbi mënyrën se si përdoren të dhënat tuaja</li>
            </ul>
            <p>
              Për çdo pyetje ose kërkesë në lidhje me privatësinë tuaj, ju lutemi na kontaktoni në <a href="mailto:adovercosmetics@gmail.com">adovercosmetics@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
