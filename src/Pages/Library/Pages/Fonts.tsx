import { ContentBlock } from "Shared/Components";

const Fonts = () => {
  return (
    <>
      <ContentBlock title="Heading tags" helpPage="/teste">
        <div className="Flex_Column Font_Container g-2">
          <h1>H1. Heading</h1>
          <span>
            Family: Poppins | Site: 32px | Color: #444444 | Font weight:
            Semi-bold | Line height: 34px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <h2>H2. Heading</h2>
          <span>
            Family: Poppins | Site: 28px | Color: #444444 | Font weight:
            Semi-bold | Line height: 34px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <h3>H3. Heading</h3>
          <span>
            Family: Poppins | Site: 26px | Color: #444444 | Font weight:
            Semi-bold | Line height: 34px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <h4>H4. Heading</h4>
          <span>
            Family: Poppins | Site: 24px | Color: #444444 | Font weight:
            Semi-bold | Line height: 34px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <h5>H5. Heading</h5>
          <span>
            Family: Poppins | Site: 22px | Color: #444444 | Font weight:
            Semi-bold | Line height: 34px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <h6>H6. Heading</h6>
          <span>
            Family: Poppins | Site: 18px | Color: #444444 | Font weight:
            Semi-bold | Line height: 34px
          </span>
        </div>
      </ContentBlock>

      <ContentBlock title="Paragraphs" helpPage="/teste">
        <div className="Flex_Column Font_Container g-2">
          <span>Parágrafo normal </span>
          <span>
            Family: Poppins | Site: 14px | Color: #444444 | Font weight: Regular
            | Line height: 24px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <small>Parágrafo menor</small>
          <span>
            Family: Poppins | Site: 12px | Color: #444444 | Font weight: Regular
            | Line height: 22px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <b>Parágrafo maior</b>
          <span>
            Family: Poppins | Site: 16px | Color: #444444 | Font weight: Regular
            | Line height: 26px
          </span>
        </div>
      </ContentBlock>

      <ContentBlock title="Assistants" helpPage="/teste">
        <div className="Flex_Column Font_Container g-2">
          <a>Link</a>
          <span>
            Family: Poppins | Site: 14px | Color: #1974D0 | Font weight: Regular
            | Line height: 24px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <a className="smallLink">Link menor</a>
          <span>
            Family: Poppins | Site: 12px | Color: #1974D0 | Font weight: Regular
            | Line height: 22px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <span className="error">Error</span>
          <span>
            Family: Poppins | Site: 12px | Color: #D82828 | Font weight: Regular
            | Line height: 26px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <span className="placeholder">Placeholder</span>
          <span>
            Family: Poppins | Site: 14px | Color: #999999 | Font weight: Regular
            | Line height: 26px
          </span>
        </div>

        <div className="Flex_Column Font_Container g-2">
          <span className="assistant">Assistant</span>
          <span>
            Family: Poppins | Site: 12px | Color: #999999 | Font weight: Regular
            | Line height: 26px
          </span>
        </div>
      </ContentBlock>
    </>
  );
};

export default Fonts;
