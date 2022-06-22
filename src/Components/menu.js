export default function Menu() {
  return (
    <>
      <nav className="tm-black-bg tm-drinks-nav">
        <ul>
          <li>
            <a href="#" className="tm-tab-link active" data-id="burgers">
              Burgers
            </a>
          </li>
          <li>
            <a href="#" className="tm-tab-link" data-id="sides">
              Sides
            </a>
          </li>
          <li>
            <a href="#" className="tm-tab-link" data-id="drinks">
              Drinks
            </a>
          </li>
        </ul>
      </nav>

      <div id="burgers" className="tm-tab-content">
        <div className="tm-list">
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2Fturkey-burger-12.jpeg?v=1636046678187"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Classic Burger<span className="tm-list-item-price">$6.50</span>
              </h3>
              <p className="tm-list-item-description">
                Classic juicy meaty beef burger, with onions, tomatoes and fresh
                lettuce
              </p>
              <form
                className="add-button"
                action="javascript:Add('BURGER_1', 'burger1Button')"
              >
                <p>
                  <button id="burger1Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2FScreenshot%202021-11-08%20at%2012.41.06.png?v=1636375284011"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Cheese Burger<span className="tm-list-item-price">$7.00</span>
              </h3>
              <p className="tm-list-item-description">
                Classic juicy meaty beef burger topped with delicious melting
                chedder cheese
              </p>
              <form
                className="add-button"
                action="javascript:Add('BURGER_2', 'burger2Button')"
              >
                <p>
                  <button id="burger2Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2FScreenshot%202021-11-08%20at%2012.42.02.png?v=1636375340639"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Chicken Burger<span className="tm-list-item-price">$7.00</span>
              </h3>
              <p className="tm-list-item-description">
                Crispy seasoned chicken breast, piled onto soft rolls with
                onion, avocado, lettuce, tomato and garlic mayo
              </p>
              <form
                className="add-button"
                action="javascript:Add('BURGER_3', 'burger3Button')"
              >
                <p>
                  <button id="burger3Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2FScreenshot%202021-11-08%20at%2012.39.45.png?v=1636375225042"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Veggie Burger<span className="tm-list-item-price">$7.99</span>
              </h3>
              <p className="tm-list-item-description">
                Packed with flavour, these vegan bean burgers are healthy and
                seriously satisfying
              </p>
              <form
                className="add-button"
                action="javascript:Add('BURGER_4', 'burger4Button')"
              >
                <p>
                  <button id="burger4Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="sides" className="tm-tab-content">
        <div className="tm-list">
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2FFrench-fries-b9e3e0c.jpeg?v=1636373214284"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Fries<span className="tm-list-item-price">$2.35</span>
              </h3>
              <p className="tm-list-item-description">
                Prepared by cutting the potato into even strips, then drying and
                frying it in a deep fryer
              </p>
              <form
                className="add-button"
                action="javascript:Add('SIDE_1', 'side1Button')"
              >
                <p>
                  <button id="side1Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2Fbaked-sweet-potato-fries-5.jpeg?v=1636373338736"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Sweet Potato Fries
                <span className="tm-list-item-price">$2.99</span>
              </h3>
              <p className="tm-list-item-description">
                A variation of French fries using sweet potato instead of
                potato. Served lightly salted
              </p>
              <form
                className="add-button"
                action="javascript:Add('SIDE_2', 'side2Button')"
              >
                <p>
                  <button id="side2Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2Fhot-and-tasty-onion-rings-2.jpeg?v=1636373650148"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Onion Rings<span className="tm-list-item-price">$2.50</span>
              </h3>
              <p className="tm-list-item-description">
                Onion dipped in batter or bread crumbs and then deep fried
              </p>
              <form
                className="add-button"
                action="javascript:Add('SIDE_3', 'side3Button')"
              >
                <p>
                  <button id="side3Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="drinks" className="tm-tab-content">
        <div className="tm-list">
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2FAU00099-X.jpeg?v=1636374094065"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Coca Cola<span className="tm-list-item-price">$0.95</span>
              </h3>
              <p className="tm-list-item-description">
                A 330ml can of Coca Cola
              </p>
              <form
                className="add-button"
                action="javascript:Add('DRINK_1', 'drink1Button')"
              >
                <p>
                  <button id="drink1Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2FUltimate-Nutella-Milkshake-square.jpeg?v=1636374284631"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Milkshake<span className="tm-list-item-price">$2.50</span>
              </h3>
              <p className="tm-list-item-description">
                This is the ultimate Nutella milkshake recipe. It's creamy, rich
                and nutty
              </p>
              <form
                className="add-button"
                action="javascript:Add('DRINK_2', 'drink2Button')"
              >
                <p>
                  <button id="drink2Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
          <div className="tm-list-item">
            <img
              src="https://cdn.glitch.me/ed0af3cb-3d61-45d0-8687-6868bf4a89a8%2Fscrew-top-gettyimages-85210965.jpeg?v=1636374194027"
              alt="Image"
              className="tm-list-item-img"
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                Water<span className="tm-list-item-price">$1.05</span>
              </h3>
              <p className="tm-list-item-description">
                A 500ml bottle of spring water
              </p>
              <form
                className="add-button"
                action="javascript:Add('DRINK_3', 'drink3Button');"
              >
                <p>
                  <button id="drink3Button">Add to basket</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
