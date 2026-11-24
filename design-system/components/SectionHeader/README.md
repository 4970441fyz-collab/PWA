# SectionHeader

Заголовок секции страницы, при необходимости — с кнопкой «Смотреть все» справа или с подзаголовком.

Варианты `size` из Figma:
- `Small_black_button` — `zagolovok-2` + чёрная кнопка (Button Primary, отступы `space-12`/`space-28`).
- `Small` — `zagolovok-2` + светлая кнопка (Button Outline).
- `Large` — `zagolovok-1` + чёрная кнопка.
- `LargeWithSubtitle` — капс-надпись `grey` над заголовком `zagolovok`, зазор `space-12`.
- `SmallWithSubtitle` — `zagolovok-2` и под ним подпись `grey` («Основной текст»).

**Что передаёт потребитель:** `title`, `subtitle`, `showButton`, `buttonLabel` (по умолчанию «Смотреть все»), `onButtonClick`.
