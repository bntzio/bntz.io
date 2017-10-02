import uuid from 'uuid/v4'
import ListItem from '../components/common/ListItem'
import BlogItem from '../components/BlogItem'
import WorkFrame from '../components/WorkFrame'
import NowItem from '../components/NowItem'

const h = {
  renderListItems (items, type) {
    return items.map(item => {
      return <ListItem key={uuid()} title={item.title} classname={type} route={type} slug={item.slug} />
    })
  },
  renderBlogItems (items, category) {
    return items.map(item => {
      if (item.topic === category) {
        return <BlogItem key={uuid()} title={item.title} topic={item.topic} route='post' slug={item.slug} />
      }
    })
  },
  renderFrames (projects, type) {
    return projects.map(frame => {
      return <WorkFrame key={uuid()} title={frame.title} classname={type} description={frame.description} route={type} slug={frame.slug} borderColor={frame.heroColor} />
    })
  },
  renderNows (nows, type) {
    return nows.map(now => {
      return <NowItem key={uuid()} title={now.title} classname={type} route={type} slug={now.slug} />
    })
  }
}

export default h
