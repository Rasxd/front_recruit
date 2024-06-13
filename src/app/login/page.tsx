"use client"
import { useRouter } from 'next/navigation'
import styles from "./page.module.css";
import { useState } from 'react';
export default function Login() {

  const router = useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleButton = () => {
    if (!username) {
      alert('Digite seu login')
      return

    }

    if (!password && !username) {
      alert('Digite e-mail e Senha')
      return
    }

    console.log(username.length > 8)
    if (username.length && username.length < 8) {
      alert('Digite um email com mais de 8 caracteres')
      return

    }

    if (!password) {
      alert('Digite sua senha')
      return
    }

    console.log(password.length > 4)
    if (password.length < 4) {
      alert('senha com mais de 4 caracteres')
      return
    }

    router.push('/dashboard')

  }

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <img className={styles.imageLeftContainer}
            src="https://static.vecteezy.com/system/resources/previews/015/100/099/non_2x/palm-tree-leaf-free-png.png"
            alt="" />

        </div>
        <div>
          <div className={styles.content}>
            <div className={styles.mainTitle}>
              <h1 className={styles.blackText}>Greenhouse</h1>
              <h1 className={styles.greenText}>Recruiting</h1>
            </div>
            <h2 className={styles.subTitle}>Lets start hiring.</h2>
            <div className={styles.formWrapper}>

              <input className={styles.textLogin} type="text" value={username} onChange={handleUsername} />
              <input className={styles.textLogin} type="password" value={password} onChange={handlePassword} />
            </div>
            <button onClick={handleButton} className={styles.buttonLogin}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

