import uuid from 'uuid/v4'
import ListItem from '../components/common/ListItem'
import WorkFrame from '../components/WorkFrame'

const h = {
  renderListItems (items, type) {
    return items.map(item => {
      return <ListItem key={uuid()} title={item.title} classname={type} route={type} slug={item.slug} />
    })
  },
  renderFrames (projects, type) {
    return projects.map(frame => {
      return <WorkFrame key={uuid()} name={frame.name} classname={type} description={frame.description} route={type} slug={frame.slug} />
    })
  }
}

export default h
