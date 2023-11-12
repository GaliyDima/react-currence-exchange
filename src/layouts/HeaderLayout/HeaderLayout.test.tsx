import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

test("renders HeaderLayout component", () => {
  render(
    <Router>
      <HeaderLayout />
    </Router>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();

  expect(screen.getByText("Rates")).toBeInTheDocument();

  expect(screen.getByText("About")).toBeInTheDocument();

  expect(screen.getByAltText("logo")).toBeInTheDocument();
});

test("navigates to the correct route when tabs are clicked", () => {
  render(
    <Router>
      <HeaderLayout />
    </Router>
  );

  fireEvent.click(screen.getByText("Rates"));

  expect(mockNavigate).toHaveBeenCalledWith("/rates");
});
