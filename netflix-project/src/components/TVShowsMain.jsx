import Container from "react-bootstrap/Container";
import SeriesSection from "./SeriesSection";
const TVShowsMain = function () {
  return (
    <>
      <main>
        <Container fluid={true} className="px-4 pt-3">
          <SeriesSection searchString="Game of Thrones"></SeriesSection>
          <SeriesSection searchString="Breaking Bad"></SeriesSection>
          <SeriesSection searchString="Stranger Things"></SeriesSection>
        </Container>
      </main>
    </>
  );
};

export default TVShowsMain;
