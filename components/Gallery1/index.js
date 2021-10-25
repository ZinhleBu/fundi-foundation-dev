import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery1 = () => {
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
export default Gallery1;

const photos = [
    {
      src: "/images/R10Images/mandisa.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/R10Images/akani.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/R10Images/matome2.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/R10Images/school.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/R10Images/matome3.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/R10Images/sivu.jpg",
      width: 4,
      height: 3
    }
    
  ];
  