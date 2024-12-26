import store from './store'

export const Counta=()=>{  
  //this will fire when A updates
  // const {
  //   countB,
  //   countC,
  //   incB,
  // }=store();
  
  const countB=store.use.countB();
  const incB=store.use.incB();

  console.count('B');

  const onClick=()=> {incB()};

  return (
    <div> 
      <hr/>
      <h4>component B</h4>      
        B={countB} 
        <br/>
        <button onClick={()=>onClick()}>inc</button>
    </div>
  )
}

export default Counta;
