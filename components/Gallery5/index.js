import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery5 = () => {
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
export default Gallery5;

const photos = [
    {
      src: "/images/csi-images/img-1-csi.webp",
      width: 5,
      height: 3
    },
    {
      src: "/images/csi-images/img-2-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-3-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-4-csi.webp",
      width: 5,
      height: 4
    },
    {
      src: "/images/csi-images/img-5-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-6-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-7-csi.webp",
      width: 4,
      height: 3
    },
   
    {
      src: "/images/csi-images/img-9-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-10-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-11-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-12-csi.webp",
      width: 4,
      height: 3
    },
    
    {
      src: "/images/csi-images/img-14-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-15-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-16-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-17-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-18-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-19-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-20-csi.webp",
      width: 3,
      height: 3
    },
    {
      src: "/images/csi-images/img-21-csi.webp",
      width: 4,
      height: 3
    },
    {
      src: "/images/csi-images/img-22-csi.webp",
      width: 3,
      height: 3
    },
    {
      src: "/images/csi-images/img-23-csi.webp",
      width: 3,
      height: 3
    },
    {
      src: "/images/csi-images/img-24-csi.webp",
      width: 3,
      height: 3
    },
    
  ];
  