import './index.css'

const TabItem = props => {
  const {category, list, changeCategory} = props
  const classNameValue = category === list.tabId ? 'isSelect' : 'list-ele'

  const a = () => {
    changeCategory(list.tabId)
  }

  return (
    <li>
      <button type="button" className="category-btn">
        <h1 className={classNameValue} onClick={a}>
          {list.displayText}
        </h1>
      </button>
    </li>
  )
}

export default TabItem
