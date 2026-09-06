# Whack-a-Mole

A browser-based reflex game built with vanilla HTML, CSS, and JavaScript (no frameworks or libraries) — practicing `setInterval`, randomized DOM updates, and click-based scoring.

## How to Play

1. Open the page — the game starts automatically.
2. A mole randomly appears in one of the 9 holes every second.
3. Click the hole where the mole currently is to score a point.
4. Clicking the wrong hole (a miss) subtracts a point.
5. The score updates live at the top of the page.

## Features

- 3x3 grid of holes, styled as a grassy field background
- A mole that randomly relocates to a new hole once per second using `setInterval`
- Click detection on all holes, comparing the clicked hole against the hole currently holding the mole
- Live score tracking: +1 for a hit, −1 for a miss
- A simple "pop-up" CSS animation when the mole appears

## Project Structure

```
├── index.html      # Page structure: title, score text, 3x3 grid of hole divs
├── index.js        # Game logic: mole movement, click handling, scoring
└── style.css       # Styling: grid layout, hole/mole appearance, animation
```

## Core Logic Overview

- **`currentMole`** — tracks the `id` of the hole currently holding the mole (`null` before the game's first tick). Used both to remove the mole from its previous hole and to check whether a click was a hit.
- **`moveMole()`** — runs on every interval tick:
  1. If a mole currently exists (`currentMole !== null`), removes the `.mole` class from its hole first.
  2. Picks a new random hole index (`Math.floor(Math.random() * 9)`), builds its `id` (`"hole" + index`), updates `currentMole`, and adds the `.mole` class to that hole.
- **`setInterval(moveMole, 1000)`** — calls `moveMole` automatically once per second, without ever calling it directly (passing the function reference, not its result).
- **Click handling** — each of the 9 holes has a click listener attached in a loop. On click, the hole's `id` is compared against `currentMole`:
  - Match → score increases (`point++`)
  - No match → score decreases (`point--`)
  - The score text updates after every click.

## What This Project Practices

- `setInterval` for repeating, timed logic (as opposed to `setTimeout`'s one-time delay)
- Passing a function reference vs. calling a function (`setInterval(moveMole, 1000)` vs. the bug of `setInterval(moveMole(), 1000)`)
- Guarding against `null` before operating on a DOM reference (avoiding a crash on the very first tick)
- CSS Grid layout with `gap` for evenly spaced tiles
- Reusing the same `id`-as-string pattern from Simon Game / Drum Kit (`getElementById` + `classList`) in a new context

## Possible Improvements

- Add a countdown timer to end the game after a set time and show a final score
- Increase difficulty over time (moles appear faster as the score goes up)
- Add sound effects for hits and misses
- Prevent negative scores, or add a "game over" state below a score threshold
