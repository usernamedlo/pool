"use client";

import { useEffect, useState } from "react";

import { LayoutChildrenProps } from '@/types';

const ClientOnly = ({ children }: LayoutChildrenProps
) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;