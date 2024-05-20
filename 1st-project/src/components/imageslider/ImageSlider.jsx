import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(geturl) {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page=2&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  const handleIndicator = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return (
      <div className="w-full h-screen grid place-content-center">
        loading...
      </div>
    );
  }
  if (errorMsg !== null) {
    return (
      <div className="w-full h-screen grid place-content-center">
        error : {errorMsg}
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative flex justify-center items-center ">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="absolute self-center text-white shadow-sm cursor-pointer left-[4rem] "
        size={40}
      />
      {images && images.length
        ? images.map((image, index) => {
            return (
              <img
                className={`${
                  currentSlide === index ? "" : "hidden"
                } rounded-sm shadow-sm w-[100%] h-[100%] `}
                key={image.id}
                src={image.download_url}
                alt="image"
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute self-center cursor-pointer text-white shadow-sm right-[4rem] "
        size={40}
      />
      <span className="flex absolute items-center gap-1 justify-center bottom-[1rem]">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  onClick={() => handleIndicator(index)}
                  className={`${
                    currentSlide === index
                      ? "bg-white h-[15px] w-[15px]"
                      : "bg-gray-400 h-[10px] w-[10px]"
                  }  rounded-full cursor-pointer`}
                  key={index}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
