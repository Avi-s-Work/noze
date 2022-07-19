import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Making from "../components/making";
import Conquer from "../components/conquer";
import Break from "../components/break";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Making />
      <Conquer />
      <Break />
      <main>{children}</main>
    </>
  );
}
