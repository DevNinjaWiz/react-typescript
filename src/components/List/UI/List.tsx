import React, { useState, type ReactElement } from "react";
import { initialListContext, ListContext } from "../Context/ListContext";
import { LIST } from "../Constant";
import ListItem from "./ListItem";

interface ListProp {
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
  className?: string;
  selectable?: boolean;
}

const List: React.FC<ListProp> & { Item: typeof ListItem } = ({
  children,
  className,
  selectable,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(
    LIST.DDEFAULT_INDEX
  );

  const contextValue = {
    ...initialListContext,
    selectedIndex,
    setSelectedIndex,
    isSelectable: selectable ?? false,
  };

  return (
    <ListContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </ListContext.Provider>
  );
};

List.Item = ListItem;

export default List;
