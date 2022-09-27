import React from "react";
import { ITournament } from "../utils/models";

const TournamentsTable = ({ tournaments }: { tournaments: ITournament[] }) => {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Date
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Location
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Seats
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Signup
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {tournaments.map((tournament: ITournament) => (
          <tr key={tournament.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {tournament.name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {tournament.tournamentDate}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {tournament.location}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {tournament.seats}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {tournament.signupDisabled ? "closed" : "open"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TournamentsTable;
