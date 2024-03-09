// components
import ListItem from '../../atoms/ListItem'
import Tab from '../../atoms/Tab'
// styles
import styles from './List.module.scss'

type ListProps = {
  tabText: string;
  isContainer?: boolean;
  listItems: {
    listItemTitle: string;
    listItemSubtitle?: string;
    listItemYear?: string;
    listItemKeywords?: string[];
  }[] 
}

export default function List({ 
  tabText,
  listItems,
  isContainer }: ListProps) {

  return (
    <div className={styles.Wrapper}>
      <Tab 
        text={tabText}
        isActive={true}
        isTab
      />
      <div className={ isContainer ? styles.ListItems_Cont : '' }>
        {listItems && listItems.map((listItem, index) => (
          <ListItem 
            title={listItem.listItemTitle}
            subtitle={listItem.listItemSubtitle}
            keywords={listItem.listItemKeywords}
            year={listItem.listItemYear}
            isContainer={isContainer}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
