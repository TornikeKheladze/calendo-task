import ClockPicker from "./components/ClockPicker";
import DayPicker from "./components/DayPicker";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import TimePicker from "./components/TimePicker";

function App() {
  return (
    <main className="mx-[15px] pb-[80px] mt-5">
      <Header />
      <ProgressBar />
      <TimePicker />
      <DayPicker />
      <ClockPicker />
      <Footer />
    </main>
  );
}

export default App;
