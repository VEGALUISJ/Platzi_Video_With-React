import React from 'react';

const LogIn = () => (
    <header className="header">
        <a href="/">
            <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video" />
        </a>
    </header>
    <div className="login">
        <div className="login__container">
            <h2>Log In</h2>
            <form className="login__container--form">
                <input className="input" type="text" placeholder="Email" />
                <input className="input" type="password" placeholder="Password" />
                <button className="button"><a href="../main.html">Log In</a></button>
                <div className="login__container--remenberme-me">
                    <label>
                        <input type="checkbox" name="" id="cbox1" value="checkbox">
                            Remember me
              </input>
                    </label>
                    <a href="#">Forgot my password</a>
                </div>
            </form>
            <div className="login__container--social-media">
                <div><img src="../assets/google-icon.png" alt="google" />Log in with Google</div>
                <div><img src="../assets/twitter-icon.png" alt="twitter" />Log in with Twitter</div>
            </div>
            <p className="login__container--register">Do not have an Account? <a href="../components/signup.html">Sign up</a></p>
        </div>
    </div>
    <footer className="footer">
        <a href="../components/error404.html">Use Terms</a>
        <a href="../components/error404.html">Privacity declaration</a>
        <a href="../components/error404.html">Help center</a>
    </footer>
);

export default LogIn;