import { Tooltip } from "@mui/material";
import AboveTitle from "../Typograpy/aboveTitle";

const carouselImagesArray = [
  {
    image: 1,
    title: 'Coding all day and night'
  },
  {
    image: 2,
    title: 'Designing an Vivaldi Antenna in ISRO'
  },
  {
    image: 5,
    title: 'Writing Blogs'
  },
  {
    image: 6,
    title: 'Enjoying Music everyday'
  },
  {
    image: 0,
    title: 'Riding Bike'
  },
  {
    image: 3,
    title: 'Random cat in space suit'
  },
  {
    image: 4,
    title: 'Frustrated cat in outerspace'
  }
]
function CarouselContainer() {

  const rendered = carouselImagesArray.map((item, index) => <EachImage image={item.image} title={item.title} key={index.toString()} />)

  return (
    <section className="flex px-8 sm:px-16 flex-col" style={{ minHeight: '70vh' }}>
      <div className="mt-4">
        <AboveTitle text="DallE AI" />
        <h1 className="text-3xl font-semibold  tracking-wide mb-6"> Glimpses</h1>
      </div>
      <div className="flex g overflow-x-auto w-full gap-8">
        {rendered}
      </div>
    </section>
  )
}

function EachImage({ image, title }: { image: number, title: string }) {
  return (
    <Tooltip title={title} arrow placement="bottom">
      <img src={`/dalle/${image}.jpeg`} width={350} height={350} className="rounded-xl shadow-md" />
    </Tooltip>

  );
}

export default CarouselContainer;
