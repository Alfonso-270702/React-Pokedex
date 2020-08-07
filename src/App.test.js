import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("Queries check", () => {
  test("Navbar title", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const navbar = getByText(/poke poke/i);

    expect(navbar).toBeInTheDocument();
  });
  test("Find PlaceHolderText", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const findPlaceHolderText = getByPlaceholderText(/search pokemon/i);
    expect(findPlaceHolderText).toBeInTheDocument();
    expect(getByText("Search")).toBeInTheDocument();
  });
});

describe("Event check", () => {
  test("Favourite page click", (done) => {
    const { getByTestId, findByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const rightClick = { button: 1 };
    const homeNavbarButton = getByTestId("fav-link");
    fireEvent.click(homeNavbarButton, rightClick);
    findByTestId("fav-card").then((data) => {
      expect(data).toBeInTheDocument();
      done();
    });
  });
  test("Home page click", (done) => {
    const { getByTestId, findByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const leftClick = { button: 0 };
    const homeNavbarButton = getByTestId("home-link");
    fireEvent.click(homeNavbarButton, leftClick);
    findByTestId("pokemon-card").then((data) => {
      expect(data).toBeInTheDocument();
      done();
    });
  });
});

describe("async", () => {
  test("get pokemon data", (done) => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    findByText("Bellossom").then((pokemon) => {
      expect(pokemon).toBeInTheDocument();
      done();
    });
  });
});
