import React from "react";
import Footer from "./Footer";
import "./css/about.css";

function About(props) {
  return (
    <>
      <section id="about">
        <div className="about-heading has-text-weight-semibold is-size-3 has-text-centered">
          <h2>About</h2>
        </div>

        <div className="content about-content">
          <p>
            All My Recipes is an app that allows you to store all of your recipes in
            one convenient location. Ever wrote a recipe on a scrap piece of
            paper, stuffed it in your purse or pocket, and lost it forever? Or
            perhaps you have about 10 different recipe books and you only ever
            reference a handful of recipes from them. Or perhaps you are a meal
            planner but you can never remember whether a recipe you are planning
            came from pinterest, a blog post, your Betty Crocker cook book, or
            your mom? Maybe you have a habit of coming up with recipe ideas on the
            fly but then when you go to make it in the midist of a busy week,
            you can't remember the whole thing?
          </p>
          <br />
          <p>
            Now you have the ability to add custom recipes to your own central
            recipe book. Whether they are recipes you come up with in your head,
            one that was given to you by a friend or coworker, or from a
            cookbook, you can now keep them all in one location. No more wasting
            time searching in 10 different places. No more forgetting.
          </p>

          <br />

          <p>You can also create shopping lists!</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
