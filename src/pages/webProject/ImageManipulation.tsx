import { useRef, useEffect, useState } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";

const ImageManipulation = () => {
  const imageRef = useRef();
  const stageRef = useRef();
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const image = new window.Image();
    image.src = "src/assets/img/hp/img3.jpg";
    image.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setImageData(imageData);

      imageRef.current.image(canvas);
      imageRef.current.getLayer().batchDraw();
    };
    image.onerror = () => {
      console.error("Image failed to load:", image.src);
    };
  }, []);

  const handleMouseMove = (e) => {
    const stage = stageRef.current;
    const pointer = stage.getPointerPosition();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (imageData) {
      const radius = 50; // Half of the diameter
      const data = imageData.data;
      const width = imageData.width;
      const height = imageData.height;

      for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
          const dx = x;
          const dy = y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance <= radius) {
            const px = Math.min(Math.max(pointer.x + x, 0), width - 1);
            const py = Math.min(Math.max(pointer.y + y, 0), height - 1);
            const index = (py * width + px) * 4;

            // Convert to grayscale (black and white)
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const gray = 0.299 * r + 0.587 * g + 0.114 * b;
            data[index] = gray;
            data[index + 1] = gray;
            data[index + 2] = gray;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      imageRef.current.image(canvas);
      imageRef.current.getLayer().batchDraw();
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseMove}
      >
        <Layer>
          <KonvaImage ref={imageRef} />
        </Layer>
      </Stage>
    </div>
  );
};

export default ImageManipulation;
