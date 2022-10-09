import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Headline.css";
import AllNews from "./AllNews";
import axios from "axios";
import { useEffect, useState } from "react";

function HeadLines({ Title }) {
//   const [news, setNews] = useState([]);
//   const key = "579b56e156fe448cb5e8ef9a916d593d";
//  // const key ='97d36ab0115cb77d227c06ab0feb3044'
//   const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-09-09&sortBy=publishedAt&apiKey=${key}`;
 
// useEffect(()=>{
//   axios
//   .get(url)
//   .then((res) => {
//     setNews(res.data.articles);
//   })
//   .catch((err) => console.log(err.message));
//   console.log(news);
// },[news,url])

  return (
    <>
      <div className="NewsTitleContainer">
        <h1>
          <span>{Title}</span> news on NewsFeeder
        </h1>
      </div>
      {AllNews.map((news, id) => {
        return (
          <Container className="newsContainer">
            <Card className="newsContainerCard">
              <Card.Header
                className="newsContainerTitle"
                style={{ fontWeight: "bold" }}
              >
                {news.title}
              </Card.Header>
              <div style={{ display: "flex" }}>
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    width: "65%",
                    height: "15rem",
                  }}
                >
                  <Card.Title className="newsContainerAuthor">
                    Pat Leahy
                  </Card.Title>
                  <Card.Text className="newsContainerDescription">
                    {news.description}
                  </Card.Text>
                  <Button
                    className="newsContainerButton"
                    href="http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket"
                    variant="danger"
                  >
                    Read Full Article
                  </Button>
                </Card.Body>
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "35%",
                  }}
                >
                  <Card.Img
                    className="cardImage"
                    variant="top"
                    src={news.urlToImage}
                  />
                  <Card.Text className="newsContainerDate">
                    Date :{news.publishedAt.substring(0, 10)}
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Container>
        );
      })}
    </>
  );
}

export default HeadLines;
