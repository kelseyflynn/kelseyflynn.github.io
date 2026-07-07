"use client";

import { useState } from "react";

type Status = "idle" | "copied" | "error";

/**
 * Copies the email address to the clipboard.
 * Success state: "Copied." Error state: shows the address so it can be
 * selected by hand - the visitor is never left without a way to contact.
 */
export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button type="button" className="btn btn-ghost" onClick={copy}>
        {status === "copied" ? "Copied" : "Copy email"}
      </button>
      <span className="copy-status" role="status" aria-live="polite">
        {status === "copied" && "Address copied to clipboard."}
        {status === "error" && `Copying failed - the address is ${email}`}
      </span>
    </>
  );
}
