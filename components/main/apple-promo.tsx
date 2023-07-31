import styles from "../../styles/promo.module.scss";
import Card from "./card";

export default function PromotionSection() {
  return (
    <section style={{ margin: "auto" }}>
      <div className={styles.flex} style={{ marginBottom: "3rem" }}>
        <div className={styles.ohalf}>
          <div className='tile-copy-wrapper'>
            <h2 className='tile-logo'></h2>
            <p className={styles.headline}>
              <span>
                The Apple Music
                <br /> Student Plan comes <br /> with Apple TV+ for free.
              </span>
            </p>
            <p style={{ margin: "3em auto" }}>
              <a
                href='https://one.apple.com/us/tv?itscg=10000&amp;itsct=one-NA-tv-bnr-apl-avl-102020'
                aria-label='Try Apple One Free'
                className={styles.tryOne}
              >
                <span className='icon-copy'>Try Apple Music free</span>
              </a>
            </p>
          </div>
        </div>
        <div className={styles.shalf}>
          <figure className={styles.figure}></figure>
        </div>
      </div>
      <div
        className=''
        style={{
          margin: "auto",
          maxWidth: 1360,
          width: "100%",
        }}
      >
        <div className={styles.twoCards}>
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
