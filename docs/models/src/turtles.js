// import ColorMap from '../../dist/AS/ColorMap.js'
// import Model from '../../dist/AS/Model.js'
// import util from '../../dist/AS/util.js'
import {ColorMap, Model, util} from '../../dist/AS.modules.js'

util.toWindow({ ColorMap, Model, util })

const numTurtles = 10000

class TurtlesModel extends Model {
  setup () {
    this.turtles.own('speed')
    this.turtles.setDefault('atEdge', 'wrap')
    this.turtles.setDefault('z', 0.1)

    this.cmap = ColorMap.LightGray
    this.patches.ask(p => {
      p.color = this.cmap.randomColor()
    })

    this.turtles.create(numTurtles, (t) => {
      t.size = util.randomFloat2(0.2, 0.5) // + Math.random()
      t.speed = util.randomFloat2(0.01, 0.05) // 0.5 + Math.random()
    })
  }
  step () {
    this.turtles.ask((t) => {
      t.theta += util.randomCentered(0.1)
      t.forward(t.speed)
    })
  }
}

const model = new TurtlesModel(document.body).start()
model.whenReady(() => {
  // debugging
  console.log('patches:', model.patches.length)
  console.log('turtles:', model.turtles.length)
  const {world, patches, turtles, links} = model
  util.toWindow({ world, patches, turtles, links, model })
})
