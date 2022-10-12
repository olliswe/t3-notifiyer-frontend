import Fuse from "fuse.js";
import React, { useEffect, useRef, useState } from "react";
import { ITournament } from "../utils/models";
import { SearchIcon } from "@heroicons/react/solid";

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: true,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.2,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["name"],
};

interface INameSearch {
  fullDataSet: ITournament[];
  setResults: (result: any) => void;
}

const NameSearch = ({ fullDataSet, setResults }: INameSearch) => {
  const [searchText, setSearchText] = useState("");
  const fuseRef = useRef<Fuse<unknown>>();

  const onChange = (e: any) => {
    setSearchText(e.target.value);
    if (!e.target.value) {
      setResults(fullDataSet);
    } else {
      setResults(fuseRef.current?.search(e.target.value).map((x) => x.item));
    }
  };

  useEffect(() => {
    fuseRef.current = new Fuse(fullDataSet, options);
  }, [fullDataSet]);

  return (
    <div className="w-[500px]">
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="searchText"
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Turnier suchen"
          onChange={onChange}
          value={searchText}
        />
      </div>
    </div>
  );
};

export default NameSearch;
