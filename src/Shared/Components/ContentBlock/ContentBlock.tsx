import { HelpTip } from "Shared/Assets/Icons";
import FloatingTag from "Shared/Components/Tags/FloatingTag/FloatingTag";
import React, { ReactNode, ReactElement, Children } from "react";

const ContentBlock = ({
  title,
  children,
  helpPage,
}: {
  title?: string;
  children: ReactNode;
  helpPage?: string;
}) => {
  const content = Children.toArray(children).filter(
    (child) => (child as ReactElement).type !== "footer" && (child as ReactElement).type !== "header"
  );

  const footerElement = Children.toArray(children).find(
    (child) => (child as ReactElement).type === "footer"
  ) as ReactElement | undefined;

  const footerClassName = footerElement?.props.className
    ? "Content_Footer " + footerElement.props.className
    : "Content_Footer ";

  const footer = footerElement ? (
    <div {...footerElement.props} className={footerClassName}>
      {footerElement.props.children}
    </div>
  ) : null;

  const headerElement = Children.toArray(children).find(
    (child) => (child as ReactElement).type === "header"
  ) as ReactElement | undefined;

  const headerClassName = headerElement?.props.className
    ? "Content_Header " + headerElement.props.className
    : "Content_Header ";

  const header = headerElement ? (
    <div {...headerElement.props} className={headerClassName}>
      {headerElement.props.children}
    </div>
  ) : null;

  return (
    <div className="Content_Block">
      {header}
      {!header && title && 
      <div className="Content_Header Justify_Between Align_Center">
        {title}
        {helpPage && <a href={helpPage} target="_blank" className="assistant Align_Center">
          <HelpTip />
          <FloatingTag
            align="Right"
            label="Ajuda"
          />
        </a>}
      </div>}
      <div className="Content_Container">{content}</div>
      {footer}
    </div>
  );
};

export default ContentBlock;
