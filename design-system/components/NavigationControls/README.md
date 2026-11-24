# NavigationControls

Пара кнопок перехода между шагами: «Назад» (ActionButton Back) и «Далее» (ActionButton BlackArrow), прижаты вправо с зазором `space-16`.

**Что передаёт потребитель:** `onBack`, `onNext`, при желании `nextLabel`, `nextDirection: 'Next'` для розовой кнопки, `backIcon` / `nextIcon` (стрелки). Чтобы скрыть «Назад» на первом шаге, передайте `onBack: false`.
