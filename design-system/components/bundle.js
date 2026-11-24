/* @ds-bundle: {"format":4,"namespace":"KabinetDS","components":[{"name":"Button"},{"name":"ActionButton"},{"name":"NavigationItem"},{"name":"AnswerOption"},{"name":"ProductCard"},{"name":"SectionHeader"},{"name":"FinancialGoalCard"},{"name":"PromoCard"},{"name":"DocumentConsentCard"},{"name":"AccrualCard"},{"name":"MiniProductCard"},{"name":"ConditionCard"},{"name":"NavigationControls"},{"name":"BondCard"},{"name":"FeeRow"},{"name":"MetricCard"},{"name":"ProfileCard"},{"name":"HistoricalReturnCard"},{"name":"ConditionsList"}]} */
(function () {
  var h = window.React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function icon(node) { return node ? h('span', { className: 'ds-icon', 'aria-hidden': 'true' }, node) : null; }

  /* Figma: button · Type=Primary|Sort|WithIcon|Accent|Outline */
  function Button(p) {
    var type = p.type || 'Primary';
    var mod = { Accent: 'ds-btn--accent', WithIcon: 'ds-btn--with-icon', Outline: 'ds-btn--outline' }[type];
    var withIcon = type === 'Sort' || type === 'WithIcon';
    return h('button', { type: 'button', className: cx('ds-btn', mod, p.className), onClick: p.onClick, disabled: p.disabled },
      h('span', null, p.children != null ? p.children : 'Text'), withIcon ? icon(p.icon) : null);
  }

  /* Figma: action-button · Direction=Next|Back|BlackArrow */
  function ActionButton(p) {
    var dir = p.direction || 'Next', back = dir === 'Back';
    var label = p.children != null ? p.children : (back ? 'Назад' : 'Далее');
    var mod = back ? 'ds-action--back' : dir === 'BlackArrow' ? 'ds-action--black-arrow' : null;
    var parts = back ? [icon(p.icon), h('span', { key: 'l' }, label)] : [h('span', { key: 'l' }, label), icon(p.icon)];
    return h.apply(null, ['button', { type: 'button', className: cx('ds-action', mod, p.className), onClick: p.onClick }].concat(parts));
  }

  /* Figma: navigation-item · Active=true|false */
  function NavigationItem(p) {
    return h('a', { href: p.href || '#', className: cx('ds-nav', p.className), 'aria-current': p.active ? 'page' : undefined, onClick: p.onClick },
      p.children != null ? p.children : 'Label');
  }

  /* Figma: answer-option · Selected=true|false */
  function AnswerOption(p) {
    return h('button', { type: 'button', role: 'radio', 'aria-checked': p.selected ? 'true' : 'false', className: cx('ds-answer', p.className), onClick: p.onClick },
      h('span', null, p.children != null ? p.children : 'Label'),
      p.selected ? h('span', { className: 'ds-answer__check', 'aria-hidden': 'true' }, p.checkIcon || null) : null);
  }


  function P(cls, text) { return text == null ? null : h('p', { className: cls }, text); }
  function art(cls, src) { return h('div', { className: cx(cls, src ? null : 'ds-art'), 'aria-hidden': 'true' }, src ? h('img', { src: src, alt: '' }) : null); }

  /* Figma: product-card · Background=1..6 (у каждого фона своя иллюстрация и цвет чипа) */
  function ProductCard(p) {
    var chip = { peach: 'ds-chip--peach', green: 'ds-chip--green' }[p.chipColor];
    return h('article', { className: cx('ds-card ds-product', p.className) },
      h('div', { className: 'ds-product__content' },
        art('ds-product__art', p.image),
        p.subtitle ? h('span', { className: cx('ds-chip t-text ds-product__chip', chip) }, p.subtitle) : null,
        h('div', { className: 'ds-product__info' }, P('t-z2', p.title), P('t-body', p.description))),
      h('div', { className: 'ds-product__perf' }, P('t-z2', p.performanceValue), P('t-body c-grey', p.performanceLabel)));
  }

  /* Figma: section-header · Size=Small|Small_black_button|Large|LargeWithSubtitle|SmallWithSubtitle, ShowButton */
  function SectionHeader(p) {
    var size = p.size || 'Small';
    if (size === 'LargeWithSubtitle') return h('header', { className: cx('ds-card ds-section-head ds-section-head--stack', p.className) }, P('t-caps c-grey', p.subtitle), h('h2', { className: 't-z', style: { margin: 0 } }, p.title));
    if (size === 'SmallWithSubtitle') return h('header', { className: cx('ds-card ds-section-head ds-section-head--stack', p.className) }, h('h2', { className: 't-z2', style: { margin: 0 } }, p.title), P('t-body c-grey', p.subtitle));
    var large = size === 'Large';
    var btn = p.showButton ? h(Button, { type: size === 'Small' ? 'Outline' : 'Primary', onClick: p.onButtonClick }, p.buttonLabel || 'Смотреть все') : null;
    return h('header', { className: cx('ds-card ds-section-head', p.className) }, h('h2', { className: cx('ds-section-head__title', large ? 't-z1' : 't-z2'), style: { margin: 0 } }, p.title), btn);
  }

  /* Figma: financial-goal-card · Goal=Save|Invest|Accumulate */
  function FinancialGoalCard(p) {
    return h('article', { className: cx('ds-card ds-goal', p.image ? null : 'ds-art', p.className) },
      p.image ? h('div', { className: 'ds-goal__art', 'aria-hidden': 'true' }, h('img', { src: p.image, alt: '' })) : null,
      P('t-caps c-grey', p.eyebrow), P('t-z1', p.title));
  }

  /* Figma: promo-card · Campaign=NoCommission|CreditInsurance|Mortgage|EndowmentInsurance */
  function PromoCard(p) {
    return h('article', { className: cx('ds-card ds-promo', p.className) }, art('ds-promo__art', p.image),
      h('div', { className: 'ds-promo__text' }, P('t-caps', p.title), P('t-text c-grey', p.description)));
  }

  /* Figma: document-consent-card · State=Active|Inactive */
  function DocumentConsentCard(p) {
    return h('button', { type: 'button', role: 'checkbox', 'aria-checked': p.checked ? 'true' : 'false', className: cx('ds-card ds-consent', p.className), onClick: p.onClick },
      h('span', { className: 'ds-consent__icon', 'aria-hidden': 'true' }, p.icon || null),
      h('span', { className: 'ds-consent__text' }, P('t-body c-grey', p.caption || 'Ознакомился и согласен'), P('t-body c-text', p.title)),
      h('span', { className: 'ds-answer__check', 'aria-hidden': 'true' }, p.checkIcon || null));
  }

  /* Figma: accrual-card · Type=Coupon|Payment */
  function AccrualCard(p) {
    var pay = p.type === 'Payment';
    return h('article', { className: cx('ds-card ds-accrual', p.className) },
      h('span', { className: 'ds-accrual__icon', 'aria-hidden': 'true' }, p.icon || h('span')),
      h('div', { className: 'ds-accrual__mid' }, P('t-body c-grey', pay ? 'Платеж' : 'Купон'), P('t-sub', p.amount), P('t-text c-grey-2', p.note || (pay ? 'Ближайший платеж по договору' : 'Следующее начисление'))),
      P('t-text c-grey-2', p.date));
  }

  /* Figma: mini-product-card · Color=1|2 */
  function MiniProductCard(p) {
    return h('article', { className: cx('ds-card ds-mini', p.color === '2' ? 'ds-mini--alt' : null, p.className) }, P('t-sub', p.title), P('t-body', p.description));
  }

  /* Figma: condition-card · State=Default|Alternative */
  function ConditionCard(p) {
    return h('div', { className: cx('ds-card ds-condition', p.className) }, P(p.state === 'Alternative' ? 't-text c-grey-2' : 't-text c-grey', p.label), P('t-body', p.value));
  }

  /* Figma: navigation-controls — пара «Назад / Далее» */
  function NavigationControls(p) {
    return h('div', { className: cx('ds-nav-controls', p.className) },
      p.onBack !== false ? h(ActionButton, { direction: 'Back', icon: p.backIcon, onClick: p.onBack }) : null,
      h(ActionButton, { direction: p.nextDirection || 'BlackArrow', icon: p.nextIcon, onClick: p.onNext }, p.nextLabel));
  }

  /* Figma: bond-card */
  function BondCard(p) {
    return h('article', { className: cx('ds-card ds-bond', p.className) },
      h('div', { className: 'ds-bond__top' }, P('t-caps', p.name), P('t-text c-grey', p.description)),
      h('div', { className: 'ds-bond__divider', role: 'presentation' }),
      h('div', { className: 'ds-bond__yield' }, P('t-sub', p.yieldValue), P('t-text c-grey', p.yieldLabel || 'Доходность')));
  }

  /* Figma: fee-row */
  function FeeRow(p) {
    return h('div', { className: cx('ds-card ds-fee-row', p.className) },
      h('p', { className: 't-caps ds-fee-row__value' }, p.value), h('p', { className: 't-text c-grey ds-fee-row__desc' }, p.description), h('p', { className: 't-text c-grey-2 ds-fee-row__period' }, p.period));
  }

/* Figma: metric-card (2:624) */
function MetricCard(p) {
  return h('article', { className: cx('ds-card ds-metric', p.className) },
    P('t-caps', p.label != null ? p.label : 'Активных договоров'),
    P('t-z2', p.value != null ? p.value : 'Пока нет'));
}
/* Figma: profile-card (2:625) */
function ProfileCard(p) {
  return h('article', { className: cx('ds-card ds-profile', p.backgroundImage ? null : 'ds-profile--plain', p.className) },
    p.backgroundImage ? h('img', { className: 'ds-profile__bg', src: p.backgroundImage, alt: '', 'aria-hidden': 'true' }) : null,
    h('div', { className: 'ds-profile__top' },
      h('div', { className: 'ds-profile__head' },
        P('t-body', p.caption != null ? p.caption : 'Профиль'),
        P('t-z1', p.name != null ? p.name : 'Александр А.')),
      art('ds-profile__avatar', p.avatar)),
    h('span', { className: 'ds-profile__status t-text' }, p.status != null ? p.status : 'Начинающий инвестор'));
}

/* Figma: historical-return-card (2:626) */
function HistoricalReturnCard(p) {
  return h('article', { className: cx('ds-historical-return', p.className) },
    h('div', { className: 'ds-historical-return__body' },
      P('t-caps ds-historical-return__title', p.title != null ? p.title : 'Историческая доходность'),
      P('t-body c-grey', p.text != null ? p.text : 'Консервативная стратегия с рублёвыми облигациями российских эмитентов и инвестиционными купонами, привлекающими ставки по депозитам.')));
}

  /* Figma: conditions-list (2:780) — сетка ConditionCard в 2 колонки */
  function ConditionsList(p) {
    var items = p.items || [
      { label: 'Комиссия за вход', value: '0%' }, { label: 'Состав стратегии', value: 'Облигации' },
      { label: 'Выплаты', value: 'Ежемесячно' }, { label: 'Минимальная сумма', value: 'от 6 млн' },
      { label: 'Срок', value: 'Бессрочный' }, { label: 'Налог', value: 'Только с прибыли' }];
    return h('div', { className: cx('ds-conditions-list', p.className) }, items.map(function (it, i) {
      return h(ConditionCard, { key: i, label: it.label, value: it.value, state: it.state });
    }));
  }

  window.KabinetDS = { Button: Button, ActionButton: ActionButton, NavigationItem: NavigationItem, AnswerOption: AnswerOption,
    ProductCard: ProductCard, SectionHeader: SectionHeader, FinancialGoalCard: FinancialGoalCard, PromoCard: PromoCard,
    DocumentConsentCard: DocumentConsentCard, AccrualCard: AccrualCard, MiniProductCard: MiniProductCard, ConditionCard: ConditionCard,
    NavigationControls: NavigationControls, BondCard: BondCard, FeeRow: FeeRow,
    MetricCard: MetricCard, ProfileCard: ProfileCard, HistoricalReturnCard: HistoricalReturnCard, ConditionsList: ConditionsList };
})();
