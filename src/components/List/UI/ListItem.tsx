import { useContext } from "react";
import { ListContext } from "../Context/ListContext";
import { ERROR_MESSAGE, LIST } from "../Constant";

export interface ListItemProp {
  index: number;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProp> = ({ index, children }) => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error(ERROR_MESSAGE.LIST_ITEM_CONTEXT);
  }

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();

    if (context.isSelectable && context.setSelectedIndex) {
      context.setSelectedIndex(
        index === context.selectedIndex ? LIST.DDEFAULT_INDEX : index
      );
    }
  };

  return (
    <li
      style={{
        cursor: context.isSelectable ? "pointer" : "auto",
        backgroundColor:
          context.isSelectable && context.selectedIndex === index
            ? "blue"
            : "transparent",
      }}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};

export default ListItem;
