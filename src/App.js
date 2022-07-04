import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container, Col, Button } from "react-bootstrap";
import TourCard from "./Component/TourCard/TourCard";

export const notInterestedContext = createContext();
function App() {
  const url = "https://course-api.com/react-tours-project";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios(url);
    setData(response.data);
    setLoading(false);
  };

  const handleNotInterested = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Container className="text-center">
          <h1 className="my-5">Loading....</h1>
        </Container>
      </>
    );
  } else {
    return data.length ? (
      <>
        <Container>
          <h1 className="text-center my-5"> Our Tours</h1>
          <hr />
          <Col>
            <notInterestedContext.Provider value={handleNotInterested}>
              {data.map((item) => {
                return (
                  <TourCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.name}
                    content={item.info}
                    price={item.price}
                  />
                );
              })}
            </notInterestedContext.Provider>
          </Col>
        </Container>
      </>
    ) : (
      <>
        <Container className="text-center">
          <h1 className="my-5"> Our Tours</h1>
          <hr />
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </Button>
        </Container>
      </>
    );
  }
}

export default App;
