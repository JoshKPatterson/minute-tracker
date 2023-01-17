import styles from '../styles/Login.module.css'

const login = () => {
  return (
    <div className={styles.container}>
        <h1>Welcome Back</h1>
        <div className={styles.loginMenu}>
            <form>
                <input className={styles.loginTextInput} type='text' placeholder='Email'></input>
                <input className={styles.loginTextInput} type='text' placeholder='Password'></input>
                <p className={styles.loginForgotPassword}>Forgot password?</p>
                <button className={styles.loginButton}><p>Login</p></button>
            </form>
        </div>
        <div className={styles.loginOauthTitle}>
          <span />
          <p>Sign in with Google or Facebook</p>
          <span />
        </div>
        <div className={styles.loginOauthOptions} >
          <button className={styles.loginOauthButton}><img src='/google-color-svgrepo-com.svg' />Google</button>
          <button className={styles.loginOauthButton}><img src='/facebook-color-svgrepo-com.svg' />Facebook</button>
        </div>
        <p>Don't have an account? <span>Sign up</span></p>
    </div>
    
  )
}

export default login