# DocumentConsentCard

Карточка согласия с документом на шаге оформления: иконка документа, «Ознакомился и согласен», название документа и отметка.

- Отмечено (State=Active) — рамка 1,5 px `answer-selected-border`, градиент `answer-selected-from` → `answer-selected-to`, кружок `pink`.
- Не отмечено (State=Inactive) — фон `bg`, кружок `grey-2`.

Иконка в круге 62 px на `pink-bg` (`radius-32`), сама иконка 36 px. Работает как чекбокс (`role="checkbox"`).

**Что передаёт потребитель:** `title`, `caption`, `checked`, `onClick`, `icon` (иконка документа со стрелкой вниз) и `checkIcon` — иконки из Figma не импортированы.
