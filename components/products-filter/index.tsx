import Checkbox from './form-builder/checkbox';
import CheckboxColor from './form-builder/checkbox-color';
import Slider from 'rc-slider';

// data
import productsTypes from './../../utils/data/products-types';
import productsColors from './../../utils/data/products-colors';
import productsSizes from './../../utils/data/products-sizes';
import axios from 'src/lib/axios'
import { useState, useEffect } from "react";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const addQueryParams = () => {
    // query params changes
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Category`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });

        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCategories();
  }, []);


  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
          Add Filter <i className="icon-down-open"></i>
      </button>
      
      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className="products-filter__block">
          <button type="button">Food Category</button>
          <div className="products-filter__block__content">
            {categories.map(category => (
              <Checkbox 
                key={category.id} 
                name="product-type" 
                label={category.category} 
              />
            ))}
          </div>
        </div>

        {/* <div className="products-filter__block">
          <button type="button">Price</button>
          <div className="products-filter__block__content">
            <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
          </div>
        </div>
         */}
        {/* <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                name="product-size" 
                label={type.label} />
            ))}
          </div>
        </div> */}
        
        {/* <div className="products-filter__block">
          <button type="button">Color</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map(type => (
                <CheckboxColor key={type.id} valueName={type.color} name="product-color" color={type.color} />
              ))}
            </div>
          </div>
        </div> */}

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}
  
export default ProductsFilter
  