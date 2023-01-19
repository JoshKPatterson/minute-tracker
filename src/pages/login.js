import styles from '../styles/Login.module.css'

const login = () => {
  return (
    <div className={styles.container}>
        <h1>Welcome Back</h1>
        <div className={styles.loginOauth} >
          <button className={styles.loginOauthButton}><img src='/google-color-svgrepo-com.svg' />Sign in with Google</button>
          <button className={styles.loginOauthButton}><img src='/facebook-color-svgrepo-com.svg' />Sign in with Facebook</button>
        </div>
        <div className={styles.loginOauthTitle}>
          <span />
          <p>Or</p>
          <span />
        </div>
        <div className={styles.loginMenu}>
            <form>
                <input className={styles.loginTextInput} type='text' placeholder='Email'></input>
                <input className={styles.loginTextInput} type='text' placeholder='Password'></input>
                <p className={styles.loginForgotPassword}>Forgot password?</p>
                <button className={styles.loginButton}><p>Login</p></button>
            </form>
        </div>
       
        
        <p>Don't have an account? <span>Sign up</span></p>
    </div>
    
  )
}

export default login