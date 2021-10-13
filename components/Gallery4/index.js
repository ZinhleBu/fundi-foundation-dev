import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery4 = () => {
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
export default Gallery4;

const photos = [
    {
      src: "/images/leaders-images/img-14-ld.webp",
      width: 2,
      height: 3
    },
    {
      src: "/images/leaders-images/img-11-ld.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/leaders-images/img-12-ld.webp",
      width: 3,
      height: 4
    },
    {
      src: "/images/leaders-images/img-13-ld.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/leaders-images/img-10-ld.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/leaders-images/img-15-ld.webp",
      width: 4,
      height: 3
    }
    
  ];
  