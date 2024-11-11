function HowItWorks() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">And this is how it works</h2>
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg">Find a Ride</h3>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg">Book & Pay Online</h3>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg">Travel Together</h3>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
