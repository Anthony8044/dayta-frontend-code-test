import { getScoreData, getUserData } from "@/data/DataModels";
import { scoreType, userTableType, userType } from "@/types";
import { sortData } from "@/utils/CustomSort";
import React from "react";

async function UserScoreTable() {
  const userData: userType[] = await getUserData();
  const scoreData: scoreType[] = await getScoreData();

  const sortedData: userTableType[] = sortData(scoreData, userData);

  return (
    <tbody>
      {sortedData.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.course}</td>
          <td>{item.score}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default UserScoreTable;
