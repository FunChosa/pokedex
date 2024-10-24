import React from "react";
import Stat from "./Stat";

const Stats = ({ stats }) => {
  return (
    <div className="stats">
      <Stat parameter={"Height"} value={stats.height} units={"ft"} />
      <Stat parameter={"Weight"} value={stats.weight} units={"kg"} />
      <Stat parameter={"Base Exp"} value={stats.exp} />
      <Stat parameter={"HP"} value={stats.hp} />
      <Stat parameter={"Attack"} value={stats.attack} />
      <Stat parameter={"Defense"} value={stats.defense} />
      <Stat parameter={"Spl Attack"} value={stats.splAttack} />
      <Stat parameter={"Spl Defense"} value={stats.splDefense} />
      <Stat parameter={"Speed"} value={stats.speed} />
    </div>
  );
};

export default Stats;
