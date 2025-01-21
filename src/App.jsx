import NavBar from "./components/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AppLayout from "./ui/AppLayout";
import AboutSection from "./pages/AboutSection";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/HeroPage" element={<MainPage />} />
          <Route path="/aboutSection" element={<AboutSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
