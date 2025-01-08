import Footer from "./components/Footer";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import TimePicker from "./components/TimePicker";

function App() {
  return (
    <main className="mx-[15px] my-5">
      <Header />
      <ProgressBar />
      <TimePicker />
      {/* <p className="font-medium text-[15px] leading-[21px]">
        აირჩიე სასურველი თარიღი
      </p> */}
      <Footer />
    </main>
  );
}

export default App;
