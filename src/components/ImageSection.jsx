import { Compass } from "lucide-react";

import CarpoolImg from "../assets/carpool2.jpg";

const ImageSection = () => {
  return (
    <section className="max-w-screen-md mx-auto text-center py-20">
      <Compass className="mx-auto size-12" />

      <h2 className="text-4xl font-bold py-2">Go anywhere & Go anytime</h2>
      <p className="py-4">
        Lorem ipsum dolor sit amet.................... ................
        .............. ............. ......... . . . ........... ...........
        ........
      </p>

      <div className="grid grid-cols-3 gap-4">
        <img src={CarpoolImg} className="rounded-md" alt="" />
        <img src={CarpoolImg} className="rounded-md" alt="" />
        <img src={CarpoolImg} className="rounded-md" alt="" />
      </div>
    </section>
  );
};

export default ImageSection;
