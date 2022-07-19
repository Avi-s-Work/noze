import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Making from "../components/making";
import Conquer from "../components/conquer";
import Break from "../components/break";
import Important from "../components/important";
import Wondering from "../components/wondering";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Making />
      <Conquer />
      <Break />
      <Important />
      <Wondering />
      <main>{children}</main>
    </>
  );
}
