import "./PageTitle.scss";
import { FC } from "react";

interface IPageTItleProps {
  title: string;
}

export const PageTitle: FC<IPageTItleProps> = ({
  title
}) => {
  return (
    <div className="PageTitle_Container">
      <h1>
        {title}
      </h1>
    </div>
  )
}
