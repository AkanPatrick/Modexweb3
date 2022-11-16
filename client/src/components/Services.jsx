import React from "react";

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start m-8  px-8  border-solid border border-slate-400">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
        Safe and 
          <br />
         Secure platform 
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          We gurantee you maximum security in your transactions
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-start m-8 px-8 border-solid border border-slate-400">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Fast, Reliable 
          <br />
          and promt
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          We ensuren your transactions are completed without delay
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-start m-8 px-8 border-solid border border-slate-400">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Continous improvement
          <br />
          of services
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          We keep on improving our services for better experience
        </p>
      </div>
    </div>
  </div>
);

export default Services;