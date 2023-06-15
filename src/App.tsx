import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      {/* navbar */}
      <Navbar />
      {/* container-1 */}
      <Section1 />
      {/* container-2 */}
      <Section2 />
      {/* container-3 */}
      <Section3 />
      {/* container-4 */}
      <Section4 />
      {/* container-5 */}
      <Section5 />
      {/* footer */}
      <Footer />
    </Box>
  );
}

export default App;
