import "../../index.css";
import "./Search.css";
import React, { ChangeEventHandler, useCallback } from "react";

interface SearchProps {
  value?: string;
  onChange?: (value?: string) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  const _onChage = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      if (onChange) {
        onChange(e.currentTarget.value);
      }
    },
    [onChange]
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск по номеру задачи или названию"
        value={value ?? ""}
        onInput={_onChage}
      />
    </div>
  );
};
