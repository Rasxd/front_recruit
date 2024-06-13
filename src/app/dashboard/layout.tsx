import { FaGear } from "react-icons/fa6";
import styles from './layout.module.css'
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className={styles.headerWrapper}>

        <div className={styles.leftContent}>
          <h1>Greenhouse</h1>
          <div className={styles.buttonsWrapper}>
            <button className={styles.headerButtons}>Platforms</button>
            <button className={styles.headerButtons}>Why Greenhouse</button>
            <button className={styles.headerButtons}>Resources</button>
            <button className={styles.headerButtons}>About</button>
            <button className={styles.headerButtons}>Community</button>
          </div>
        </div>

        <div className={styles.rightContent} >
          <FaGear />
          <button className={styles.profileButton}>
            LS
          </button>
        </div>

      </div>
      {children}
    </section >
  )
}

