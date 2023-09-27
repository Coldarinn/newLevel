import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';

import { Country } from '../model/types/country';

export interface CountrySelectProps {
  additionalClasses?: string[],
  selectedValue?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const options = Object.entries(Country).map(([key, value]) => ({ id: key, value }));

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    additionalClasses = [], selectedValue, onChange, readonly,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [...additionalClasses])}>
      <Select
        placeholder={t('Выберите страну')}
        options={options}
        selectedValue={selectedValue}
        onChange={onChange}
        readonly={readonly}
      />
    </div>
  );
});
