import HelpTip from "Shared/Assets/Icons/HelpTip";
import "./CardSection.scss";
import { FC, ReactNode } from "react";
import FloatingTag from "../Tags/FloatingTag/FloatingTag";

interface ICardSectionProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  helpPage?: string;
}

export const CardSection: FC<ICardSectionProps> = ({
  children,
  title,
  subtitle,
  helpPage,
}) => {
  return (
    <div className="CardSection_Container">
      {title && (
        <header>
          <div style={{ display: 'flex' }}>
            <h1>{title}</h1>

            {helpPage && (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a
                href={helpPage}
                target="_blank"
                className="assistant Align_Center"
                style={{ marginLeft: 6 }}
              >
                <HelpTip />
                <FloatingTag align="Right" label="Ajuda" />
              </a>
            )}
          </div>

          {subtitle && <h2>{subtitle}</h2>}
        </header>
      )}

      <div className="CardSection_Content">{children}</div>
    </div>
  );
};
