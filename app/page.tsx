import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-5">
      <div className="flex space-x-10  justify-center text-center items-center ">

        <div className="shadow-xl shadow-gray-200 h-56 bg-white rounded-lg w-56">
          <Image
            src={"https://www.governorsindh.com/_next/static/media/automation.a77dbbe8.jpg"}
            alt="Next.js Logo"
            height={250}
            width={250}
            className="rounded-lg"

          />

          <p className="p-4 text-center text-gray-700">Network Programmability and Automation</p>
        </div>
        <div className="shadow-xl shadow-gray-200 h-56 bg-white rounded-lg w-56">
          <Image
            src={"https://www.governorsindh.com/_next/static/media/genomics.b87789f1.jpg"}
            alt="Genomics and Bioinformatics"
            height={200}
            width={250}
            className="rounded-lg"
          />
          <p className="p-5 text-center text-gray-700">Genomics and Bioinformatics
          </p>
        </div>

      </div>

      <div className="flex space-x-10  p-5 justify-center text-center items-center  ">
        <div className="shadow-xl shadow-gray-200 h-56 bg-white rounded-lg w-56">
          <Image
            src={"https://www.governorsindh.com/_next/static/media/nextjs.3dff0f70.jpg"}
            alt="Next.js Logo"
            height={250}
            width={250}
            className="rounded-lg"

          />

          <p className="p-4 text-center text-gray-700"> Web2 Using NextJS</p>
        </div>
        <div className="shadow-xl shadow-gray-200 h-56 bg-white rounded-lg w-56">
          <Image
            src={"https://www.governorsindh.com/_next/static/media/earn_as_your_learn.b8248a49.jpg"}
            alt="Earn as You Learn"
            height={200}
            width={250}
            className="rounded-lg"
          />
          <p className="p-8 text-center text-gray-700">Earn as You Learn</p>
        </div>
        <div className="shadow-xl shadow-gray-200 h-56 bg-white rounded-lg w-56">
          <Image
            src={"https://www.governorsindh.com/_next/static/media/programming_fundamentals.49cca4e9.jpg"}
            alt="Programming Fundamentals"
            height={200}
            width={250}
            className="rounded-lg"

          />
          <p className="p-4 text-center text-gray-700"> Programming Fundamentals</p>
        </div>
      </div>

    </div>
  );
}
