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

  useEffect(() => {
    const principal = parseFloat(productPrice);
    const rateOfInterest = parseFloat(interestRate) / 100 / 12;
    const tenureInMonths = parseInt(loanTenure);
    const processingFeeValue = (principal * parseFloat(processingCharges)) / 100;
    const fileChargeFeeValue = (principal * parseFloat(fileCharges)) / 100;
    const dbdChargeFeeValue = (principal * parseFloat(dbdValue)) / 100;
    const flatInterestFeeValue = (principal * rateOfInterest * tenureInMonths)  ;
    const totalValue =
      principal + processingFeeValue + fileChargeFeeValue + dbdChargeFeeValue + flatInterestFeeValue;

    if (principal <= 0 || rateOfInterest <= 0 || tenureInMonths <= 0) {
      setMonthlyEmi('Please enter valid values.');
      return;
    }

    if (totalValue < parseFloat(downPayment)) {
      alert('Please enter valid down payment values.');
      return;
    }
    const totalGrossLoanAmount = totalValue - parseFloat(downPayment);
    const emi = totalGrossLoanAmount / tenureInMonths;

    setMonthlyEmi(emi.toFixed(2));
    setProcessingFee(processingFeeValue.toFixed(2));
    setFileChargeFee(fileChargeFeeValue.toFixed(2));
    setDbdChargeFee(dbdChargeFeeValue.toFixed(2));
    setGrossLoanAmount(totalGrossLoanAmount.toFixed(2));
  
  }, [productPrice, processingCharges, fileCharges, dbdValue, interestRate, downPayment, loanTenure]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="w-full max-w-3xl p-4">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white  rounded shadow-lg ring-2 ring-[#40ccb3]">
          <div>
            <label htmlFor="productPrice" className="block mb-1 text-sm font-semibold">
              Product Price(₹):
            </label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:1000'
            />
          </div>

          <div>
            <label htmlFor="processingCharges" className="block mb-1 text-sm font-semibold">
              processing Charges(₹):
            </label>
            <input
              type="number"
              id="processingCharges"
              value={processingCharges}
              onChange={(e) => setProcessingCharges(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:50'
            />
          </div>

          <div>
            <label htmlFor="fileCharges" className="block mb-1 text-sm font-semibold">
              File Charges(₹):
            </label>
            <input
              type="number"
              id="fileCharges"
              value={fileCharges}
              onChange={(e) => setFileCharges(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:10'
            />
          </div>

          <div>
            <label htmlFor="dbdValue" className="block mb-1 text-sm font-semibold">
              dbd Value(₹):
            </label>
            <input
              type="number"
              id="dbdValue"
              value={dbdValue}
              onChange={(e) => setDbdValue(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:25'
            />
          </div>

          <div>
            <label htmlFor="flatInterestFee" className="block mb-1 text-sm font-semibold">
              Flat Interest Fee(₹):
            </label>
            <input
              type="number"
              id="flatInterestFee"
              value={flatInterestFee}
              onChange={(e) => setFlatInterestFee(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:100'
            />
          </div>

          <div>
            <label htmlFor="downPayment" className="block mb-1 text-sm font-semibold">
              Down Payment Fee(₹):
            </label>
            <input
              type="number"
              id="downPayment"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:25000'
            />
          </div>

          <div>
            <label htmlFor="noofEmis" className="block mb-1 text-sm font-semibold">
              No Of EMIs:
            </label>
            <input
              type="number"
              id="loantenure"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:12'
            />
          </div>

          <div>
            <label htmlFor="monthlyEmi" className="block mb-1 text-sm font-semibold">
              Monthly Emi(₹):
            </label>
            <input
              type="number"
              id="monthlyEmi"
              value={monthlyEmi}
              onChange={(e) => setMonthlyEmi(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:2000'
            />
          </div>
          <span>Gross Loan Amount: {grossLoanAmount}</span>
          <span>Processing Fee: {processingFee}</span>
          <span>File Charge Fee: {fileChargeFee}</span>
          <span>DBD: {dbdChargeFee}</span>
          <span>Flat Interest: {flatInterestFee}</span>

        </form>
      </div>
    </div>
  );
};

export default EMICalculator;





