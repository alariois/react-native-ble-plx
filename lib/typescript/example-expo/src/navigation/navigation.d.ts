import React from 'react';
import { type MainStackParamList } from './navigators';
export type AllScreenTypes = MainStackParamList;
declare global {
    namespace ReactNavigation {
        interface RootParamList extends AllScreenTypes {
        }
    }
}
export declare function Navigation(): React.JSX.Element;
//# sourceMappingURL=navigation.d.ts.map