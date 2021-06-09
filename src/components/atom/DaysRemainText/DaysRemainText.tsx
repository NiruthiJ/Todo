import { FC, useEffect, useState } from "react";

export interface IDaysRemainProps {
  endDate: Date | null | undefined;
  completed: boolean | undefined;
}

const DaysRemainText: FC<IDaysRemainProps> = ({ endDate, completed }) => {
  const [messageState, setMessagestate] = useState("");
  useEffect(() => {
    if (completed) {
      setMessagestate("Completed.");
    } else {
      if (endDate) {
        setMessagestate(calcDiff(endDate));
      } else {
        setMessagestate("-");
      }
    }
  }, [completed, endDate]);
  function calcDiff(endDate: Date): string {
    if (endDate) {
      const date = new Date();

      const diffAbsolute =
        new Date(endDate).valueOf() - date.valueOf();

      let months = (new Date(endDate).getFullYear() - date.getFullYear()) * 12;
      months -= new Date(endDate).getMonth();
      months += date.getMonth();
      let diff = months <= 0 ? 0 : months;

      let diffText = "months";
      if (diff === 0) {
        diff = Math.floor(Math.abs(diffAbsolute) / (1000 * 60 * 60 * 24));
        diffText = "days";
      }
      if (diff === 0) {
        diff = Math.floor(Math.abs(diffAbsolute) / (1000 * 60 * 60));
        diffText = "hours";
      }
      if (diff === 0) {
        diff = Math.floor(Math.abs(diffAbsolute) / (1000 * 60));
        diffText = "minutes";
      }

      return `${Math.abs(diff)} ${diffText} ${diffAbsolute < 0 ? 'overdue' : 'remaining'}`;
    }
    return "";
  }
  return (
    <div className={completed ? "text-green-500" : (messageState.search("overdue") > 1 ? "text-red-500" : "text-yellow-500")}>
      {messageState}
    </div>
  );
};

export default DaysRemainText;
