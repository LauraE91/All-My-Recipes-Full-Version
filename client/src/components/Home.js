import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

//Photo by Ella Olsson on Unsplash
//Photo by Lukas Blazek on Unsplash
//Photo by NordWood Themes on Unsplash
//Photo by emy on Unsplash
//Photo by Charles Deluvio on Unsplash
//Photo by Victoria Shes on Unsplash
function Home(props) {
  let startButton;
  let displayStartButton = (
    <div className="buttons">
      <Link className="button primary-btn" to="/register">
        <strong>Start</strong>
      </Link>
    </div>
  );

  if (!localStorage.token) {
    startButton = displayStartButton;
  }

  return (
    <div id="home">
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="content">
            <h1 className="title">All your recipes.</h1>
            <h2 className="subtitle">All in one place.</h2>
            {startButton}
          </div>
        </div>
      </section>

      <section id="featured-recipes">
        <div className="featured-heading has-text-weight-semibold is-size-3 has-text-centered">
          <h2>Featured</h2>
        </div>
        <div className="columns featured-columns">
          <div className="box column featured-column">
            <img
              src="http://placehold.jp/240x240.png"
              alt="Placeholder image"
            />
            <h3 className="is-size-4 has-text-weight-semibold">
              Featured Recipe
            </h3>
          </div>
          <div className="box column featured-column">
            <img
              src="http://placehold.jp/240x240.png"
              alt="Placeholder image"
            />
            <h3 className="is-size-4 has-text-weight-semibold">
              Featured Recipe
            </h3>
          </div>
          <div className="box column featured-column">
            <img
              src="http://placehold.jp/240x240.png"
              alt="Placeholder image"
            />
            <h3 className="is-size-4 has-text-weight-semibold">
              Featured Recipe
            </h3>
          </div>
        </div>
      </section>

      <section id="the-app" className="margin-2 margin-top-3">
        <div className="app-heading has-text-weight-semibold is-size-3 has-text-centered">
          <h2>About the App</h2>
        </div>
        <div className="columns">
          <div className="column section-column">
            <i className="fas fa-book"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>

          <div className="column section-column">
            <i className="far fa-list-alt"></i>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <section id="the-app-screenshots">
        <div className="the-app-screenshots-heading has-text-weight-semibold is-size-3 has-text-centered">
          <h2>Screenshots</h2>
        </div>

        <div className="card">
          <div className="card-image">
            <img
              src="http://placehold.jp/240x240.png"
              alt="Placeholder image"
            />
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="content">
          <div className="featured-heading has-text-weight-semibold is-size-3 has-text-centered">
            <h4>Get recipes sent right to your inbox!</h4>
          </div>

          <form className="field">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email..."
            />
            <button className="button is-large primary-btn margin-2">
              Get Free Recipes!
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
