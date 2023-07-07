export interface AccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  value?: boolean;
  auto?: boolean;
  text?: string;
}

export interface AccordionSummaryProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color: 'primary' | 'secondary';
  disabled?: boolean;
  text?: string;
  value: boolean;
}
