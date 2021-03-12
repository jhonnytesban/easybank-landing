import React from 'react';
import '../styles/Main.css';
import '../styles/Header.css';
import icon1 from '../assets/images/icon-online.svg';
import icon2 from '../assets/images/icon-budgeting.svg';
import icon3 from '../assets/images/icon-onboarding.svg';
import icon4 from '../assets/images/icon-api.svg';
import money from '../assets/images/image-currency.jpg';
import restaurant from '../assets/images/image-restaurant.jpg';
import plane from '../assets/images/image-plane.jpg';
import confetti from '../assets/images/image-confetti.jpg';

const Main = () => {
  return(
    <main className="main">
      <article>
        <section className="section">
          <h2 className="subtitle">Why choose Easybank?</h2>
          <p className="section__text">We leverage Open Banking to turn your bank account into your financial hub. Control your finances, like never before.</p>
        </section>
        <div className="containerD">

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
        </div>
      </article>
      <article className="article2">
        <h2 className="subtitle">Latest Articles</h2>
        <div className="container2">

          <section className="card">
            <img src={money} alt="" className="card__img"/>
            <div className="card-info">
              <p className="card__name">By Claire Robinson</p>
              <h3 className="card__title">Receive money in any currency with no fees</h3>
              <p className="card__text">The world id getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
            </div>
          </section>
          <section className="card">
            <img src={restaurant} alt="" className="card__img"/>
            <div className="card-info">
              <p className="card__name">By Wilson Hutton</p>
              <h3 className="card__title">Treat yourself without worryng about money</h3>
              <p className="card__text">Our simple budgeting features allows you to separate out your spending and set realistic limits each month. That means you...</p>
            </div>
          </section>
          <section className="card">
            <img src={plane} alt="" className="card__img"/>
            <div className="card-info">
              <p className="card__name">By Wilson Hutton</p>
              <h3 className="card__title">Take your Easybank card wherever you go</h3>
              <p className="card__text">We want you to enjoy travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..</p>
            </div>
          </section>
          <section className="card">
            <img src={confetti} alt="" className="card__img"/>
            <div className="card-info">
              <p className="card__name">By Claire Robinson</p>
              <h3 className="card__title">Our invite-only Beta accounts are now live!</h3>
              <p className="card__text">After a lot of hard work by the whole team, we're excited to launch our close beta. It's easy to request an invite through the site...</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Main