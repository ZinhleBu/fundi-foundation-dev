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
      width: 1,
      height: 1
    },
    {
      src: "/images/unite-images/img-2-un.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/unite-images/img-3-un.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/unite-images/img-4-un.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/unite-images/img-5-un.webp",
      width: 1,
      height: 1
    },
    {
      src: "/images/unite-images/img-6-un.webp",
      width: 1,
      height: 1
    }
    
  ];
  