type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }
  const ingredientArray = show.ingredients.split(',');
  const instructionsArray = show.instructions.split(',');
  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Recipe</h4>
        {ingredientArray.map((ingredient) => (
    <li key={ingredient}>{ingredient.slice(2, -2)}</li>
  ))}
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Instructions</h4>
        {instructionsArray.map((instructions) => (
   
    <li key={instructions}>{instructions.slice(2, -2)}</li>
  ))}
        {/* <p>{show.instructions}
         <br></br>
        
         </p> */}
      </div>
    </section>
  );
};
  
export default Description;
    