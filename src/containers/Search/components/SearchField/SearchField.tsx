import { ForwardRefRenderFunction, forwardRef } from "react";

import { TextField } from "@mui/material";

interface Props {
  onValueChange: (value: string) => void;
  value: string;
  errorText?: string;
}

const SearchFieldComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = ({ onValueChange, value, errorText = "" }, ref) => (
  <TextField
    inputRef={ref}
    name="searchField"
    label="Search..."
    type="search"
    fullWidth
    variant="outlined"
    helperText={errorText}
    error={!!errorText.length}
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
  />
);

const SearchField = forwardRef<HTMLInputElement, Props>(SearchFieldComponent);

export { SearchField };
