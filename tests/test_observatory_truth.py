import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
INDEX = (ROOT / "index.html").read_text(encoding="utf-8")
README = (ROOT / "README.md").read_text(encoding="utf-8")


class ObservatoryTruthTests(unittest.TestCase):
    def test_expired_countdown_is_removed(self):
        self.assertNotIn("logwork.com/countdown", INDEX)
        self.assertNotIn('data-date="2025-10-29', INDEX)

    def test_perihelion_status_is_sourced(self):
        self.assertIn("Perihelion Status", INDEX)
        self.assertIn("science.nasa.gov/solar-system/comets/3i-atlas/", INDEX)

    def test_readme_distinguishes_static_from_live(self):
        self.assertIn("static educational and visualization prototype", README)
        self.assertIn("live ephemeris integration remains future work", README)


if __name__ == "__main__":
    unittest.main()
