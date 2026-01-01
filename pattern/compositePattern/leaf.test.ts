import { ButtonBuilder, ImageBuilder, TextBuilder } from "./leaf";

describe("UIComponent subclasses", () => {
  describe("TextBuilder", () => {
    it("should render text with default color and fontSize", () => {
      const text = new TextBuilder("Hello");
      expect(text.render()).toBe("Text: Hello [color: black, fontSize: 16]");
    });

    it("should render text with custom color and fontSize", () => {
      const text = new TextBuilder("World", "red", 20);
      expect(text.render()).toBe("Text: World [color: red, fontSize: 20]");
    });

    it("should render text with indentation based on level", () => {
      const text = new TextBuilder("Indented");
      expect(text.render(2)).toBe("    Text: Indented [color: black, fontSize: 16]");
    });
  });

  describe("ImageBuilder", () => {
    it("should render image with default width and height", () => {
      const image = new ImageBuilder("Logo");
      expect(image.render()).toBe("Image: Logo [100x100]");
    });

    it("should render image with custom width and height", () => {
      const image = new ImageBuilder("Banner", 200, 150);
      expect(image.render()).toBe("Image: Banner [200x150]");
    });

    it("should render image with indentation based on level", () => {
      const image = new ImageBuilder("Icon");
      expect(image.render(1)).toBe("  Image: Icon [100x100]");
    });
  });

  describe("ButtonBuilder", () => {
    it("should render button with default color and size", () => {
      const button = new ButtonBuilder("Submit");
      expect(button.render()).toBe("Button: Submit [color: blue, size: medium]");
    });

    it("should render button with custom color and size", () => {
      const button = new ButtonBuilder("Cancel", "red", "large");
      expect(button.render()).toBe("Button: Cancel [color: red, size: large]");
    });

    it("should render button with indentation based on level", () => {
      const button = new ButtonBuilder("Ok");
      expect(button.render(2)).toBe("    Button: Ok [color: blue, size: medium]");
    });
  });
});
