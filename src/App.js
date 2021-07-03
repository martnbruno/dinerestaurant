import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Reservations from "./components/Reservation/Reservations";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import SecondCard from "./components/SecondCard/SecondCard";
import ThirdCard from "./components/ThirdCard/ThirdCard";
import PreFooter from "./components/PreFooter/PreFooter";
import preFooterImage from "../src/preFooterImage.jpg";
import Footer from "./components/Footer/Footer";
import headerImage1 from "../src/headerImage1.jpg";
import headerImage2 from "../src/headerImage2.jpg";
import image1 from "../src/image1.jpg";
import image2 from "../src/image2.jpg";
import image3 from "../src/image3.jpg";
import image4 from "../src/image4.jpg";
import image5 from "../src/image5.jpg";
import image6 from "../src/image6.jpg";
import "./index.css";

function App() {
  let initialReservations = JSON.parse(localStorage.getItem("reservations"));
  if (!initialReservations) {
    initialReservations = [];
  }

  const [reservations, setReservations] = useState(initialReservations);

  useEffect(() => {
    if (initialReservations) {
      localStorage.setItem("reservations", JSON.stringify(reservations));
    } else {
      localStorage.setItem("reservations", JSON.stringify([]));
    }
  }, [reservations, initialReservations]);


  // Hacer reserva
  const addReservation = (reservation) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newReservation = { id, ...reservation };
    setReservations([...reservations, newReservation]);
  };

  // Borrar Reserva
  const deleteReservation = (id) => {
    const deletedReservations = reservations.filter(
      (reservation) => reservation.id !== id
    );
    setReservations(deletedReservations);
  };

  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
                <Header
                  title="Exquisite dining since 1989"
                  subtitle=" Expirience our seasonal menu in beautiful country sorroundings. Eat the freashest produce from the comfort of our farmhouse."
                  headerImage1={headerImage1}
                />
              <Card
                title="Enjoyable place  for all the family"
                subtitle="Our relaxed sorroundings make dining with us a  great experience for everyone. We can even arrange a tour of the farm before you meal."
                image1={image1}
              />
              <SecondCard
                title="The most locally sourced food"
                subtitle="All of our ingridients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food."
                image2={image2}
              />
              <ThirdCard
                title="A few highlights from our menu"
                subtitle="We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our  menu is revamped every season."
                image4={image4}
                image5={image5}
                image6={image6}
              />
              <Card
                title="Family Gathering"
                subtitle="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all."
                image1={image3}
              />
              <PreFooter preFooterImage={preFooterImage} />
              <Footer />
            </>
          )}
        />

        <Route
          path="/reservations"
          exact
          render={(props) => (
            <>
              <Header
                title="Reservations"
                subtitle="We can't wait to host you. If you have any special requirements please feel free to call on the phone number below. We'll be happy to accommodate you and your guests."
                headerImage1={headerImage2}
              />
              <div className="form-reservations">
                <Form addReservation={addReservation} />
                <Reservations
                  reservations={reservations}
                  deleteReservation={deleteReservation}
                />
              </div>

              <Footer />
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
