import "./Card.css";

//wrapper component
function Card(props) {
  //use css from other components
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
