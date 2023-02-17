import {createContext, useMemo, useState} from 'react';

const initContext = {
  isAuth: '',
  totalResults: 0,
  moviesCount: 0,
};

export const appCtx = createContext(initContext);

export default function UserCtx({children}) {
  const [search, setSearch] = useState(initContext.search);
  const [totalResults, setTotalResults] = useState(initContext.totalResults);
  const [moviesCount, setMoviesCount] = useState(initContext.moviesCount);

  const providerValue = useMemo(() => (
    {search, setSearch, totalResults, setTotalResults, moviesCount, setMoviesCount}),
  [moviesCount, search, totalResults]);

  return (
    <appCtx.Provider value={providerValue}>
      {children}
    </appCtx.Provider>
  );
}
