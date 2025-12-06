import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';

import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
