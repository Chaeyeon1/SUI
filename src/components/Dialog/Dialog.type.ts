export interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  color?: 'primary' | 'secondary';
  brightness?: 'dark' | 'light' | 'white';
  title?: string;
  content?: string;
  confirm?: string;
  cancel?: string;
  size?: 'small' | 'medium' | 'large';
  open?: boolean;
  anchorEl?: any;
  setOpen?: any;
  confirmAction?: () => void;
}