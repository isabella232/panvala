import React from 'react';
import '../css/open-sans.css';
import '../css/tachyons.css';
import '../css/util.css';
import '../css/colors.css';
import '../css/clip-path.css';
import logoWhite from '../img/logo-white.png';
import logoTwitter from '../img/twitter.png';
import logoTelegram from '../img/telegram.png';
import logoGithub from '../img/github.png';
import logoTeal from '../img/logo-teal.png';
import teamShapes from '../img/team-shapes.svg';
import teamNiran from '../img/team/team-niran.png';
import teamDaniel from '../img/team/team-daniel.png';
import teamRomana from '../img/team/team-romana.png';
import teamJacob from '../img/team/team-jacob.png';
import teamAkua from '../img/team/team-akua.png';
import teamIsaac from '../img/team/team-isaac.png';
import SEO from '../components/seo';

const Team = () => {
  return (
    <div className="overflow-x-hidden">
      <SEO title="Team" />
      <section className="bg-gradient bottom-clip-hero pb5">
        {/* <!-- Navigation --> */}
        <nav className="dt-ns w-70-l w-80-m w-90 border-box center pv4">
          <a
            className="dtc-ns db w-25-ns w-90 tl-ns tc v-mid link center pb0-ns pb3"
            href="/"
            title="Home"
          >
            <img src={logoTeal} className="dib w-60-l w-100-m w-60" />
          </a>
          <div className="dtc-ns db v-mid tc center w-50-ns w-100">
            <a href="grants" className="link dim white-60 f6 fw6 dib mr3">
              Grants
            </a>
            <a href="team" className="link dim white-60 f6 fw6 dib mr3">
              Team
            </a>
            <a href="resources" className="link dim white-60 f6 fw6 dib mr3">
              Resources
            </a>
            <a
              href="https://forum.panvala.com"
              target="_blank"
              className="link dim white-60 f6 fw6 dib mr3"
            >
              Forum
            </a>
            <a href="donate" className="link dim white-60 f6 dn-ns dib fw6">
              Donate
            </a>
          </div>
          <div className="dtc-ns dn w-25 v-mid tr">
            <a href="donate">
              <button className="f6 link dim bn br-pill white bg-teal fw7 pointer pv3 ph4">
                Donate
              </button>
            </a>
          </div>
        </nav>
        {/* <!-- Hero --> */}
        <div className="w-70-l w-80-m w-90 center tc pv5">
          <h1 className="white f1-5 b ma0 mb4 w-80-l w-100 center">Team</h1>
          <p className="white-60 f5 fw4 lh-copy ma0 mb5 w-50-l w-100 center">
            We are a passionate bunch of folks who are looking to make a positive impact on the
            Ethereum ecosystem. Stay tuned!
          </p>
        </div>
      </section>

      {/* <!-- Our Story --> */}
      <section id="team-about" className="center tc">
        <div className="dt mt6 w-70-l w-80-m w-90 center">
          <div className="dtc-l db w-50-l w-100 v-mid tl pr4-l">
            <h2 className="f2-5 ma0 mv3 lh-copy">It all started with a simple token game</h2>
            <p className="ma0 f6 lh-text mb3">
              It has always been hard to explain ideas about token inflation to coworkers. Leading
              up to the ConsenSys company retreat, Niran turned those ideas into a set of rules for
              a token game to play in person. No ERC20 contracts: just poker chips, instructions,
              and a “validator” to act as the game master.
              <br />
              <br />
              The mission of our Retreat Token game was to make the retreat great. Anything that
              made the retreat experience better for our fellow ConsenSys members was fair game.
              Each individual could choose whether to pursue donating the most value for the cause,
              doing the most work for the cause, or even making the most money by trading tokens.
              But the best way for any player to achieve their goals was to get more people to join
              the game, so their work would make the retreat great too.
              <br />
              <br />
              The goal of this experiment wasn’t to see whether we could pool people’s donations to
              fund good things — that happens all the time. We wanted to see if the players
              themselves could sustain incentives to cooperate, so their initial payments couldn’t
              be part of the game.
            </p>
            <a
              href="https://media.consensys.net/the-panvala-token-capacitor-b9efac0a6699"
              target="_blank"
              className="link dim blue f6 fw7"
            >
              Read the entire story
            </a>
          </div>
          <img src={teamShapes} className="absolute z-0 db-ns dn right-0 nt6-l w-40-l w-60" />
          <div className="dtc-l db w-50-l w-100 v-mid mt0-l mt5">
            <section className="bg-gradient center ph4 pv5 tl full-clip-up-sm">
              <p className="ma0 f4 white-60 lh-text w-80-l w-90-m w-100 center">
                “One player described it not as a game she played, but as something that happened to
                her — as if a novel incentive system got its hooks into the familiar reward
                machinery in our brains, but used it in a way that felt pleasantly foreign.”
              </p>
              <p className="ma0 f5 white lh-text w-80-l w-90-m w-100 center mt4">
                —
                <br />
                Niran Babalola
              </p>
              <p className="ma0 f6 white-80 lh-text w-80-l w-90-m w-100 center nt1">
                Founder of Panvala
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* <!-- Team --> */}
      <section className="full-clip-down-gray pv6 mv6-ns mv5">
        <div className="dt w-70-l w-80-m w-90 center pv6">
          <div className="db w-50-ns tc center">
            <h2 className="f2-5 ma0 mb3 lh-copy">We’re Panvala, nice to meet you!</h2>
            <p className="ma0 f6 lh-text mb3">
              ConsenSys is the home of the Panvala Launch Team. We came together to work on an
              ambitious project that we all believe in.
            </p>
          </div>
          <div className="db mt5 center w-100 tc">
            <section className="dib pa2-l pa1 w-33-l w-40-m w-100 tl-ns tc">
              <img src={teamNiran} className="w5 full-clip-up-sm" alt="niran" />
              <h4 className="f4-l f5 fw3 ma0 mt2">Niran Babalola</h4>
              <h5 className="f6 fw3 blue ma0 mt1">Founder</h5>
            </section>
            <section className="dib pa2-l pa1 w-33-l w-40-m w-100 tl-ns tc relative top-2-l top-0">
              <img src={teamDaniel} className="w5 full-clip-down-sm" alt="daniel" />
              <h4 className="f4-l f5 fw3 ma0 nt3-ns nt1">Daniel Schifano</h4>
              <h5 className="f6 fw3 blue ma0 mt1">Design</h5>
            </section>
            <section className="dib pa2-l pa1 w-33-l w-40-m w-100 tl-ns tc">
              <img src={teamRomana} className="w5 full-clip-up-sm" alt="romana" />
              <h4 className="f4-l f5 fw3 ma0 mt2">Romana Basilaris</h4>
              <h5 className="f6 fw3 blue ma0 mt1">Community</h5>
            </section>
            <section className="dib pa2-l pa1 w-33-l w-40-m w-100 tl-ns tc">
              <img src={teamJacob} className="w5 full-clip-down-sm" alt="jacob" />
              <h4 className="f4-l f5 fw3 ma0 nt3-ns nt1">Jacob Cantele</h4>
              <h5 className="f6 fw3 blue ma0 mt1">Product</h5>
            </section>
            <section className="dib pa2-l pa1 w-33-l w-40-m w-100 tl-ns tc relative top-2-l top-0">
              <img src={teamAkua} className="w5 full-clip-up-sm" alt="akua" />
              <h4 className="f4-l f5 fw3 ma0 mt2">Akua Nti</h4>
              <h5 className="f6 fw3 blue ma0 mt1">Engineering</h5>
            </section>
            <section className="dib pa2-l pa1 w-33-l w-40-m w-100 tl-ns tc">
              <img src={teamIsaac} className="w5 full-clip-down-sm" alt="isaac" />
              <h4 className="f4-l f5 fw3 ma0 nt3-ns nt1">Isaac Kang</h4>
              <h5 className="f6 fw3 blue ma0 mt1">Engineering</h5>
            </section>
          </div>
        </div>
      </section>

      {/* <!-- Contribute CTA --> */}
      <section id="team-contribute" className="w-70-l w-80-m w-90 center tc mv6-ns mv3">
        <h2 className="f2-5 ma0 mb3">
          Looking to contribute?
          <br />
          Take a look at our project!
        </h2>
        <p className="ma0 f6 lh-text w-50 center mb4">
          Our codebase is open-source and transparent. If you want to poke around and take a look,
          you can. We would really appreciate another set of eyes.
        </p>
        <a href="https://github.com/ConsenSys/panvala" target="_blank">
          <button className="f6 link dim bn br-pill pv3 ph4 white bg-teal fw7 pointer">
            Visit our Github
          </button>
        </a>
      </section>

      <div className="relative">
        {/* <!-- Contact --> */}
        <section id="team-contact" className="bg-gray pv6 top-clip-up">
          <div className="w-50-l w-70-m w-90 center tc">
            <h2 className="f2-5 ma0 mb3 mt5 lh-copy">Got a question?</h2>
            <p className="ma0 f6 lh-text mb3">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <form className="w-70-l w-90-m w-100 center" name="team-contact">
              <div className="tl mt4">
                <label className="ma0 f6 mb3 black-40">
                  Full Name
                  <b className="red f7"> *</b>
                </label>
              </div>
              <input
                type="text"
                name="full-name"
                required
                placeholder="Enter your full name"
                className="f6 input-reset b--black-10 pv3 ph2 db center w-100 br3 mt2"
              />
              <div className="tl mt4">
                <label className="ma0 f6 mb3 black-40">
                  Email
                  <b className="red f7"> *</b>
                </label>
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="f6 input-reset b--black-10 pv3 ph2 db center w-100 br3 mt2"
              />
              <div className="tl mt4">
                <label className="ma0 f6 mb3 black-40">
                  Message
                  <b className="red f7"> *</b>
                </label>
              </div>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Let us know what you would like to chat about"
                className="f6 input-reset b--black-10 pv3 ph2 db center w-100 br3 mt2"
              ></textarea>
              <input
                id="team-contact-button"
                type="submit"
                name="submit"
                className="f6 link dim bn br-pill pv3 ph4 white bg-teal fw7 mt4 tj"
                value="Get in touch"
              />
            </form>
          </div>
        </section>

        {/* <!-- Modal --> */}
        <article
          className="vh-100 dn w-100 bg-black-80 absolute--fill absolute z-999"
          id="team-contact-modal"
        >
          <section className="w-30-l w-50-m w-90 pa5-l pa4 bg-white br3 center mt6-l mt5-m mt4 tc">
            <h2 className="f2-5 ma0 mb3 lh-copy">Form Submitted</h2>
            <p className="ma0 f6 lh-text mb4">Thank you. We'll be in touch!</p>
            <a href="">
              <button
                className="f6 link dim bn br-pill pv3 ph4 white bg-teal fw7 pointer"
                id="team-contact-modal-close"
              >
                Continue
              </button>
            </a>
          </section>
        </article>
      </div>

      {/* <!-- Footer --> */}
      <section className="bg-gradient">
        <nav className="dt w-70-l w-80-m w-90 border-box pv4 center dt h-100">
          <div className="dtc-ns db flex-ns flex-column-ns justify-between-ns h-100-ns w-100-l w-100-m">
            <div className="w-100">
              <a className="dtc-ns db v-mid link w-100-ns w-60 pb0-ns pb2" href="/" title="Home">
                <img src={logoWhite} className="dib w-60" />
              </a>
              <div className="dt mv3">
                <a
                  href="https://twitter.com/panvalahq"
                  target="_blank"
                  className="link dim dtc pr4"
                >
                  <img src={logoTwitter} className="w2" />
                </a>
                <a href="https://t.me/panvala" target="_blank" className="link dim dtc pr4">
                  <img src={logoTelegram} className="w2" />
                </a>
                <a
                  href="https://github.com/ConsenSys/panvala"
                  target="_blank"
                  className="link dim dtc"
                >
                  <img src={logoGithub} className="w2" />
                </a>
              </div>
            </div>
            <a
              href="http://app.panvala.com/slates"
              target="_blank"
              className="link dim white f6 fw7"
            >
              Try the Panvala App today
            </a>
          </div>
          <div className="dtc-ns db w-70-l w-70-m w-100 v-top tr-ns tl">
            <div className="dib v-top mr5-l mr3-m mr4 pr2 tl mt0-ns mt4">
              <h3 className="f3-l f5 ma0 white mb3">Product</h3>
              <a href="/" className="link dim white-60 f5-l f6 db mb3-ns mb2">
                Home
              </a>
              <a href="grants" className="link dim white-60 f5-l f6 db mb3-ns mb2">
                Grants
              </a>
              <a href="donate" className="link dim white-60 f5-l f6 db mb3-ns mb2">
                Donate
              </a>
              <a
                href="http://app.panvala.com/slates"
                target="_blank"
                className="link dim white-60 f5-l f6 db mb3-ns mb2"
              >
                Live App
              </a>
            </div>
            <div className="dib v-top mr5-l mr3-m mr4 pr2 tl mt0-ns mt4">
              <h3 className="f3-l f5 ma0 white mb3">Team</h3>
              <a href="team#team-about" className="link dim white-60 f5-l f6 db mb3-ns mb2">
                About Us
              </a>
              <a href="team#team-contribute" className="link dim white-60 f5-l f6 db mb3-ns mb2">
                Contribute
              </a>
              <a href="team#team-contact" className="link dim white-60 f5-l f6 db mb3-ns mb2">
                Contact
              </a>
            </div>
            <div className="dib v-top tl mr0-ns mr4 mt0-ns mt4">
              <h3 className="f3-l f5 ma0 white mb3">Resources</h3>
              <a
                href="resources#resources-whitepaper"
                className="link dim white-60 f5-l f6 db mb3-ns mb2"
              >
                Whitepaper
              </a>
              <a
                href="resources#resources-blog"
                className="link dim white-60 f5-l f6 db mb3-ns mb2"
              >
                Blog
              </a>
              <a
                href="https://forum.panvala.com"
                target="_blank"
                className="link dim white-60 f5-l f6 db mb3-ns mb2"
              >
                Forum
              </a>
              <a href="resources#resources-faq" className="link dim white-60 f5-l f6 db mb3-ns mb2">
                FAQ
              </a>
            </div>
          </div>
        </nav>
        <hr className="hr-white" />
        <p className="ma0 f7 lh-text tc white-60 pb3">2019 © PANVALA | Privacy Policy</p>
      </section>
    </div>
  );
};

export default Team;
