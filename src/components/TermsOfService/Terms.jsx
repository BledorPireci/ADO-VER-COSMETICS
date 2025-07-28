import React from 'react';
import styles from './Terms.module.scss';

const Terms = () => {
  return (
    <div className={styles.terms}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textWrapper}>
            <span className={styles.preTitle}>Termat & Kushtet</span>
            <h1>Kushtet e Përdorimit</h1>
            <div className={styles.subtitleWrapper}>
              <span className={styles.line}></span>
              <p className={styles.subtitle}>Ju lutemi lexoni me kujdes para përdorimit</p>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.termsSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Rëndësishme</span>
          <h2>Termat dhe Kushtet</h2>
          <div className={styles.separator}></div>
          <div className={styles.termsContent}>
            <p>
              Duke përdorur këtë faqe interneti, ju pranoni të respektoni dhe të jeni të detyruar nga këto terma dhe kushte. Nëse nuk pajtoheni me ndonjë pjesë të këtyre kushteve, ju lutemi mos përdorni faqen tonë.
            </p>
            <h3>Përdorimi i Faqes</h3>
            <ul>
              <li>Ju duhet të përdorni faqen vetëm për qëllime të ligjshme dhe në përputhje me këto terma.</li>
              <li>Nuk lejohet përdorimi i faqes për të dërguar ose shpërndarë materiale të paligjshme, të dëmshme ose të padëshiruara.</li>
            </ul>
            <h3>Prona Intelektuale</h3>
            <ul>
              <li>Të gjitha përmbajtjet, imazhet dhe materialet në këtë faqe janë pronë e Adover Cosmetics ose e partnerëve të saj dhe janë të mbrojtura nga ligjet e të drejtave të autorit.</li>
              <li>Nuk lejohet kopjimi, riprodhimi ose shpërndarja e materialeve pa leje të shkruar paraprakisht.</li>
            </ul>
            <h3>Ndryshime të Kushteve</h3>
            <p>
              Ne rezervojmë të drejtën të ndryshojmë këto terma në çdo kohë. Çdo ndryshim do të publikohet në këtë faqe dhe përdorimi i mëtejshëm i faqes do të konsiderohet si pranim i kushteve të reja.
            </p>
            <h3>Përgjegjësia</h3>
            <ul>
              <li>Ne nuk mbajmë përgjegjësi për ndonjë dëm të shkaktuar nga përdorimi i faqes ose nga ndonjë informacion i pasaktë.</li>
              <li>Faqja mund të përmbajë lidhje me faqe të tjera të palëve të treta për të cilat ne nuk kemi kontroll dhe nuk mbajmë përgjegjësi.</li>
            </ul>
            <p>
              Për çdo pyetje ose paqartësi në lidhje me këto terma, ju lutemi na kontaktoni në <a href="mailto:adovercosmetics@gmail.com">adovercosmetics@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
