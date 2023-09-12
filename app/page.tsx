import { Suspense } from "react";
import UserScoreTable from "./components/UserScoreTable";
import TableFallback from "./components/TableFallback";

export default function Home() {
  return (
    <main>
      <table className="userscore">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Score</th>
          </tr>
        </thead>
        <Suspense fallback={<TableFallback />}>
          <UserScoreTable />
        </Suspense>
      </table>
    </main>
  );
}
