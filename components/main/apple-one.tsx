import styles from "../../styles/appleone.module.scss";
import Image from "next/image";

export default function AppleOneSection() {
  return (
    <section style={{ margin: "auto", marginTop: "10em" }}>
      <div className={styles.flex}>
        <div className={styles.ohalf}>
          <figure className={styles.figure}></figure>
        </div>
        <div className={styles.shalf}>
          <div className='tile-copy-wrapper'>
            <h2 className='tile-logo'>
              {/* <span className='visuallyhidden'>Apple One</span> */}
            </h2>
            <p className={styles.headline}>
              <span>
                Bundle Apple TV+ with <br /> up to five other great services.
                <br /> And enjoy more for less.
              </span>
            </p>
            <p style={{ margin: "3em auto", textAlign: "center" }}>
              <a
                href='https://one.apple.com/us/tv?itscg=10000&amp;itsct=one-NA-tv-bnr-apl-avl-102020'
                aria-label='Try Apple One Free'
                className={styles.tryOne}
              >
                <span className='icon-copy'>
                  Try Apple One free
                  <sup className=''>3</sup>
                </span>
              </a>
            </p>
            <p style={{ textAlign: "center", color: "blue" }}>
              <a href='/apple-one/' aria-label='Learn more about Apple One'>
                <span className='icon-copy'>Learn more &gt;</span>
                <span className='icon icon-after more'></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
