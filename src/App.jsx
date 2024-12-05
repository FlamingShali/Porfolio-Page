import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/images/dragon-image.jpg)" }} // Poprawiona ścieżka
    >
      <NavBar />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-center relative text-white z-10">
        <h1 className="text-5xl font-bold">Hi, I'm Michał</h1>
        <p className="mt-4 text-lg">Frontend Developer & Designer</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Contact Me
        </button>
      </div>
    </div>
  );
}
