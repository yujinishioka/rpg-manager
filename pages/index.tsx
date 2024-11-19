export default function Home() {
  const data = [
    {
      id: 1,
      title: "Characters",
      descriptions: ["displays created characters", "character creation"],
    },
    {
      id: 2,
      title: "Campaign",
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
      title: "Account",
      descriptions: ["displays profile and allows data editing"],
    },
  ];

  return (
    <div className="container custom-min-margin my-6 lg:container">
      <h1 className="mb-6 text-black/80">RPG Maker</h1>
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
