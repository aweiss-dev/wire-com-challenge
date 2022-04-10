import { composeStories } from "@storybook/testing-react";

import { render, screen } from "../../testUtils";
import * as stories from "./Start.stories";

const { Basic } = composeStories(stories);

describe("Main Page", () => {
  it("Should render", () => {
    render(<Basic />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("complementary", { hidden: true })
    ).toBeInTheDocument();
  });

  it("Should have a h1 text within the header", () => {
    render(<Basic />);
    expect(screen.getByRole("banner")).toContainElement(
      screen.getByRole("heading")
    );
  });

  it("Should have a h4 text and al least one image inside the sidebar", () => {
    render(<Basic />);
    const roleOptions = { hidden: true };
    const complementary = screen.getByRole("complementary", roleOptions);
    const images = screen.getAllByRole("img", roleOptions);
    expect(complementary).toContainElement(
      screen.getByRole("heading", { ...roleOptions, level: 4 })
    );
    expect(images.length).toBeGreaterThan(1);
    expect(complementary).toContainElement(images[0]);
  });
});
