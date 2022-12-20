import { GalleryNav } from "../gallery-nav";
import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import styles from "./index.module.scss";
import { FETCH_FILETREE } from "../../utils/swrKeys";

export function Layout({ children, isHome }) {
  const { data, error } = useSWR(FETCH_FILETREE, fetcher);

  if (error) return <div>ERROR</div>;

  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Photo Gallery with NextJS</title>
        <meta name="description" content="Generated with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <GalleryNav items={data} isHome={isHome} />
        {children}
      </main>
    </>
  );
}
