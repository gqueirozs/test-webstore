import * as Icons from "Shared/Assets/Icons";
import { ContentBlock, FloatingTag } from "Shared/Components";

const IconsShowCase = () => {
  return (
    <>
      <ContentBlock title="Ícones" helpPage="/teste">
        <div className="Wrap g-4">
          {Object.keys(Icons).map((key, index) => {
            const IconComponent = Icons[key as keyof typeof Icons];
            return (
              <div key={index} className="Icon_Box">
                <IconComponent />
                <FloatingTag label={key} />
              </div>
            );
          })}
        </div>
      </ContentBlock>
    </>
  );
};

export default IconsShowCase;
