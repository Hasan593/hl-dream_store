import { Carousel } from "flowbite-react";

function App() {
  return (
    <div className="h-64">
      <Carousel slide={true}>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Slide 1" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" />
      </Carousel>
      <h1 className="text-3xl">Md Hasan Uddin</h1>
    </div>
  );
}

export default App;
