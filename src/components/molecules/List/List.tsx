// components
import ListItem from '../../atoms/ListItem'
import Tab from '../../atoms/Tab'
// styles
import styles from './List.module.scss'

type ListProps = {
  tabText: string;
  listItems: {
    listItemTitle: string;
    listItemSubtitle: string;
    listItemYear?: string;
    listItemDescription?: string;
  }[] 
}

export default function List({ 
  tabText,
  listItems }: ListProps) {

  return (
    <div className={styles.Wrapper}>
      <Tab 
        text={tabText}
        isActive={true}
        isTab
      />
      {listItems && listItems.map((listItem, index) => (
        <ListItem 
          title={listItem.listItemTitle}
          subtitle={listItem.listItemSubtitle}
          year={listItem.listItemYear}
          description={listItem.listItemDescription}
          key={index}
        />
      ))}
    </div>
  )
}
