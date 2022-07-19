import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Scroll from "../components/scroll";
import Conquer from "../components/conquer";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Scroll />
      <Conquer />
      <main>{children}</main>
    </>
  );
}
