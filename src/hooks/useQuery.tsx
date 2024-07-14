import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface QueryParams {
  username?: string;
  email?: string;
}

export function useQuery(): QueryParams {
  const [params, setParams] = useState<QueryParams>({});
  const searchParams = useSearchParams();
  interface QueryParams {
    [key: string]: string | undefined; // Index signature
  }
  
  useEffect(() => {
    const paramsObj: QueryParams = {};
    for (const [key, value] of searchParams.entries()) {
      paramsObj[key] = value as string;
    }
    setParams(paramsObj);
  }, [searchParams]);

  return params;
}
