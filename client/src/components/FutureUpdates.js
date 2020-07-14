import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../App.css";
import "./css/futureUpdates.css";

function FutureUpdates(props) {
  return (
    <>
      <section className=" future-updates-container has-text-weight-semibold is-size-3 has-text-centered margin-top-5">
        <h2>Future Updates</h2>
        <p>
          There are a number of ideas that I would like to implement over time
          that will make this app more user friendly and useful. If there is
          anything that you do not see on this list that you would like to see
          in the future, please feel free to{" "}
          <Link to="/contact">contact me</Link> with your ideas.
        </p>

        <ul>
          <li>
            Make the list items on the shopping list drag and droppable so that
            the list items can be easily reordered
          </li>
          <li>Upload photos to each recipe.</li>
          <li>
            Import recipes from external websites (or perhaps make a bookmark
            feaure that would then be searchable)
          </li>
          <li>Make recipes sharable on social media</li>
          <li>
            Be able to make multiple recipe books, add a title and description
            to it, and make the recipe books sharable
          </li>
          <li>
            Add a checkbox where you can choose to make your recipe/recipe book
            public or private. Any public recipes/recipe books will then be
            searchable on the homepage of the website.
          </li>
          <li>
            Make a mobile app for this.
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default FutureUpdates;
