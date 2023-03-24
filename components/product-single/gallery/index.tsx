type GalleryProductType = {
  image_url: string,
  images:string
}

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images;
  

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {/* {images.map(image => ( */}
          <div  className="product-gallery__thumb">
            {/* <img src={images} alt="" /> */}
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${images.image_url}`} alt="product" />
          </div>
        {/* ))} */}
      </div>

      <div className="product-gallery__image">
        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${images.image_url}`}  alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
  