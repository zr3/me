import styles from './landing-fx.module.css'

const LandingFX = () => {
    const blobs = [
      [20, 20],
      [10, 70],
      [40, 30]
    ].map((xy, i) => <div key={`blob-${i}`} className={styles.blob} style={{left: `${xy[0]}vw`, top: `${xy[1]}vh`}} />)
    return (
        <div className={styles.container}>{blobs}</div>
    )
}

export default LandingFX