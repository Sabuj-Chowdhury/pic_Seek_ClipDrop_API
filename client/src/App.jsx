import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";

import About from "./pages/About";
import ImageGenerate from "./pages/Home/ImageGenerate";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="generate-image" element={<ImageGenerate />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
