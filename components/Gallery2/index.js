import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery2 = () => {
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
export default Gallery2;

const photos = [
    {
      src: "/images/leaders-images/img-1-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-2-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-3-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-4-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-5-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-6-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-7-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-8-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-9-ld.webp",
      width: 1,
      height: 1
    }
    
  ];
  