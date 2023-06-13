type ProductCardProps = {
  name: string;
  price?: number;
  imgSrc: string;
  rating?: number;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div>
      <h3>Product Name: {props.name}</h3>
      <p>Price : {props.price}</p>
      {props.rating ? (
        <p>Rating : {props.rating}</p>
      ) : (
        <p>Rating still on progress.</p>
      )}
      <img src={props.imgSrc} height="200px" />
    </div>
  );
};
