import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

function About() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
        <div class="container">
          <img
            src="https://lh3.googleusercontent.com/proxy/wGw826LuWvJo7onQimDdjdpdXZIEO_Y1O8vAXFVTwkGVnX2GO30rDTdtHPDXmLBu2ZEUsZkET8hGD1QhBX670I5DTJ8IrMS1"
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
