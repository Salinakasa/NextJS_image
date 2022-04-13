import Image from "next/image";
import img from "../../public/image2.jpg";
import imgblur from "../../public/image6.jpg";

const myLoader = ({ src, width, quality }) => {
  return `https://directoffice.com.au/wp-content/uploads/2022/02/Banner-Updated-1.-1.jpg?w=${width}&q=${
    quality || 100
  }`;
};

const index = () => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>
        Simple image with width and height with local path
      </h4>
      <div className="mainimg">
        <Image src="/image1.jpg" width={600} height={400} alt="image1" />
      </div>
      <h4 style={{ textAlign: "center" }}>
        Simple image with width and height with external path
      </h4>
      <div className="mainimg">
        <Image
          src="https://directoffice.com.au/wp-content/uploads/2022/02/Banner-Updated-1.-1.jpg"
          width={1110}
          height={378}
          alt="image2"
        />
      </div>
      <h4 style={{ textAlign: "center" }}>Imported image</h4>
      <div className="mainimg">
        <Image src={img} alt="importimg" />
      </div>
      <h4 style={{ textAlign: "center" }}>Layout intrinsic prop</h4>
      <div className="mainimg">
        <Image
          src={img}
          width={600}
          height={400}
          layout="intrinsic"
          alt="intrinsic"
        />
      </div>
      <h4 style={{ textAlign: "center" }}>Layout Fixed prop</h4>
      <div className="mainimg">
        <Image src={img} width={600} height={400} layout="fixed" alt="fixed" />
      </div>
      <h4 style={{ textAlign: "center" }}>Layout Responsive prop</h4>
      <div>
        <Image
          src={img}
          width={600}
          height={400}
          layout="responsive"
          alt="responsive"
        />
      </div>
      <h4 style={{ textAlign: "center" }}>Layout Fill prop</h4>
      <div style={{ position: "relative", width: "300px", height: "500px" }}>
        <Image src={img} layout="fill" alt="fillcover" objectFit="cover" />
      </div>
      <div style={{ position: "relative", width: "300px", height: "500px" }}>
        <Image src={img} layout="fill" alt="fillcontain" objectFit="contain" />
      </div>
      <div style={{ position: "relative", width: "300px", height: "500px" }}>
        <Image
          src={img}
          layout="fill"
          alt="fill"
          objectFit="none"
          quality={100}
        />
      </div>
      <h4 style={{ textAlign: "center" }}>
        Image with predefined loader and quality
      </h4>
      <div className="mainimg">
        <Image
          loader={myLoader}
          src="me.png"
          alt="Picture of the author"
          width={1110}
          height={378}
        />
      </div>
      <h4 style={{ textAlign: "center" }}>Image with priority</h4>
      <div className="mainimg">
        <Image
          src="/image5.jpg"
          alt="priority"
          width={600}
          height={400}
          priority
        />
      </div>
      <h4 style={{ textAlign: "center" }}>Image with placeholder</h4>
      <div className="mainimg">
        <Image
          src={imgblur}
          alt="blur"
          width={600}
          height={400}
          placeholder="blur"
        />
      </div>
      <h4 style={{ textAlign: "center" }}>Image unoptimized</h4>
      <div className="mainimg">
        <Image src={img} alt="unoptimized" unoptimized />
      </div>
    </div>
  );
};

export default index;
