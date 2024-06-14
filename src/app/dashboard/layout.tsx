"use client"
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { FaGear } from "react-icons/fa6";
import { useState } from 'react';
import styles from './layout.module.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname()

  console.log('pagina atual', pathname)

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()

  const handleLogOut = () => {
    router.push('/login')
  }

  const handleDolores = () => {
    setIsOpen(!isOpen)
  }

  function checkSelectedPage(menu) {
    return menu === pathname ? styles.pageSelected : ''
  }

  return (
    <section className={styles.dashbordContainer}>
      <div className={styles.headerWrapper}>

        <div className={styles.leftContent}>
          <h1>Greenhouse</h1>

          <div className={styles.buttonsWrapper}>
            <button className={`${styles.headerButtons} ${checkSelectedPage('/dashboard/jobs')}`}>Jobs</button>
            <button className={`${styles.headerButtons} ${checkSelectedPage('/dashboard/candidates')} `}>Candidates</button>
            <button className={`${styles.headerButtons} ${checkSelectedPage('/dashboard/reports')} `}>Reports</button>
            <button className={`${styles.headerButtons} ${checkSelectedPage('/dashboard/integrations')} `}>Integrations</button>
          </div>
        </div>

        <div className={styles.rightContent} >

          <FaGear />
          <div className={styles.profileWrapper}>
            <button onClick={handleDolores} className={styles.profileButton}>
              LS
            </button>

            {isOpen &&
              <div className={styles.profileBox}>
                <span className={styles.accountButtons}>Account settings</span>
                <button onClick={handleLogOut} className={styles.accountButtons}>Log Out</button>
              </div>
            }
          </div>

        </div>

      </div>
      <div className={styles.childrenWrapper}>
        {children}
      </div>



    </section >
  )
}


