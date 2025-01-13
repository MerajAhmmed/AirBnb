import Image from "next/image";

export default function ImageGallary({ images }) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
      <div className="col-span-2 row-span-2">
        <Image
          src={images[0]}
          alt="Main Room"
          className="w-full h-full object-cover rounded-lg"
          height={100}
          width={100}
        />
      </div>
      <div>
        <Image
          src={images[1]}
          alt="Room 1"
          className="w-full h-full object-cover rounded-lg"
          height={100}
          width={100}
        />
      </div>
      <div>
        <Image
          src={images[2]}
          alt="Room 2"
          className="w-full h-full object-cover rounded-lg"
          height={100}
          width={100}
        />
      </div>
      <div>
        <Image
          src={images[3]}
          className="w-full h-full object-cover rounded-lg"
          alt="Room 3"
          height={100}
          width={100}
        />
      </div>
      <div>
        <Image
          src={images[3]}
          className="w-full h-full object-cover rounded-lg"
          alt="Room 4"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
