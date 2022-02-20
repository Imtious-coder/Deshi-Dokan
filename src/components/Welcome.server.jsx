/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export default function Welcome() {
  return (
    <div className="w-full m-auto text-gray-900 pt-16 rounded-[40px] my-16 px-4 xl:px-12 bg-gradient-to-b from-white">
      <div className="text-center mb-16">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">
          Hello, there!
        </h1>
        <p className="text-lg mb-8">
          Welcome to your favourite shop. Let&rsquo;s start shopping.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-gray-700"></div>
      </div>
    </div>
  );
}
