import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// you need to import styles!
// one of:
// styles/main.css
// styles/main.min.css
import "react-tiger-transition/styles/main.min.css";

import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";

// inject glide styles
glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});

const screenStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

// you will need to set the height of  <Navigation /> wrapper,
// in this case, it is the root node,
// better to do this on your stylesheet
document.getElementById("root").style.height = "100vh";

export default () => (
  <Router>
    {/* BrowserRouter from react-router-dom */}

    {/* Context provider for transitions */}
    <Navigation>
      {/* Use Route the same way you use
            react-router Route with children */}
      <Route exact path="/">
        {/* Screen is just a div container
              with some basic style */}
        <Screen
          style={{
            backgroundColor: "#ffa000",
            ...screenStyle
          }}
        >
          {/* Use Link the same way you use
                react-router Link, but
                add transition */}
          <Link to="/a" transition='glide-left'>
            Check out the page A
          </Link>
        </Screen>
      </Route>

      <Route
        exact
        path="/a"
        screen // shorthand to wrap children with screen
        screenProps={{
          style: {
            backgroundColor: "#607d8b",
            ...screenStyle
          }
        }}
      >
        <Link to="/" transition='glide-right'>
          Back to home page
        </Link>
      </Route>
    </Navigation>
  </Router>
);
