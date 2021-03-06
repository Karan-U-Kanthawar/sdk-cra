import React, { useState } from "react";
import { CreateIVCO, CreateIVCOButton, DisplayIVCOs,  IVCOPage } from "@cryption/dapp-factory-sdk";
import { useActiveWeb3React } from "../hooks";

const IVCO = () => {
  const [singleIVCOId, setSingleIVCOId] = useState("");

  const {account} = useActiveWeb3React();

  const getServiceId = (id: string) => {
    setSingleIVCOId(() => id);
  }

  return (
    <>
      <CreateIVCOButton />
      <CreateIVCO />
      <DisplayIVCOs account={account || ""} getServiceId={getServiceId} />
      {singleIVCOId !== "" && (<IVCOPage  account={account || ""} id={singleIVCOId} />) }
    </>
  );
};
export default IVCO;
