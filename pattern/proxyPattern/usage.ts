//-------subject------------------------
interface Image {
  display(): string;
}

//------real.image----------------------
class RealImage implements Image {
  constructor(private filename: string) {
    console.log(`Loading image from disk: ${filename}`);
  }

  display(): string {
    return `Displaying ${this.filename}`;
  }
}

class ImageProxy implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {}

  display(): string {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    return this.realImage.display();
  }
}

const image1 = new ImageProxy("photo1.png");
const image2 = new ImageProxy("photo2.png");

console.log("Before any display");

console.log(image1.display());
console.log(image1.display());
console.log(image2.display());
