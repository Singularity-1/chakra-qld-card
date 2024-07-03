import './App.css';

const Card = (props) => {
  return (
      <div className="Card">
        <header className="CardHeader">
          <img className="img" src="./event-image.jpg"></img>
          <h2>Event Timetable</h2>
        </header>
        <body className="CardContent">
          Checkout current events at QLD State Library! We've got:
          <ul>
            <li>Games for kids!</li>
            <li>Food stalls!</li>
          </ul>
        </body>
        <section className="CardActions">
        <button className="CardButton" id="button1">Timetable</button>
          <button className="CardButton" id="button2">Event List</button>
        </section>
      </div>
  );
}

export default Card;
