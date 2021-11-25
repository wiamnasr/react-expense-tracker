// Styles
import { Wrapper } from "./Card.styles";

const Card = (props) => {
  const classes = "card " + props.className;

  return (
    <Wrapper>
      <div className={classes}>{props.children}</div>
    </Wrapper>
  );
};

export default Card;
