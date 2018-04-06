var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return React.createElement(
      "div",
      {},
      React.createElement("button", { onClick: this.increment }, "Dodaj"),
      React.createElement("button", { onClick: this.decrement }, "Odejmij"),
      React.createElement("span", {}, "Stan licznika: " + this.state.counter)
    );
  },

  componentWillMount: function() {
    console.log(
      "Komponent wywołany przed renderowaniem. Przygotowanie do liczenia"
    );
  },

  componentDidMount: function() {
    console.log("Pobieranie danych z serwera");
  },

  componentWillReceiveProps: function() {
    console.log("Aktualizacja po wprowadzeniu zmian");
  },

  shouldComponentUpdate: function() {
    console.log(
      "Wyjście z aktualizacji jeśli nie ma potrzeby dalszego renderowania"
    );
    return true;
  },

  componentWillUpdate: function() {
    console.log("Wywoływana, gdy potrzebne jest kolejne renderowanie");
  },

  componentDidUpdate: function() {
    console.log("Sprawdzenie rzeczywistych wymiarów Dom");
  },

  componentWillUnmount: function() {
    console.log(
      "Unieważnianie liczników czasu, anulowanie żądań sieciowych lub czyszczenie wszystkich elementów Dom utworzonych w komponencie component Did Mount"
    );
  }
});

var element = React.createElement(
  "div",
  {},
  React.createElement(Counter),
  React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById("app"));
