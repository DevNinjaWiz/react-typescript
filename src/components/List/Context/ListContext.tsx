import { createContext } from "react";
import { LIST } from "../Constant/List.constant";

interface ListContextType {
  selectedIndex?: number;
  setSelectedIndex?: (index: number) => void;
  isSelectable: boolean;
}

export const initialListContext: ListContextType = {
  selectedIndex: LIST.DDEFAULT_INDEX,
  setSelectedIndex: undefined,
  isSelectable: false,
};

export const ListContext = createContext<ListContextType>(initialListContext);
