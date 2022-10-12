import React, { useState } from "react";
import { ITournament } from "../utils/models";
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import classNames from "classnames";
import NameSearch from "./NameSearch";

const columns: ColumnsType<ITournament> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Datum",
    dataIndex: "tournamentDate",
    key: "tournamentDate",
  },
  {
    title: "Ort",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Plätze",
    dataIndex: "seats",
    key: "seats",
  },
  {
    title: "Signup",
    dataIndex: "signupDisabled",
    key: "signupDisabled",
    render: (value) => (
      <span
        className={classNames(
          "inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium",
          {
            "bg-green-100 text-green-800": !value,
            "bg-gray-100 text-gray-800": value,
          }
        )}
      >
        {value ? "Geschlossen" : "Offen"}
      </span>
    ),
  },
];

const TournamentsTable = ({ tournaments }: { tournaments: ITournament[] }) => {
  const [searchResults, setSearchResults] =
    useState<ITournament[]>(tournaments);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <NameSearch fullDataSet={tournaments} setResults={setSearchResults} />
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Table<ITournament>
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={searchResults}
          rowClassName="cursor-pointer"
          onRow={(record) => {
            return {
              onClick: () =>
                window.open(
                  `https://www.tabletopturniere.de/t3_tournament.php?tid=${record.t3Id}`,
                  "__blank"
                ),
            };
          }}
        />
      </div>
    </>
  );
};

export default TournamentsTable;
