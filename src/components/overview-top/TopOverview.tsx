const TopOverview = () => {
  return (
    <div className="grid grid-flow-row gap-6 text-neutral-600 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      <div className="flex flex-col justify-center items-center border border-slate-300 rounded-md bg-white dark:bg-dark_background p-8 hover:border-primmary_blue hover:text-primmary_blue cursor-pointer group transition">
        <p className="font-bold text-slate-400 group-hover:text-primmary_blue ">
          Unresolved
        </p>
        <h4 className="font-bold text-4xl mt-4 dark:text-slate-300 group-hover:text-primmary_blue">
          60
        </h4>
      </div>
      <div className="flex flex-col justify-center items-center border border-slate-300 rounded-md bg-white dark:bg-dark_background p-8 hover:border-primmary_blue hover:text-primmary_blue cursor-pointer group transition">
        <p className="font-bold  text-slate-400 group-hover:text-primmary_blue">
          Overdue
        </p>
        <h4 className="font-bold text-4xl mt-4 dark:text-slate-300 group-hover:text-primmary_blue">
          16
        </h4>
      </div>
      <div className="flex flex-col justify-center items-center border border-slate-300 rounded-md bg-white dark:bg-dark_background p-8 hover:border-primmary_blue hover:text-primmary_blue cursor-pointer group transition">
        <p className="font-bold text-slate-400 group-hover:text-primmary_blue ">
          Open
        </p>
        <h4 className="font-bold text-4xl mt-4 dark:text-slate-300 group-hover:text-primmary_blue">
          43
        </h4>
      </div>
      <div className="flex flex-col justify-center items-center border border-slate-300 rounded-md bg-white dark:bg-dark_background p-8 hover:border-primmary_blue hover:text-primmary_blue cursor-pointer group transition">
        <p className="font-bold text-slate-400 group-hover:text-primmary_blue ">
          On Hold
        </p>
        <h4 className="font-bold text-4xl mt-4 dark:text-slate-300 group-hover:text-primmary_blue">
          64
        </h4>
      </div>
    </div>
  );
};

export default TopOverview;
