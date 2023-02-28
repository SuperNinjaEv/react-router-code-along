import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Nav({ lamps, candles, productType, setProductType }) {

  function handleTypeSelect(event) {
    console.log(event.target.value);
    // setProductType(event.target.value);
  }
  return (
    <nav>
      <div>
        <NavLink to='/lamps'>
          <h3>Lamps</h3>
        </NavLink>
        <ul>
          <li value="Floor" onClick={handleTypeSelect}><NavLink>Floor</NavLink></li>
          <li value="Ceiling" onClick={handleTypeSelect}><NavLink>Ceiling</NavLink></li>
          <li value="Table" onClick={handleTypeSelect}><NavLink>Table</NavLink></li>
        </ul>

        <NavLink to='/candles'>
          <h3>Candles</h3>
        </NavLink>
        <ul>
          <li value="Decorative" onClick={handleTypeSelect}><NavLink>Decorative</NavLink></li>
          <li value="Flameless" onClick={handleTypeSelect}><NavLink>Flameless</NavLink></li>
          <li value="Celebratory" onClick={handleTypeSelect}><NavLink>Celebratory</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};