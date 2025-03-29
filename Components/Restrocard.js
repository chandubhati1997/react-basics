const Restrocard = ({data}) => {
    if (!data) return null;
  

  return (
    <div className="restro-container">
      {data.map((meal) => (
        <div className="rest-card" key={meal.id}>
          <img className="card-logo"src={meal.image.url} alt={meal.strMeal} />
          <div className="card-content">
          <h3 >{meal.name}</h3>
          <h3 className="price">{meal.cfo.text}</h3>
          <h3 className="rating">rating -{`${meal.rating.aggregate_rating}`} 
           
          </h3>
          <button className="add-to-cart">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
    Add to Cart
</button>

          </div>
        
        </div>
      ))}
    </div>
  );

 
 

//    console.log(data.meals.map((ele)=>ele.strMealThumb));

};

export default Restrocard;