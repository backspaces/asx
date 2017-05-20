// import Color from '../../dist/AS/Color.js'
// import ColorMap from '../../dist/AS/ColorMap.js'
// import Model from '../../dist/AS/Model.js'
// import util from '../../dist/AS/util.js'
import {Color, ColorMap, Model, util} from '../../dist/AS.modules.js'

util.toWindow({ Color, ColorMap, Model, util })

class FireModel extends Model {
  setup () {
    this.patchBreeds('fires embers')
    // this.anim.setRate(60)

    this.fireColorMap = ColorMap.gradientColorMap(6, ['red', [128, 0, 0]])
    this.treeColor = Color.newColor(0, 255, 0)
    this.dirtColor = Color.toColor('yellow')
    this.fireColor = this.fireColorMap[0]
    this.done = false

    this.density = 60 // percent
    this.patches.ask(p => {
      if (p.x === this.world.minX)
        this.ignight(p)
      else if (util.randomInt(100) < this.density)
        p.color = this.treeColor
      else
        p.color = this.dirtColor
    })

    this.burnedTrees = 0
    this.initialTrees =
      this.patches.filter(p => p.color.equals(this.treeColor)).length
  }

  step () {
    if (this.done) return

    if (this.fires.length + this.embers.length === 0) {
      console.log('Done:', this.anim.toString())
      const percentBurned = this.burnedTrees / this.initialTrees * 100
      console.log('Percent burned', percentBurned.toFixed(2))
      this.done = true
      return // keep three control running
    }

    this.fires.ask(p => {
      p.neighbors4.ask((n) => {
        if (this.isTree(n)) this.ignight(n)
      })
      p.setBreed(this.embers)
    })
    this.fadeEmbers()
  }

  isTree (p) { return p.color.equals(this.treeColor) }

  ignight (p) {
    p.color = this.fireColor
    // this.fires.setBreed(p)
    p.setBreed(this.fires)
    this.burnedTrees++
  }

  fadeEmbers () {
    this.embers.ask(p => {
      const c = p.color
      const ix = this.fireColorMap.indexOf(c)
      if (ix === this.fireColorMap.length - 1)
        p.setBreed(this.patches) // sorta like die, removes from breed.
      else
        p.color = this.fireColorMap[ix + 1]
    })
  }
}

// Test for container rather than entire window
// const div = document.getElementById('model')
// div.style = 'width:75%; height:500'
const div = document.body
const model = new FireModel(div, {
  patchSize: 2,
  minX: -125,
  maxX: 125,
  minY: -125,
  maxY: 125
}).start()
model.whenReady(() => {
  const {world, patches} = model
  util.toWindow({ world, patches, p: patches.oneOf(), model })
  // util.addToDom(patches.pixels.ctx.canvas)
})