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
  const data = await fetch("http://localhost:3000/api/contentobjects");
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
  const data = await fetch(`http://localhost:3000/api/images/${params.image}`);
  const image = await data.json();
  console.log(image);
  return {
    props: { image },
  };
}
