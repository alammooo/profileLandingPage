import offline7 from "../images/Offline/7.jpeg";
import offline8 from "../images/Offline/8.jpeg";
import offline9 from "../images/Offline/9.jpeg";
import offline10 from "../images/Offline/10.jpeg";

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="grid grid-cols-1 gap-4 px-14 py-2 lg:py-10 lg:max-h-[65vh] lg:grid-rows-2 lg:grid-cols-3">
        <div className="gallery_img-container w-full overflow-hidden relative group row-span-2">
          <img className="w-full" src={offline10} alt="" />
        </div>
        <div className="gallery_img-container w-full overflow-hidden relative group">
          <img className="w-full" src={offline7} alt="" />
        </div>
        <div className="gallery_img-container w-full overflow-hidden relative group row-span-2">
          <img className="w-full" src={offline9} alt="" />
        </div>
        <div className="gallery_img-container w-full overflow-hidden relative group">
          <img className="w-full" src={offline8} alt="" />
        </div>
      </div>
    </section>
  );
}
