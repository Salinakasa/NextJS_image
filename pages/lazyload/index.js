import Image from "next/image";

const index = () => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Lazyloading of image</h4>
      <div className="mainimg">
        <Image src="/image1.jpg" width={600} height={400} alt="image1" />
      </div>
      <div className="mainimg">
        <Image src="/image2.jpg" width={600} height={400} alt="image1" />
      </div>
      <div className="mainimg">
        <Image src="/image3.jpg" width={600} height={1066} alt="image1" />
      </div>
      <div className="mainimg">
        <Image src="/image4.jpg" width={600} height={900} alt="image1" />
      </div>
      <div className="mainimg">
        <Image src="/image5.jpg" width={600} height={400} alt="image1" />
      </div>
      <div className="mainimg">
        <Image src="/image6.jpg" width={600} height={400} alt="image1" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae
        pariatur, animi, quibusdam impedit harum distinctio minus quasi facilis
        saepe cupiditate quae adipisci. Ab provident placeat cumque praesentium
        architecto ipsum?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dicta perferendis assumenda fugiat ab dolore iusto labore, ipsam,
        neque ea quasi ratione blanditiis, aut libero? Nulla odit minima
        laboriosam sed reprehenderit.lorem lorrem Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Vitae veniam fugiat consequatur atque odit
        asperiores reiciendis obcaecati. At quia hic pariatur recusandae magnam
        eos repellendus perferendis voluptatem, molestias, excepturi commodi.
      </p>
    </div>
  );
};

export default index;
