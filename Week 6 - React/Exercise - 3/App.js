import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name={"Sunanda"} 
        School={"Jaya Public School"} 
        total={284} 
        goal={3} 
      />
    </div>
  );
}

export default App;
