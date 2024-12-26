import store from './store'

export const Countc=()=>{  
  // const {
  //   countA,
  //   countB,
  //   countC,
  //   incC,
  // }=useStore();

  const countC=store.use.countC();
  const incC=store.use.incC();
  const countA=store.use.countA();
  const countB=store.use.countB();
  
  console.count('C');
  const onClick=()=> {incC()};

  return (
    <div> 
      <hr/>
      <h4>component C</h4>
        A={countA}
        <br/>
        B={countB}
        <br/>
        C={countC} 

        <br/>
        <button onClick={()=>onClick()}>inc</button>
    </div>
  )
}

export default Countc;
