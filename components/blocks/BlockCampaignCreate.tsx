import React, { useState } from "react";

export default function BlockCampaignCreate(): any {
  const [name, setName] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  
  return (
    <div className="container bg-white/75 py-6 rounded-3xl lg:flex lg:gap-12">
      <div className="flex flex-col w-full mb-6 gap-2 lg:mb-0">
        <h1 className="mb-6 uppercase">Create Campaign</h1>
        <div className="grid lg:grid-cols-2 gap-2">
          <label className="flex gap-2 items-center justify-between">
            <h2>Campaign Name</h2>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              className="w-[180px] px-3 py-2 text-sm border rounded-md lg:w-[240px]"
            />
          </label>
        </div>
      </div>
    </div>
  );
}