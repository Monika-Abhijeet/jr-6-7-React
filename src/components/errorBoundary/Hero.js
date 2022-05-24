function Hero(props) {
  if (props.heroName === "Joker") {
    throw new Error("Not a hero");
  }
  return <div>{props.heroName}</div>;
}

export default Hero;
