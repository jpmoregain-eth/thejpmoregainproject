#!/usr/bin/env python3
"""Fix icon backgrounds - make them transparent to blend with dark cards."""

from PIL import Image
import os

def remove_background(input_path, output_path, threshold=30):
    """Remove solid-color background by making it transparent."""
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    # Get background color from corners (average of 4 corners)
    width, height = img.size
    corners = [
        data[0],           # top-left
        data[width - 1],   # top-right
        data[(height - 1) * width],  # bottom-left
        data[(height - 1) * width + (width - 1)]  # bottom-right
    ]
    
    # Average corner color (RGB only)
    bg_r = sum(c[0] for c in corners) // 4
    bg_g = sum(c[1] for c in corners) // 4
    bg_b = sum(c[2] for c in corners) // 4
    
    print(f"  Background color: RGB({bg_r}, {bg_g}, {bg_b})")
    
    new_data = []
    for item in data:
        r, g, b, a = item
        # Check if pixel is close to background color
        distance = abs(r - bg_r) + abs(g - bg_g) + abs(b - bg_b)
        if distance < threshold:
            # Make transparent
            new_data.append((r, g, b, 0))
        else:
            new_data.append((r, g, b, a))
    
    img.putdata(new_data)
    img.save(output_path)
    print(f"  Saved: {output_path}")

base = "/home/ubuntu/thejpmoregainproject/public/images"

icons = [
    ("sg-lottery-icon.png", "sg-lottery-icon.png"),
    ("quietude-icon.png", "quietude-icon.png"),
    ("fork-this-dragon-icon.png", "fork-this-dragon-icon.png"),
]

print("Processing icons...")
for src, dst in icons:
    src_path = os.path.join(base, src)
    if os.path.exists(src_path):
        print(f"\n{src}:")
        remove_background(src_path, src_path)
    else:
        print(f"  Not found: {src_path}")

print("\nDone!")
