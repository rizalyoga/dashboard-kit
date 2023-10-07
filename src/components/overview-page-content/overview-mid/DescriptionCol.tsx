const DescriptionCol = () => {
  return (
    <div className="lg:basis-[25%] text-center  dark:bg-dark_background dark:text-white">
      <div className="flex flex-col justify-center items-center p-4">
        <h4 className="font-bold text-slate-400">Resolved</h4>
        <h3 className="font-bold text-xl text-slate-700 dark:text-slate-200">
          449
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center p-4 border-t border-slate-300">
        <h4 className="font-bold text-slate-400">Received</h4>
        <h3 className="font-bold text-xl text-slate-700 dark:text-slate-200">
          224
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center p-4 border-t border-slate-300">
        <h4 className="font-bold text-slate-400">
          Average first response time
        </h4>
        <h3 className="font-bold text-xl text-slate-700 dark:text-slate-200">
          33m
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center p-4 border-t border-slate-300">
        <h4 className="font-bold text-slate-400">Average response time </h4>
        <h3 className="font-bold text-xl text-slate-700 dark:text-slate-200">
          3h 8m
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center p-4 border-t border-slate-300">
        <h4 className="font-bold text-slate-400">Resolution within SLA</h4>
        <h3 className="font-bold text-xl text-slate-700 dark:text-slate-200">
          94%
        </h3>
      </div>
    </div>
  );
};

export default DescriptionCol;
