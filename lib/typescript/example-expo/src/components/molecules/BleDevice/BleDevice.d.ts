import React from 'react';
import { Device } from 'react-native-ble-plx';
export type BleDeviceProps = {
    onPress: (device: Device) => void;
    device: Device;
};
export declare function BleDevice({ device, onPress }: BleDeviceProps): React.JSX.Element;
//# sourceMappingURL=BleDevice.d.ts.map