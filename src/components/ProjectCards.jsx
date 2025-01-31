import { NavLink } from "react-router";
import CCImage from "./../images/CC.jpg";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: CCImage,
    title: "Currency converter",
    desc: "Check the current exchange rates",
  },
];
const ProjectCards = () => {
  return (
    <div className=" container mx-auto">
      <h1 className="text-center  text-white font-bold text-3xl mb-14 mt-5 sm:mt-0">
        My Projects
      </h1>

      {/* cards section */}
      <div className="animate-appear-quick relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[500px] h-[300px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}
                    </Fade>
                    <div>
                      <NavLink
                        to="https://currency-converter-nn7c.vercel.app/"
                        target="_blank"
                        className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300"
                      >
                        View
                      </NavLink>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCards;
