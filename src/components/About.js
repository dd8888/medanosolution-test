import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

function About() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <div class="container">
          <img
            src="https://www.pngkey.com/png/full/828-8283735_pokemon-dialog-box-monochrome.png"
            alt="Snow"
            style={{ width: "80%" }}
          />
          <div class="bottom-right">▼</div>
          <div class="centered">Lorem ipsum dolor sit amet.</div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default About;
