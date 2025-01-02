import { useEffect, useRef } from 'react'
import { Button } from '@mantine/core'

export const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 1584, 0)
    gradient.addColorStop(0, 'rgb(255, 255, 255)')
    gradient.addColorStop(1, 'rgb(0, 0, 0)')

    ctx.rect(0, 0, 1584, 396)
    ctx.fillStyle = gradient
    ctx.fill()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas!.getContext('2d')

    //Our draw come here
    if (context) draw(context)
  }, [draw])

  return (
    <div>
      <Button>test</Button>

      <canvas ref={canvasRef} id="myCanvas" width="1584" height="396" style={{ border: '1px solid #000000' }}></canvas>
    </div>
  )
}
