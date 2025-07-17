import "./App.css";
function Title(){
  return <h1>I am the Title</h1>;
}

function Discription(){

return <h3>I am the discription</h3>;

}

function Activity({username,textcolor}){
 
    return <h2 style={{color:textcolor}}>Hello,{username}</h2>;

  }

function App() {
  
  return (
   <div>
      <Activity username="Prabhat" textcolor="yellow"/> 
      <Title />
      <Discription />
      <button>Press</button>
   </div>
   );
}

export default App ;
