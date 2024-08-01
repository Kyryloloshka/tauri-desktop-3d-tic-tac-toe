import CustomLink from "@/components/CustomLink";
import { rubik } from "../layout";

const About = () => {
  return (
    <div
      className={`${rubik.className} overflow-hidden text-light-2 flex-auto flex flex-col min-h-full common-container container-restrictive p-3 md:p-6 gap-5`}
    >
      <h1 className="text-3xl font-semibold text-shadow-neon text-primary-500 tracking-wide">
        About <span className=" whitespace-nowrap">3D Tic Tac Toe</span>
      </h1>
      <p className="leading-6 text-lg tracking-wide pb-3">
        At 3D Tic Tac Toe, we believe in blending nostalgia with innovation. Our
        vision is to provide players with a fresh perspective on a timeless
        game, bringing excitement and strategy to each move.
      </p>
      <h2 className="text-2xl font-semibold text-shadow-neon text-primary-500 tracking-wide">
        Our Vision
      </h2>
      <p className="leading-6 text-lg tracking-wide pb-3">
        Welcome to 3D Tic Tac Toe, a modern twist on the classic game we all
        know and love. This immersive experience takes the traditional
        Tic-Tac-Toe to a whole new dimension, quite literally!
      </p>
      <h2 className="text-2xl font-semibold text-shadow-neon text-primary-500 tracking-wide">
        Features:
      </h2>
      <ol className="flex flex-col gap-3 ">
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Three-Dimensional Gameplay:
          </span>{" "}
          Immerse yourself in a visually stunning 3D environment that adds a new
          layer of challenge and enjoyment.
        </li>
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Strategic Thinking:
          </span>{" "}
          With the added dimension, the game requires a strategic approach to
          conquer your opponent. Think ahead and plan your moves wisely.
        </li>
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Intuitive Controls:
          </span>{" "}
          Easily navigate through the game with user-friendly controls. Rotate
          and zoom to explore the 3D game board effortlessly.
        </li>
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Classic Rules, Modern Design:
          </span>{" "}
          While we embrace the classic rules of Tic-Tac-Toe, our modern design
          and 3D setting offer a refreshing and engaging experience.
        </li>
      </ol>
      <p className="eading-6 text-lg tracking-wide pt-8">
        Whether you're a seasoned Tic-Tac-Toe player or new to the game, 3D Tic
        Tac Toe promises an entertaining and challenging experience for players
        of all ages. Dive into the world of three-dimensional strategy and have
        fun playing Tic-Tac-Toe like never before!{" "}
        <CustomLink label={"Play Game"} href="/play-game" />
      </p>
      <p className="eading-6 text-lg tracking-wide pb-24">
        But if you are already a pro in this game and you know the password, you
        can go to a completely different level{" "}
        <CustomLink label={"Secret Mode"} href="/secret-game-mode" />
      </p>
    </div>
  );
};

export default About;
