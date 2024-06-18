import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const data = [
  {
    id: 1,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",

    title: "Beauty and Health",
    heading: "Pitman Training",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  {
    id: 2,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Education",
    heading: "Figaro's Italian Pizza",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  ,
  {
    id: 3,
    image: "brendan-stephens-8P9-1erozZU-unsplash.jpg",
    title: "Retail",
    heading: "Business Kids/ Business Teens",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  ,
  {
    id: 4,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Beauty and Health",
    heading: "Looking Investor For Pharma ",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  {
    id: 5,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",

    title: "Beauty and Health",
    heading: "Pitman Training",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  {
    id: 6,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Education",
    heading: "Figaro's Italian Pizza",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  ,
  {
    id: 7,
    image: "brendan-stephens-8P9-1erozZU-unsplash.jpg",
    title: "Retail",
    heading: "Business Kids/ Business Teens",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  ,
  {
    id: 8,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Beauty and Health",
    heading: "Looking Investor For Pharma ",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  {
    id: 9,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",

    title: "Beauty and Health",
    heading: "Pitman Training",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  {
    id: 10,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Education",
    heading: "Figaro's Italian Pizza",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  ,
  {
    id: 11,
    image: "brendan-stephens-8P9-1erozZU-unsplash.jpg",
    title: "Retail",
    heading: "Business Kids/ Business Teens",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  ,
  {
    id: 12,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Beauty and Health",
    heading: "Looking Investor For Pharma ",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  {
    id: 13,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Beauty and Health",
    heading: "Looking Investor For Pharma ",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  {
    id: 14,
    image: "charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    title: "Education",
    heading: "Figaro's Italian Pizza",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
  {
    id: 15,
    image: "brendan-stephens-8P9-1erozZU-unsplash.jpg",
    title: "Retail",
    heading: "Business Kids/ Business Teens",
    text1: "Investment range ",
    text2: "Area Required",
    text3: "Franchise Outlets",
    text4: "₹5L - 10L",
    text5: "1800 - 6000",
    text6: "200-500",
  },
];
function TopFranchises() {
  return (
    <div style={{ paddingTop: "40px" }}>
      <div style={{ paddingLeft: "65px", paddingRight: "65px" }}>
        <h4 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
          Top Franchise Opportunities
        </h4>
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
        <Row xs={1} md={5} className="g-2">
          {data.map((item) => {
            return (
              <Col key={item.id} className="hover-card">
                <Card
                  style={{
                    padding: "15px",
                    transition: "transform 0.5s  box-shadow 0.5s",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "whitesmoke",
                      padding: "15px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: "8px",
                      border: "1px solid #e5e5e5",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "180px", height: "90px" }}
                    />
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        fontFamily: "00",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {item.heading}
                    </p>
                    <Card.Text>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "olive",
                            }}
                          >
                            {item.text1}
                          </p>
                          <b style={{ fontSize: "14px" }}>{item.text4}</b>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "olive",
                            }}
                          >
                            {item.text2}
                          </p>
                          <b style={{ fontSize: "14px" }}>{item.text5}</b>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              color: "olive",
                            }}
                          >
                            {item.text3}
                          </p>
                          <p>
                            <b style={{ fontSize: "14px" }}>{item.text4}</b>
                          </p>
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
                  </div>
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

export default TopFranchises;
