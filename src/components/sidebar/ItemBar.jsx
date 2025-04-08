

const ItemBar = ({icon, title, togglePage}) => {
  return (
    <div className="flex items-center gap-2 pt-4" onClick={togglePage}>
        <div className="">{icon}</div>
        <p className="text-2xl font-medium ">{title}</p>
    </div>
  )
}

export default ItemBar