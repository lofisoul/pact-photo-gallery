import { Layout } from "../../../components/layout";
import { InfoImage } from "../../../components/info-image";

export default function Image({ image }) {
  console.log(image);
  return (
    <Layout>
      <section>
        <InfoImage image={image} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await fetch(`${process.env.API_HOST}/api/contentobjects`);
  const images = await data.json();

  const paths = images.map((image) => {
    return {
      params: {
        image: image.id.toString(),
      },
    };
  });

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `${process.env.API_HOST}/api/images/${params.image}`
  );
  const image = await data.json();
  console.log(image);
  return {
    props: { image },
  };
}