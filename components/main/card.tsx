import styles from "../../styles/promo.module.scss";
export default function Card() {
  return (
    <div className={styles.card}>
      <div style={{ textAlign: "center" }}>
        <p className={`${styles.headline} ${styles.cardTop}`}>
          The Apple experience.
          <br />
          Cinematic in every sense.
        </p>
        <div className={styles.cardTop}>
          <ul
            className=''
            style={{ display: "inline-flex", gap: "1em", alignItems: "center" }}
          >
            <li>
              <a>
                <span className={styles.buy}>Buy</span>
              </a>
            </li>
            <li>
              <a
                href='/apple-tv-4k/'
                data-analytics-title='learn more about apple tv 4k'
                aria-label='Learn more about Apple TV 4K'
                className='icon-wrapper learn-more'
                data-rid-store='{"289":"atv-0-tvapp_ovp-tle_lrn-apl-avl-191111"}'
              >
                <span
                  className='icon-copy'
                  style={{ textAlign: "center", color: "blue" }}
                >
                  Learn more &gt;
                </span>
                <span className='icon icon-after more'></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <figure className={styles.cardImage}></figure>
    </div>
  );
}
