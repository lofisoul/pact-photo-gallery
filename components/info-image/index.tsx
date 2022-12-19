import { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./index.module.scss";

export function InfoImage({ image }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.infoImageWrap}>
      <Image
        fill
        onLoadingComplete={() => setIsLoading(false)}
        src={image.url.canto["500"]}
        alt={image.customFields["Image Type"]}
        className={cn(styles.infoImage, { loading: isLoading })}
      />
    </div>
  );
}
