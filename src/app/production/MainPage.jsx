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
  const[emi,setEMI] = useState(0);

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
      // return;
    }

    if (totalValue < downPaymentValue) {
      alert('Please enter valid down payment values.');
      // return;
    }

   
    const totalGrossLoanAmount = totalValue - downPaymentValue;
    const emi = totalGrossLoanAmount / tenureInMonths;
   
    // console.log(emi);

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
  },[emi])
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="w-md max-w-2xl p-4">
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
              className="w-md p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:1,00,000'
            />
          </div>

          <div>
            <label htmlFor="processingCharges" className="block mb-1 text-sm font-semibold">
              processing Charges(%):
            </label>
            <input
              type="number"
              id="processingCharges"
              value={processingCharges}
              onChange={(e) => setProcessingCharges(e.target.value)}
              className="w-md p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:5%'
            />
          </div>

          <div>
            <label htmlFor="fileCharges" className="block mb-1 text-sm font-semibold">
              File Charges(%):
            </label>
            <input
              type="number"
              id="fileCharges"
              value={fileCharges}
              onChange={(e) => setFileCharges(e.target.value)}
              className="w-md p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:7%'
            />
          </div>

          <div>
            <label htmlFor="dbdValue" className="block mb-1 text-sm font-semibold">
              DBD Value(%):
            </label>
            <input
              type="number"
              id="dbdValue"
              value={dbdValue}
              onChange={(e) => setDbdValue(e.target.value)}
              className="w-md p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:4%'
            />
          </div>

          <div>
            <label htmlFor="interestrate" className="block mb-1 text-sm font-semibold">
              Flat Interest Fee(%):
            </label>
            <input
              type="number"
              id="interestrate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-md p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:5%'
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
              className="w-md p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:9000'
            />
          </div>

          <div>
            <label htmlFor="noOfEmis" className="block mb-1 text-sm font-semibold">
              No Of EMIs:
            </label>
            <input
              type="number"
              id="noOfEmis"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="w-md p-2 border rounded focus:outline-none focus:ring focus:border-[#40ccb3]"
              placeholder='eg:9 months'
            />
          </div>

          <div>
          <label>Monthly Emi (₹) :</label>
          <input readOnly value={monthlyEmi} />
        </div>
          <span>Gross Loan Amount:-{grossLoanAmount}</span>
          <span>Processing Fee:- {processingFee}</span>
          <span>File Charge Fee:- {fileChargeFee}</span>
          <span>DBD:- {dbdChargeFee}</span>
          <span>Flat Interest:- {flatInterestFee}</span>
        </form>
      </div>
    </div>
  );
};

export default EMICalculator;





