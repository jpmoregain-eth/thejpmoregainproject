#!/usr/bin/env python3
"""Fix icon backgrounds with targeted colors."""

from PIL import Image
import os

base = "/home/ubuntu/thejpmoregainproject/public/images"

def replace_color_range(img_path, out_path, target_rgb, threshold, to_transparent=True):
    """Replace pixels close to target color with transparent or another color."""
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    tr, tg, tb = target_rgb
    
    new_data = []
    for item in data:
        r, g, b, a = item
        distance = abs(r - tr) + abs(g - tg) + abs(b - tb)
        if distance < threshold:
            if to_transparent:
                new_data.append((r, g, b, 0))
            else:
                new_data.append((r, g, b, a))
        else:
            new_data.append((r, g, b, a))
    
    img.putdata(new_data)
    img.save(out_path)

# 1. SG Lottery: white background → transparent
# The icon has a white bottom half and white stars on red top half
# Let's make near-white pixels transparent
print("SG Lottery: making white/light bg transparent...")
replace_color_range(
    os.path.join(base, "sg-lottery-icon.png"),
    os.path.join(base, "sg-lottery-icon.png"),
    target_rgb=(255, 255, 255),
    threshold=80,
    to_transparent=True
)

# 2. Quietude: dark gray/black background → transparent
print("Quietude: making dark bg transparent...")
replace_color_range(
    os.path.join(base, "quietude-icon.png"),
    os.path.join(base, "quietude-icon.png"),
    target_rgb=(0, 0, 0),
    threshold=60,
    to_transparent=True
)

# 3. Fork This Dragon: already transparent, but check for white edges
print("Fork This Dragon: cleaning white edges...")
replace_color_range(
    os.path.join(base, "fork-this-dragon-icon.png"),
    os.path.join(base, "fork-this-dragon-icon.png"),
    target_rgb=(255, 255, 255),
    threshold=40,
    to_transparent=True
)

print("Done!")
