import styles from '../styles/Login.module.css'

const login = () => {
  return (
    <div className={styles.container}>
        <h1>Minute Tracker</h1>
        <h2>Login</h2>
        <div className={styles.loginMenu}>
            <form>
                <input className={styles.loginTextInput} type='text' placeholder='Email'></input>
                <input className={styles.loginTextInput} type='text' placeholder='Password'></input>
                <button className={styles.loginButton}><p>Login</p></button>
            </form>
        </div>
        <p>Don't have an account? <span>Sign up</span></p>
    </div>
    
  )
}

export default login