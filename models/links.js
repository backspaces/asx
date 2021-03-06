import ColorMap from '../src/ColorMap.js'
import Model from '../src/Model.js'
import { util } from '../agentscript/agentscript.esm.js'

util.toWindow({ ColorMap, Model, util })

class LinksModel extends Model {
    setup() {
        this.turtles.own('speed')
        this.turtles.setDefault('atEdge', 'bounce')
        // this.turtles.setDefault('z', 0.1)

        this.patchesCmap = ColorMap.grayColorMap(200, 255) // light gray map
        this.patches.ask(p => {
            p.color = this.patchesCmap.randomColor()
        })

        this.turtles.create(1000, t => {
            t.size = util.randomFloat2(0.2, 0.5) // + Math.random()
            t.speed = util.randomFloat2(0.01, 0.05) // 0.5 + Math.random()
        })

        this.turtles.ask(turtle => {
            const other = this.turtles.otherOneOf(turtle)
            if (turtle.links.length === 0 || other.links.length === 0) {
                this.links.create(turtle, other, link => {
                    link.color = this.randomColor()
                })
            }
        })
    }
    step() {
        // REMIND: Three mouse picking
        this.turtles.ask(t => {
            t.theta += util.randomCentered(0.1)
            t.forward(t.speed)
        })
    }
}

const model = new LinksModel()
model.setup()
model.start()

// Debugging
console.log('patches:', model.patches.length)
console.log('turtles:', model.turtles.length)
console.log('links:', model.links.length)
const { world, patches, turtles, links } = model
util.toWindow({ world, patches, turtles, links, model })
