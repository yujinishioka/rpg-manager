import { useState } from "react";
import BlockWiki from "@/components/blocks/BlockWiki";
import races from "@/data/races.json";

export default function Wiki(): any {
  const data: any = [];
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  data.push(
    ...races.map((race: any) => ({
      title: race.name,
      text: race?.details?.length > 0 ? race.details[0]?.description : "",
      type: "race",
    }))
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setFilteredData(
      data?.length > 0 &&
        data.filter((item: any) =>
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value
                .toLowerCase()
                .includes(event.target.value.toLocaleLowerCase())
          )
        )
    );
  };

  return (
    <div className="container custom-min-margin my-6 items-center">
      <div className="flex mb-6 items-start justify-between">
        <h1 className="uppercase">Wiki</h1>
        <input
          name="search"
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={handleSearchChange}
          className="px-3 py-2 text-right border border-black/30 rounded-[10px] lg:w-[300px]"
        />
      </div>
      {searchValue?.length < 3 ? (
        <BlockWiki data={data} />
      ) : (
        <BlockWiki data={filteredData} />
      )}
    </div>
  );
}
