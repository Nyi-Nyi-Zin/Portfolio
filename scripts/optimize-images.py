from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DIRECTORIES = [ROOT / "public" / "blog", ROOT / "public" / "projectImages"]

for directory in DIRECTORIES:
    for source in sorted(directory.glob("*.png")):
        destination = source.with_suffix(".webp")
        with Image.open(source) as image:
            if image.mode in {"RGBA", "LA"}:
                image.save(destination, "WEBP", quality=84, method=6)
            else:
                image.convert("RGB").save(destination, "WEBP", quality=84, method=6)
        print(f"{source.relative_to(ROOT)} -> {destination.relative_to(ROOT)}")
