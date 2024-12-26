import store from "./store";

export const Counta = () => {
  //this will fire when B updates
  // const {
  //   countA,
  //   countC,
  //   incA,
  // }=store();

  //this will ALSO fire if B updates
  // const countA=store(state=>state.countA);
  // const countC=store(state=>state.countC);
  // const incA=store(state=>state.incA);

  const countA = store.use.countA();
  //const countC = store.use.countC();
  const incA = store.use.incA();

  console.count("A");
  const onClick = () => {
    incA();
  };

  return (
    <div>
      <hr />
      <h4>component A</h4>
      A={countA}
      <br />
      <button onClick={() => onClick()}>inc</button>
    </div>
  );
};

export default Counta;
