import React from 'react';
import '../styles/Main.css';
import '../styles/Header.css';
import icon1 from '../assets/images/icon-online.svg';
import icon2 from '../assets/images/icon-budgeting.svg';
import icon3 from '../assets/images/icon-onboarding.svg';
import icon4 from '../assets/images/icon-api.svg';

const Main = () => {
  return(
    <main className="main">
      <article>
        <section className="section">
          <h2 className="subtitle">Why choose Easybank?</h2>
          <p className="section__text">We leverage Open Banking to turn your bank account into your financial hub. Control your finances, like never before.</p>
        </section>
        <section className="section">
          <img className="section__icon" src={icon1} alt=""/>
          <h3 className="section__title">Online Banking</h3>
          <p className="section__text">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </section>
        <section className="section">
          <img src={icon2} alt="" className="section__icon"/>
          <h3 className="section__title">Simple Budgeting</h3>
          <p className="section__text">See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.</p>
        </section>
        <section className="section">
          <img src={icon3} alt="" className="section__icon"/>
          <h3 className="section__title">Fast onboarding</h3>
          <p className="section__text">We don't branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </section>
        <section className="section">
          <img src={icon4} alt="" className="section__icon"/>
          <h3 className="section__title">Open Api</h3>
          <p className="section__text">Manage your savings, investments, pension, and much more from one account. Tracking your money has never easier.</p>
        </section>
      </article>
    </main>
  )
}

export default Main