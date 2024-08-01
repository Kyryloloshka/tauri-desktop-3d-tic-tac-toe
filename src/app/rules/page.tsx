import CustomLink from "@/components/CustomLink";
import { rubik } from "../layout";

const Rules = () => {
  return (
    <div
      className={`${rubik.className} overflow-hidden text-light-2 flex-auto flex flex-col min-h-full common-container p-3 md:p-6 gap-5 container-restrictive`}
    >
      <h1 className="text-3xl font-semibold text-shadow-neon text-primary-500 tracking-wide">
        Rules of 3D Tic Tac Toe
      </h1>
      <p className="leading-6 text-lg tracking-wide pb-3">
        Welcome to the exciting world of 3D Tic Tac Toe! This game combines the
        classic Tic-Tac-Toe gameplay with a three-dimensional space, creating an
        engaging gameplay and a visual experience.
      </p>
      <h2 className="text-2xl font-semibold text-shadow-neon text-primary-500 tracking-wide">
        Game Instructions
      </h2>
      <ol className="flex flex-col gap-3 ">
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Make Your Moves:{" "}
          </span>
          Each player takes turns placing their symbol ('X' or 'O') on the
          available cells of the game.
        </li>
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Win the Game:{" "}
          </span>
          The player who first forms a line of three of their symbols in a
          horizontal, vertical, or diagonal direction wins the game.
        </li>
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Game Completion:{" "}
          </span>
          If all cells are filled, and no line is formed, the game ends in a
          draw, theoretically. But there is a proof that it is impossible to
          play in a draw in 3D Tic-Tac-Toe.
          {/* Here{" "}
          <a
            href="https://puzzling.stackexchange.com/questions/70699/can-you-tie-in-3d-tic-tac-toe"
            className="underline capitalize relative text-primary-500 hover:text-secondary-500 transition"
          >
            An Interesting Arcticle
          </a>{" "}
          about it. */}
        </li>
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Restart the Game:{" "}
          </span>
          At any point you can restart the game and start it from the very
          beginning by clicking on the appropriate button
        </li>
        <li className="tracking-wide">
          <span className="font-semibold text-shadow-neon text-primary-500">
            Enjoy the 3D Experience:{" "}
          </span>
          Utilize rotation and zoom features to enjoy the three-dimensional
          aspect of the game.
        </li>
      </ol>
      <p className="leading-6 text-lg tracking-wide pt-8 pb-24 ">
        Playing 3D Tic Tac Toe is engaging and intriguing! Enjoy the game and
        defeat your opponent. Good luck!{" "}
        <CustomLink label={"Play Game"} href="/play-game" />
      </p>
    </div>
  );
};

export default Rules;
