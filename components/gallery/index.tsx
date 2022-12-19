import { GalleryImage } from "../gallery-image";
import styles from "./index.module.scss";

export function Gallery({ data }) {
  return (
    <section className={styles.gallery}>
      {data.length === 0
        ? `No images`
        : data.map((image) => (
            <div className={styles.imageItem} key={image.id}>
              <a href="#" key={image.id}>
                <GalleryImage image={image} />
              </a>
            </div>
          ))}
    </section>
  );
}
