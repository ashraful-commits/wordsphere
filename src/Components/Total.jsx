import user from "../../public/user.png";
const Total = ({
  number,
  totalSalesGuy,
  totalProjects,
  totalClients,
  TotalEarnings,
  styles,
  title,
  svg,
}) => {
  return (
    <div className="border w-[304px] h-[150px] rounded-md">
      <div className="border-b h-[55px] flex items-center gap-2">
        <div
          className={`svg w-[27px] h-[27px] border rounded-md ml-4  flex justify-center items-center ${styles}`}
        >
          {svg}
        </div>
        <h1 className="font-['work_sans'] text-[14px] text-[#230B34] font-[500]">
          {title}
        </h1>
      </div>
      <div className="flex justify-between items-center h-[95px] px-[20px]">
        <h1 className="text-[35px] font-[500] text-['work_sans'] flex">
          {title === "Total Earnings" ? "$" : ""} {number ? number : "0000"}
        </h1>
        {title === "Total Projects" && (
          <button className="border flex items-center gap-1 px-1 border-green-500 rounded-md bg-green-200">
            3.9%
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
            >
              <path
                d="M3.00824 0.178757C2.87788 0.180839 2.75349 0.234239 2.66156 0.327567L0.162534 2.8504C0.112764 2.89636 0.0727195 2.95201 0.0448106 3.014C0.0169017 3.07599 0.00170514 3.14306 0.000135429 3.21113C-0.00143428 3.27921 0.0106554 3.34689 0.0356768 3.41013C0.0606981 3.47336 0.098134 3.53083 0.145732 3.57908C0.193329 3.62733 0.250104 3.66534 0.31264 3.69086C0.375176 3.71638 0.442181 3.7289 0.509621 3.7276C0.577061 3.7263 0.643543 3.71121 0.705066 3.68329C0.766589 3.65538 0.82188 3.61516 0.867614 3.56511L2.51019 1.90689L2.5142 8.75269C2.5171 8.88462 2.57105 9.01015 2.6645 9.10242C2.75796 9.19469 2.88348 9.2464 3.0142 9.2464C3.14492 9.2464 3.27044 9.19469 3.3639 9.10242C3.45735 9.01015 3.5113 8.88462 3.5142 8.75269L3.51019 1.89705L5.15961 3.56511C5.25419 3.6566 5.38049 3.70707 5.51148 3.70571C5.64246 3.70435 5.76771 3.65127 5.8604 3.55783C5.95309 3.46439 6.00585 3.338 6.00738 3.20578C6.00891 3.07355 5.95909 2.94601 5.86859 2.8504L3.36957 0.327567C3.3223 0.279578 3.26595 0.241697 3.20388 0.216134C3.1418 0.190571 3.07527 0.177842 3.00824 0.178757Z"
                fill="#3AAE54"
              />
            </svg>
          </button>
        )}
        {title === "Total Projects" && (
          <span className="text-[13px] font-['work_sans'] font-[400] text-[#878790]">
            This Week
          </span>
        )}
        {title === "Total Earnings" || title === "Total Projects" ? (
          ""
        ) : (
          <div className="avaters flex gap-[-10px]">
            <div className="guy w-[29px] h-[29px] flex justify-center items-center border-white mr-[-5px] rounded-full border-[2px]">
              <img className="w-full h-full" src={user} alt="" />
            </div>
            <div className="guy w-[29px] h-[29px] flex justify-center items-center border-white mr-[-5px] rounded-full border-[2px]">
              <img className="w-full h-full" src={user} alt="" />
            </div>
            <div className="guy w-[29px] h-[29px] flex justify-center items-center border-white mr-[-5px] rounded-full border-[2px]">
              <img className="w-full h-full" src={user} alt="" />
            </div>
            <div className="guy w-[29px] h-[29px] flex justify-center items-center border-white mr-[-5px] rounded-full border-[2px]">
              <img className="w-full h-full" src={user} alt="" />
            </div>
            <div className="guy w-[29px] h-[29px] flex justify-center items-center border-white bg-gray-200 font-[600] mr-[-5px] rounded-full text-[8.815px] leading-[15.60px] border-[2px]">
              More
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Total;