import useEmblaCarousel from "embla-carousel-react";
import styles from "./Gallery.module.css";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <div className={styles.viewport} ref={emblaRef} data-cursor="hover">
      <div className={styles.container}>
        {images.map((image) => (
          <div className={styles.slide} key={image.src}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
