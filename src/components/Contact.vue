<template>
  <canvas ref="contact-canvas"></canvas>
</template>

<script>
export default {
  mounted: function () {
    this.canvas = this.$refs['contact-canvas']

    this.canvasSize = {
      w: this.canvas.parentElement.clientWidth,
      h: document.body.scrollHeight
    }

    this.canvas.width = this.canvasSize.w
    this.canvas.height = this.canvasSize.h

    for (let i = 0; i < this.numBitStrings; ++i) {
      let length = 5 + Math.ceil(Math.random() * 8)
      let str = ''
      for (let s = 0; s < length; ++s) {
        str += (this.coinToss()) ? '0' : '1'
      }

      let x = 0
      let dir = ''
      let offset = Math.random() * this.canvas.width / 2
      if (this.coinToss()) {
        x = -offset
        dir = 'right'
      } else {
        x = this.canvas.width + offset
        dir = 'left'
      }

      let bitStrObj = {
        x: x,
        y: Math.random() * this.canvas.height,
        dir: dir,
        str: str,
        brightness: Math.random(),
        speed: 5 + Math.random() * 15
      }
      this.bitStrings.push(bitStrObj)
    }

    this.fpsTimer = Date.now()
    requestAnimationFrame(this.draw)

    var ctx = this
    this.canvas.addEventListener('click', (e) => {
      if (e.pageX > ctx.emailLinkBox.x &&
        e.pageX < ctx.emailLinkBox.x + ctx.emailLinkBox.width &&
        e.pageY > this.canvasOffset + ctx.emailLinkBox.y - ctx.emailLinkBox.height &&
        e.pageY < this.canvasOffset + ctx.emailLinkBox.y) {
        location.href = 'mailto:michael@michael-hawthorne.com?subject=Hi Michael&Body=Can I please hire you?'
      }
    })

    this.$nextTick(() => {
      ctx.$vuetify.goTo(ctx.canvas, {
        duration: 200,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    })
  },
  methods: {
    draw: function () {
      requestAnimationFrame(this.draw)

      var now = Date.now()
      if (now - this.fpsTimer > 1000 / this.fps) {
        var gfx = this.canvas.getContext('2d')
        gfx.fillStyle = 'black'

        var grd = gfx.createRadialGradient(
          this.canvas.width / 2,
          this.canvas.height / 2,
          this.canvas.width / 3,
          this.canvas.width / 2,
          this.canvas.height / 2,
          this.canvas.width * 0.75
        )
        grd.addColorStop(0, '#010101')
        grd.addColorStop(1, '#8787ff')
        gfx.fillStyle = grd
        gfx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        gfx.font = '30px Arial'
        gfx.shadowBlur = 40
        var ctx = this
        this.bitStrings.forEach((bitStr) => {
          gfx.fillStyle = 'rgb(' +
            (bitStr.brightness * 255) + ',' +
            (bitStr.brightness * 255) + ',' +
            '255)'
          gfx.shadowColor = 'white'

          gfx.fillText(bitStr.str, bitStr.x, bitStr.y)
          if (bitStr.dir === 'right') {
            bitStr.x += bitStr.speed
            if (bitStr.x > ctx.canvas.width) {
              let textMetrics = gfx.measureText(bitStr.str)
              bitStr.x = -textMetrics.width
            }
          } else {
            bitStr.x -= bitStr.speed
            let textMetrics = gfx.measureText(bitStr.str)
            if (bitStr.x < -textMetrics.width) {
              bitStr.x = ctx.canvas.width
            }
          }
        })

        gfx.font = '100px Arial'
        let textMetrics = gfx.measureText('E MAIL')
        this.emailLinkBox.width = textMetrics.width
        this.emailLinkBox.height = 70

        this.emailLinkBox.x =
          (this.canvas.width / 2) -
          (this.emailLinkBox.width / 2)
        this.emailLinkBox.y = (this.canvas.height / 2)

        gfx.fillStyle = 'white'
        gfx.fillText(
          'E MAIL',
          this.emailLinkBox.x,
          this.emailLinkBox.y
        )
      }
    },
    coinToss: function () {
      return Math.random() >= 0.5
    }
  },
  computed: {
    canvasOffset: function () {
      return this.canvas.getBoundingClientRect().top - document.body.getBoundingClientRect().top
    }
  },
  data: function () {
    return {
      numBitStrings: 25,
      canvas: {},
      canvasSize: {},
      bitStrings: [],
      emailLinkBox: {},
      fpsTimer: {},
      fps: 60
    }
  }
}
</script>
