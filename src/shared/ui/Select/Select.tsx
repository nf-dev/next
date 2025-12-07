import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo(
    ({ className, label, options, onChange, value, readonly }: SelectProps) => {
        const mods: Mods = {};

        const optionsList = useMemo(() => {
            return options?.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            ));
        }, [options]);

        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
        };

        return (
            <div className={classNames(cls.Wrapper, mods, [className])}>
                {label && <span className={cls.label}>{`${label}>`}</span>}
                <select
                    disabled={readonly}
                    value={value}
                    className={cls.select}
                    onChange={onChangeHandler}
                >
                    {optionsList}
                </select>
            </div>
        );
    },
);
