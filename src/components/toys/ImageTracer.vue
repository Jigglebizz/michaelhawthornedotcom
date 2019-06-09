<template>
  <div class="text-xs-center">
    <canvas ref="my-canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted: function () {
    const timeToFill = 10000
    const refreshRate = 50

    this.context = this.$refs['my-canvas'].getContext('2d')

    this.canvasSize = {
      w: this.$refs['my-canvas'].parentElement.clientWidth,
      h: this.$refs['my-canvas'].parentElement.clientHeight
    }
    if (this.canvasSize.w > this.canvasSize.h) {
      this.canvasSize.w = this.canvasSize.h
      this.canvasSize.h = this.canvasSize.h
    } else {
      this.canvasSize.w = this.canvasSize.w
      this.canvasSize.h = this.canvasSize.w
    }

    this.numDots = (this.canvasSize.w * this.canvasSize.h) * (refreshRate / timeToFill)
    console.log(this.numDots)

    this.$refs['my-canvas'].width = this.canvasSize.w
    this.$refs['my-canvas'].height = this.canvasSize.h

    let i = 0
    for (let x = 0; x < this.canvasSize.w; ++x) {
      for (let y = 0; y < this.canvasSize.h; ++y) {
        this.pixelsLeft[i++] = {x: x, y: y}
      }
    }

    var ctx = this
    this.htmlImg.onload = function () {
      ctx.imageSize.w = ctx.htmlImg.width
      ctx.imageSize.h = ctx.htmlImg.height

      var canvas = document.createElement('canvas')
      var context = canvas.getContext('2d')
      context.drawImage(ctx.htmlImg, 0, 0, ctx.canvasSize.w, ctx.canvasSize.h)
      ctx.pixelBuffer = context.getImageData(0, 0, ctx.htmlImg.width, ctx.htmlImg.height).data

      for (let i = 0; i < ctx.numLines; ++i) {
        ctx.lineLists.push([])
      }

      setInterval(() => {
        ctx.drawIteration()
      }, refreshRate)
    }

    this.htmlImg.src = this.image
  },
  methods: {
    drawIteration: function () {
      if (this.pixelsLeft.length === 0) {
        return
      }
      var ctx = this
      for (let i = 0; i < this.numDots; ++i) {
        this.$worker.run(() => {
          ctx.drawADot()
        })
      }
    },
    drawADot: function () {
      let idx = Math.floor(Math.random() * (this.pixelsLeft.length - 1))
      let loc = this.pixelsLeft.splice(idx, 1)[0]

      let p = this.sampleAt(
        loc.x, loc.y
      )
      var rgba = 'rgba(' +
        p.r + ',' +
        p.g + ',' +
        p.b + ',1)'
      this.context.fillStyle = rgba
      this.context.fillRect(loc.x, loc.y, 1, 1)
    },
    sampleAt: function (x, y) {
      const pixSize = 4
      var startIndex = (x + (y * this.imageSize.w)) * pixSize
      var r = this.pixelBuffer[startIndex]
      var g = this.pixelBuffer[startIndex + 1]
      var b = this.pixelBuffer[startIndex + 2]
      var a = this.pixelBuffer[startIndex + 3]

      return {
        r: r,
        g: g,
        b: b,
        a: a
      }
    },
    digitToHex: function (digit) {
      var hex = Number(digit).toString(16)
      if (hex.length < 2) {
        hex = '0' + hex
      }
      return hex
    }
  },

  data: function () {
    return {
      htmlImg: new Image(),
      image: require('@/assets/portrait.jpg'),
      context: null,
      numLines: 3,
      numDots: 50,
      pixelsLeft: [],
      lineLists: [],
      pixelBuffer: [],
      imageSize: {
        w: 0,
        h: 0
      },
      canvasSize: {
        w: 0,
        h: 0
      },
      size: {
        w: 0,
        h: 0
      }
    }
  }
}
</script>
