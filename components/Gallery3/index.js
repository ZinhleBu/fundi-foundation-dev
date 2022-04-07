import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery3 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default Gallery3;

const photos = [
    {
      src: "/images/unite-images/img-1-un.webp",
      width: 5,
      height: 3
    },
    {
      src: "/images/unite-images/img-2-un.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-3-un.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-4-un.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-5-un.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-6-un.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-7-un.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-8-un.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-9-un.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-10-un.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-11-un.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-12-un.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-13-un.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-14-un.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/unite-images/img-15-un.jpeg",
      width: 3,
      height: 4
    },
    {
      src: "/images/unite-images/img-16-un.jpeg",
      width: 4,
      height: 3
    },
  ];
  