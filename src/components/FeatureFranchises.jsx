import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const data = [
  {
    id: 1,
    image: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 2,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 3,
    image: "cytonn-photography-n95VMLxqM2I-unsplash (1).jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 4,
    image: "maranda-vandergriff-7aakZdIl4vg-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 5,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 6,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 7,
    image: "cytonn-photography-n95VMLxqM2I-unsplash (1).jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 8,
    image: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 9,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 10,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 11,
    image: "cytonn-photography-n95VMLxqM2I-unsplash (1).jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 12,
    image: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 13,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 14,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 14,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 16,
    image: "cytonn-photography-n95VMLxqM2I-unsplash (1).jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 17,
    image: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 18,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 19,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 20,
    image: "cytonn-photography-n95VMLxqM2I-unsplash (1).jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 21,
    image: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 22,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 23,
    image: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 24,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 25,
    image: "cytonn-photography-n95VMLxqM2I-unsplash (1).jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 26,
    image: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 27,
    image: "aaron-burden-6jYoil2GhVk-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 28,
    image: "campaign-creators-gMsnXqILjp4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 29,
    image: "cytonn-photography-n95VMLxqM2I-unsplash (1).jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
  {
    id: 30,
    image: "cherrydeck-05gac-Qn0k4-unsplash.jpg",
    text1: "G-Fresh",
    text2: "Investment range",
    text3: "₹10L - 20L",
  },
];

function FeatureFranchises() {
  return (
    <div style={{ marginTop: "40px" }}>
      <div style={{ paddingLeft: "65px", paddingRight: "65px" }}>
        <h3 style={{ fontSize: "23px", fontWeight: "bold", color: "olive" }}>
          Featured Franchise Companies
        </h3>
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
        <Row xs={1} md={6} className="g-1.1!important">
          {data.map((item, index) => {
            // Determine the background color based on the index
            let backgroundColor;
            let boxShadow;
            if (index % 2 === 0) {
              backgroundColor = "rgba(0, 78, 153, 0.1)";
              boxShadow =
                "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgb(0, 78, 153, 0.36)";
            } else if (index % 2 !== 0) {
              backgroundColor = "rgba(140, 140, 140, 0.1)";
              boxShadow =
                "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgb(140, 140, 140, 0.36);";
            }
            return (
              <Col
                key={item.id}
                style={{
                  paddingLeft: "0px",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
              >
                <Card
                  style={{
                    backgroundColor: backgroundColor,
                    boxShadow: boxShadow,
                    marginTop: "15px",
                    padding: "15px",
                    transition: "transform 0.5s",
                    cursor: "pointer",
                  }}
                  className="hover-card"
                >
                  <div
                    style={{
                      backgroundColor: "whitesmoke",
                      padding: "13px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "0px",
                      marginTop: "0px",
                      borderRadius: "8px",
                      border: "1px solid #e5e5e5",
                    }}
                  >
                    <img
                      variant="top"
                      src={item.image}
                      alt={item.img}
                      style={{ width: "140px", height: "60px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "13px",
                      color: "olive",
                      fontWeight: "700",
                      paddingTop: "15px",
                    }}
                  >
                    {item.text1}
                  </p>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "bold",
                      paddingTop: "1px",
                    }}
                  >
                    {item.text2}
                  </p>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "13px",
                      color: "olive",
                      fontWeight: "700",
                      paddingTop: "2px",
                    }}
                  >
                    {item.text3}
                  </p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <style jsx>{`
        .hover-card:hover {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
}

export default FeatureFranchises;
