import EMICalculator from "./production/MainPage";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#FFFFFF] ">
        <EMICalculator></EMICalculator>
      </main>
    </>
    
  );
}
