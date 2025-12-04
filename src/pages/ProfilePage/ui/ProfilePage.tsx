import { useTranslation } from 'react-i18next';

import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageProps {}

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <>{t('Страница профиля')}</>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
