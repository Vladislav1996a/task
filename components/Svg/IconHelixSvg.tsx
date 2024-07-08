import {FC} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useStore} from '../../context/useStore';

export const IconHelixSvg: FC = () => {
  const {iconSize, iconColor} = useStore();
  return (
    <View>
      <Svg width={iconSize} height={iconSize} viewBox="0 0 1024 1024">
        <Path
          d="M528 872c1.6-16 16-28.8 32-28.8 14.4 0 27.2 9.6 30.4 24l56-3.2c4.8 0 8 3.2 8 8s-3.2 8-8 8l-57.6 3.2c-3.2 14.4-16 24-30.4 24-12.8 0-25.6-8-30.4-20.8l-144 9.6c-4.8 0-8-3.2-8-8s3.2-8 8-8l144-8z m-94.4-320c3.2-14.4 16-24 30.4-24s27.2 9.6 30.4 24H640c4.8 0 8 3.2 8 8s-3.2 8-8 8h-145.6c-3.2 14.4-16 24-30.4 24s-27.2-9.6-30.4-24h-41.6c-4.8 0-8-3.2-8-8s3.2-8 8-8h41.6z m112-56c3.2-14.4 16-24 30.4-24 12.8 0 24 8 28.8 19.2l33.6-3.2c4.8 0 8 3.2 8 8s-3.2 8-8 8l-30.4 3.2c-1.6 16-14.4 28.8-32 28.8-14.4 0-27.2-9.6-30.4-24l-168 16c-4.8 0-8-3.2-8-8s3.2-8 8-8l168-16z m-96-361.6c3.2-12.8 16-22.4 30.4-22.4 16 0 30.4 12.8 32 28.8l128 11.2c4.8 0 8 4.8 8 8s-4.8 8-8 8l-129.6-11.2c-4.8 11.2-16 19.2-30.4 19.2-16 0-28.8-11.2-32-25.6L376 144c-4.8 0-8-4.8-8-8 0-4.8 4.8-8 8-8l73.6 6.4z m-14.4 305.6c-4.8 1.6-8 0-9.6-4.8-1.6-4.8 0-8 4.8-9.6l160-56c4.8-1.6 8 0 9.6 4.8 1.6 4.8 0 8-4.8 9.6l-160 56z m1.6-216c-4.8-1.6-6.4-6.4-4.8-11.2 1.6-4.8 6.4-6.4 11.2-4.8l152 64c4.8 1.6 6.4 6.4 4.8 11.2-1.6 4.8-6.4 6.4-11.2 4.8l-152-64z m-38.4-40c-4.8-1.6-6.4-4.8-6.4-9.6 1.6-4.8 4.8-6.4 9.6-6.4l224 48c4.8 1.6 6.4 4.8 6.4 9.6-1.6 4.8-4.8 6.4-9.6 6.4l-224-48z m-30.4-80c-4.8 0-8-3.2-8-8s3.2-8 8-8h288c4.8 0 8 3.2 8 8s-3.2 8-8 8H368z m235.2 656l-152 64c-4.8 1.6-8 0-11.2-4.8-1.6-4.8 0-8 4.8-11.2l152-64c4.8-1.6 8 0 11.2 4.8 1.6 4.8-1.6 9.6-4.8 11.2zM406.4 848l216-48c4.8-1.6 8 1.6 9.6 6.4 1.6 4.8-1.6 8-6.4 9.6l-216 48c-4.8 1.6-8-1.6-9.6-6.4 0-4.8 1.6-8 6.4-9.6zM368 936c-4.8 0-8-3.2-8-8s3.2-8 8-8h288c4.8 0 8 3.2 8 8s-3.2 8-8 8H368z m25.6-448c-4.8 1.6-8-1.6-9.6-6.4-1.6-4.8 1.6-8 6.4-9.6l232-48c4.8-1.6 8 1.6 9.6 6.4 1.6 4.8-1.6 8-6.4 9.6l-232 48z m20.8 120c-4.8 0-8-4.8-6.4-9.6s4.8-8 9.6-6.4l208 24c4.8 0 8 4.8 6.4 9.6 0 4.8-4.8 8-9.6 6.4l-208-24z m62.4 40c-4.8-1.6-6.4-6.4-4.8-9.6s6.4-6.4 9.6-4.8l112 40c4.8 1.6 6.4 6.4 4.8 9.6s-6.4 6.4-9.6 4.8l-112-40z"
          fill="#2F4BFF"
        />
        <Path
          d="M553.6 305.6C611.2 240 640 171.2 640 80c0-9.6 6.4-16 16-16s16 6.4 16 16c0 100.8-33.6 177.6-97.6 249.6 62.4 70.4 89.6 126.4 89.6 198.4 0 68.8-25.6 123.2-80 185.6C641.6 776 672 848 672 944c0 9.6-6.4 16-16 16s-16-6.4-16-16c0-86.4-25.6-150.4-78.4-208-12.8 12.8-27.2 27.2-43.2 41.6-4.8 4.8-51.2 46.4-64 57.6-22.4 20.8-36.8 36.8-48 52.8-16 20.8-22.4 38.4-22.4 56 0 9.6-6.4 16-16 16s-16-6.4-16-16c0-25.6 9.6-49.6 28.8-75.2 12.8-17.6 28.8-35.2 52.8-56 12.8-11.2 59.2-54.4 64-57.6 16-14.4 28.8-27.2 41.6-40-11.2-11.2-24-20.8-36.8-32-12.8-9.6-89.6-64-107.2-80-28.8-24-43.2-48-43.2-75.2 0-19.2 8-38.4 22.4-56 12.8-16 28.8-32 56-54.4 6.4-6.4 32-25.6 35.2-28.8 14.4-11.2 25.6-20.8 36.8-30.4 11.2-9.6 20.8-19.2 30.4-28.8l-35.2-35.2c-1.6-1.6-33.6-33.6-43.2-41.6-16-16-28.8-28.8-40-41.6-41.6-48-62.4-88-62.4-131.2 0-9.6 6.4-16 16-16s16 6.4 16 16c0 33.6 17.6 67.2 54.4 108.8 11.2 12.8 22.4 24 38.4 40 9.6 9.6 40 40 43.2 41.6 11.2 12.8 22.4 24 33.6 35.2z m6.4 385.6c48-56 72-104 72-163.2 0-60.8-24-112-78.4-174.4-9.6 9.6-19.2 19.2-30.4 28.8 11.2-9.6-105.6 88-123.2 108.8-11.2 12.8-16 25.6-16 36.8 0 16 9.6 32 32 51.2 16 14.4 91.2 67.2 105.6 78.4 14.4 11.2 27.2 20.8 38.4 33.6z"
          fill={iconColor}
        />
      </Svg>
    </View>
  );
};