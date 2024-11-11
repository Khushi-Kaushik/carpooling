import Carpool from "../assets/carpool.jpg";

function Hero() {
  return (
    <section
      className="bg-cover bg-center min-h-screen text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url('${Carpool}')` }}
    >
      <h1 className="text-4xl font-bold">Safe. Cheap. Fun.</h1>
      <p className="mt-2 text-lg">The best carpooling system in Bulgaria</p>
      <form className="flex space-x-2 mt-4">
        <input type="text" placeholder="Travel from" className="p-2 rounded" />
        <input type="text" placeholder="Travel to" className="p-2 rounded" />
        <input type="date" className="p-2 rounded" />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Find a Ride
        </button>
      </form>
    </section>
  );
}

export default Hero;
