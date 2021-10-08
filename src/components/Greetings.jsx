// ##########################################
// ##  Iteration 2 - Component: Greetings  ##
// ##########################################

const Greetings = (props) => {
  switch (props.lang) {
    case 'en':
      return <div id="greetings">Hello {props.children}</div>;
    case 'es':
      return <div id="greetings">Hola {props.children}</div>;
    case 'de':
      return <div id="greetings">Hallo {props.children}</div>;
    case 'fr':
      return <div id="greetings">Bonjour {props.children}</div>;
    default:
      return <div id="greetings">Hello {props.children}</div>;
  }
};

export default Greetings;
