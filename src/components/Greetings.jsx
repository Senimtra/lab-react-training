// ##########################################
// ##  Iteration 2 - Component: Greetings  ##
// ##########################################

const Greetings = (props) => {
  switch (props.lang) {
    case 'en':
      return <div class="greetings">Hello {props.children}</div>;
    case 'es':
      return <div class="greetings">Hola {props.children}</div>;
    case 'de':
      return <div class="greetings">Hallo {props.children}</div>;
    case 'fr':
      return <div class="greetings">Bonjour {props.children}</div>;
    default:
      return <div class="greetings">Hello {props.children}</div>;
  }
};

export default Greetings;
