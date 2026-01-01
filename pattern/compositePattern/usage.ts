import { Container } from "./composite";
import { ButtonBuilder, ImageBuilder, TextBuilder } from "./leaf";

const app = new Container("App");

const header = new Container("Header", { backgroundColor: "blue", width: 410, height: 200 });
const loginButton = new ButtonBuilder("Login", "amber", "small");
const signupButton = new ButtonBuilder("Signup", "teal", "small");
header.addItem(loginButton);
header.addItem(signupButton);

const nav = new Container("Nav");
const homeButton = new ButtonBuilder("Home", "cyan");
const aboutButton = new ButtonBuilder("About", "indigo");
nav.addItem(homeButton);
nav.addItem(aboutButton);
header.addItem(nav);

const content = new Container("Content");
const welcomeText = new TextBuilder("Welcome to the App", "green", 20);
const heroImage = new ImageBuilder("HeroImage", 800, 400);
content.addItem(welcomeText);
content.addItem(heroImage);

const footer = new Container("Footer");
const versionText = new TextBuilder("© 2025 MyApp", "gray", 12);
footer.addItem(versionText);

app.addItem(header);
app.addItem(content);
app.addItem(footer);

console.log(app.render());
