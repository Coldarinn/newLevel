import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';

import { Currency } from '../model/types/currency';

export interface CurrencySelectProps {
  additionalClasses?: string[],
  selectedValue?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const options = Object.entries(Currency).map(([key, value]) => ({ id: key, value }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    additionalClasses = [], selectedValue, onChange, readonly,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      <Select
        placeholder={t('Выберите валюту')}
        options={options}
        selectedValue={selectedValue}
        onChange={onChange}
        readonly={readonly}
      />
    </div>
  );
});
