import { InputDataList } from "Shared/Components";

import { IDataOption } from "Shared/Utils/Interfaces/Inputs";

import { motion } from "framer-motion";
import { centralPageTransition } from "Shared/Utils/Data/Animations";

const UserSearch = ({ close }: { close: VoidFunction }) => {
  return (
    <motion.div
      variants={centralPageTransition}
      initial="hidden"
      exit="exit"
      animate="visible"
      className="Central_Float_Page User_Search_Float_Page Content_Block"
    >
      <div className="Content_Container">
        <InputDataList
          name="MainSearchBar"
          placeholder="Busque por produto, pedido ou cliente"
          defaultClear={false}
          defaultAction={(option:IDataOption) => alert('Você pesquisou: ' + option.value)}
          icon="Search"
          className="Teste"
          iconAlign="Right"
          options={[
            {
              value: 'Marcelo Heineken'
            },
            {
              value: 'Bola de futebol'
            },
            {
              value: '23413'
            }
          ]}
        />
      </div>
    </motion.div>
  );
};

export default UserSearch;
