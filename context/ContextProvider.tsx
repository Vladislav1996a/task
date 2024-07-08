import {FC, PropsWithChildren} from 'react';
import {Context} from './context';
import {useContextValue} from './useContextValue';

export const ContextProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
  const contextValue = useContextValue();
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
