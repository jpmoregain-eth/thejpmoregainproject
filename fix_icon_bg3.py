#!/usr/bin/env python3
"""Fill icon backgrounds with card background color for seamless blending."""

from PIL import Image
import os

base = "/home/ubuntu/thejpmoregainproject/public/images"

# Card background color (dark end of the gradient)
CARD_BG = (15, 15, 26)  # #0f0f1a

def fill_background(img_path, out_path, target_rgb, threshold):
    """Replace pixels close to target color with card background color."""
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    tr, tg, tb = target_rgb
    
    new_data = []
    for item in data:
        r, g, b, a = item
        distance = abs(r - tr) + abs(g - tg) + abs(b - tb)
        if distance < threshold:
            # Replace with card background color
            new_data.append((*CARD_BG, 255))
        else:
            new_data.append((r, g, b, a))
    
    img.putdata(new_data)
    img.save(out_path)

# 1. SG Lottery: white background → card bg
print("SG Lottery: filling white bg with card color...")
fill_background(
    os.path.join(base, "sg-lottery-icon.png"),
    os.path.join(base, "sg-lottery-icon.png"),
    target_rgb=(255, 255, 255),
    threshold=100
)

# 2. Quietude: dark gray/black background → card bg
print("Quietude: filling dark bg with card color...")
fill_background(
    os.path.join(base, "quietude-icon.png"),
    os.path.join(base, "quietude-icon.png"),
    target_rgb=(0, 0, 0),
    threshold=80
)

# 3. Fork This Dragon: white edges → card bg
print("Fork This Dragon: cleaning white edges...")
fill_background(
    os.path.join(base, "fork-this-dragon-icon.png"),
    os.path.join(base, "fork-this-dragon-icon.png"),
    target_rgb=(255, 255, 255),
    threshold=50
)

print("Done!")
