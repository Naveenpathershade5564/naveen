// import React from "react";

// export default function LeadingFranchise() {
//   return <div>LeadingFranchise</div>;
// }
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function LeadingFranchise() {
  return (
    <div style={{ marginTop: "40px" }}>
      <div
        style={{
          paddingLeft: "65px",
          paddingRight: "65px",
          paddingBottom: "20px",
        }}
      >
        <h4 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
          Leading Franchises Today
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

        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
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
                    variant="top"
                    src="charles-forerunner-3fPXt37X6UQ-unsplash.jpg"
                    style={{ width: "230px", height: "120px" }}
                    alt="abc"
                  />
                </div>

                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>Investment range</p>
                        <b>₹10L - 20L</b>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>Area Rquired</p>
                        <b>₹100 - 250</b>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>Franchise Outlets</p>
                        <p>
                          <b>20-50</b>
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
                </Card.Body>
              </Card>
            </Col>
          ))}
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

export default LeadingFranchise;
