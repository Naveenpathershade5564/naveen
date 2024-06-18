import React from "react";
import { CardTitle, FigureImage } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const data = [
  {
    id: 1,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",

    title: "bother Online Education",
    heading: "Pitman Training",
    text: "Pitman Training is an extensive network of career training ",
  },
  {
    id: 2,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Fine Dine Restaurants",
    heading: "Figaro's Italian Pizza",
    text: "Brian Tracy Solutions is a world leader in professional development",
  },
  ,
  {
    id: 3,
    image: "brendan-stephens-8P9-1erozZU-unsplash.jpg",
    title: "Career Counseling",
    heading: "Business Kids/ Business Teens",
    text: "Brian Tracy Solutions is a world leader in professional development",
  },
  ,
  {
    id: 4,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Building construction",
    heading: "Looking Investor For Pharma Distribute",
    text: "Brian Tracy Solutions is a world leader in professional development",
  },
];

export default function TopInternational() {
  return (
    <div style={{ marginTop: "40px", backgroundColor: "#f1f1f1" }}>
      <div style={{ paddingLeft: "65px", paddingRight: "65px" }}>
        <h4
          style={{
            fontSize: "25px",
            fontWeight: "600",
            fontFamily: "sans-serif",
            color: "olive",
          }}
        >
          Top International Opportunities
        </h4>
        <hr
          style={{
            width: "100px",
            border: "0",
            height: "3px",
            backgroundColor: "red",
            borderRadius: "6px",
          }}
        />
        <Row xs={1} md={4} className="g-4">
          {data.map((item, index) => {
            // Determine the background color based on the index
            let backgroundColor;
            let boxShadow;
            if (index === 0 || index === data.length - 1) {
              backgroundColor = "rgba(0, 78, 153, 0.1)";
              boxShadow =
                "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgb(0, 78, 153, 0.36)";
            } else if (index === 1 || data.length - 2) {
              backgroundColor = "rgba(140, 140, 140, 0.1)";
              boxShadow =
                "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgb(140, 140, 140, 0.36);";
            }
            return (
              <Col key={item.id}>
                <Card
                  style={{
                    backgroundColor: backgroundColor,
                    boxShadow: boxShadow,
                    marginTop: "15px",
                    transition: "transform 0.5s",
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
                      variant="top"
                      src={item.image}
                      alt={item.img}
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
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "gray",
                        paddingBottom: "10px",
                        fontWeight: "610",
                      }}
                    >
                      {item.heading}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        fontWeight: "300",
                      }}
                    >
                      {item.text}
                    </p>
                    <Card.Text>
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
