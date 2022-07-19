import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Scroll from "../components/scroll";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Scroll />
      <Scroll />
      <Scroll />
      <Scroll />
      <Scroll />
      <Scroll />
      <main>{children}</main>
    </>
  );
}
