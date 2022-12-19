import { ListItem } from "./list-item";
import styles from "./index.module.scss";

export function GalleryNav({ items, isHome }) {
  return (
    <nav className={styles.galleryNav}>
      <ul>
        {items.map((item) => {
          const isAlbum = item[item.id].scheme === "album";
          return (
            <ListItem
              item={item}
              isAlbum={isAlbum}
              key={item.id}
              level={0}
              isHome={isHome}
            />
          );
        })}
      </ul>
    </nav>
  );
}
