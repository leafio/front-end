# &#x20;start

```typescript
class Rect {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getRect() {
    return this.x * this.y;
  }
}

interface RectIFS extends Rect {
  z: number;
  getCube(): number;
}
class Cube extends Rect implements RectIFS {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  getCube(): number {
    return this.x * this.y * this.z;
  }
}
let shape = new Cube(22, 44, 55);
log(shape.getCube());
```
