export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  color: 'primary' | 'secondary';
  options?: { id: number; content: string }[];
}
