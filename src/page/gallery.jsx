/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import CourseHeader from '../components/course/courseHeader';

const galleryImageData = [
  { src: "/assets/picture/Certificate.png", name: "Certificate", alt: "Certificate by GrowTechie" },
  { src: "/assets/picture/Gallery/png1.png", name: "Book", alt: "Photo by Magicle" },
  { src: "/assets/picture/Gallery/png2.png", name: "Chat-GPT", alt: "Photo by Martin Sanchez" },
]

const Gallery = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [openImageData, setOpenImageData] = useState(galleryImageData[0]);

  function handleImageOpen(isVideo = false, imageData) {
    setIsImageOpen(true);
    setOpenImageData({ isVideo: isVideo, ...imageData });
  }

  return (
    <>
      <CourseHeader />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"></div>

          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {galleryImageData.map((image, idx) => (
              <div className="cursor-pointer group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg" key={idx} onClick={() => handleImageOpen(false, image)}>
                <img
                  src={image.src}
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  {image.name}
                </span>
              </div>
            ))}

            <div className="cursor-pointer group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg"
              onClick={() => handleImageOpen(true, {src: "/assets/picture/Gallery/vid1.mp4", alt: "", name: "GrowTechie" })}
            >
              <video width="750" height="500" autoPlay loop muted>
                <source
                  src="/assets/picture/Gallery/vid1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            {isImageOpen && <OpenImage openImageData={openImageData} setIsImageOpen={setIsImageOpen} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

const OpenImage = ({ openImageData, setIsImageOpen }) => {
  const { src, alt, name, isVideo } = openImageData;

  return (
    <div className="z-[999] fixed inset-0 h-screen w-screen bg-[rgba(0,0,0,0.7)] flex justify-center items-center">
      <div className="relative w-fit mx-auto border-red-200 text-center">
        <button
          className="absolute bg-white text-gray-900 -right-[12px] -top-[10px] px-[0.5rem] py-[0.2rem] rounded-full text-xl font-bold  hover:scale-125"
          onClick={() => setIsImageOpen(false)}
        >X</button>
        <h3 className="text-zinc-100 text-2xl mb-3">{name}</h3>
        <div>
          {isVideo ? (
            <video width="750" height="500" className="h-[80vh] max-h-[800px]" autoPlay loop muted>
              <source
                src={src}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              src={src}
              alt={alt}
              className="h-[80vh] max-h-[800px]"
            />
          )}
        </div>
      </div>
    </div>
  )
}
