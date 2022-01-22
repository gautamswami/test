import "./styles.css";

export default function App() {
  return (
    <>
      {/* add tickboxes display block and none on other selected */}
      <div className="main-div">
        <hr />
        <div className="image-div">
          <img
            className="image"
            alt="product image"
            src="https://images.unsplash.com/photo-1511517016446-faa23cd55bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
          />
        </div>
        <div className="title-div">
          {/* <h1>Hello CodeSandbox</h1> */}
          <h2>Everyday rinse and reload</h2>
          <p>
            Achieve your dream skin goal with this complete package of skincare
            produts that will rejuvenate your day.
          </p>
        </div>
        <div className="rating-div">
          <div className="star-div"> / 1 4 .5 / </div>
          <span>4.5</span>Click to read reviews
        </div>
        <div className="price-div">
          RS. 899 <span className="cut-price">RS.1299</span>
        </div>
        <div className="pack-div">
          <div className="upper">
            <div className="detail1-div">
              /icon/Most Popular/icon/
              <h3>1 Month Pack(4 tubes)</h3>
              <p>Savings RS. 200</p>
              <h5>
                38% SAVED <span> BEST RESULTS</span>
              </h5>
            </div>
            <div className="rate-div">
              <h3> RS. 395</h3>
              <h3 className="cut-price">RS .685</h3>
            </div>
          </div>
          <div className="lower">
            <div className="detail1-div">
              <h3>3 Month Pack(12 tubes)</h3>
              <p>Savings RS.200</p>
              <h5>Your choice</h5>
            </div>
            <div className="rate-div">
              <h3> RS. 395</h3>
              <h3 className="cut-price">RS .685</h3>
            </div>
          </div>
        </div>

        <button className="cart-btn"> / icon / ADD TO CART </button>
      </div>{" "}
    </>
  );
}
