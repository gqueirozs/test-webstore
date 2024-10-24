import { More } from "Shared/Assets/Icons";
import { TIcons } from "Shared/Utils/Interfaces/Icons";
import * as Icons from 'Shared/Assets/Icons'
import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IColumns {
  [key: string]: (obj: any) => ReactNode;
}

type TAction = {
  function: (obj: any) => void;
}

interface IAction {
  [key: string]: TAction
}

const ContentList = ({ columns, dataArray, actions }: { columns: IColumns, dataArray: any, actions?: IAction }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!columns || !dataArray) return <></>
  return (
    <AnimatePresence>

      <div className="Content_Block">
        <table className="Content_List">
          <thead>
            <tr style={{ gridTemplateColumns: `repeat( ${Object.keys(columns).length + (actions ? 1 : 0)}, 1fr)` }}>
              {Object.keys(columns).map(key => (<th><b>{key}</b></th>))}
              {actions && <th><b>Ações</b></th>}
            </tr>
          </thead>
          <tbody>
            {dataArray.map((data: any, index: any) => (
              <tr key={index} style={{ gridTemplateColumns: `repeat( ${Object.keys(columns).length + (actions ? 1 : 0)}, 1fr)` }}>
                {Object.keys(columns).map((key) => (
                  <td key={key}>{columns[key](data)}</td>
                ))}
                {
                  actions &&
                  <td key={`action_${index}`}>
                    <div
                      style={{cursor: 'pointer'}}
                      tabIndex={0}
                      onFocus={() => setTimeout(() => setOpenIndex(index), 150)}
                      onBlur={() => setTimeout(() => setOpenIndex(null), 100)}
                    >
                      <More />
                    </div>
                    {openIndex === index &&

                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="Action_List">
                        {Object.keys(actions).map((key: string) => (
                          <span onClick={() => actions[key].function(data)}>
                            {key}
                          </span>
                        ))}
                      </motion.div>
                    }

                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatePresence>

  );
};

export default ContentList;
