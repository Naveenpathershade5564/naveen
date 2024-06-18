import React from "react";
import { CardTitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const data = [
  {
    id: 1,
    image: "scott-graham-5fNmWej4tAA-unsplash.jpg",
    title: "Building construction",
    heading: "Looking For Specialized Centralized A..",
    price: "1cr",
  },
  {
    id: 2,
    image: "maranda-vandergriff-7aakZdIl4vg-unsplash.jpg",
    title: "Food & beverage",
    heading: "Looking For Buyers / Investors For An ..",
    price: "5cr",
  },
  ,
  {
    id: 3,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    title: "Business services",
    heading: "Seeking Buyers For Marketing And Com",
    price: "8cr",
  },
  ,
  {
    id: 4,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Building construction",
    heading: "Looking Investor For Pharma Distribute",
    price: "10cr",
  },
];
function Businesscards() {
  return (
    <div
      style={{ paddingTop: "30px", backgroundColor: "rgba(0, 78, 153, 0.1)" }}
    >
      <div
        style={{
          paddingLeft: "65px",
          paddingRight: "65px",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between ",
            paddingBottom: "0px",
          }}
        >
          <h3>Business For Sale Opportunity</h3>
          <p style={{ color: "orange" }}>Viewall</p>
        </div>
        <hr
          style={{
            width: "100px",
            border: "0",
            height: "3px",
            backgroundColor: "olive",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        />
        <Row xs={1} md={4} className="g-4">
          {data.map((item) => {
            return (
              <Col key={item.id}>
                <Card
                  style={{
                    transition: "transform 0.5s  box-shadow 0.5s",
                    cursor: "pointer",
                  }}
                  className="hover-card"
                >
                  <div
                    style={{
                      backgroundColor: "whitesmoke",
                      padding: "15px",
                      width: "240px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "20px",
                      marginTop: "10px",
                      borderRadius: "8px",
                      border: "1px solid #e5e5e5",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "230px", height: "120px" }}
                    />
                  </div>

                  <Card.Body>
                    <span
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        fontWeight: "400",
                        paddingBottom: "10px",
                      }}
                    >
                      {item.title}
                    </span>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "gray",
                        paddingBottom: "10px",
                      }}
                    >
                      {item.heading}
                    </p>
                    <Card.Text>
                      <div
                        style={{
                          backgroundColor: "whitesmoke",
                          marginTop: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            color: "olive",
                            paddingLeft: "10px",
                          }}
                        >
                          Asking Price
                        </span>{" "}
                        <b
                          style={{
                            fontSize: "19px",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            paddingLeft: "20px",
                          }}
                        >
                          {item.price}
                        </b>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingTop: "15px",
                        }}
                      >
                        <div>
                          <img src="telephone-fill.svg" alt="phone" />
                          <span style={{ paddingLeft: "10px" }}>phone</span>
                        </div>
                        <div>
                          <img src="envelope-at-fill.svg" alt="email" />
                          <span style={{ paddingLeft: "10px" }}>Email</span>
                        </div>
                        <div>
                          <img src="geo-alt-fill.svg" alt="email" />
                          <span style={{ paddingLeft: "10px" }}>location</span>
                        </div>
                      </div>
                      <button
                        style={{
                          width: "100%",
                          height: "40px",
                          marginTop: "20px",
                          fontWeight: "bold",
                          color: "olivedrab",
                        }}
                      >
                        know more
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <style jsx>{`
        .hover-card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default Businesscards;
