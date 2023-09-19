export interface Profile {
   id?: string;
   firstname?: string,
   lastname?: string,
   age?: string,
   currency?: string,
   country?: string,
   city?: string,
   username?: string,
   avatar?: string
}

export interface ProfileCardProps {
   additionalClasses?: string[],
   data?: Profile;
   error?: string;
   isLoading?: boolean;
   readonly?: boolean;
   onChangeLastname?: (value?: string) => void;
   onChangeFirstname?: (value?: string) => void;
   onChangeCity?: (value?: string) => void;
   onChangeAge?: (value?: string) => void;
   onChangeUsername?: (value?: string) => void;
   onChangeAvatar?: (value?: string) => void;
   onChangeCurrency?: (currency: string) => void;
   onChangeCountry?: (country: string) => void;
 }
