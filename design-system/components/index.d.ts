import type { ReactNode, MouseEventHandler } from 'react';

/** Кнопка. Figma: button (2:558). */
export interface ButtonProps {
  /** Вариант из Figma. По умолчанию "Primary". */
  type?: 'Primary' | 'Sort' | 'WithIcon' | 'Accent' | 'Outline';
  /** Подпись. */
  children?: ReactNode;
  /** Иконка 20×20 справа — только для Sort и WithIcon (в макете шеврон вниз). */
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;

/** Кнопка шага «Далее / Назад». Figma: action-button (2:573). */
export interface ActionButtonProps {
  /** По умолчанию "Next" (розовая). */
  direction?: 'Next' | 'Back' | 'BlackArrow';
  /** Подпись; по умолчанию «Далее» или «Назад». */
  children?: ReactNode;
  /** Стрелка 20×20: справа для Next/BlackArrow, слева для Back. */
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
export declare function ActionButton(props: ActionButtonProps): JSX.Element;

/** Пункт навигации-пилюли. Figma: navigation-item (2:586). */
export interface NavigationItemProps {
  /** Текущий раздел. */
  active?: boolean;
  children?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}
export declare function NavigationItem(props: NavigationItemProps): JSX.Element;

/** Вариант ответа в опроснике. Figma: answer-option (2:591). */
export interface AnswerOptionProps {
  selected?: boolean;
  children?: ReactNode;
  /** Галочка 10×8 внутри розового кружка выбранного варианта. */
  checkIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
export declare function AnswerOption(props: AnswerOptionProps): JSX.Element;

/** Карточка продукта на витрине. Figma: product-card (2:627). */
export interface ProductCardProps { title?: ReactNode; description?: ReactNode; subtitle?: ReactNode; chipColor?: 'blue' | 'peach' | 'green'; performanceValue?: ReactNode; performanceLabel?: ReactNode; /** URL иллюстрации. */ image?: string; className?: string; }
export declare function ProductCard(props: ProductCardProps): JSX.Element;

/** Заголовок секции. Figma: section-header (2:694). */
export interface SectionHeaderProps { size?: 'Small' | 'Small_black_button' | 'Large' | 'LargeWithSubtitle' | 'SmallWithSubtitle'; title?: ReactNode; subtitle?: ReactNode; showButton?: boolean; buttonLabel?: ReactNode; onButtonClick?: MouseEventHandler<HTMLButtonElement>; className?: string; }
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;

/** Карточка финансовой цели. Figma: financial-goal-card (2:716). */
export interface FinancialGoalCardProps { eyebrow?: ReactNode; title?: ReactNode; image?: string; className?: string; }
export declare function FinancialGoalCard(props: FinancialGoalCardProps): JSX.Element;

/** Промо-карточка акции. Figma: promo-card (2:603). */
export interface PromoCardProps { title?: ReactNode; description?: ReactNode; image?: string; className?: string; }
export declare function PromoCard(props: PromoCardProps): JSX.Element;

/** Согласие с документом. Figma: document-consent-card (2:726). */
export interface DocumentConsentCardProps { title?: ReactNode; caption?: ReactNode; checked?: boolean; icon?: ReactNode; checkIcon?: ReactNode; onClick?: MouseEventHandler<HTMLButtonElement>; className?: string; }
export declare function DocumentConsentCard(props: DocumentConsentCardProps): JSX.Element;

/** Ближайшее начисление или платёж. Figma: accrual-card (2:747). */
export interface AccrualCardProps { type?: 'Coupon' | 'Payment'; amount?: ReactNode; date?: ReactNode; note?: ReactNode; icon?: ReactNode; className?: string; }
export declare function AccrualCard(props: AccrualCardProps): JSX.Element;

/** Компактная карточка стратегии. Figma: mini-product-card (2:766). */
export interface MiniProductCardProps { title?: ReactNode; description?: ReactNode; color?: '1' | '2'; className?: string; }
export declare function MiniProductCard(props: MiniProductCardProps): JSX.Element;

/** Условие программы. Figma: condition-card (2:773). */
export interface ConditionCardProps { label?: ReactNode; value?: ReactNode; state?: 'Default' | 'Alternative'; className?: string; }
export declare function ConditionCard(props: ConditionCardProps): JSX.Element;

/** «Назад / Далее». Figma: navigation-controls (2:600). */
export interface NavigationControlsProps { onBack?: MouseEventHandler<HTMLButtonElement> | false; onNext?: MouseEventHandler<HTMLButtonElement>; nextLabel?: ReactNode; nextDirection?: 'Next' | 'BlackArrow'; backIcon?: ReactNode; nextIcon?: ReactNode; className?: string; }
export declare function NavigationControls(props: NavigationControlsProps): JSX.Element;

/** Облигация. Figma: bond-card (2:601). */
export interface BondCardProps { name?: ReactNode; description?: ReactNode; yieldValue?: ReactNode; yieldLabel?: ReactNode; className?: string; }
export declare function BondCard(props: BondCardProps): JSX.Element;

/** Строка комиссии. Figma: fee-row (2:602). */
export interface FeeRowProps { value?: ReactNode; description?: ReactNode; period?: ReactNode; className?: string; }
export declare function FeeRow(props: FeeRowProps): JSX.Element;

export interface MetricCardProps {
  /** Подпись-метрика (капсом). По умолчанию «Активных договоров». */
  label?: string;
  /** Значение крупным заголовком. По умолчанию «Пока нет». */
  value?: string;
  className?: string;
}
/** Карточка показателя. Figma: metric-card (2:624) */
export declare function MetricCard(props: MetricCardProps): JSX.Element;

export interface ProfileCardProps {
  /** Подпись над именем. По умолчанию «Профиль». */
  caption?: string;
  /** Имя клиента. По умолчанию «Александр А.». */
  name?: string;
  /** Статус инвестора (синяя плашка). По умолчанию «Начинающий инвестор». */
  status?: string;
  /** URL аватара; без него показывается градиентная заглушка. */
  avatar?: string;
  /** URL фонового изображения (непрозрачность 48%). */
  backgroundImage?: string;
  className?: string;
}
/** Карточка профиля клиента. Figma: profile-card (2:625) */
export declare function ProfileCard(props: ProfileCardProps): JSX.Element;

export interface HistoricalReturnCardProps {
  /** Заголовок капсом. По умолчанию «Историческая доходность». */
  title?: string;
  /** Описание стратегии (серый текст). */
  text?: string;
  className?: string;
}
/** Карточка исторической доходности с градиентным фоном. Figma: historical-return-card (2:626) */
export declare function HistoricalReturnCard(props: HistoricalReturnCardProps): JSX.Element;

/** Сетка условий программы. Figma: conditions-list (2:780). */
export interface ConditionsListProps { /** Условия: метка и значение; по умолчанию 6 условий из макета. */ items?: Array<{ label: ReactNode; value: ReactNode; state?: 'Default' | 'Alternative' }>; className?: string; }
export declare function ConditionsList(props: ConditionsListProps): JSX.Element;
