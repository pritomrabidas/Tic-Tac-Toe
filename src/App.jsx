import Box from "./Component/Box";

function App() {
  return (
    <section className="bg-gradient-to-l from-gray-400  to-sky-700 via-70% h-screen w-full">
      <div className="container m-auto justify-center relative top-[15%]">
        <h1 className="text-center text-3xl text-[#ffffffc7] font-nunitoFont font-semibold pb-8">
          Tic Tac Toe
        </h1>
        <div className="rounded-lg border-2 border-white w-fit justify-center mx-auto p-10">
          <div className="w-[500px] grid grid-cols-3 gap-11">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
