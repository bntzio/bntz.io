import uuid from 'uuid/v4'
import ListItem from '../components/common/ListItem'

const h = {
  renderListItems (items, type) {
    return items.map(item => {
      return <ListItem key={uuid()} title={item.title} classname={type} route={type} slug={item.slug} />
    })
  }
}

export default h
