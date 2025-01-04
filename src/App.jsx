import backgroundImg from './assets/memory-game-08.jpg';
import Card from './components/Card';


const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center font-rammetto text-[#444239ff]"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
    <Card />
    </div>
  );
};

export default App;
