import { TfiTimer } from "react-icons/tfi";

function Home() {
  const foodImages = [
    "https://www.rotibakar88.id/storage/menu-roti-bakar-88/931-spicy-beef-burger.JPG",
    "https://www.rotibakar88.id/storage/menu-roti-bakar-88/945-mieju,ada.JPG",
    "https://www.rotibakar88.id/storage/menu-roti-bakar-88/443-mie-jumbo.JPG",
    "https://www.rotibakar88.id/storage/menu-roti-bakar-88/544-cheese-burger.JPG",
  ];

  return (
    <>
      <div className="w-full h-screen flex flex-row justify-between items-center text-center text-red-800 px-10 animate-slidein">
        <div className="flex flex-col justify-center items-start text-left w-1/2 ">
          <h1 className="text-4xl font-bold leading-tight flex gap-2 opacity-80">
            Madura24Jam
            <TfiTimer />
          </h1>
          <p className="text-lg md:flex-1 pr-5 max-w-xl mx-auto text-opacity-80 ">
            tau sendiri toko yang ga pernah tutup toko apa, ya bener{" "}
            <strong>MADURA</strong>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 w-1/2">
          {foodImages.map((image, index) => (
            <div
              key={index}
              className=" flex justify-center items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden w-40 h-40"
            >
              <img
                src={image}
                alt={`food-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          <div className="w-full flex justify-end mt-4 mr-10">
            <a href="/Menu">
              <button className="bg-red-800 text-white px-6 py-2 rounded-md">
                Masuk
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
