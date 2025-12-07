import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const Input = memo(
    ({
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        ...otherProps
    }: InputProps) => {
        const [isFocused, setIsFocused] = useState(false);
        const [caretPosition, setCaretPosition] = useState(0);

        const inputRef = useRef<HTMLInputElement | null>(null);

        const isCaretVisible = isFocused && !readonly;

        useEffect(() => {
            if (autoFocus) {
                inputRef.current?.focus();
                setIsFocused(true);
            }
        }, [autoFocus]);

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
            setCaretPosition(e.target.value.length);
        };

        const onBlur = () => {
            setIsFocused(false);
        };

        const onFocus = () => {
            setIsFocused(true);
        };

        const onSelect = (e: any) => {
            setCaretPosition(e?.target?.selectionStart || 0);
        };

        const mods: Mods = {
            [cls.readonly]: readonly,
        };

        return (
            <div className={classNames(cls.InputWrapper, mods, [className])}>
                {placeholder && (
                    <div className={cls.placeholder}>{`${placeholder}>`}</div>
                )}
                <div className={cls.caretWrapper}>
                    <input
                        ref={inputRef}
                        className={cls.input}
                        type={type}
                        value={value}
                        onChange={onChangeHandler}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        readOnly={readonly}
                        {...otherProps}
                    />
                    {isCaretVisible && (
                        <span
                            className={cls.caret}
                            style={{ left: `${9 * caretPosition}px` }}
                        />
                    )}
                </div>
            </div>
        );
    },
);
