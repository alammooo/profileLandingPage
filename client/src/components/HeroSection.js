import bagas2Preview from "../images/bagas2-removebg-preview.png";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="grid grid-cols-1 xl:grid-cols-3 bg-amber-300 text-slate-900 px-14">
        <div className="flex flex-col xl:pr-40 col-span-2 items-center justify-center">
          <div className="flex-col flex gap-4">
            <h1 className="font-bold text-3xl text-center xl:text-8xl xl:text-left">
              Bagas Rais
            </h1>
            <h1 className="font-bold text-3xl text-center xl:text-8xl xl:text-left">
              Rabbani
            </h1>
            <h2 className="text-3xl text-center xl:text-5xl xl:text-left">
              Content-Creator & Muslim Designer
            </h2>
          </div>
        </div>
        <div className="hero_img-container flex justify-center">
          <img className="w-3/5" src={bagas2Preview} alt="" />
        </div>
      </div>
    </section>
  );
}
