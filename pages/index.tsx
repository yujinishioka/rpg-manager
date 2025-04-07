export default function Home() {
  const data = [
    {
      id: 1,
      title: "Characters",
      descriptions: ["displays created characters", "character creation"],
    },
    {
      id: 2,
      title: "Campaigns",
      descriptions: [
        "displays created campaigns",
        "campaign creation with a character or as a game master",
      ],
    },
    {
      id: 3,
      title: "Wiki",
      descriptions: [
        "search for classes, races, and anything you want to know",
      ],
    },
    {
      id: 4,
      title: "Notes",
      descriptions: ["notes page"],
    },
    {
      id: 5,
      title: "Settings",
      descriptions: ["displays preferences and allows data editing"],
    },
  ];

  return (
    <div className="container custom-min-margin bg-white/65 my-6 py-6 rounded-lg lg:container">
      <h1 className="mb-6 text-black/80 font-bold">RPG Maker</h1>
      <h2 className="mb-4">Pages</h2>
      <div className="flex flex-col gap-6 text-black/70">
        {data &&
          data.length > 0 &&
          data.map((item): any => (
            <div key={`home-map-${item.id}`} className="flex flex-col gap-2">
              <h2 className="text-lg">{item.title}</h2>
              {item?.descriptions &&
                item.descriptions.length > 0 &&
                item.descriptions.map((description, index) => (
                  <p key={`description-${item.id}-${index}`}>{description}</p>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
