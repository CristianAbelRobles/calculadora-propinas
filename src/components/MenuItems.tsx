import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItems( {item, addItem } : MenuItemProps ) {
  return (
    <button
      className="flex justify-between text-lg border-2 border-teal-400 w-full p-3 rounded-lg hover:bg-teal-200 hover:cursor-pointer"
      onClick={()=>addItem(item)}
    >
      {item.name}
      <span
      className="font-black"
      >$ {item.price}</span>
    </button>
  )
}
