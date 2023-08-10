"use client"
import React, { useState, useEffect } from 'react';


const EMICalculator = () => {
  const [productPrice, setProductPrice] = useState('');
  const [processingCharges, setProcessingCharges] = useState('');
  const [fileCharges, setFileCharges] = useState('');
  const [dbdValue, setDbdValue] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanTenure, setLoanTenure] = useState('');

  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const [fileChargeFee, setFileChargeFee] = useState(0);
  const [dbdChargeFee, setDbdChargeFee] = useState(0);
  const [flatInterestFee, setFlatInterestFee] = useState(0);
  const [grossLoanAmount, setGrossLoanAmount] = useState(0);
  const [emi, setEMI] = useState(0);

  const handleChange = () => {
    const principal = Number(productPrice);
    const rateOfInterest = Number(interestRate) / 100 / 12;
    const tenureInMonths = Number(loanTenure);
    const processingFeeValue = (principal * Number(processingCharges)) / 100;
    const fileChargeFeeValue = (principal * Number(fileCharges)) / 100;
    const dbdChargeFeeValue = (principal * Number(dbdValue)) / 100;
    const flatInterestFeeValue = (principal * Number(interestRate)) / 100;
    const downPaymentValue = Number(downPayment);
    const totalValue =
      principal + processingFeeValue + fileChargeFeeValue + dbdChargeFeeValue + flatInterestFeeValue;

    if (principal <= 0 || rateOfInterest <= 0 || tenureInMonths <= 0) {
      setMonthlyEmi('Please enter valid values.');
    }

    if (totalValue < downPaymentValue) {
      alert('Please enter valid down payment values.');
    }

    const totalGrossLoanAmount = totalValue - downPaymentValue;
    const emi = totalGrossLoanAmount / tenureInMonths;

    setMonthlyEmi(parseFloat(emi.toFixed(2)))
    setProcessingFee(parseFloat(processingFeeValue.toFixed(2)));
    setFileChargeFee(parseFloat(fileChargeFeeValue.toFixed(2)));
    setDbdChargeFee(parseFloat(dbdChargeFeeValue.toFixed(2)));
    setFlatInterestFee(parseFloat(flatInterestFeeValue.toFixed(2)));
    setGrossLoanAmount(parseFloat(totalGrossLoanAmount.toFixed(2)));

  };

  useEffect(() => {
    handleChange();
  }, [productPrice, processingCharges, fileCharges, dbdValue, interestRate, downPayment, loanTenure]);

  useEffect(() => {
    setMonthlyEmi()
  }, [emi])

  const handleReset = () => {
    // Reset all the state values here
    setProductPrice('');
    setProcessingCharges('');
    setFileCharges('');
    setDbdValue('');
    setInterestRate('');
    setDownPayment('');
    setLoanTenure('');

    setMonthlyEmi(0);
    setProcessingFee(0);
    setFileChargeFee(0);
    setDbdChargeFee(0);
    setFlatInterestFee(0);
    setGrossLoanAmount(0);
    setEMI(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="w-full max-w-3xl p-4">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white  rounded shadow-lg ring-2 ring-[#40ccb3]">
          <div className="relative">
            <label htmlFor="productPrice" className="block mb-1 text-md font-semibold">
              Product Price(₹):
            </label>
            <div className="input-container">
              <input
                type="number"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full p-2 border rounded hover:border-[#40ccb3] focus:border-[#40ccb3]"
                placeholder=' 1,00,000'
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="processingCharges" className="block mb-1 text-md font-semibold">
              processing Charges(%):
            </label>
            <div className="input-container">
              <input
                type="number"
                id="processingCharges"
                value={processingCharges}
                onChange={(e) => setProcessingCharges(e.target.value)}
                className="w-full p-2 border rounded hover:border-[#40ccb3]"
                placeholder=' 5%'
              />
              <span className="calculated-value bg-gray-300 text-sm rounded p-3 absolute right-0 bottom-0 text-center">
              ₹{processingFee}
              </span>
            </div>
          </div>
          <div className="relative">
            <label htmlFor="fileCharges" className="block mb-1 text-md font-semibold">
              File Charges(%):
            </label>
            <div className="input-container">
              <input
                type="number"
                id="fileCharges"
                value={fileCharges}
                onChange={(e) => setFileCharges(e.target.value)}
                className="w-full p-2 border rounded hover:border-[#40ccb3]"
                placeholder=' 7%'
              />
              <span className="calculated-value bg-gray-300 text-sm rounded p-3 absolute right-0 bottom-0 text-center">
              ₹{fileChargeFee}
              </span>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="dbdValue" className="block mb-1 text-md font-semibold">
              DBD Value(%):
            </label>
            <div className="input-container">
              <input
                type="number"
                id="dbdValue"
                value={dbdValue}
                onChange={(e) => setDbdValue(e.target.value)}
                className="w-full p-2 border rounded hover:border-[#40ccb3]"
                placeholder=' 4%'
              />
               <span className="calculated-value bg-gray-300 text-sm rounded p-3 absolute right-0 bottom-0 text-center">
               ₹{dbdChargeFee}
              </span>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="interestrate" className="block mb-1 text-md font-semibold">
              Flat Interest Fee(%):
            </label>
            <div className="input-container">
              <input
                type="number"
                id="interestrate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-2 border rounded hover:border-[#40ccb3]"
                placeholder=' 5%'
              />
              <span className="calculated-value bg-gray-300 text-sm rounded p-3 absolute right-0 bottom-0 text-center">
              ₹{flatInterestFee}
              </span>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="downPayment" className="block mb-1 text-md font-semibold">
              Down Payment Fee(₹):
            </label>
            <div className="input-container">
              <input
                type="number"
                id="downPayment"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="w-full p-2 border rounded hover:border-[#40ccb3]"
                placeholder=' 9000'
              />
            </div>
          </div>


          <div>
            <label className="block mb-1 text-md font-semibold">Gross LoanAmount (₹) : </label>
            <input className="w-full p-2 border rounded hover:border-[#40ccb3]"
             readOnly value={grossLoanAmount} />
          </div>

          <div className="relative">
            <label htmlFor="noOfEmis" className="block mb-1 text-md font-semibold">
              No Of EMIs:
            </label>
            <div className="input-container">
              <input
                type="number"
                id="noOfEmis"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                className="w-full p-2 border rounded hover:border-[#40ccb3]"
                placeholder=' 9 months'
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-md font-semibold">Monthly Emi (₹) : </label>
            <input className="w-full p-2 border rounded hover:border-[#40ccb3]"
             readOnly value={monthlyEmi} />
          </div>

          <div className="col-span-1 flex md:justify-end mt-4 ">
            <button
              type="button"
              className="bg-[#40ccb3] text-white px-4 py-2 rounded w-full md:w-auto "
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EMICalculator;





