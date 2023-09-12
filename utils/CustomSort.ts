import { scoreType, userTableType, userType } from "@/types";

export function sortData(scores: scoreType[], users: userType[]) {
  const courseRankingOrder = ["MATHS", "BIO", "CHEM"];
  const userTable: userTableType[] = [];

  //map the username to the temporary usertable array
  scores.map((a) => {
    userTable.push({
      ...a,
      name: users.find((el) => el.id === a.userId)!.name,
    });
  });

  //sort the data by name then by the custom course ranking order
  userTable.sort(
    (a, b) =>
      a.name.localeCompare(b.name) ||
      courseRankingOrder.indexOf(a.course) -
        courseRankingOrder.indexOf(b.course)
  );

  return userTable;
}
