"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VmBackupPageRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/altaro/vm-backup");
  }, [router]);
  return null;
}
