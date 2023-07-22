export const closeHandler = (e: any, ref: any, setOpen: any) => {
  !ref.current?.contains(e.target) && setOpen && setOpen(false);
};
